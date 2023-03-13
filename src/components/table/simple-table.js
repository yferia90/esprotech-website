import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import enumOperations from 'src/utils/enumOperations';
import moment from 'moment';
import SimpleTableHandler from './handler/simple-table.handler';
const format = "YYYY-MM-DD";

const SimpleTable = ({ typeOperation, montoTotalOperation }) => {
    const [data, setData] = useState([]);
    const router = useRouter();
    const { handlerSimpleTableGasto, handlerSimpleTableInversiones, handlerSimpleTableDeuda } = SimpleTableHandler({ router });

    const getTable = async () => {
        let table = [];
        switch (typeOperation) {
            case enumOperations.inversion:
                table = await handlerSimpleTableInversiones();
                break;
            case enumOperations.gasto:
                table = await handlerSimpleTableGasto();
                break;
            case enumOperations.deuda:
                table = await handlerSimpleTableDeuda();
                break;
            default:
                break;
        }
        setData(table);
    }

    useEffect(() => {
        getTable();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Monto
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            TO
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Mensaje
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Fecha
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {data && data.map((item, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                {index}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                $ {item.monto}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                {item.type_operation}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                {item.message}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                {moment(item.createdAt).format(format)}
                                            </td>
                                        </tr>
                                    )
                                    )}
                                    <tr key={montoTotalOperation}>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                            <b>$ {montoTotalOperation}</b>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SimpleTable;