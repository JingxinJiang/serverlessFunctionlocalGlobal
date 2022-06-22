import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'
const url='/api/products?id='


const SingleProduct = () => {
    const {id}=useParams();
    console.log(id)
    const [loading,setLoading]=useState(true)
  const [products, setProducts]=useState({});
    const fetchData=async()=>{
        try {
            const {data}=await axios.get(`${url}${id}`);
        console.log(data.fields)
        setProducts(data)
        } catch (error) {
            
        }
        setLoading(false)
    }
   
    useEffect(()=>{
        fetchData();
    },[])
    if(loading){
        return <section className='section section-center'>
            <h2>loading...</h2>
        </section>
    }
    
    const {name,desc,price,image}=products.fields
    console.log(price)
  return (
    <section className='section section-center'>
        
               
        <NavLink to='/' className='link'>back home</NavLink>
        
        <div >
            {/* */}
            <div className="title">
                <h2>{name}</h2>
                <div className="title-underline"></div>
                <article className='single-product'>
                     <img className='single-product-img' src={image&&image[0].url} alt={name}/>
                     <div>
                        <h5>{name}</h5>
                        <h5 className='price'>${price}</h5>
                        <p>{desc}</p>
                    </div>
                </article>
                
                
            </div>
            </div>
            
    
       
    </section>
  )
}

export default SingleProduct