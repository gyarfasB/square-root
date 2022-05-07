document.getElementById('mehet').addEventListener("click", function(){
    var szam = document.getElementById("szam").value;
    console.log(typeof parseInt(szam));
    console.log(parseInt(szam));
    if((typeof parseInt(szam)) == 'number'&& !isNaN(parseInt(szam))){
        document.getElementById('eredmeny').innerHTML = Math.sqrt (parseInt(szam));
    }else{
        document.getElementById('eredmeny').innerHTML = 'Számot kell beírni a mezőbe!'
    }
           })