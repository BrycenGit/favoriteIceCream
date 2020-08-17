$(document).ready(function() {
  
  const favoriteIceCream = ["pistacio", "cheesecake", "cherry", "salted caramel"];

  favoriteIceCream.forEach(function(iceCream) {
    let flavorsILike = "I Like ";
    flavorsILike = flavorsILike.concat(" " + iceCream + " IceCream!");
    console.log(flavorsILike);
  
  // $("#iceCreams").append(flavorsILike);
  $("#iceCreams").append("<li>" + flavorsILike + "</li>");
  // alert(flavorsILike);
  });

  
});