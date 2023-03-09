import { fetchAxios } from 'src/utils/configAxios';

const handlerSubmitFinancialForm = async({ add, path, formData }) => {
    try{
        let result = null;
        if(add){
            result = await fetchAxios.post(`${path}`,formData);
        }else {
            result = await fetchAxios.put(`${path}`,formData);
        }
        const error = result?.data?.error;
        const newMonto = result?.data?.data[0];
        if(!error){
            return newMonto;
        }else {
            return null;
        }
    }catch(err){
        return null;
    }
}

const FinancialFormHandler = ({ add, path }) => ({
    handlerSubmitFinancialForm: (formData) => handlerSubmitFinancialForm({add, path, formData}),
});

export default FinancialFormHandler;