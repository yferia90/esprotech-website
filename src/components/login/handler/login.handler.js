import axios from 'axios';
import { updateFetchAxios, fetchAxios } from '../../../utils/configAxios';

const handlerSubmitLogin = async({ formData, setToken }) => {
    try{
        const result = await fetchAxios.post('auth/signIn',formData);
        const error = result?.data?.error;
        const token = result?.data?.token;
        if(!error){
            setToken(token);
            updateFetchAxios(token);
            return true;
        } else return false;
    }catch(err){
        return false;
    }
}

const LoginHandler = ({ setToken, configAxiosToken }) => ({
    handlerSubmitLogin: (formData) => handlerSubmitLogin({ formData, setToken, configAxiosToken }),
});

export default LoginHandler;