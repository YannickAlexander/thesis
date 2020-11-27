import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import { AppHeader } from './components/common/Header';
import { AppHome } from './views/Home';
import { AppFooter } from './components/common/Footer';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
    <Header>
      <AppHeader />
    </Header>
    <Content>
      <AppHome/>
    </Content>
    <Footer>
      <AppFooter />
    </Footer>
  </Layout>
  );
}

export default App;
