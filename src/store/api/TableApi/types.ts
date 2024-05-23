export interface IReturnedData<T>{
	error_code: number,
	error_message: string,
	data: T,
	profiling: string,
	timings: null
}
export interface ITable{
    id: string,
    documentStatus: string,
    employeeNumber: string,
    documentType: string,
    documentName: `${string}.pdf`,
    companySignatureName: `${string}.sig`,
    employeeSignatureName: `${string}.sig`,
    employeeSigDate: string,
    companySigDate: string    
}
export interface IAddTable{
    documentStatus: string,
    employeeNumber: string,
    documentType: string,
    documentName: `${string}.pdf`,
    companySignatureName: `${string}.sig`,
    employeeSignatureName: `${string}.sig`,
    employeeSigDate: string,
    companySigDate: string    
}