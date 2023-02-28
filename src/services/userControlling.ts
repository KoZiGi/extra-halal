import axios from 'axios';
import type {User} from '../interfaces/user';
interface ServerResponse{
    message:string,
    affectedRows?:number;
}

export interface LoginData{
    email:string;
    passwd:string;
}
interface Params{
    table:string,
    field?:string,
    value?:string|number,
    id?:number,
    data?:any
}


export async function GetUser(parameters?:Params):Promise<User[]>{
    return await axios.get('http://localhost/extra-halal/api/database.php', {
        params:parameters ? parameters : {table:'users'}
    }).then(res=>res.data);
}
export function Login(userdata:LoginData):Promise<ServerResponse>{
    return axios.post('http://localhost/extra-halal/api/database.php', {
        login:"",
        ...userdata
    })
}
export function Register(newuser:User):Promise<any>{
    let param:Params = {
        table:'users',
        data:newuser
    }
    return axios.post('http://localhost/extra-halal/api/database.php', param);
}