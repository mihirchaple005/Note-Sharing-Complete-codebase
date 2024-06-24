import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
    const [order1, setOrder1] = useState([]);

    const updateOrder = (newProductDetails) => {
        setOrder1(prevOrder => [...prevOrder, newProductDetails]);
    };

    return (
        <OrderContext.Provider value={{ order1, updateOrder }}>
            {children}
        </OrderContext.Provider>
    );
};
