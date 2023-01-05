import axios from 'axios';
import Env from '../../../env';
import constant from '../constants/contact.constants';

const handlerSubmitContact = async({ changeFormSuccess, changeFormFailed, setMessageFailed, formData, resetForm, setDisabled }) => {
    try{
        const result = await axios.post(`${Env.REACT_APP_BACKEND}contact/save`,formData);
        const error = result?.data?.error;
        const message = result?.data?.message;
        setDisabled(false);
        if(!error){
            resetForm();
            changeFormSuccess(true);
            setTimeout(()=>{
                changeFormSuccess(false);
            }, 10000);
        }else {
            changeFormFailed(true);
            setMessageFailed(message);
            setTimeout(()=>{
                changeFormFailed(false);
            }, 10000);
        }
    }catch(err){
        resetForm();
        setDisabled(false);
        setMessageFailed(constant.SUBMIT_FILED);
        changeFormFailed(true);        
        setTimeout(()=>{
            changeFormFailed(false);
        }, 10000);
    }
}

const ContactHandler = ({ changeFormSuccess, changeFormFailed, setMessageFailed, setDisabled }) => ({
    handlerSubmitContact: (formData, resetForm) => handlerSubmitContact({changeFormSuccess, changeFormFailed, setMessageFailed, formData, resetForm, setDisabled}),
});

export default ContactHandler;