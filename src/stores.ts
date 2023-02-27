/* Interfaces */
import type { Route } from "./interfaces/route";
import type { User } from "./interfaces/user";
import { writable, readable, type Writable } from "svelte/store";
/* Svelte Components */
import Main from './views/Main.svelte';
import Orders from './views/Orders.svelte';
import Gyros from './views/Gyros.svelte';
import Cart from './views/Cart.svelte';
import Login from './views/Cart.svelte';




export let Routes:Writable<Route[]> = writable<Route[]>([
    {
        path:"/",
        component:Main,
        minPriv: 0
    },
    {
        path:"/orders",
        component:Orders,
        minPriv: 2
    },
    {
        path:"/Gyros",
        component:Gyros,
        minPriv: 0
    },
    {
        path:'/cart',
        component:Cart,
        minPriv:1
    },
    {
        path:'/login',
        component:Login,
        minPriv:0
    }
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