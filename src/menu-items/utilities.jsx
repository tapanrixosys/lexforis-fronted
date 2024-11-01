// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined,
  UserOutlined,
  TeamOutlined,
  ProfileOutlined

} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  UserOutlined,
  TeamOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'Services',
  title: 'CRM',
  type: 'group',
  children: [
    {
      id: 'login1',
      title: 'Calendar',
      type: 'item',
      url: '/calendar',
      icon: icons.ProfileOutlined,
    
    },
    {
      id: 'util-color',
      title: 'Clientes',
      type: 'item',
      url: '/client',
      icon: icons.UserOutlined
    },
    
    {
      id: 'Companias',
      title: 'Companias',
      type: 'item',
      url: '/company',
      icon: icons.BarcodeOutlined
    },

    
    {
      id: 'util-shadow ',
      title: 'Administradores',
      type: 'item',
      url: '/administradores',
      icon: icons.TeamOutlined
    }
  ]
};

export default utilities;
