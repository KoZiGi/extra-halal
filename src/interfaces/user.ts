export interface User{
    ID?:number;
    name:string;
    fullname:string;
    email:string;
    passwd:string;
    address:string;
    admin:boolean;
    isGuest:boolean;
    cart?:any[];
}
export interface RegistrationData{
    name:string;
    fullname:string;
    email:string;
    passwd:string;
    address:string;
}