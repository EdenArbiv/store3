const { v4 } = require('uuid')



const products = [
    {
        name:"Milk",
        id:v4(),
        price:6,
        img:'https://www.tnuva.co.il/uploads/f_60754e74b82b7_1618300532.jpg',
        category:"Drinks"
    },
    {
        name:"Chocolate",
        id:v4(),
        price:13.7,
        img:'https://www.strauss-group.co.il/wp-content/blogs.dir/1/files/4243815_446px_RGB.jpg',
        category:"Food"
    },
    {
        name:"Bread",
        id:v4(),
        price:11,
        img:'https://www.einbar.co.il/wp-content/uploads/2020/09/%D7%9C%D7%97%D7%9D-%D7%90%D7%97%D7%99%D7%93-%D7%A4%D7%A8%D7%95%D7%A1-%D7%9C%D7%90%D7%AA%D7%A8.jpg',
        category:"Food"
    },
    {
        name:"Orange Juice",
        id:v4(),
        price:21,
        img:'https://m.pricez.co.il/ProductPictures/7290001045220.jpg',
        category:"Drinks"
    },
    {
        name:"Coca Cola",
        id:v4(),
        price:10,
        img:'https://i0.wp.com/all-world.news/wp-content/uploads/2019/07/img_20190714_180055_6823526501333661853308.jpg?fit=1024%2C1024&ssl=1',
        category:"Drinks"
    },
    {
        name:"Chips",
        id:v4(),
        price:7,
        img:'https://www.strauss-group.co.il/wp-content/blogs.dir/1/files/446x303-6.jpg',
        category:"Food"
    },
    {
        name:"Popcorn",
        id:v4(),
        price:16,
        img:'https://m.pricez.co.il/ProductPictures/7290010195275.jpg',
        category:"Food"
    },
    {
        name:"Peanut Butter",
        id:v4(),
        price:18,
        img:'https://alhamishkal.co.il/wp-content/uploads/2020/03/Cerem_hemat_botnim_crunch.jpg',
        category:"Food",

    },
]

const cart = []


module.exports = {products , cart}