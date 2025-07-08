// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconPhoneCall, IconMessageCircle, IconFileText, IconHome, IconDoor } from '@tabler/icons';

const icons = {
    IconPhoneCall,
    IconMessageCircle,
    IconFileText,
    IconHome,
    IconDoor
};

// ==============================|| MENU ITEMS - LEADS ||============================== //

const leads = {
    id: 'leads',
    title: <FormattedMessage id="leads" />,
    icon: icons.IconMessageCircle,
    type: 'group',
    children: [
        {
            id: 'contact',
            title: <FormattedMessage id="contact" />,
            type: 'item',
            url: '/leads/contact',
            icon: icons.IconPhoneCall,
            breadcrumbs: false
        },
        {
            id: 'quick-consult',
            title: <FormattedMessage id="Quick Consult" />,
            type: 'item',
            url: '/leads/quick-consult',
            icon: icons.IconMessageCircle,
            breadcrumbs: false
        },
        {
            id: 'quote',
            title: <FormattedMessage id="Get Quote" />,
            type: 'item',
            url: '/leads/quote',
            icon: icons.IconFileText,
            breadcrumbs: false
        },
        {
            id: 'kitchen-quote',
            title: <FormattedMessage id="Kitchen Quote" />,
            type: 'item',
            url: '/leads/kitchen-quote',
            icon: icons.IconHome,
            breadcrumbs: false
        },
        {
            id: 'wardrobe-quote',
            title: <FormattedMessage id="Wardrobe Quote" />,
            type: 'item',
            url: '/leads/wardrobe-quote',
            icon: icons.IconDoor,
            breadcrumbs: false
        }
    ]
};

export default leads;
