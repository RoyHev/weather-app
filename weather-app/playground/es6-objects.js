//Object property shorhand

const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: "Philadelphia"
}

console.log(user)


//Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// The goal of destructuring is to extract properties into individual variables.

// const { label: productLabel, price, stock, salePrice, rating = 5 } = product

// // console.log(label)
// console.log(productLabel)
// console.log(price)
// console.log(rating)


const transaction = (type, {label, stock}) =>{
    console.log(type, label, stock)

}

transaction("order", product)