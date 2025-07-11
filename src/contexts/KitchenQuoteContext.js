import React, { createContext, useState, useCallback } from 'react';
import axios from 'utils/axios';
import PropTypes from 'prop-types';

const KitchenQuoteContext = createContext();

export const KitchenQuoteProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const submitKitchenQuote = useCallback(async (form) => {
        setLoading(true);
        setError(null);
        try {
            // The form should already be shaped to match the API
            const response = await axios.post(`${process.env.REACT_APP_API_URL}api/kitchen-quote`, form, {
                headers: { 'Content-Type': 'application/json' }
            });
            setLoading(false);
            return { success: true, message: response.data.message, data: response.data.data };
        } catch (err) {
            setLoading(false);
            setError(err.response?.data?.message || 'Something went wrong');
            return { success: false, error: err.response?.data?.message || 'Something went wrong' };
        }
    }, []);

    const clearError = () => setError(null);

    return (
        <KitchenQuoteContext.Provider value={{ loading, error, submitKitchenQuote, clearError }}>{children}</KitchenQuoteContext.Provider>
    );
};

KitchenQuoteProvider.propTypes = {
    children: PropTypes.node
};

export default KitchenQuoteContext;
