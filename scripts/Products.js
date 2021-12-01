import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

//make a click event 
//get the id of the product
//narow it down to just the products id
//have a true and false of the product but cant get the id of the product
//using an if statment with the id.startsWith allows you filter the id of the product array
document.addEventListener("click",  clickEvent=>{
    const eventActivate=clickEvent.target;
if (eventActivate.id.startsWith('product--')){
    //show the id of the product
    const [,getIDPrduction]=eventActivate.id.split("--")
    //convert a string into a int
    const convertID=parseInt(getIDPrduction)
    //how to compair two id from the database array and the getIdProductarray
    //we use find but it cant use an array as a function.
    //then we need to create a function using the find 
   const compair=products.find((products)=>{
       return products.id===convertID
   })
    
   if(clickEvent){
   window.alert(`${compair.name} Costs ${compair.price}`)
   }
}
   

})