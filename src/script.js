
function fetchproducts(alldone) {
    $.get('/routes/products' , function (data) {
      alldone(data)
    })
}

function AddProduct(name, manufacturer, price, done) {
   $.post('/routes/products', {
       name: name,
       manufacturer: manufacturer,
       price: price,
   }, function (data) {
       done(data)
   }
   )
}

function createcard() {
    return(`
        <div class="col-5 card p-3 mx-3" style="text-align: center;">
            <h4 class="name-product">${product.name}</h4>
            <div class="manufacturer-brand">${product.manufacturer}</div>
            <br>
        <div class="row">
            <div class="col p-3">
            <b>Rs. ${product.price}</b>
            </div>
            <button class="col btn btn-outline-info mx-3 m-2">Buy</button>
        </div>`
    )
}