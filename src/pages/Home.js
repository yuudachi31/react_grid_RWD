import { Layout } from 'antd';
import { useState } from "react";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";
import AppSider from "../components/NavBar";
import BurgerBtn from "../components/burgerBtn";
const { Header, Content,Sider, Footer } = Layout;



function Home() {
  const[isOnTouch,setisOnTouch]=useState(false);
  return (
    <Layout>
      
      <Sider className="layout-sider" width="15vw" >
        <BurgerBtn isOnTouch={isOnTouch}
        setisOnTouch={setisOnTouch}
        ></BurgerBtn>
<AppSider isOnTouch={isOnTouch}></AppSider>
      </Sider>
    <Layout className={`container main-layout ${isOnTouch?"main-layout-left":" "}`}>
      <Header className="layout-header">
        <AppHeader title="NORDIC NEST Shopping Cart"/>
      </Header>
      <Content className="layout-content">
        <ProductList products={products}/>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
    </Layout>
  );
}

export default Home;
