import React, {useEffect, useState} from 'react'
import axios from 'axios'
import SingleProduct from './SingleProduct'
import { NavLink, Link } from 'react-router-dom'
const url='/api/products/'

const Airtable = () => {
    const [products, setProducts]=useState([]);
    const fetchData=async()=>{
        const {data}=await axios.get(url);
        console.log(data)
        setProducts(data)
    }
    const handleClick=()=>{
        return <SingleProduct/>
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <section className='section section-center'>
        <div className="title">
           <h2>Airtable setup</h2> 
           <div className="title-underline"></div>
        </div>
        <div className="products">        
        {products.map((product)=>{
            console.log(product)
            const {id, url,price,name}=product;
            return (<NavLink to={`${id}`}><article className='product' key={id}>
            <img src={url} alt={name}/>
            <div className="info">
                <h5>{name}</h5>
                <h5 className='price'>${price}</h5>
                
            </div>

            </article></NavLink>)
        })}
        </div>
    </section>
  )
}

export default Airtable