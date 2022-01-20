import React from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ItemCart from './ItemCart';

export default function Cart({setcart, cart, deletefromcart ,AddToCart, total}) {

    
    return (
    
        <div className='cart'>
        <ShoppingBagIcon/>  <h3>Shopping Cart</h3>
        <br />
          {
            cart && cart.map(item=> <ItemCart item={item} setcart={setcart} cart={cart} AddToCart={AddToCart} deletefromcart={deletefromcart} />)
            
          }
          <br />
            <h3>The Total Price:</h3>
            <h4>{total}$</h4>
               

        </div>
    )
}
