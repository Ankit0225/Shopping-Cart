
function fetchproducts(alldone) {
    $.get('/routes/products' , function (data) {
      alldone(data)
    })
}


$(function () {
    let product = $('#product')
})