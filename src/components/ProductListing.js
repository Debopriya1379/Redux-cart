import {React,useEffect} from 'react'
import './productListing.css'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';
import Navbar from './Navbar';
import Header from './Header';

const ProductListing = () => {
    
    const dispatch = useDispatch();

    const fetchAllProducts = async()=> {
        const res = await axios
            .get("https://fakestoreapi.com/products",
            {headers: {
                'Access-Control-Allow-Origin' : 'true',
                'Content-Type': 'application/json'
            },
        })
            .catch((err)=>{
                console.log(err)
        });
        // console.log(res.data);
        dispatch(setProducts(res.data));
    }

    useEffect(()=>{
        fetchAllProducts();
    },[]);

    const products = useSelector((state)=> state.allProducts.products);

    return (
        <>
        <Header/>
        <Navbar/>
        <div className="message">
            <h4>Recommended for you</h4>
            <p>Based on search</p>
        </div>
        <div className='ProductListing'>
            {
                products.map((product)=>{
                    return(
                        <ProductComponent key={product.id} product={product}/>
                    )
                })
            }
        </div>
        </>
    )
}

export default ProductListing