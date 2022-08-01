import {React,useEffect} from 'react'
import './productDetails.css'
import axios from 'axios'
import {useParams,Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProducts, removeSelectedProduct, addToCart } from '../redux/actions/productActions'

const ProductDetails = () => {

  const {productId} = useParams();
  let product = useSelector((state)=> state.product);
  const dispatch = useDispatch();
    
  const fetchProductDetails = async(id)=>{
    const res = await axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .catch((err)=>{
      console.log(err)
    });
    dispatch(selectedProducts(res.data));
  };

  const addCart =(product)=>{
    // console.log(product);
    dispatch(addToCart(product));
  }

  useEffect(()=>{
    if(productId && productId !== "")
      fetchProductDetails(productId);
      // console.log(product);
    return ()=>{
      dispatch(removeSelectedProduct());
    }
  },[productId]);

  return (
    <div className='ProductDetails'>
        {
          Object.keys(product).length === 0 ? (
            <div>...loading</div>
          ) : (
            <div className="Product">
              {/* <span className='add_To_Cart_button' onClick={()=>{addCart({product})}}>ADD</span> */}
              <div className="product_image">
                <img src={product.image} alt="product" />
              </div>
              <div className="product_details_all">
                <div className="name_and_price">
                  <p>{product.title}</p>
                  <h4>${product.price}</h4>
                </div>
                <div className="color_and_size">
                  <div className="size">
                    <h5>select size</h5>
                    <div className="size_options">
                      <input type="radio" className='radio1' name="size" id="7" />
                      <label htmlFor="7" className='sizeOptions'>7</label>
                      <input type="radio" className='radio1' name="size" id="8" />
                      <label htmlFor="8" className='sizeOptions'>8</label>
                      <input type="radio" className='radio1' name="size" id="9" />
                      <label htmlFor="9" className='sizeOptions'>9</label>
                    </div>
                  </div>
                  <div className="color">
                    <input type="radio" className='radio2' name="color" id="black" />
                    <label htmlFor="black" className='colorOptions Black'>Black</label>
                    <input type="radio" className='radio2' name="color" id="grey" />
                    <label htmlFor="grey" className='colorOptions Grey'>Grey</label>
                    <input type="radio" className='radio2' name="color" id="blue" />
                    <label htmlFor="blue" className='colorOptions Blue'>Blue</label>
                  </div>
                </div>
                <div className="desc_and_review">
                  <h5>Description</h5>
                  <p>{product.description}</p>
                </div>
                <div className="cart_button">
                  <button onClick={()=>{addCart({product})}}>Add to Cart</button>
                  <Link to={'/cart'}>
                    <button>View Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          )
        }
    </div>
  )
}

export default ProductDetails