document.addEventListener('DOMContentLoaded', function() {
    
    var parent_div = document.getElementById("comforts"); //I have gotten the div element which is the parent of the img.

    var comf = document.getElementById("comf");

    var box1 = document.getElementById("box1");

    var comf1 = document.createElement('img');
    comf1.src = "comfort.jpg";
    comf1.style.width = "49.5%";
    
    comf1.addEventListener('mouseenter', function(event){
        event.target.style.filter = 'brightness(50%)'; 
        box1.style.visibility = 'visible';
      })
    comf1.addEventListener('mouseout', function(event){
      event.target.style.filter = 'brightness(100%)';
      box1.style.visibility = 'hidden';
  })
    parent_div.replaceChild(comf1, comf); //In here, i am taking the parent div and replacing the child nodes
    //take notice of the order in which the arguments are passed in, the new node is passed in first.
  });
  
// document.addEventListener('DOMContentLoaded', function() {
    
//   var parent_div = document.getElementById("div_id"); 

//   var bake = document.getElementById("bakes");
//   var box2 = document.getElementById("box2");
//   var bake1 = document.createElement('img');
//   bake1.img.src = "cake.jpg";
//   bake1.img.style.width = "49.5%";
//   bake1.href = "desserts.html";
  
//   bake1.img.addEventListener('mouseenter', function(event){
//       event.target.style.filter = 'brightness(50%)';
//       box2.style.visibility = 'visible'; 
//     })
//     bake1.addEventListener('mouseout', function(event){
//       event.target.style.filter = 'brightness(100%)';
//       box2.style.visibility = 'hidden';
//   })
  
//     parent_div.replaceChild(bake1, bake); 
//   });
  
// document.addEventListener('DOMContentLoaded', function() {
    
//   var parent_div = document.getElementById("salads"); 
  
//   var veggie = document.getElementById("veggie");
//   var box3 = document.getElementById("box3");
//   var veggie1 = document.createElement('img');
//   veggie1.src = "salad.jpg";
//   veggie1.style.width = "49.5%";
      
//   veggie1.addEventListener('mouseenter', function(event){
//      event.target.style.filter = 'brightness(50%)'; 
//      box3.style.visibility = 'visible';
//       })
//       veggie1.addEventListener('mouseout', function(event){
//         event.target.style.filter = 'brightness(100%)';
//         box3.style.visibility = 'hidden';
//     })
//       parent_div.replaceChild(veggie1, veggie); 
//     });
    
document.addEventListener('DOMContentLoaded', function() {
    
  var parent_div = document.getElementById("snacks"); 
      
  var snack = document.getElementById("snack");
  var box4 = document.getElementById("box4");    
  var snack1 = document.createElement('img');
  snack1.src = "snack.jpg";
  snack1.style.width = "49.5%";
          
  snack1.addEventListener('mouseenter', function(event){
    event.target.style.filter = 'brightness(50%)'; 
    box4.style.visibility = 'visible';
  })
  snack1.addEventListener('mouseout', function(event){
    event.target.style.filter = 'brightness(100%)';
    box4.style.visibility = 'hidden';
  })
  parent_div.replaceChild(snack1, snack); 
  });
        
  document.addEventListener('DOMContentLoaded', function() {
    
    var parent_div = document.getElementById("bakes"); 
    var box2 = document.getElementById("box2");
    var bake = document.getElementById("bake");
  
   var bake1 = document.createElement('img');
   bake1.src = "cake.jpg";
   bake1.style.width = "49.5%"
    
   bake1.addEventListener('mouseenter', function(event){
       event.target.style.filter = 'brightness(50%)'; 
       box2.style.visibility = 'visible';
     })
     bake1.addEventListener('mouseout', function(event){
       event.target.style.filter = 'brightness(100%)';
       box2.style.visibility = 'hidden';
   })
    
     parent_div.replaceChild(bake1, bake); 
   });

   document.addEventListener('DOMContentLoaded', function() {
    
    var parent_div = document.getElementById("salads"); 
    var box3 = document.getElementById("box3");
    var veggie = document.getElementById("veggie");
  
   var veggie1 = document.createElement('img');
   veggie1.src = "salad.jpg";
   veggie1.style.width = "49.5%"
    
   veggie1.addEventListener('mouseenter', function(event){
       event.target.style.filter = 'brightness(50%)'; 
       box3.style.visibility = 'visible';
     })
     veggie1.addEventListener('mouseout', function(event){
       event.target.style.filter = 'brightness(100%)';
       box3.style.visibility = 'hidden';
   })
    
     parent_div.replaceChild(veggie1, veggie); 
   });