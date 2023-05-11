import React from 'react'
import { RiShoppingBagFill } from 'react-icons/ri'
import { AiOutlineArrowRight } from 'react-icons/ai'
import heroImage from '../../Assets/girl-removebg-preview.png'
import './Home.css'


const Home = () => {
  return (
    <div className='container'>
        {/* left side*/}
        <div className="h_side">
            <span className='text1'>Skin Protection Cream</span>


            <div className="text2">
                <span className='trendy'>Trendy <span className='colt'>Collection</span></span>
                <span>Welcome to Dlt-Africa ecommerce website for fashioning and beauty.</span>
            </div>
        </div>

        {/* middle side*/}
        <div className="wrapper">
            <div className="bluecircle"></div>
                <img src={heroImage} alt="" width={60} />
                <div className="cart2">
                    <RiShoppingBagFill/>

                    <div className="sighup">
                        <span>Best SignUp Offers</span>

                        <div>
                            <AiOutlineArrowRight/>
                        </div>
                    </div>
                </div>
        </div>

        {/* middle side*/}
        <div className="h_side">
            <div className="traffic">
                <span>1.5<span className='colt'>M</span></span>
                <span>Montly Traffic</span>
            </div>

            <div className="customer">
                <span>100k</span>
                <span>Happy Customer</span>
            </div>
        </div>



    </div>
  )
}

export default Home