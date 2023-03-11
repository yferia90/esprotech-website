import React, { useEffect, useState } from 'react';
import SimpleTableHandler from './handler/simple-table.handler';

const SimpleTable = () => {
    const [data, setData] = useState([]);
    const { handlerSimpleTableGasto } = SimpleTableHandler();

    const getTable = async () => {
        const table = await handlerSimpleTableGasto();
        if(table.length > 0){
            setData(table);
        }
    }

    useEffect(() => {
        getTable();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <table className="table-fixed">
                <thead>
                    <tr>
                        <th>Monto</th>
                        <th>message</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.monto}</td>
                            <td>{item.message}</td>
                        </tr>
                    )
                   )}
                </tbody>
            </table>
        </>
    )
}
export default SimpleTable;