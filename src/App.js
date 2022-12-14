import React from 'react'

import {Layout} from 'antd';
import LayoutFooter from './components/layout-components/LayoutFooter';
import LayoutHeader from './components/layout-components/LayoutHeader';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes/routes';

const { Header, Content, Footer } = Layout;


function App() {
  return (<>

    <Layout className="layout">
      <LayoutHeader />

      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Routes>

              {
                routes.map((item) => <Route path={item.path} element={item.element}></Route>)
              }
          </Routes>
        </div>
      </Content>

      <LayoutFooter />
    </Layout>

  </>)
}

export default App