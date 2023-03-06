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
        table:'gyrosok'
    }
    return await axios.get('http://localhost/extra-halal/api/database.php', {params:param}).then(res=>res.data);
}

export async function PostGyros(object:Gyros) {
    let params:Params = {
        table:'gyrosok',
        values:object
    }
    return await axios.post("http://localhost/extra-halal/api/database.php", params).then((res)=>{
        return res.data;
    })
}
export async function UploadFile(object:FormData){
    return await axios.post("http://localhost/extra-halal/api/database.php", object).then((res)=>res.data)
}