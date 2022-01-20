import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function AddProd({setprodArr}) {

    const navigate = useNavigate()

    const [name, setname] = useState("")
    const [price, setprice] = useState(0)
    const [category, setcategory] = useState("")
    const [img, setimg] = useState("")

    const handleClick = async () => {
        const res = await fetch('http://localhost:1000/addprod',{
            method: "post",
            headers: {'content-type':'application/json'},
            body:JSON.stringify({name, price, category, img}),
            credentials:"include"
        })
        const data = await res.json()
        alert(data.msg)
        navigate('/')
        setprodArr(data.products)
    }

    return (
        <div className='addprod'>
            <h3>Add new Product ↡</h3>
            <input type="text" placeholder='Enter Name' onChange={e=>setname(e.target.value)} />
            <input type="text" placeholder='Enter Price' onChange={e=>setprice(e.target.value)} />
            <input type="text" placeholder='Enter Category' onChange={e=>setcategory(e.target.value)} />
            <input type="text" placeholder='Enter Img URL' onChange={e=>setimg(e.target.value)} />
            <button onClick={handleClick}>Add Product</button>
        </div>
    )
}
