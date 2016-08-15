$(document).ready(function(){
  $("form#shoppingList").submit(function(event){
    event.preventDefault();
    var shoppingList = [$("#item1").val(), $("#item2").val(), $("#item3").val()]

    var newList = shoppingList.map(function(shoppingItem){
      return shoppingItem.toUpperCase();

      });
      newList.sort()
      newList.forEach(function(shoppingItem){
        $("ul").append("<li>" + shoppingItem + "</li>")
      });
      alert(newList);
  });
});
