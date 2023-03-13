import { fetchAxios } from 'src/utils/configAxios';
import handlerErrors from 'src/utils/handlerErrors';

const handlerSimpleTable = async({ path, router }) => {
    try{
        let result = await fetchAxios.get(`${path}`);
        const error = result?.data?.error;
        if(!error){
            const table = result?.data?.data[0].docs;
            return table;
        }else if(error){            
            if(handlerErrors.LOGIN.includes(result?.data?.message)){
                router.push('/admin');
                return ;
            }
            return [];
        }
    }catch(err){
        const message = err?.response?.data?.message;
        if(handlerErrors.LOGIN.includes(message)){
            router.push('/admin');
            return ;
        }
        return [];
    }
}

const SimpleTableHandler = ({ router }) => ({
    handlerSimpleTableInversiones: () => handlerSimpleTable({ path: 'investment', router}),
    handlerSimpleTableGasto: () => handlerSimpleTable({ path: 'spend', router}),
    handlerSimpleTableDeuda: () => handlerSimpleTable({ path: 'debt', router}),    
});

export default SimpleTableHandler;