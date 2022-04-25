<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="demo">
        <h1>File reading using AJAX</h1>
        <button onclick="ajax();">Go to Server</button>
    </div>
    <script src="ajax.js"></script>
</body>

</html>
<h1>Ajax</h1>
Test file function ajax() { //creating an xhr request var xhttp = new XMLHttpRequest(); //eventlistener xhttp.onreadystatechange = function(){ //condition if(this.readyState==4&&
<this class="readyStatus"></this>==200){ document.getElementById("demo").innerHTML=this.responseText; } } xhttp.open("GET","ajax.txt",true); xhttp.send(); }