const initState = {
    products:[
      {name:'Beats Headphone blue',price: 125 ,source:'./Products/beats headphones.jpg', id:1},
      {name:'Beats Headphone red',price: 150 ,source:'./Products/beats red headphones.jpg', id:2},
      {name:'Sony Headphone extra bass',price: 200 ,source:'./Products/sony headphones extra bass.jpg', id:3},
      {name:'Sony Headphones',price: 125 ,source:'./Products/sony headphones.jpg', id:10},
      {name:'Jordan White Shoes',price: 179 ,source:'./Products/jordan white shoes.jpg', id:9},
      {name:'ENKO Running Shoes',price: 159 ,source:'./Products/ENKO running shoes.jpg', id:14},
      {name:'Blue Shoes',price: 89 ,source:'./Products/blue-shoes.jpg', id:11},
      {name:'Nike Red Shoes',price: 99 ,source:'./Products/nike red.jpeg', id:12},
      {name:'Leather Shoes',price: 99 ,source:'./Products/leather shoes.jpeg', id:13},
      {name:'s9 Strip Cover',price: 20 ,source:'./Products/s9 strip cover.png', id:6},
      {name:'iphone case',price: 40 ,source:'./Products/iphone case.jpg', id:7},
      {name:'iphone xs 64GB', price: 1379, source:'./Products/iphone xs.jpg',id:8 },
      {name:'Samsung S8 64GB', price: 849, source:'./Products/samsung-galaxy-s8-64gb.jpg',id:15 },
      {name:'Adidas Cover Samsung s8', price: 39, source:'./Products/adidas cover samsung s8.jpg',id:16 },
      {name:'Huawei P20 Pro', price: 1049, source:'./Products/Huawei P20 Pro.jpg',id:24 },
      {name:'Womens t-shirt green',price: 125 ,source:'./Products/women tshirt 1.jpg', id:5},
      {name:'Womens Puma t-shirt',price: 24 ,source:'./Products/women tshirt 3.jpg', id:19},
      {name:'Womens White t-shirt',price: 35 ,source:'./Products/women tshirt 4.jpg', id:20},
      {name:'Womens Casual t-shirt',price: 29 ,source:'./Products/women tshirt 2.jpg', id:21},
      {name:'Navy Floral dress',price: 59 ,source:'./Products/Navy Floral smock-waist dress.jpg', id:23},
      {name:'Mens t-shirt blue',price: 40 ,source:'./Products/MyDadIsMyHero-Tshirt-01.jpg', id:4},
      {name:'Mens Canada t-shirt',price: 15 ,source:'./Products/mens canada tshirt.jpg', id:18},
      {name:'Mens Fancy t-shirt',price: 15 ,source:'./Products/men-s-fancy-t-shirt.jpg', id:22},
      {name:'Mens Shirt blue',price: 55 ,source:'./Products/Dress-Shirts-Fashion-Men-Shirt-Social-Office-Blue-Solid-Style-Design-Camisa-Masculina-Full-Sleeve-Brand.jpg', id:17},
    ],
  myCart:[]
}


const rootReducer = (state = initState, action) => {
  if(action.type ==="ADD_PRODUCT"){
    return{
      ...state,
      myCart:[...state.myCart,action.myCart]
    }
  }else if (action.type === "DELETE_PRODUCT") {
    let newCart = state.myCart.filter(product => {
      return action.id !== product.uniqid
    })
    return {
      ...state,
      myCart: newCart

    }
  }else if (action.type === "DELETE_ALL") {

    return{
      ...state,
      myCart:[]
    }
  }

  return state;
}

export default rootReducer;
