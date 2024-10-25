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
  TeamOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'Services',
  title: 'Services',
  type: 'group',
  children: [
    // {
    //   id: 'util-typography',
    //   title: 'Calendario',
    //   type: 'item',
    //   url: '/typography',
    //   icon: icons.FontSizeOutlined
    // },
    {
      id: 'util-color',
      title: 'Clientes',
      type: 'item',
      url: '/client',
      icon: icons.UserOutlined
    },
    {
      id: 'Services',
      title: 'Services',
      type: 'item',
      url: '/services',
      icon: icons.BarcodeOutlined
    }
    ,
    // {
    //   id: 'Companias',
    //   title: 'Companias',
    //   type: 'item',
    //   url: '/company',
    //   icon: icons.BarcodeOutlined
    // },

    // {
    //   id: 'util-shadow',
    //   title: 'Services',
    //   type: 'item',
    //   url: '/services',
    //   icon: icons.BarcodeOutlined
    // },

    // {
    //   id: 'util-shadow ',
    //   title: 'Administradores',
    //   type: 'item',
    //   url: '/administradores',
    //   icon: icons.TeamOutlined
    // }
  ]
};

export default utilities;
