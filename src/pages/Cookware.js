import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import cookware from "../json/cookware.json";
import AppSider from "../components/NavBar";
const { Header, Content, Sider,Footer } = Layout;

function Cookware() {
  return (
    <Layout>
    <Sider>
<AppSider></AppSider>
    </Sider>
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title="Cookware" />
      </Header>
      <Content className="layout-content">
        <ProductList products={cookware}/>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
    </Layout>
  );
}

export default Cookware;
