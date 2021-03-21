import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import furniture from "../json/furniture.json"
import AppSider from "../components/NavBar";
const { Header, Content,Sider, Footer } = Layout;

function Furniture() {
  return (
    <Layout>
    <Sider>
<AppSider></AppSider>
    </Sider>
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title="Furniture" />
      </Header>
      <Content className="layout-content">
        <ProductList products={furniture}/>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
    </Layout>
  );
}

export default Furniture;
