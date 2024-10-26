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
      id: 'traducciones',
      title: 'Traducciones',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/mantis/',
      icon: icons.QuestionOutlined,
      external: true,
      target: true
    }
  ]
};

export default support;
