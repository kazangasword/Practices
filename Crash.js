/*DOM tree  - A model of a web page.
API - Application programming interface

1. Selection
     Singles - getElementById() / querySelector()
       Multiple - getElementsByClass()/ querySelectorAll() / getElementsByTagName()
       Heirarchy - parentNode/ previousSibling/ nextSibling/ firstChild/ lastChild/ nthChild


2. Work
     Access - nodeValue Example: document.getElementsByTagName('li').firstChild.nodeValue;
       Work - innerHTML/innerText / textContent/ createElement()/ createNode()/ appendChild()/ removeChild()
       Attribute - getAttribute()/ hasAttribute()/ setAttribute()/ removeAttribute()


3. Accessing in the Nodelist
     element[index]/ element.item(index)
*/
/*
$(document).ready(function(){
  $('li').on('click',function(){
    $(this).animate({
      paddingLeft: '+=100';
      opacity: 0.0;
    },600,function(){
      $(this).remove();
    });
  });
});
*/

function cool(){
  var el = document.getElementById('info');
  el.className = 'cool';
}
var list = document.getElementsByTagName('li');
list.item(1).previousSibling.className = 'cool';

var newEl = document.createElement('li');
var newText = document.createTextNode('Dragon');
newEl.appendChild(newText);
var pos = document.getElementsByTagName('ul')[0];
pos.appendChild(newEl);

var el = document.createElement('li');
var em = document.createTextNode('Cucumber');
el.appendChild(em);
var target = document.getElementsByTagName('li')[0];
var pos = document.getElementsByTagName('ul')[0];
pos.insertBefore(el,target);


var quad = ['one','two','three','four','five','six'];
var liList = document.getElementsByTagName('li');
for(var i=0; i<liList.length;i++){
  if(!liList[i].hasAttribute('class')){
    liList[i].setAttribute('class','cool');
    liList[i].setAttribute('id',quad[i]);
  }
}

var newHead = document.querySelector('h1');
var textCo = document.createTextNode('Wallahi');
newHead.appendChild(document.createElement('br'));
newHead.appendChild(textCo);
var a = 'Semi' + ' Anal';
var newTextCo = document.createTextNode(a);
newHead.appendChild(document.createElement('br'));
newHead.appendChild(newTextCo);
