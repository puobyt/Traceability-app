import GateEntry from '@/pages/GateEntry';
import VendorManagement from '@/pages/VendorManagement'
import PurchaseOrderCreation from'@/pages/PurchaseOrderCreation'
import CurrentStock from'@/pages/CurrentStock'
import QualityCheck from'@/pages/QualityCheck'

import ProductionOrderCreation from'@/pages/ProductionOrderCreation'
import RequestCreationForMaterials from'@/pages/RequestCreationForMaterials'
import MaterialAssignment from'@/pages/MaterialAssignment'
import BillOfMaterials from'@/pages/BillOfMaterials'
import FinalQualityInspection from'@/pages/FinalQualityInspection'
import FinishedGoods from'@/pages/FinishedGoods'
import InvoiceCreation from'@/pages/InvoiceCreation'
import { lazy } from 'react';

import { Navigate } from 'react-router-dom';
import Rework from '@/pages/Rework';

const Logout = lazy(() => import('@/pages/Logout.jsx'));
const NotFound = lazy(() => import('@/pages/NotFound.jsx'));

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Customer = lazy(() => import('@/pages/Customer'));
const Invoice = lazy(() => import('@/pages/Invoice'));
const InvoiceCreate = lazy(() => import('@/pages/Invoice/InvoiceCreate'));

const InvoiceRead = lazy(() => import('@/pages/Invoice/InvoiceRead'));
const InvoiceUpdate = lazy(() => import('@/pages/Invoice/InvoiceUpdate'));
const InvoiceRecordPayment = lazy(() => import('@/pages/Invoice/InvoiceRecordPayment'));
const Quote = lazy(() => import('@/pages/Quote/index'));
const QuoteCreate = lazy(() => import('@/pages/Quote/QuoteCreate'));
const QuoteRead = lazy(() => import('@/pages/Quote/QuoteRead'));
const QuoteUpdate = lazy(() => import('@/pages/Quote/QuoteUpdate'));
const Payment = lazy(() => import('@/pages/Payment/index'));
const PaymentRead = lazy(() => import('@/pages/Payment/PaymentRead'));
const PaymentUpdate = lazy(() => import('@/pages/Payment/PaymentUpdate'));

const Settings = lazy(() => import('@/pages/Settings/Settings'));
const PaymentMode = lazy(() => import('@/pages/PaymentMode'));
const Taxes = lazy(() => import('@/pages/Taxes'));

const Profile = lazy(() => import('@/pages/Profile'));

const About = lazy(() => import('@/pages/About'));

let routes = {
  expense: [],
  default: [
    {
      path: '/login',
      element: <Navigate to="/" />,
    },
    {
      path: '/logout',
      element: <Logout />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/',
      element: <Dashboard />,
    },
    {
      path: '/crm',
      element: <Dashboard />,
    },
    {
      path: '/customer',
      element: <Customer />,
    },

    {
      path: '/crm/invoice',
      element: <Invoice />,
    },
    {
      path: '/crm/invoice/create',
      element: <InvoiceCreate />,
    },
    {
      path: '/crm/invoice/read/:id',
      element: <InvoiceRead />,
    },
    {
      path: '/crm/invoice/update/:id',
      element: <InvoiceUpdate />,
    },
    {
      path: '/crm/invoice/pay/:id',
      element: <InvoiceRecordPayment />,
    },
    {
      path: '/quote',
      element: <Quote />,
    },
    {
      path: '/quote/create',
      element: <QuoteCreate />,
    },
    {
      path: '/quote/read/:id',
      element: <QuoteRead />,
    },
    {
      path: '/quote/update/:id',
      element: <QuoteUpdate />,
    },
    {
      path: '/payment',
      element: <Payment />,
    },
    {
      path: '/payment/read/:id',
      element: <PaymentRead />,
    },
    {
      path: '/payment/update/:id',
      element: <PaymentUpdate />,
    },

    {
      path: '/settings',
      element: <Settings />,
    },
    {
      path: '/settings/edit/:settingsKey',
      element: <Settings />,
    },
    {
      path: '/payment/mode',
      element: <PaymentMode />,
    },
    {
      path: '/taxes',
      element: <Taxes />,
    },

    {
      path: '/profile',
      element: <Profile />,
    },
    {
      path: '/vendor-management',
      element: <VendorManagement />,
    },
    {
      path: '/purchase-order-creation',
      element: <PurchaseOrderCreation />,
    },
    {
      path: '/gate-entry',
      element: <GateEntry />,
    },
    {
      path: '/current-stock',
      element: <CurrentStock />,
    },
    {
      path: '/quality-check',
      element: <QualityCheck />,
    },
    {
      path: '/rework',
      element: <Rework />,
    },
    {
      path: '/production-order-creation',
      element: <ProductionOrderCreation />,
    },
    {
      path: '/request-creation-for-materials',
      element: <RequestCreationForMaterials />,
    },
    {
      path: '/material-assignment',
      element: <MaterialAssignment />,
    },
    {
      path: '/bill-of-materials',
      element: <BillOfMaterials />,
    },
    {
      path: '/final-quality-inspection',
      element: <FinalQualityInspection />,
    },
    {
      path: '/finished-goods',
      element: <FinishedGoods />,
    },
    {
      path: '/invoice-creation',
      element: <InvoiceCreation />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
};

export default routes;
