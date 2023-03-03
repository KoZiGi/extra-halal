import axios from "axios";
import { GetGyros } from "./gyrosService";





export async function PostOrder(userID:number):Promise<any>{
    return await axios.post("http://localhost/extra-halal/api/database.php", {
        table:'orders',
        values:{
            userID: userID,
            date: new Date().toISOString()
        }
    }).then(res=>res.data)
}
export async function PostOrderItems(orderID:number, orderitem):Promise<any>{
    return await axios.patch("http://localhost/extra-halal/api/database.php", {
        table:'orderitems',
        values:{
            orderID:orderID,

        }
    })
}