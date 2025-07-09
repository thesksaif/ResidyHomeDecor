import { useContext } from 'react';
import QuoteContext from 'contexts/QuoteContext';

const useQuote = () => {
    const context = useContext(QuoteContext);
    if (!context) throw new Error('useQuote must be used inside QuoteProvider');
    return context;
};

export default useQuote;
