import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';
import Calendar from 'pages/Calendar/Calendar';
import Services from 'pages/Services/Services';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
import Navbar from 'pages/component-overview/clientNavbar';
import EditInformation from 'pages/component-overview/EditInformation';
import Administradores from 'pages/component-overview/Administradores';
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));


const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'client',
      element: <Color />
    },

    {
      path: 'client-information',
      element: <Navbar/>
    },

    {
      path: 'edit-information value',
      element: <EditInformation/>
    },
    
    
    
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'company',
      element: <Shadow />
    },
    {
      path: 'administradores',
      element: <Administradores />
    },
    
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'calendar',
      element: <Calendar />
    },
    {
      path: 'services',
      element: <Services />
    }
    
  ]
};

export default MainRoutes;
