import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import axiosServices from 'utils/axios';

// ==============================|| QUICK CONSULT CONTEXT ||============================== //

const QuickConsultContext = createContext();

export const useQuickConsult = () => {
    const context = useContext(QuickConsultContext);
    if (!context) {
        throw new Error('useQuickConsult must be used within a QuickConsultProvider');
    }
    return context;
};

export const QuickConsultProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const submitQuickConsult = async (formData) => {
        setLoading(true);
        setError(null);

        try {
            const payload = {
                name: formData.name.trim(),
                mobileNumber: formData.mobile.trim(),
                email: formData.email.trim(),
                propertyName: formData.property.trim(),
                whatsapp: formData.whatsapp
            };

            console.log('Submitting quick consult with payload:', payload);
            console.log('API URL:', process.env.REACT_APP_API_URL);
            console.log('Full endpoint:', `${process.env.REACT_APP_API_URL}api/quick-consult`);

            const response = await axiosServices.post('/api/quick-consult', payload);

            console.log('API Response:', response.data);

            setLoading(false);
            return {
                success: true,
                data: response.data,
                message: response.data.message || 'Consultation submitted successfully!'
            };
        } catch (err) {
            console.error('Quick consult submission error:', err);
            console.error('Error response:', err.response);
            console.error('Error message:', err.message);
            console.error('Error status:', err.response?.status);
            console.error('Error data:', err.response?.data);

            const errorMessage = err.response?.data?.message || err.message || 'Failed to submit consultation. Please try again.';

            setError(errorMessage);
            setLoading(false);

            return {
                success: false,
                error: errorMessage
            };
        }
    };

    const clearError = () => {
        setError(null);
    };

    const value = {
        loading,
        error,
        submitQuickConsult,
        clearError
    };

    return <QuickConsultContext.Provider value={value}>{children}</QuickConsultContext.Provider>;
};

QuickConsultProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default QuickConsultContext;
