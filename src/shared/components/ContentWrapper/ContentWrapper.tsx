import React, { type PropsWithChildren } from 'react';
import { Layout } from 'antd';
import './ContentWrapper.less';

const { Content } = Layout;

const ContentWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <Content className="content-wrapper">{children}</Content>;
};

export default ContentWrapper;
