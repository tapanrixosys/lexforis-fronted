// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'CRM',
  title: 'CRM',
  type: 'group',
  children: [
    {
      id: 'login1',
      title: 'Calendar',
      type: 'item',
      url: '/calendar',
      icon: icons.ProfileOutlined,
      // target: true
    },
    // {
    //   id: 'register1',
    //   title: 'Register',
    //   type: 'item',
    //   url: '/register',
    //   icon: icons.ProfileOutlined,
    //   target: true
    // }
  ]
};

export default pages;
