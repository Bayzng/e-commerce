import React from 'react';
import './Virtual.css';
import shades from '../../Assets/shades-removebg-preview (1).png';
import ReactCompareImage from 'react-compare-image';
import after from '../../Assets/beauty-2.jpeg';
import before from '../../Assets/beauty11.avif';



const Virtual = () => {
  return (
    <div className='virtual'>
        <div className="left">
            <span>Virtual Try-On</span>
            <span>Never Buy The Wrong Shade Again</span>
            <span>Try-Now</span>
            <img src={shades} alt="" />
        </div>

        <div className="right">
            <div className="compare">
                <ReactCompareImage leftImage={before} rightImage={after}/>
            </div>
        </div>
    </div>
  )
}

export default Virtual