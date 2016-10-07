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
             var span = document.getElementById('count');
             span.innerHTML=counter.toString();
         }
     }
     //not done
 };
//make the request
request.open('GET','http://abhishek-iic.imad.hasura-app.io/counter',true);
request.send(null);
};

//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit-btn');
submit.onClick = function(){
    //Make a request to the server and send the name
    //capture the list of name and render it  as a list
    var name = ['name1', 'name2', 'name3'];
    var list = '';
    for(var i=0;i<name.lenght;i++){
        list += '<li>' +name[i] + '<li>';
    }
    var ul = document.getElementByid('name_list');
    ul.innerHTML = list;
};