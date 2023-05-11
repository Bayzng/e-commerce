import React, { useState } from 'react'

import shades from '../../Assets/tdd-removebg-preview.png'
import { productData } from '../../data/product'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import './Product.css'
// import '../Slider/Slider.css'


const Product = () => {

    const [parent] = useAutoAnimate()

    const [ menuProduct, setMenuProduct ] = useState(productData)

    const filter = (type) => {
        setMenuProduct(productData.filter((product)=>product.type === type))
    }

  return (
    <div className="containers">
        <img src={shades} alt="" className='cont' />
        <h1>Our Featured <span>Products</span></h1>

        <div className="products">
            <ul className='menus'>
                <li onClick={() =>setMenuProduct(productData)}>All</li>
                <li onClick={() =>filter('Skills')}>Skin Care</li>
                <li onClick={() =>filter('conditional')}>Conditionals</li>
                <li onClick={() => filter ('foundation')}>Foundations</li>
            </ul>

            <div className="lists" ref={parent}>
                {
                    menuProduct.map((product, i) => {
                        return (
                            <div className="product">
                                <div className="lefty">
                                    <div className="names">
                                        <span>{product.name}</span>
                                        <span>{product.details}</span>
                                    </div>
                                    <span>#{product.price}</span>
                                    <div>Shop Now</div>
                                </div>
                                <img src={product.img} alt="" className='img-pro' />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Product