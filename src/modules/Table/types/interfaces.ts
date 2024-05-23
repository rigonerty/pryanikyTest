export interface ITableFields{
    id?: string;
    documentStatus: string;
    employeeNumber: string;
    documentType: string;
    documentName: `${string}.pdf`;
    companySignatureName: `${string}.sig`;
    employeeSignatureName: `${string}.sig`;
    employeeSigDate:any;
    companySigDate: any
}