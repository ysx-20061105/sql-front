import {
  BugOutlined,
  GithubOutlined,
  SketchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';
import './index.less';

/**
 * 全局 Footer
 */
const GlobalFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      className="default-footer"
      copyright={`${currentYear} `}
      links={[
        {
          key: 'master',
          title: (
            <>
              <UserOutlined /> sql模拟数据生成器
            </>
          ),
          href: '/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> github
            </>
          ),
          href: 'https://github.com/ahs-0/sql-front',
          blankTarget: true,
        },
        {
          key: 'feedback',
          title: (
            <>
              <BugOutlined /> 建议反馈
            </>
          ),
          href: '/',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default GlobalFooter;
