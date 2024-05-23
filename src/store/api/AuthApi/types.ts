export interface ILogin{
    username: `user${number}`;
    password: "password" ;
}
export interface IReturnedData{
	error_code: number,
	error_message: string,
	error_text?:string,
	data: {
		token: string
	},
	profiling: string,
	timings: null|any   
}