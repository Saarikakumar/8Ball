var a = [];
    
    function myFunction() {
    var x = document.getElementById("frm1");
    var i;   
    for (i = 0; i < x.length; i++) {
    a[i] = x.elements[i].value + "<br>";
    var answer = a[Math.floor(Math.random()*a.length)];
    }
    
     var frm = document.getElementById("frm1");
        frm.style.visibility = 'hidden';
   
}

function showImage(){
        var img = document.getElementById('Triangle');
        var gif = document.getElementById('Trianglegif');
        var button = document.getElementById('button');
        gif.style.visibility = 'hidden';
        gif.style.visibility = 'visible';
        
        var answer = a[Math.floor(Math.random()*a.length)];
        document.getElementById("answers").innerHTML = answer;
    }

function showhide() {
    var frm = document.getElementById("frm1");
   if(frm.style.visibility === 'hidden') {
       frm.style.visibility = 'visible';
   } else {
       frm.style.visibility = 'hidden';
   }
}
