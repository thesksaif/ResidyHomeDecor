import { useContext } from 'react';
import KitchenQuoteContext from 'contexts/KitchenQuoteContext';

const useKitchenQuote = () => {
    const context = useContext(KitchenQuoteContext);
    if (!context) throw new Error('useKitchenQuote must be used inside KitchenQuoteProvider');
    return context;
};

export default useKitchenQuote;
