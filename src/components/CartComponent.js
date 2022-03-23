import {React} from 'react'
import { useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
// import { useNavigate } from 'react-router-dom';

const CartComponent = () => {

    const cartProducts = useSelector((state)=> state.cartProducts.products);

    // useEffect(()=>{
    //     console.log(cartProducts.length);
    // },[]);

  return (
    <div>
        {cartProducts.length===0 ? <div className="Message">No product in cart</div> :
            cartProducts.map((pro,id)=>{
                return(
                    <ProductComponent key={id} product={pro}/>
                )
            })
        }
    </div>
  )
}

export default CartComponent