//import React from "react";
//import * as React from 'react';
import { person } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import { timeout } from "workbox-core/_private";
import "./Cardswipe.css";
import { useFetch } from "./hooks";
const axios = require("axios");

//Get session ID from URL path
const sessionId = window.location.pathname.split("/").slice(-1)[0];

//Create base configuration for API calls
let REST = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: { "Content-type": "application/json" },
});

//sleep function to avoid 429 error
function sleep(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Cardswipe: React.FC = (props) => {
  let [restaurantData, setRestaurantData] = useState<any[]>([]);

  useEffect(() => {
    async function getSessionRestaurants(sessionId: string) {
      let result;
      try {
        const restaurants = await REST.get(`/${sessionId}/restaurants`);
        result = await Promise.all(
          restaurants.data.map(async (restaurant: any) => {
            return REST.get(`/yelp/${restaurant.restaurantId}`);
          })
        );
        result = result
          .filter((x: any) => x.data !== "")
          .map((x: any) => x.data);
        console.log(result);
        setRestaurantData([result, ...restaurantData]);
      } catch (e) {
        console.log(e);
      }
    }

    getSessionRestaurants(sessionId);
  }, []);

  console.log(restaurantData);
  return (
    <div>
      <div className="cardSwipe_cardContainer">
        {restaurantData[0] &&
          restaurantData[0].map((business: any) => {
            console.log(business);
            return (
              <div className="swipe">
                <TinderCard key={business.data} preventSwipe={["up", "down"]}>
                  <div className="card_border">
                    <div
                      style={{
                        backgroundImage: `url(${business.image_url})`,
                      }}
                      className="card"
                    ></div>
                    <div className="container">
                      <h3 className="restaraunt_name">{business.name}</h3>
                      <p>-------------------------</p>
                      <p>{business.location?.address1}</p>
                      <p className="location">
                        {business.location?.city}, {business.location?.state}
                        {business.location?.zip_code}{" "}
                      </p>
                    </div>
                  </div>
                </TinderCard>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Cardswipe;
