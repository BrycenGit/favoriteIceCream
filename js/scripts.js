$(document).ready(function() {
  
  // let favoriteIceCream = ["pistacio", "cheesecake", "cherry", "salted caramel"];

  // favoriteIceCream.forEach(function(iceCream) {
  let flavorsILike = "I Like ";
  let favoriteIceCream = ["pistacio", "cheesecake", "cherry", "salted caramel"];
    for (let index = 0; index < favoriteIceCream.length; index +=1) {
      //flavorsILike = flavorsILike.concat(" " + favoriteIceCream[index] + " icecream!");
      $("#iceCreams").append("<li>I Like " + favoriteIceCream[index] + "!</li>");
    }
    // flavorsILike = flavorsILike.concat(" " + iceCream + " IceCream!");
    
    console.log(flavorsILike);
  
  // $("#iceCreams").append(flavorsILikee
  //$("#iceCreams").append("<li>" + flavorsILike + "</li>");
  // alert(flavorsILike);
});


