import React, { useContext, createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

// Creando un contexto global para la APP
export const AppContext = createContext(null);

// Creando el provider
export const AppContextProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [montoAhorro, setMontoAhorro] = useState(0.0);
    const [montoInversion, setMontoInversion] = useState(0.0);
    const [montoGasto, setMontoGasto] = useState(0.0);
    const [montoDeuda, setMontoDeuda] = useState(0.0);
    const router = useRouter();

    useEffect(() => {
        if(!token){
            router.push('/admin');
        }
    }, [token]);

    const values = React.useMemo(() => (
        {
            token,
            montoAhorro, 
            montoInversion, 
            montoGasto, 
            montoDeuda,
            setToken,
            setMontoAhorro,
            setMontoInversion,
            setMontoGasto,
            setMontoDeuda,
        }
    ), [
        token, 
        montoAhorro, 
        montoInversion, 
        montoGasto, 
        montoDeuda,
        setToken,
        setMontoAhorro,
        setMontoInversion,
        setMontoGasto,
        setMontoDeuda
    ]);
    return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export function useAppContext () {
    const context = useContext(AppContext);
    if(!context){
    }

    return context;
};

export default useAppContext;