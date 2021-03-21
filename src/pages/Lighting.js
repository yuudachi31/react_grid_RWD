import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import lighting from "../json/lighting.json"
import AppSider from "../components/NavBar";
const { Header, Content,Sider, Footer } = Layout;

function Lighting() {
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title="Lighting" />
      </Header>
      <Content className="layout-content">
        <ProductList products={lighting} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default Lighting;
