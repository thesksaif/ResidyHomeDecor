import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

const PagesLanding = Loadable(lazy(() => import('views/pages/landing')));
const AboutUsPage = Loadable(lazy(() => import('views/pages/about-us')));
const ServicesPage = Loadable(lazy(() => import('views/pages/services')));
const ContactUsPage = Loadable(lazy(() => import('views/pages/contact-us')));
const QuotePage = Loadable(lazy(() => import('views/pages/quote')));
const WardrobeQuotePage = Loadable(
  lazy(() => import('views/pages/wardrobe-quote'))
);
const KitchenQuotePage = Loadable(
  lazy(() => import('views/pages/kitchen-quote'))
);
const PagesFaqs = Loadable(lazy(() => import('views/pages/Faqs')));
const PagesPrivacyPolicy = Loadable(
  lazy(() => import('views/pages/privacy-policy'))
);
const PagesRefundPolicy = Loadable(
  lazy(() => import('views/pages/RefundPolicy'))
);
const PagesTermsAndConditions = Loadable(
  lazy(() => import('views/pages/terms-and-conditions'))
);
// ==============================|| ROUTING RENDER ||============================== /////

export default function ThemeRoutes() {
  return useRoutes([
    {
      path: '/',
      element: <MinimalLayout />,
      children: [
        { path: '', element: <PagesLanding /> },
        { path: 'about-us', element: <AboutUsPage /> },
        { path: 'services', element: <ServicesPage /> },
        { path: 'contact-us', element: <ContactUsPage /> },
        { path: 'quote', element: <QuotePage /> },
        { path: 'wardrobe-quote', element: <WardrobeQuotePage /> },
        { path: 'kitchen-quote', element: <KitchenQuotePage /> },
        { path: 'faqs', element: <PagesFaqs /> },
        { path: 'privacy-policy', element: <PagesPrivacyPolicy /> },
        { path: 'refund-policy', element: <PagesRefundPolicy /> },
        { path: 'terms-and-conditions', element: <PagesTermsAndConditions /> },
      ],
    },
    AuthenticationRoutes,
    LoginRoutes,
    MainRoutes,
  ]);
}
