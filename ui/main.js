console.log('Loaded!');

//change text of main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'New value';

//move the image
var img = document.getElementById('img');
img.onclick = function (){
    img.style.marginLeft = '100px';
    
};