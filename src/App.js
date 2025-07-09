import { useEffect, useState } from 'react';

// routing
import Routes from 'routes';

// project imports
import Locales from 'ui-component/Locales';
import NavigationScroll from 'layout/NavigationScroll';
import RTLLayout from 'ui-component/RTLLayout';
import Snackbar from 'ui-component/extended/Snackbar';
import Loader from 'ui-component/Loader';
import Notistack from 'ui-component/third-party/Notistack';

import ThemeCustomization from 'themes';

// auth provider
import { JWTProvider as AuthProvider } from 'contexts/JWTContext';
// import { FirebaseProvider as AuthProvider } from 'contexts/FirebaseContext';
// import { AWSCognitoProvider as AuthProvider } from 'contexts/AWSCognitoContext';
// import { Auth0Provider as AuthProvider } from 'contexts/Auth0Context';

// quick consult provider
import { QuickConsultProvider } from 'contexts/QuickConsultContext';
import { ContactProvider } from 'contexts/ContactContext';
import { QuoteProvider } from 'contexts/QuoteContext';
import { KitchenQuoteProvider } from 'contexts/KitchenQuoteContext';
import { WardrobeQuoteProvider } from 'contexts/WardrobeQuoteContext';

// ==============================|| APP ||============================== //

const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    }, []);

    if (!loading) return <Loader />;

    return (
        <WardrobeQuoteProvider>
            <KitchenQuoteProvider>
                <QuoteProvider>
                    <ContactProvider>
                        <ThemeCustomization>
                            <RTLLayout>
                                <Locales>
                                    <NavigationScroll>
                                        <AuthProvider>
                                            <QuickConsultProvider>
                                                <>
                                                    <Notistack>
                                                        <Routes />
                                                        <Snackbar />
                                                    </Notistack>
                                                </>
                                            </QuickConsultProvider>
                                        </AuthProvider>
                                    </NavigationScroll>
                                </Locales>
                            </RTLLayout>
                        </ThemeCustomization>
                    </ContactProvider>
                </QuoteProvider>
            </KitchenQuoteProvider>
        </WardrobeQuoteProvider>
    );
};

export default App;
