export enum PriceOptions {'$' , '$$' , '$$$'} 
export interface SetupData {
    location: string | null;
    price: PriceOptions;
    range: number;
}