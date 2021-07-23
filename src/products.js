$(function () {
   let ProductName = $('.Product-Name')
   let ProductManufacturer = $('.Product-Manufacturer')
   let ProductPrice = $('.Product-Price')

   $('#AddProduct').click(function () {
       AddProduct(
           ProductName.val(),
           ProductManufacturer.val(),
           ProductPrice.val(),
           function(finishedproduct) {
               window.alert("Added " + finishedproduct.name + " to Database")
           }
       )
   })
})