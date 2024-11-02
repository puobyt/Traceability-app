import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Drawer, Layout, Menu } from 'antd';

import { useAppContext } from '@/context/appContext';

import useLanguage from '@/locale/useLanguage';
import logoIcon from '@/style/images/logo-icon.png';


import useResponsive from '@/hooks/useResponsive';

import {
  SettingOutlined,
  CustomerServiceOutlined,
  ContainerOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TagOutlined,
  TagsOutlined,
  UserOutlined,
  CreditCardOutlined,
  MenuOutlined,
  FileOutlined,
  ShopOutlined,
  FilterOutlined,
  WalletOutlined,
  ReconciliationOutlined,
  CarFilled,
  CheckCircleFilled,
  ShoppingCartOutlined,
  DatabaseOutlined,
  DropboxOutlined,
  OrderedListOutlined,
  PullRequestOutlined,
  ApartmentOutlined,
  BilibiliOutlined,
  AuditOutlined,
  EyeOutlined,
  CodeSandboxOutlined,
  CheckCircleOutlined,
  RetweetOutlined,
} from '@ant-design/icons';
import Invoice from '@/pages/Invoice';

const { Sider } = Layout;

export default function Navigation() {
  const { isMobile } = useResponsive();

  return isMobile ? <MobileSidebar /> : <Sidebar collapsible={false} />;
}

function Sidebar({ collapsible, isMobile = false }) {
  let location = useLocation();

  const { state: stateApp, appContextAction } = useAppContext();
  const { isNavMenuClose } = stateApp;
  const { navMenu } = appContextAction;
  const [showLogoApp, setLogoApp] = useState(isNavMenuClose);
  const [currentPath, setCurrentPath] = useState(location.pathname.slice(1));
  const isSpecificRoute = location.pathname.includes('/crm');

  const translate = useLanguage();
  const navigate = useNavigate();

  const items = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: <Link to={'/'}>{translate('dashboard')}</Link>,
    },
    
    {
      key: 'vendor management',
      icon: <ShoppingCartOutlined />,
      label: <Link to={'/vendor-management'}>Vendor Management</Link>,
    },
    {
      key: 'purchase order creation',
      icon: <DatabaseOutlined />,
      label: <Link to={'/purchase-order-creation'}>Purchase Order Creation</Link>,
    },
    {
      key: 'gate entry',
      icon: <CarFilled />,
      label: <Link to={'/gate-entry'}>Gate Entry</Link>,
    },
    {
      key: 'current stock',
      icon: <DropboxOutlined />,
      label: <Link to={'/current-stock'}>Current Stock</Link>,
    }, 
    {
      key: 'quality check',
      icon: <CheckCircleOutlined />,
      label: <Link to={'/quality-check'}>Quality Check</Link>,
    },
    {
      key: 'rework',
      icon: <RetweetOutlined />,
      label: <Link to={'/rework'}>Rework</Link>,
    },
    {
      key: 'production order creation',
      icon: <OrderedListOutlined />,
      label: <Link to={'/production-order-creation'}>Production Order Creation</Link>,
    },
    {
      key: 'request creation for materials',
      icon: <PullRequestOutlined />,
      label: <Link to={'/request-creation-for-materials'}>Request Creation For Materials</Link>,
    },
    {
      key: 'material assignment',
      icon: <ApartmentOutlined />,
      label: <Link to={'/material-assignment'}>Material Assignment</Link>,
    },
    {
      key: 'bill of materials',
      icon: <AuditOutlined />,
      label: <Link to={'/bill-of-materials'}>Bill Of Materials</Link>,
    },
    {
      key: 'final quality inspection',
      icon: <EyeOutlined />,
      label: <Link to={'/final-quality-inspection'}>Final Quality Inspection</Link>,
    },
    {
      key: 'finished goods',
      icon: <CodeSandboxOutlined />,
      label: <Link to={'/finished-goods'}>Finished Goods</Link>,
    },
    {
      key: 'invoice creation',
      icon: <ContainerOutlined />,
      label: <Link to={'/invoice-creation'}>Invoice Creation</Link>,
    },
    
    {
      key: 'generalSettings',
      label: <Link to={'/settings'}>{translate('settings')}</Link>,
      icon: <SettingOutlined />,
    },
  
  ];

  const items2 = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: <Link to={'/crm'}>{translate('dashboard')}</Link>,
    },
    {
      key: 'customer',
      icon: <CustomerServiceOutlined />,
      label: <Link to={'/customer'}>{translate('customers')}</Link>,
    },

    {
      key: 'invoice',
      icon: <ContainerOutlined />,
      label: <Link to={'/crm/invoice'}>{translate('invoices')}</Link>,
    },
    {
      key: 'quote',
      icon: <FileSyncOutlined />,
      label: <Link to={'/quote'}>{translate('quote')}</Link>,
    },
    {
      key: 'payment',
      icon: <CreditCardOutlined />,
      label: <Link to={'/payment'}>{translate('payments')}</Link>,
    },

    {
      key: 'paymentMode',
      label: <Link to={'/payment/mode'}>{translate('payments_mode')}</Link>,
      icon: <WalletOutlined />,
    },
    {
      key: 'taxes',
      label: <Link to={'/taxes'}>{translate('taxes')}</Link>,
      icon: <ShopOutlined />,
    },
  ]

  useEffect(() => {
    if (location)
      if (currentPath !== location.pathname) {
        if (location.pathname === '/') {
          setCurrentPath('dashboard');
        } else setCurrentPath(location.pathname.slice(1));
      }
  }, [location, currentPath]);

  useEffect(() => {
    if (isNavMenuClose) {
      setLogoApp(isNavMenuClose);
    }
    const timer = setTimeout(() => {
      if (!isNavMenuClose) {
        setLogoApp(isNavMenuClose);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [isNavMenuClose]);
  const onCollapse = () => {
    navMenu.collapse();
  };

  return (
    <Sider
      collapsible={collapsible}
      collapsed={collapsible ? isNavMenuClose : collapsible}
      onCollapse={onCollapse}
      className="navigation"
      width={256}
      style={{
        overflow: 'auto',
        height: '100vh',

        position: isMobile ? 'absolute' : 'relative',
        bottom: '20px',
        ...(!isMobile && {
          // border: 'none',
          ['left']: '20px',
          top: '20px',
          // borderRadius: '8px',
        }),
      }}
      theme={'light'}
    >
      <div
        className="logo"
        onClick={() => navigate('/')}
        style={{
          cursor: 'pointer',
        }}
      >
        <img src={logoIcon} alt="Logo" style={{ marginLeft: '-5px', height: '40px' }} />

       
      </div>
      <Menu
        items={isSpecificRoute ? items2 : items}
        mode="inline"
        theme={'light'}
        selectedKeys={[currentPath]}
        style={{
          width: 256,
        }}
      />
    </Sider>
  );
}

function MobileSidebar() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        type="text"
        size="large"
        onClick={showDrawer}
        className="mobile-sidebar-btn"
        style={{ ['marginLeft']: 25 }}
      >
        <MenuOutlined style={{ fontSize: 18 }} />
      </Button>
      <Drawer
        width={250}
        // style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}
        placement={'left'}
        closable={false}
        onClose={onClose}
        open={visible}
      >
        <Sidebar collapsible={false} isMobile={true} />
      </Drawer>
    </>
  );
}
