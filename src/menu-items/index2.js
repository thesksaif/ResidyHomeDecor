// Admin Sidebar Menu Structure
import dashboard from './dashboard-admin';
import pages from './pages-admin';
import galleryMedia from './galleryMedia-admin';
import quoteRequests from './quoteRequests-admin';
import contactMessages from './contactMessages-admin';
import users from './users-admin';
import settings from './settings-admin';
import notifications from './notifications-admin';

const menuItems = [
  dashboard,
  pages,
  galleryMedia,
  quoteRequests,
  contactMessages,
  users,
  settings,
  notifications,
];

export default { items: menuItems };
