import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import Nav from "../components/Nav"
function Home() {
  return (
    <div className="bg-color">
        <div className="container grid-container">
            <Header />
            <Nav />
            <ProductList />
            <Footer />
        </div>
    </div>
  );
}

export default Home;
