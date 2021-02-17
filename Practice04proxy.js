//DOM Manipulation
// function valueIn (){
//   console.log(
//     document.getElementById('name').value
//   );
//   var name = document.getElementById('name').value;
//   var message = "Hello " + name + "!";
//   document.getElementById('content').innerText = message;
//   var title = document.querySelector("h1").textContent;
//   title += "Wassup kiddo!";
//   document.querySelector("h1").textContent = title;
// }


//Event listener
//VERY IMPORTANT - DO NOT CALL THE FUNCTION WITH PARANTHESIS, INSTEAD JUST USE FUNCTION NAME
//document.querySelector("button").addEventListener('click', valueIn);
//document.querySelector("button").onclick = valueIn;


//When we use script in the head section
document.addEventListener("DOMContentLoaded",
  function (event){
  //
  //   function valueIn (event){
  //     console.log(event);
  //     // console.log(
  //     //   document.getElementById('name').value
  //     // );
  //
  //     var name = document.getElementById('name').value;
  //     var message = "Hello " + name + "!";
  //     document.getElementById('content').innerText = message;
  //
  //     var title = document.querySelector("h1").textContent;
  //     title += "Wassup kiddo!";
  //     document.querySelector("h1").textContent = title;
  //   }
  //   document.querySelector("button").addEventListener('click', valueIn);
  // }



  //Using ajax to get data
  document.querySelector("button").addEventListener("click",function(){


    $ajaxUtil.sendRequest("data.txt",
      function(request){
         var name = req.responseText;
        document.querySelector("#content").innerHTML = "<h2>Done " + name + " !";
      });


  });

});



//JSON
//JavaScript string object notation
//Only difference from JavaScript is it uses object literals where member names should be under double quotes and so is the value
//converts from JSON to JavaScript
var obj = JSON.parse(jsonString);
//convertsb from JavaScript to JSON
var str = JSON.stringify(obj);
