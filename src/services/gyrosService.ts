import axios from 'axios';
import type { Gyros } from '../interfaces/gyros';

interface Params{
    table:string,
    field?:string,
    value?:string|number,
    id?:number,
    values?:any
}


export async function GetGyros():Promise<Gyros[]>{
    let param:Params = {
        table:'gyros',
    }
    return await axios.get('http://localhost/extra-halal/api/database.php', {params:param}).then(res=>res.data);
}

export async function PostGyros(object) {
        await axios.post("http://localhost/backend/extra-halal/api/database.php", object).then((res)=>{
            console.log(res);
        })
}