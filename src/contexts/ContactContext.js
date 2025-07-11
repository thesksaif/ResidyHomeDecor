import React, { createContext, useState, useCallback } from 'react';
import axios from 'utils/axios';
import PropTypes from 'prop-types';

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const submitContact = useCallback(async (form) => {
        setLoading(true);
        setError(null);
        try {
            const payload = {
                fullName: form.name,
                phoneNumber: form.phone,
                email: form.email,
                serviceDescription: form.service,
                message: form.message,
                whatsapp: form.whatsapp
            };
            const response = await axios.post(`${process.env.REACT_APP_API_URL}api/contact`, payload, {
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

    return <ContactContext.Provider value={{ loading, error, submitContact, clearError }}>{children}</ContactContext.Provider>;
};

ContactProvider.propTypes = {
    children: PropTypes.node
};

export default ContactContext;
