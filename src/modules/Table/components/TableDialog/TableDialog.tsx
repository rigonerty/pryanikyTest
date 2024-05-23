import { Button, Dialog, DialogActions, DialogTitle,CircularProgress} from '@mui/material'
import React, { useEffect } from 'react'
import { useForm,SubmitHandler,FormProvider } from 'react-hook-form';
import { FormInput } from '../../../../components/FormInput/FormInput';
import { InputDate } from '../../../../components/InputDate/InputDate';
import { ITableFields } from '../../types/interfaces';
import { ITable } from '../../../../store/api/TableApi/types';



interface props{
    isOpen: boolean;
    title:string;
    values?:ITable;
    sendRequest:(arg:ITableFields)=>void;
    setOpen:(arg:boolean)=>void;
    isLoading:boolean;
}

export const TableDialog = ({isOpen,title,sendRequest,values,setOpen,isLoading}:props) => {
    const methods = useForm<ITableFields>({mode:"onChange",defaultValues:values})
    const {handleSubmit,reset} = methods
    const onSubmit:SubmitHandler<ITableFields> = (inputData)=>{
        
        if(values?.id){ sendRequest({...inputData,id:values.id}) }
        else{ sendRequest(inputData) }
        
        reset()
        setOpen(false)
      }
      useEffect(()=>{
        if(values){
            const {companySignatureName, documentName,
                documentStatus, documentType,
                employeeNumber, employeeSignatureName} = values

            reset({companySignatureName, documentName,
                documentStatus, documentType,
                employeeNumber, employeeSignatureName})
        }
        
      },[values])
  return (
    <Dialog open={isOpen} onClose={()=>setOpen(false)} fullWidth maxWidth="md">
        <DialogTitle>
            {title}
        </DialogTitle>
        <DialogActions>
            <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} style={{width:"100%"}}>
                <FormInput label="Company signature name" name='companySignatureName'/>
                <InputDate label="Company sig date" name="companySigDate" defaultValue={values?.companySigDate}/>
                <FormInput label="Document name" name="documentName" />
                <FormInput label="Document status" name="documentStatus" />
                <FormInput label="Document type" name='documentType'/>
                <FormInput label="Employee number" name="employeeNumber" type="number"/>
                <InputDate label="Employee sig date" name="employeeSigDate" defaultValue={values?.companySigDate}/>
                <FormInput label="Employee signature name" name='employeeSignatureName'/>
                <Button type='submit' variant='contained'>send</Button>
                {isLoading && <CircularProgress/>}
            </form>          
            </FormProvider>
        </DialogActions>
    </Dialog>
  )
}
