import { useContext } from 'react';

// quick consult provider
import QuickConsultContext from 'contexts/QuickConsultContext';

// ==============================|| QUICK CONSULT HOOKS ||============================== //

const useQuickConsult = () => {
    const context = useContext(QuickConsultContext);

    if (!context) throw new Error('useQuickConsult must be used inside QuickConsultProvider');

    return context;
};

export default useQuickConsult;
