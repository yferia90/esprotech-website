import React, { useState } from 'react';

const CardMoney = ({ handleClickBtn, money = 0.0, description }) => {

    return (
        <> 
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 card-money-one">
                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{description}</h5>
                    </a>
                    <div class="h-0 border-t-2 border-red-600 width-line"></div>
                    <div class="flex items-center justify-between in-card">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">${money}</span>
                        <div class="bts-in-card">
                            <button onClick={(event) => {
                                event.preventDefault();
                                handleClickBtn(1);
                            }} type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Agregar</button>
                            {money > 0 && 
                                <button onClick={(event) => {
                                    event.preventDefault();
                                    handleClickBtn(2);
                                }} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sacar</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardMoney;