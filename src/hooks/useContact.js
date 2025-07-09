import { useContext } from 'react';
import ContactContext from 'contexts/ContactContext';

const useContact = () => {
    const context = useContext(ContactContext);
    if (!context) throw new Error('useContact must be used inside ContactProvider');
    return context;
};

export default useContact;
