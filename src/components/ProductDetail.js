import { useState } from "react";
import { Row, Col } from "antd";
import { Select } from 'antd';
import AddToCart from "./AddToCart"

const { Option } = Select;

function ProductDetail({ product }) {
   const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);
   const[spec,setSpec]=useState(product.specification[0])
console.log(product.specification)
   return (
      <Row gutter={[32, 32]}>
        <Col 
          lg={{ span: 8, offset: 2 }}
        >
         <img
            alt=""
            className="product-image"
            src={product.image}
         />           
        </Col>
        <Col 
          lg={{ span: 12 }}
        >
         <div className="product-info--detail">
            <h2 className="product-category">
               {product.category}
            </h2>
            <h1 className="product-name product-name--large">
               {product.name}
            </h1>
            <p className="product-description">{product.description_long}</p>
            <div className="product-price-wrap">
               <p className="product-price product-price--large">
                  US${product.price}.00
               </p>
               <div className="qty_all">
                  <div className="qty_left">
               <p className="product-status">
                  Status: {product.countInStock > 0 ? "In Stock" : "Unavailable."}
               </p>
               <p className="product-qty">
                  Qty: {"   "}
                  <Select 
                     defaultValue={qty} 
                     className="select-style"
                     onChange={val=>setQty(val)}
                  >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <Option key={x + 1} value={x + 1}>
                           {x + 1}
                        </Option>
                     ))} 
                  
                  </Select>
                 
               </p>
               
               <p className="product-qty">
                  Total Price: {product.price * qty}
               </p>   
               </div>  
               <div className="qty_right">
               <p className="product-qty">
               specification:{"   "}
               <Select 
                     defaultValue={product.specification[0]} 
                     className="select-style"
                     onChange={val=>setSpec(val)}
                  >
                  {
                       product.specification.map((x) => (
                        <Option  value={x }>
                           {x }
                        </Option>
                       ))
                     }
                     </Select>
               </p> 
                  </div> 
               </div>         
               <AddToCart />
            </div>
         </div>           
        </Col>
      </Row>
   );
}

export default ProductDetail;