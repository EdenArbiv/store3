const express = require('express')
const cors = require('cors')
let {products , cart} = require('./db')
const { v4 } = require('uuid')


const app = express()
app.use(express.json())

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))

app.get('/products', (req,res)=>{
    res.send(products)
    
})

app.post('/products', (req,res)=>{
    const { inp } = req.body
    if(inp){
        let product = products.filter(p=> p.name.toLowerCase().includes(inp))
        return res.send(product)
    }else{
        return res.send(products)
    }
    
})


app.post('/addprod', (req,res)=>{
    const { name , price , category, img } = req.body

    if(!name || !price || !category || !img){
        return res.status(400).send({msg:"missing some info"})
    }
    
    products.push({
        name,
        id:v4(),
        price,
        img,
        category
    })
    res.send({msg:'product added!',products})
})


app.post('/cart', (req,res)=>{
    const { itemname } = req.body

    let product = products.find(p=> p.name == itemname)

    if(!product){
        return res.status(400).send({msg:'product not found'})
    }

    if(product){
        let exist = cart.find(p=> p.name == product.name)
        if(exist){
            return res.send(cart = cart.map(x=> x.name == product.name? {...exist, qty:exist.qty+1}: x))
            
        }else{
            cart.push({
        id:product.id,
        img:product.img,
        name:product.name,
        price:product.price,
        qty:1
        })
        }
    }
 
    res.send(cart)
})


app.get('/cart', (req,res)=>{

    res.send(cart)
})

app.delete('/cart', (req,res)=>{
    const { itemname } = req.body
    let product = products.find(p=> p.name == itemname)

    if(!product){
        return res.status(400).send({msg:'product not found'})
    }
  
    const exist = cart.find(x => x.name === product.name)
    if(exist.qty == 1){
      return res.send(cart = cart.filter(x=> x.name !== product.name))
    }else{
        return res.send(cart = cart.map(x=> x.name == product.name? {...exist, qty:exist.qty-1}: x))
    }
    
})
  



app.listen(1000, ()=> console.log("rockin1000"))