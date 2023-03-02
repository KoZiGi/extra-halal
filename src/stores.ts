/* Interfaces */
import type { Route } from "./interfaces/route";
import type { User } from "./interfaces/user";
import { writable, readable, type Writable, type Readable } from "svelte/store";

export let Routes:Readable<Route[]> = readable<Route[]>([
    {
        path:"/",
        name:"Főoldal",
        component:'./views/Main.svelte',
        minPriv: 0
    },
    {
        path:"/gyros",
        name:"Ételek Finom!",
        component:'./views/Gyros.svelte',
        minPriv: 0
    },
    {
        path:'/cart',
        name:"Kosár",
        component:'./views/Cart.svelte',
        minPriv:1
    },
    {
        path:"/orders",
        name:"Eve Teslim Deneyimi",
        component:'./views/Orders.svelte',
        minPriv: 2
    },
]);
export let CurrentUser:Writable<User> = writable<User>(localStorage.getItem('extrahalal') ? JSON.parse(localStorage.getItem('extrahalal')) : {
    address:'',
    admin:false,
    email:'',
    fullname:'',
    isGuest:true,
    name:'',
    passwd:'',
})