import axios from "axios";
import type { Gyros } from "../interfaces/gyros";
import type { Order } from "../interfaces/orders";

interface _order {
    ID: number;
    userID: number;
    date: string;
    isDone: boolean;
}
interface _orderitem {
    ID: number;
    orderID: number;
    gyrosID: number;
    amount: number;
}
interface orderer{
    ID:number;
    name:string;
    fullname:string;
    email:string;
    address:string;
}

export async function DeleteOrderData(orderID:number){
    return await axios.delete('http://localhost/extra-halal/api/database.php', {
        params:{
            table:'orderitems',
            field:'orderID',
            value:orderID
        }
    }).then(res=>{
        axios.delete('http://localhost/extra-halal/api/database.php', {
            params:{
                table:'orders',
                field:'ID',
                value:orderID
            }
        }).then(rs=>rs).catch(err=>err);
    }).catch(err=>err.response);
}
export async function MarkOrderAsDone(orderID:number){
    return await axios.patch('http://localhost/extra-halal/api/database.php', {
        table:'orders',
        field:'ID',
        value:orderID,
        values:{
            isDone: 1
        }
    }).then(res=>res).catch(err=>err.response);
}
export async function GetOrders(userID?:number): Promise<Order[]> {
    let orderers: Promise<orderer[]> = await axios.get('http://localhost/extra-halal/api/database.php', {params:{table:'users', field:"ID", value:userID}}).then(res=>res.data);
    let orders: Promise<_order[]> = await axios.get('http://localhost/extra-halal/api/database.php', { params: { table: 'orders', field: "userID", value:userID } }).then(res => res.data);
    let orderitems: Promise<_orderitem[]> = await axios.get('http://localhost/extra-halal/api/database.php', { params: { table: 'orderitems' } }).then(res => res.data);
    let gyroses: Promise<Gyros[]> = await axios.get('http://localhost/extra-halal/api/database.php', { params: { table: 'gyrosok' } }).then(res => res.data);

    return await Promise.all([orders, orderitems, gyroses, orderers]).then(res=>
        res[0].map(order=>{
            return {
                ...order,
                username: res[3].find(t=>t.ID==order.userID).fullname,
                address: res[3].find(t=>t.ID==order.userID).address,
                items: res[1]
                        .filter(g=>g.orderID==order.ID)
                        .map(n=>{return {...res[2].find(y=>y.ID==n.gyrosID), amount: n.amount}})
            }
        }));
}