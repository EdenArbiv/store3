import React from 'react';
import Avatar from '@mui/material/Avatar';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';



  export default function ItemCart({item, deletefromcart , AddToCart}) {



    console.log(item)
    return (
        <div className='row'>
               <Avatar alt="Remy Sharp" src={item.img} className='hover' />
            <h4 className='hover'>{item.name}</h4>
            <h4 className='hover'>{item.price}$</h4>
           
            <h4 className='hover'>amount: {item.qty}</h4>
            <AddCircleIcon onClick={()=>AddToCart(item.name)} className='hover'/><RemoveCircleIcon onClick={()=>deletefromcart(item.name)} className='hover'/>
            
        </div>
    )
}
