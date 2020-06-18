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
            "dishName": "Pineapple Cake",
            "description": "Bakery",
            "price": "300.00"
        },
        {
            "name": "wenger's",
            "dishName": "Black Forest Cake",
            "description": "Bakery",
            "price": "350.00"
        },
        {
            "name": "wenger's",
            "dishName": "Truffle Cake",
            "description": "Bakery",
            "price": "400.00"
        },
        {
            "name": "wenger's",
            "dishName": "Fondant Cake",
            "description": "Bakery",
            "price": "1400.00"
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
        card.style.maxHeight= "400px"

        var cardHead = document.createElement('div')
        cardHead.setAttribute('class', 'card-header bg-success text-white')

        var headerText = document.createElement('h5')
        headerText.textContent = data1["restaurant"][i]["name"]

        // var img = document.createElement('img')
        // img.setAttribute("class", 'card-img-top img-fluid')
        // img.src = data1["restaurant"][i]["imgurl"]

        var cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'card-body')

        var cardTittle = document.createElement('h5')
        cardTittle.setAttribute('class', 'card-tittle')
        cardTittle.textContent = data1["restaurant"][i]["dishName"]

        var cardText = document.createElement('p')
        cardText.setAttribute('class', 'card-text text-muted mb-2')
        cardText.textContent = data1["restaurant"][i]["description"]

        var amount = document.createElement('p')
        amount.textContent ="Rs." + " " + data1["restaurant"][i]["price"]

        var order = document.createElement('a')
        order.setAttribute('class', 'btn btn-primary text-white')
        order.textContent = "Order Now"
        order.addEventListener('click', function(){

        })

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

{/* <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header bg-info">
      <h5 class="modal-title" id="exampleModalLabel">Log-in</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form>
        <div class="form-group">
          <label for="recipient-name" class="col-form-label">Username</label>
          <input type="text" class="form-control" id="recipient-name">
        </div>
        <div class="form-group">
          <label for="message-text" class="col-form-label">Password</label>
          <input type="password" class="form-control" id="message-text">
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Signup</button>
      <button type="button" class="btn btn-primary">Login</button>
    </div>
  </div>
</div>
</div> */}