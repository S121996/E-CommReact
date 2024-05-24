import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'

const ShopCategory = (props) => {
   const {all_product} =useContext(ShopContext)

  return (
    <div className='shop-Category'>
       <img src={props.banner}/>
    </div>
  )
}

export default ShopCategory