import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext';
const FoodItem = ({id,name,description,image,price}) => {
    const {addToCart,removeFromCart,cartItems}=useContext(StoreContext);



  return (
    <div className='food-item'>
        <div className="food-item-container">
            <div className="food-item-image">
                <img src={image} alt={name} />
            </div>
            {!cartItems[id]
                ?<img className='add' onClick={()=>{addToCart(id)}} src={assets.add_icon_white} alt="" />
                :<div className="food-item-counter">
                    <img onClick={()=>{removeFromCart(id)}} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>{addToCart(id)}} src={assets.add_icon_green} alt="" />
                </div>
            }
            <div className="food-item-info">
                <div className="food-item-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">₹{price}</p>
            </div>
        </div>
    </div>
  )
}

export default FoodItem