export interface IUser{
    isAuth: boolean;
    name:`user${number}`|"";
}


export interface ISetUser{
    name:`user${number}`;
}
export interface actionUser{
    refreshToken: string;
    accessToken: string;
    user:{ 
        id: number;
        email:string;
        name:string; 
        music: number[];
        img:string;
        fav:{type:"album"|"music"|"playlist",id:number}[];
        language:"english"|"russian";
        theme:"white"|"black"
    }
}