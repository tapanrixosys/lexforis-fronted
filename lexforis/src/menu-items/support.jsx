// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'SISTEMA',
  type: 'group',
  children: [
    {
      id: 'Ayuda',
      title: 'Ayuda',
      type: 'item',
      url: '/ayuda',
      icon: icons.ChromeOutlined
    },
    {
      id: 'Traducciones',
      title: 'Traducciones', 
      type: 'item',
      url: '/translations',
      icon: icons.QuestionOutlined
    }, 
  ]
};

export default support;
