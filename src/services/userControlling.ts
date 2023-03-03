import axios from 'axios';
import type { Params } from '../interfaces/db';
import type {RegistrationData, User} from '../interfaces/user';
interface ServerResponse{
    message:string,
    affectedRows?:number;
}

export interface LoginData{
    email:string;
    passwd:string;
}

export async function GetUser(parameters?:Params):Promise<User[]>{
    return await axios.get('http://localhost/extra-halal/api/database.php', {
        params:parameters ? parameters : {table:'users'}
    }).then(res=>res.data.map(e=>{return {...e, cart: []}}));
}
export function Login(userdata:LoginData):Promise<ServerResponse>{
    return axios.post('http://localhost/extra-halal/api/database.php', {
        login:"",
        ...userdata
    })
}
export function Register(newuser:RegistrationData):Promise<any>{
    let param:Params = {
        table:'users',
        values:newuser
    }
    return axios.post('http://localhost/extra-halal/api/database.php', param);
}