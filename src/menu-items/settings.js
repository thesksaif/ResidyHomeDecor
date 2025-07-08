// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  IconClipboardCheck,
  IconPictureInPicture,
  IconForms,
  IconBorderAll,
  IconChartDots,
  IconStairsUp,
  IconLogout,
} from '@tabler/icons';

// constant
const icons = {
  IconClipboardCheck,
  IconPictureInPicture,
  IconForms,
  IconBorderAll,
  IconChartDots,
  IconStairsUp,
  IconLogout,
};

// ==============================|| SETTINGS MENU ITEMS ||============================== //

const settings = {
  id: 'settings',
  title: <FormattedMessage id="settings" defaultMessage="Settings" />,
  icon: icons.IconPictureInPicture,
  type: 'group',
  children: [
    {
      id: 'components',
      title: <FormattedMessage id="Profile" />,
      type: 'collapse',
      icon: icons.IconPictureInPicture,
      children: [
        {
          id: 'autocomplete',
          title: <FormattedMessage id="My Profile" />,
          type: 'item',
          url: '/components/autocomplete',
          breadcrumbs: false,
        },
        {
          id: 'button',
          title: <FormattedMessage id="Change Password" />,
          type: 'item',
          url: '/components/button',
          breadcrumbs: false,
        },
        {
          id: 'checkbox',
          title: <FormattedMessage id="Logout" />,
          type: 'item',
          url: '/components/checkbox',
          breadcrumbs: false,
        },
      ],
    },
    {
      id: 'cms',
      title: <FormattedMessage id="CMS Settings" />,
      type: 'collapse',
      icon: icons.IconForms,
      children: [
        {
          id: 'frm-autocomplete',
          title: <FormattedMessage id="Website Settings" />,
          type: 'item',
          url: '/forms/frm-autocomplete',
          breadcrumbs: false,
        },
        {
          id: 'frm-mask',
          title: <FormattedMessage id="General Settings" />,
          type: 'item',
          url: '/forms/frm-mask',
          breadcrumbs: false,
        },
        {
          id: 'frm-clipboard',
          title: <FormattedMessage id="SEO" />,
          type: 'item',
          url: '/forms/frm-clipboard',
          breadcrumbs: false,
        },
        {
          id: 'frm-recaptcha',
          title: <FormattedMessage id="Appearance" />,
          type: 'item',
          url: '/forms/frm-recaptcha',
          breadcrumbs: false,
        },
      ],
    },
    {
      id: 'forms-validation',
      title: <FormattedMessage id="logout" />,
      type: 'item',
      url: '/forms/forms-validation',
      icon: icons.IconLogout,
    },
  ],
};

export default settings;
