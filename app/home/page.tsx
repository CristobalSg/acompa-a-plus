import React from 'react';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';

import "../../styles/HomePage.css"
import GridComponent from '@/components/GridComponent';

export default function HomePage() {
  return (
    <div style={{ padding: '20px' }} >
      <Breadcrumb
        style={{marginBottom: '20px', marginLeft: '10px' }}  // Modificar márgenes
        items={[
          {
            href: '/',
            title: <HomeOutlined />,
          },
          {
            href: '/home',
            title: (
              <>
                <UserOutlined />
                <span>Actividades</span>
              </>
            ),
          },
          {
            title: '',
          },
        ]}
      />
      
      <GridComponent/>

    </div>
  );
}
