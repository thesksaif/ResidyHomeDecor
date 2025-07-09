import { useContext } from 'react';
import WardrobeQuoteContext from 'contexts/WardrobeQuoteContext';

const useWardrobeQuote = () => {
    const context = useContext(WardrobeQuoteContext);
    if (!context) throw new Error('useWardrobeQuote must be used inside WardrobeQuoteProvider');
    return context;
};

export default useWardrobeQuote;
