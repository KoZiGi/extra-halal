import type { Gyros } from "./gyros";
export interface Order{
    ID?:number,
    userID?:number,
    address?:string,
    username?:string,
    date?:string,
    isDone?:boolean,
    items?:Gyros[];
}