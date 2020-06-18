var ele ={
    "restaurant" : [
        {
            "name": "Delhi-6",
            "dishName": "Dosa",
            "description": "A special South indian dish.",
            "price": "299.00"
        },
        {
            "name": "Delhi-6",
            "dishName": "Soya Biryani",
            "description": "Hyderabadi Dum Biryanis",
            "price": "219.00"
        },
        {
            "name": "Delhi-6",
            "dishName": "Gulab Jamun",
            "description": "Delicious Sweet",
            "price": "35.00"
        },
        {
            "name": "Delhi-6",
            "dishName": "Masala Shikanji",
            "description": "Lemonade with Masalas",
            "price": "89.00"
        },
        {
            "name": "wenger's",
            "dishName": "cake",
            "price": "899.00"
        }
    ]
}


localStorage.setItem("restaurant", JSON.stringify(ele))

var data = localStorage.getItem("restaurant")
var data1 = JSON.parse(data)

console.log(data1["restaurant"].length)
// window.addEventListener('load', appendcard)
var btn = document.getElementById('searchbtn')
btn.addEventListener('click', appendcard)

function appendcard(){
    var searchBar =document.getElementById('search').value

    for(var i=0; i<data1["restaurant"].length; i++){
        if(searchBar ==data1["restaurant"][i]["name"]){
            var addcard = document.getElementById('addcard')
        var col = document.createElement('div')
        col.setAttribute('class', 'col-3')

        var card = document.createElement('div')
        card.setAttribute('class', 'card')

        var cardHead = document.createElement('div')
        cardHead.setAttribute('class', 'card-header bg-success text-white')

        var headerText = document.createElement('h5')
        headerText.textContent = data1["restaurant"][i]["name"]

        var cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'card-body')

        var cardTittle = document.createElement('h5')
        cardTittle.setAttribute('class', 'card-tittle')
        cardTittle.textContent = data1["restaurant"][i]["dishName"]

        var cardText = document.createElement('p')
        cardText.setAttribute('class', 'card-text text-muted mb-2')
        cardText.textContent = data1["restaurant"][i]["description"]

        var amount = document.createElement('p')
        amount.textContent = data1["restaurant"][i]["price"]

        var order = document.createElement('a')
        order.setAttribute('class', 'btn btn-primary text-white')
        order.textContent = "Order Now"
        order.addEventListener('click', thank)

        cardBody.append(cardTittle, cardText, amount, order)
        cardHead.append(headerText)
        card.append(cardHead, cardBody)
        col.append(card)
        addcard.append(col)

        }
    }

}

function thank(){
    var front = document.getElementById('front')
    front.innerHTML = ""

    var h1 = document.createElement('h1')
    h1.style.marginTop = "200px"
    h1.innerText = "thank you"

    front.append(h1)
}