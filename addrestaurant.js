

function cart(){
    var name = document.getElementById('restaurantName').value
var description = document.getElementById('restaurantName').value
var dish = document.getElementById('dish').value
var price = document.getElementById('price').value

var addElement = {
    "restaurant" : [
        {
            "name": name,
            "dishName": dish,
            "description": description,
            "price": price
        }
    ]
}
var data = localStorage.getItem("restaurant")
var data1 = JSON.parse(data)

    localStorage.setItem("restaurant", JSON.stringify(addElement))
    var data = localStorage.getItem("restaurant")
    var data1 = JSON.parse(data)

    console.log(data1)
}

var submit = document.getElementById('submit')
submit.addEventListener('click', cart)