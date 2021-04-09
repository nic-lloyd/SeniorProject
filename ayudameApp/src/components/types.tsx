export enum PriceOptions {'$' , '$$' , '$$$'} 
export interface SetupData {
    location: string;
    price: PriceOptions;
    range: number;
}