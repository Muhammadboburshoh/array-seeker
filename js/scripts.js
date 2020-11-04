// var fuzz = 3;
// var buzz = 5;

// var elForm = document.querySelector(".fuzzbuz-form");
// var elInput = elForm.querySelector(".fuzzbuzz-input");
// var elReolad = elForm.querySelector(".reolad");




// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   var inputNumber = parseFloat(elInput.value.trim(),10);
//   var massage = "";
//   if(!inputNumber) {
//     alert("Oka biror bir qiymat kiriting")
//     return;
//   }

//   if (inputNumber % fuzz === 0) {
//     massage += "Fuzz";
//   }

//   if (inputNumber % buzz === 0) {
//     massage += "Buzz"
//   }
  
//   elReolad.textContent = massage || inputNumber;

// })

/*var names = ["Abdulloh", "Abdurahmon", "Muhammad", "AbdQodir", "Muhammadsiddiq" , "Muhammadumar", "MuhammadBobur"]

names[0] += "Abdurahmon"

var neWname = "Abduqoodirbek";
names.push(name)

var newNameFunction = function () {
  return "Abdulloh"
}

names.push(newNameFunction());
console.log(`arrayimizda ${names.length} ta o'yin bor`);

// for (var name of names) {
//   console.log(name)
// }


var newImg = document.createElement("IMG");
newImg.src = "https://picsum.photos/150/150";
newImg.alt = "rasm";
newImg.width = "150";
newImg.height = "150";

newImg.classList.add("img-fluid")
document.body.appendChild(newImg);*/

var elForm = document.querySelector(".form")
var elForm1 = document.querySelector(".form-1")

var elInput = elForm.querySelector(".shopping-input")
var elReolad = document.querySelector(".tekshir-input")
var bor = document.querySelector(".bor")

var shoppingList = [];

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();


  shoppingList.push(elInput.value.trim())

  console.log(shoppingList);

  elInput.value = '';
  elInput.focus();

  
})

elForm1.addEventListener("submit", function (evt) {
  evt.preventDefault();

  elReolad.value = '';
  elReolad.focus();

  var birnima =  shoppingList.includes(elReolad.value.trim())

  if (birnima) {
    bor.classList.remove("d-none")
    console.log("Bor ekan")
    bor.textContent = "Bor ekan";
  
  }
  else {
    bor.classList.remove("d-none")
  
    console.log("Yo'q ekan");
    bor.textContent = "Yo'q ekan";
  }
  
})


