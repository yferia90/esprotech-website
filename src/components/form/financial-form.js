import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AlertError from '../alerts/alert-error';
import AlertSuccess from '../alerts/alert-success';
import Constants from './constants/financial-form.contant';
import useAppContext from '../../contexts/app.context';
import FinancialFormHandler from './handler/financial-form.handler';

const FinancialForm = ({ add = true, type, nextStep}) => {
    const [sendFormSuccess, changeFormSuccess] = useState(false);
    const [sendFormFailed, changeFormFailed] = useState(false);
    const [messageFailed, setMessageFailed] = useState('');
    const [disabled, setDisabled] = useState(true);
    const path = Constants.TYPE[type];
    const {
        setMontoAhorro,
        setMontoInversion,
        setMontoGasto,
        setMontoDeuda
    } = useAppContext();

    const ahorro = 'ahorro';
    const inversion = 'inversión';
    const gasto = 'gasto';
    const deuda = 'deuda';

    const { handlerSubmitFinancialForm } = FinancialFormHandler({ add, path, nextStep, changeFormSuccess, changeFormFailed, setMessageFailed, setDisabled });

    return (
        <div id="contact" className="bg-[url('/bg.jpg')] bg-cover bg-center">
        <div className="py-6 px-5 text-white text-2xl md:text-3xl font-semibold">
            <h1 className="text-center">{add ? Constants.TITLE_BTN_ADD : Constants.TITLE_BTN_SACAR} {type}</h1>
        </div>
        <div className="w-full">
            <div className="w-full px-5 pb-6 pt-3 max-w-xl mx-auto">
            <Formik
                    initialValues={{
                        monto: '',
                    }}
                    validate={(values) => {
                        let errors = {};

                        // Validación del celular
                        if (!/^[0-9]+$/.test(values.monto)) {
                            errors.monto = 'Introduca un monto.'
                        }

                        if (Object.keys(errors).length === 0) {
                            setDisabled(false);
                        } else if (!disabled && Object.keys(errors).length > 0) {
                            setDisabled(true);
                        }
                        return errors;
                    }}
                    onSubmit={async (values) => {
                        setDisabled(true);
                        const newMonto = await handlerSubmitFinancialForm(values);
                        if(newMonto !== null){
                            changeFormSuccess(true);    
                            if(type === ahorro) setMontoAhorro(newMonto);
                            if(type === inversion) setMontoInversion(newMonto);
                            if(type === gasto) setMontoGasto(newMonto);
                            if(type === deuda) setMontoDeuda(newMonto);
                            setTimeout(()=>{
                                nextStep();
                            }, 3000);
                        }else {
                            setMessageFailed(Constants.SUBMIT_FILED);
                            changeFormFailed(true);
                            setTimeout(()=>{
                                nextStep();
                            }, 3000);
                        }                        
                    }}
                >
                    {({ errors }) => (					
                        <Form className="flex flex-col bg-white p-3 rounded-xl shadow-lg">
                            {sendFormFailed && <AlertError message={messageFailed} />}
                            {sendFormSuccess && <AlertSuccess message={Constants.SUBMIT_SUCCESS} />}
            <div>
                <label htmlFor="celular">Monto *</label>
                <Field
                name="monto"
                type="number"
                className="w-full rounded-xl mt-3 mb-5 py-2 px-5 bg-slate-50 border border-slate-300 
                    focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
                />
                <ErrorMessage name="monto" component={() => (<div className="text-base text-red-600 w-full font-semibold error-message-form">{errors.monto}</div>)} />
            </div>          
            <div>
                <label htmlFor="message">Deje un comentario</label>
                <Field 
                name="message" 
                as="textarea" 
                className="rounded-xl mt-3 mb-5 py-2 px-5 bg-slate-50 border border-slate-300 focus:outline-none 
                focus:ring-2 focus:ring-slate-400 focus:border-transparent w-full"/>            
            </div>
            <button type={disabled ? 'disabled' : 'submit'} className="w-full py-2 px-5 rounded-xl font-semibold bg-transparen 
            hover:bg-red-600 transition-colors text-red-600 cursor-pointer hover:text-white border-2 border-red-600
            duration-300">
                {add ? Constants.TITLE_BTN_ADD : Constants.TITLE_BTN_SACAR}
            </button>
            </Form>
            )}
            </Formik>
            </div>
        </div>
        </div>
    );
};
export default FinancialForm;
