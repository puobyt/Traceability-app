import { Avatar, Popover, Button, Badge, Col, List } from 'antd';

// import Notifications from '@/components/Notification';

import { RocketOutlined } from '@ant-design/icons';

import useLanguage from '@/locale/useLanguage';
import { useNavigate } from 'react-router-dom';

export default function UpgradeButton() {
  const translate = useLanguage();
  const navigate = useNavigate()
  return (
    <Badge count={null} size="small">
      <Button
      onClick={()=>navigate('/crm')}
        type="primary"
        style={{
          float: 'right',
          marginTop: '5px',
          cursor: 'pointer',
          background: '#16923e',
          boxShadow: '0 2px 0 rgb(82 196 26 / 20%)',
        }}
        
        
      >
        {translate('CRM')}
      </Button>
    </Badge>
  );
}


