//send diagnostic output to console
//(Ctrl-Shift-J in Chromium & Firefox to reveal console)
console.log("AYO");
var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
    var j=30;
    return j+x;
};


//(define fact (lambda (n) ...)
var fact = function(n) {
    var prod=1;
    for ( ; n > 1 ; n--){
	prod = prod * n;
    }
    return prod;
};


//(define fact (lambda (n) ...)
var factR = function(n) {
    if ( n<=1 ) {
	return 1;
    }
    else {
	return n * factR(n-1);
    }
};

var changeHeader = function(){
    document.getElementById("h").innerHTML =this.innerHTML;
};

var mouseOut = function(){
    document.getElementById("h").innerHTML="Hello World!";
}

//add list item 
var addItem = function() {
    var list = document.getElementById("thelist");
    //getting list of elements
    var listLi = list.getElementsByTagName("li");
    var newitem = document.createElement("li");
    var lastItem=listLi[listLi.length-1];
    lastItem=lastItem.innerHTML;
    console.log(lastItem);
    newitem.innerHTML = "item "+(parseInt(lastItem.substring(lastItem.length-1).toString())+1).toString();
    newitem.addEventListener("mouseover", changeHeader);
    newitem.addEventListener("click", function(){
        this.remove()
    });
    newitem.addEventListener("mouseout", mouseOut);
    list.appendChild(newitem);
};


//remove specified item from list
var removeItem = function(n) {
    var listitems = document.getElementsByTagName('li');
    listitems[n].remove();
};


var red = function() {
    var items = document.getElementsByTagName("li");
    for(var i = 0; i < items.length; i++) {
	items[i].classList.add('red');
    }
};


//instantiate an object
var o = { 'name' : 'Thluffy',
	age : 15,
    items : [10, 20, 30, 40],
	morestuff : {a : 1, b : 'ayo'},
	func : function(x) {
	return x+30;
	}
};

var b=document.getElementById('b');
b.addEventListener('click',addItem);  


var items = document.getElementsByTagName('li');
    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function() {
            this.remove()
            } 
        );
        items[i].addEventListener("mouseover", changeHeader);
        items[i].addEventListener("mouseout", mouseOut);

            
        
    };










