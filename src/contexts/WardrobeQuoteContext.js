import React, { createContext, useState, useCallback } from 'react';
import axios from 'utils/axios';
import PropTypes from 'prop-types';

const WardrobeQuoteContext = createContext();

export const WardrobeQuoteProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const submitWardrobeQuote = useCallback(async (form) => {
        setLoading(true);
        setError(null);
        try {
            // The form should already be shaped to match the API
            const response = await axios.post('http://localhost:3500/api/wardrobe-quote', form, {
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
        <WardrobeQuoteContext.Provider value={{ loading, error, submitWardrobeQuote, clearError }}>
            {children}
        </WardrobeQuoteContext.Provider>
    );
};

WardrobeQuoteProvider.propTypes = {
    children: PropTypes.node
};

export default WardrobeQuoteContext;
