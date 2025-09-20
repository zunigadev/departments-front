import { type PropsWithChildren } from 'react';
import { Layout } from 'antd';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import { Navbar } from '../Navbar/Navbar';
import './Layout.less';
import { Outlet } from 'react-router-dom';

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <Layout className="app-layout">
      <Navbar />
      <ContentWrapper>{children || <Outlet />}</ContentWrapper>
    </Layout>
  );
};

export default AppLayout;
