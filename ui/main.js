//counter code
var button = document.getElementById('counter');

button.onclick = function(){
 //Create a request  
 var request = new XMLHttpRequest();
 
 //capture the response and store it in a variable
 request.onreadystatechange = function(){
     if(request.readyState === XMLHttpRequest.DONE){
         //take some action
         if(request.status === 200){
             var counter = request.responseText;
             var span = getElementById('count');
             span.innerHTML=counter.toString();
         }
     }
     //not done
 };
//make the request
request.open('GET','http://abhishek-iic.imad.hasura-app.io/counter',true);
request.send(null);
};