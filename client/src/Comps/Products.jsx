import React from 'react'
import CardPro from './CardPro'


export default function Products({prodArr, setcart, setamount,  amount , AddToCart}) {

  

    return (
        <div className='cards'>
        {
            prodArr && prodArr.map(prod => <CardPro prod={prod} setcart={setcart} setamount={setamount}  amount={amount} AddToCart={AddToCart}/>)
        }
        </div>
    )
          
    
}