import {React} from 'react'
import { Link } from 'react-router-dom'
import './productComponent.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/productActions'

const ProductComponent = ({product}) => {

  const dispatch = useDispatch();


  const addCart =(product)=>{
    // console.log(product);
    dispatch(addToCart(product));
  }

  return (
    <div className='ProductComponent'>
        <span className='add_To_Cart_button' onClick={()=>{addCart({product})}}>C</span>
        <Link to={`/product/${product.id}`}>
        <div className="product_image">
            <img src={product.image} alt="product" />
        </div>
        </Link>
        <div className="product_details">
            <p>{product.title.substr(0,20)}</p>
            <h4>${product.price}</h4>
        </div>
    </div>
  )
}

export default ProductComponent