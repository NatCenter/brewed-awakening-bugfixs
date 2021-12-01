import { getEmployees } from "./database.js"
//get the data from the database from database

import { getOrders } from "./database.js"
const employees = getEmployees()
const orders= getOrders()
export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${ employee.name}</li>`
    }

    html += "</ul>"

    return html
}

//get the product data

//for(const order of orders){
    //order.id;
//}

document.addEventListener("click",Event =>{
    //get the id of the employee
    const IdofEmployee=Event.target
    //narrow that it only affects the employee box
    //using an if statement
    //the if statment is working but it is also getting the id of the products
    //need to narrow it down even more to just target the id of the employee  by using the startwith

    if(IdofEmployee.id.startsWith("employee--")){
        //got the id of the employee now we need to split the -- to get the int of the id

        //split the idOfEmployee into an array
        const [,arrayEmployee]=IdofEmployee.id.split("--")

        // convert the arrayEmployee to an int
        const convertEmployee=parseInt(arrayEmployee)
        

        //need to show the name of the employee
        //we can do an for loop or a find()

        const find=employees.find(employee=>{
           return employee.id===convertEmployee

        })
        //filter through the order database. 
        const filter=orders.filter(order=>{
                return find.id===order.employeeId
        })
        // got the name of the employee and now need to get the amount of products they sold
        if(IdofEmployee){
        window.alert(`${find.name} sold ${filter.length} products  `)
        }

    }
    
})


