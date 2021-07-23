
$(function () {
 let productitem = $('#product-item')

 fetchproducts(function (products) {
     productitem.empty()
     for(product of products) {
         productitem.append(createcard(product))
     }
 })
})