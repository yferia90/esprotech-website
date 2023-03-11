import React, { useEffect, useState } from 'react';
import Head from "next/head";
import { useRouter } from 'next/router';
import { fetchAxios } from '../../utils/configAxios';
import CardMoney from '../../components/card-money/card-money';
import Footer from "../../components/footer";
import HeaderAdmin from '../../components/header/header-admin';
import useAppContext from '../../contexts/app.context';
import FinancialForm from '../../components/form/financial-form';
import SimpleTable from '../../components/table/simple-table';

const Admin = () => {
    const { 
        token, 
        montoAhorro, 
        montoInversion, 
        montoGasto, 
        montoDeuda, 
        setMontoAhorro, 
        setMontoInversion,
        setMontoGasto,
        setMontoDeuda,
    } = useAppContext();

    const [type, setType] = useState('');
    const [nextStep, setNextStep] = useState(0);
    const [authorization, setAutorization] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    const searchAllData = async () => {
        try{
            const result = await fetchAxios.get('financial');
            const error = result?.data?.error;
            if(!error){
                const ahorro = result?.data?.data[0] || montoAhorro;
                const inversion = result?.data?.data[1] || montoInversion;
                const gasto = result?.data?.data[2] || montoGasto;
                const deuda = result?.data?.data[3] || montoDeuda;
                setMontoAhorro(ahorro);
                setMontoInversion(inversion);
                setMontoGasto(gasto);
                setMontoDeuda(deuda);
            }
        }catch(err){}
    }

    useEffect(() => {
        // if(!token){
        //     router.push('/admin');
        // }
        searchAllData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, montoAhorro, montoInversion, montoGasto, montoDeuda]);

    const handleClickAhorro = (type) => {
        type == 1 ? setNextStep(1) : setNextStep(2);
    }

    const handleInversiones = (type) => {
        type == 1 ? setNextStep(3) : setNextStep(4);
    }

    const handleClickGastos = (type) => {
        type == 1 ? setNextStep(5) : type === 2 ? setNextStep(6) : setNextStep(9);
    }

    const handleClickDeuda= (type) => {
        type == 1 ? setNextStep(7) : setNextStep(8);
    }

    // if(!authorization && !isLoading) {
    //     router.push('/admin/admin');
    // }

    return (
        <>
        <Head>
            <meta name="googlebot" content="notranslate"/>
            <meta httpEquiv='Content-Language' content='es'/>
            <meta name='distribution' content='global'/>

            <title>EsproTech</title>
            <link rel="icon" href="/favicon.ico" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="robots" content="max-image-preview:large" />
            <meta property="og:image" content="/portada.jpg" />
            <link href="/portada.jpg" rel="image_src"/>
            <meta property="image:width" content="240" />
            <meta property="image:height" content="135" /> 
        </Head>
        <HeaderAdmin/>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].includes(nextStep) && (
            <button onClick={(event) => {
                event.preventDefault();
                setNextStep(0);
            }} type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 svg-back">
                <svg aria-hidden="true" className="w-5 h-5"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"/>
                </svg>
            </button>
        )}
        <div id="teams" className="bg-slate-100 pb-6 cards-money">
            {nextStep === 0 && (
                <>
                <CardMoney description='Ahorro' money={montoAhorro} handleClickBtn={handleClickAhorro} />
                <CardMoney description='Inversiones' money={montoInversion} handleClickBtn={handleInversiones} />
                <CardMoney description='Gastos' showList money={montoGasto} handleClickBtn={handleClickGastos} />
                <CardMoney description='Deuda' money={montoDeuda} handleClickBtn={handleClickDeuda} /></>
            )}
            {nextStep === 1 && (
                <FinancialForm add={true} type={'ahorro'} nextStep={() => {
                    setNextStep(0);
                }} />
            )}
            {nextStep === 2 && (
                <FinancialForm add={false} type={'ahorro'} nextStep={() => {
                    setNextStep(0);
                }} />
            )}
            {nextStep === 3 && (
                <FinancialForm add={true} type={'inversión'} nextStep={() => {
                    setNextStep(0);
                }} />
            )}
            {nextStep === 4 && (
                <FinancialForm add={false} type={'inversión'} nextStep={() => {
                    setNextStep(0);
                }} />
            )}
            {nextStep === 5 && (
                <FinancialForm add={true} type={'gasto'} nextStep={() => {
                    setNextStep(0);
                }} />
            )}
            {nextStep === 6 && (
                <FinancialForm add={false} type={'gasto'} nextStep={() => {
                    setNextStep(0);
                }} />
            )}
            {nextStep === 7 && (
                <FinancialForm add={true} type={'deuda'} nextStep={() => {
                    setNextStep(0);
                }} />
            )}
            {nextStep === 8 && (
                <FinancialForm add={false} type={'deuda'} nextStep={() => {
                    setNextStep(0);
                }} />
            )}
            {nextStep === 9 && (
                <SimpleTable />
            )}
        </div>
        <Footer />
    </>
    );
}

export default Admin;