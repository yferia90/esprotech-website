import { fetchAxios } from 'src/utils/configAxios';

const handlerSimpleTableDeuda = async({ path }) => {
    try{
        let result = await fetchAxios.get(`${path}`);
        const error = result?.data?.error;
        if(!error){
            const table = result?.data?.data[0].docs;
            return table;
        }else return [];
    }catch(err){
        return [];
    }
}

const SimpleTableHandler = () => ({
    handlerSimpleTableDeuda: () => handlerSimpleTableDeuda({ path: 'debt'}),
    handlerSimpleTableGasto: () => handlerSimpleTableDeuda({ path: 'spend'}),
});

export default SimpleTableHandler;