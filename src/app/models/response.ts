export interface Response {
    statusCode:number;
    message:string;
    data:{
        token:string,
        refreshToken:string,
    };
}
