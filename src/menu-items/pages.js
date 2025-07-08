// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
    IconKey,
    IconPictureInPicture,
    IconReceipt2,
    IconBug,
    IconBellRinging,
    IconPhoneCall,
    IconUserCheck,
    IconQuestionMark,
    IconShieldLock
} from '@tabler/icons';

// constant
const icons = {
    IconKey,
    IconPictureInPicture,
    IconReceipt2,
    IconBug,
    IconBellRinging,
    IconPhoneCall,
    IconUserCheck,
    IconQuestionMark,
    IconShieldLock
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: <FormattedMessage id="pages" />,
    caption: <FormattedMessage id="pages-caption" />,
    icon: icons.IconPictureInPicture,
    type: 'group',
    children: [
        {
            id: 'pages',
            title: <FormattedMessage id="pages" />,
            type: 'collapse',
            icon: icons.IconPictureInPicture,
            children: [
                {
                    id: 'home',
                    title: (
                        <>
                            <FormattedMessage id="Home" />
                        </>
                    ),
                    type: 'item',
                    url: '/pages/home'
                },
                {
                    id: 'about',
                    title: (
                        <>
                            <FormattedMessage id="About" />
                        </>
                    ),
                    type: 'item',
                    url: '/pages/about'
                },
                {
                    id: 'services',
                    title: (
                        <>
                            <FormattedMessage id="Services" />
                        </>
                    ),
                    type: 'item',
                    url: '/pages/services'
                },
                {
                    id: 'contact',
                    title: (
                        <>
                            <FormattedMessage id="Contact" />
                        </>
                    ),
                    type: 'item',
                    url: '/admin/contact',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'policy',
            title: <FormattedMessage id="Policy & Terms" />,
            type: 'collapse',
            icon: icons.IconShieldLock,
            children: [
                {
                    id: 'privacy-policy',
                    title: (
                        <>
                            <FormattedMessage id="privacy-policy" />
                        </>
                    ),
                    type: 'item',
                    url: '/admin/privacy-policy',
                    breadcrumbs: false
                },
                {
                    id: 'refund-policy',
                    title: (
                        <>
                            <FormattedMessage id="Refund Policy" />
                        </>
                    ),
                    type: 'item',
                    url: '/admin/refund-policy',
                    breadcrumbs: false
                },
                {
                    id: 'terms-and-conditions',
                    title: (
                        <>
                            <FormattedMessage id="Terms & Conditions" />
                        </>
                    ),
                    type: 'item',
                    url: '/admin/terms-and-conditions',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'maintenance',
            title: <FormattedMessage id="maintenance" />,
            type: 'collapse',
            icon: icons.IconBug,
            children: [
                {
                    id: 'error',
                    title: <FormattedMessage id="error-404" />,
                    type: 'item',
                    url: '/pages/error',
                    target: true
                },
                {
                    id: 'coming-soon',
                    title: <FormattedMessage id="coming-soon" />,
                    type: 'collapse',
                    children: [
                        {
                            id: 'coming-soon1',
                            title: (
                                <>
                                    <FormattedMessage id="coming-soon" /> 01
                                </>
                            ),
                            type: 'item',
                            url: '/pages/coming-soon1',
                            target: true
                        },
                        {
                            id: 'coming-soon2',
                            title: (
                                <>
                                    <FormattedMessage id="coming-soon" /> 02
                                </>
                            ),
                            type: 'item',
                            url: '/pages/coming-soon2',
                            target: true
                        }
                    ]
                },
                {
                    id: 'under-construction',
                    title: <FormattedMessage id="under-construction" />,
                    type: 'item',
                    url: '/pages/under-construction',
                    target: true
                }
            ]
        },
        {
            id: 'landing',
            title: <FormattedMessage id="landing" />,
            type: 'item',
            icon: icons.IconBellRinging,
            url: '/admin/landing',
            target: true,
            breadcrumbs: false
        },
        {
            id: 'reviews',
            title: <FormattedMessage id="Reviews" />,
            type: 'item',
            icon: icons.IconUserCheck,
            url: '/tables/review',
            target: false,
            breadcrumbs: false
        },
        {
            id: 'faqs',
            title: <FormattedMessage id="faqs" />,
            type: 'item',
            icon: icons.IconQuestionMark,
            url: '/tables/faq',
            target: false,
            breadcrumbs: false
        }
    ]
};

export default pages;
