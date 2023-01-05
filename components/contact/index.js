import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AlertError from '../alerts/alert-error';
import AlertSuccess from '../alerts/alert-success';
import ContactHandler from './handler/contact.handler';
import Constants from './constants/contact.constants';

const Contact = () => {
  const [sendFormSuccess, changeFormSuccess] = useState(false);
	const [sendFormFailed, changeFormFailed] = useState(false);
	const [messageFailed, setMessageFailed] = useState('');
	const [disabled, setDisabled] = useState(true);
  const { handlerSubmitContact } = ContactHandler({ changeFormSuccess, changeFormFailed, setMessageFailed, setDisabled });

  return (
    <div id="contact" className="bg-[url('/bg.jpg')] bg-cover bg-center">
      <div className="py-6 px-5 text-white text-2xl md:text-3xl font-semibold">
        <h1 className="text-center">Contáctanos</h1>
      </div>
      <div className="w-full">
        <div className="w-full px-5 pb-6 pt-3 max-w-xl mx-auto">
        <Formik
				initialValues={{
					name: '',
					email: '',
					celular: '',
					message: ''
				}}
				validate={(values) => {
					let errors = {};

					// Validación name
					if (!values.name) {
						errors.name = 'Por favor ingrese su nombre.'
					} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
						errors.name = 'El nombre solo puede contener letras y espacios.'
					}

					// Validación del celular
					if (!/^[0-9]+$/.test(values.celular)) {
						errors.celular = 'El celular solo puede contener números.'
					}

					// Validación del email
					if (!values.email) {
						errors.email = 'Por favor ingresa un correo electrónico'
					} else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
						errors.email = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

					// Validación del comentario
					if (!values.message) {
						errors.message = 'Debe dejar un mensaje.'
					}

					if (Object.keys(errors).length === 0) {
						setDisabled(false);
					} else if (!disabled && Object.keys(errors).length > 0) {
						setDisabled(true);
					}

          console.log('ERRORES!!!',errors);
					return errors;
				}}
				onSubmit={(values, { resetForm }) => {
					setDisabled(true);
					handlerSubmitContact(values, resetForm);
				}}
			>
				{({ errors }) => (					
					<Form className="flex flex-col bg-white p-3 rounded-xl shadow-lg">
            {sendFormFailed && <AlertError message={messageFailed} />}
						{sendFormSuccess && <AlertSuccess message={Constants.SUBMIT_SUCCESS} />}
            <div>
              <label htmlFor="name">Nombre *</label>
              <Field
                  type="text"
                  name="name"
                  className="w-full rounded-xl mt-3 mb-5 py-2 px-5 bg-slate-50 border border-slate-300 
                  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
                />
              <ErrorMessage name="name" component={() => (<div className="text-base text-red-600 w-full font-semibold error-message-form">{errors.name}</div>)} />
            </div>
          <div>
            <label htmlFor="celular">Teléfono</label>
            <Field
              name="celular"
              type="cel"
              className="w-full rounded-xl mt-3 mb-5 py-2 px-5 bg-slate-50 border border-slate-300 
                focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
              />
            <ErrorMessage name="celular" component={() => (<div className="text-base text-red-600 w-full font-semibold error-message-form">{errors.celular}</div>)} />
          </div>
          <div>
            <label htmlFor="email">Correo *</label>
            <Field
              name="email"
              type="email"
              className="w-full rounded-xl mt-3 mb-5 py-2 px-5 bg-slate-50 border border-slate-300 
                focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
                />
            <ErrorMessage name="email" component={() => (<div className="text-base text-red-600 w-full font-semibold error-message-form">{errors.email}</div>)} />
          </div>
          <div>
            <label htmlFor="message">Cuéntanos lo que necesitas *</label>
            <Field 
              name="message" 
              as="textarea" 
              className="rounded-xl mt-3 mb-5 py-2 px-5 bg-slate-50 border border-slate-300 focus:outline-none 
              focus:ring-2 focus:ring-slate-400 focus:border-transparent w-full"/>            
            <ErrorMessage name="message" component={() => (<div className="text-base text-red-600 w-full font-semibold error-message-form">{errors.message}</div>)} />
          </div>
          <button type={disabled ? 'disabled' : 'submit'} className="w-full py-2 px-5 rounded-xl font-semibold bg-transparen 
          hover:bg-red-600 transition-colors text-red-600 cursor-pointer hover:text-white border-2 border-red-600
          duration-300">
            {Constants.TITLE_BTN}
          </button>
        </Form>
				)}
			</Formik>          
        </div>
      </div>
    </div>
  );
};
export default Contact;
