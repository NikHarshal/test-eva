// write js code here corresponding to favourites.html
var favfun=JSON.parse(localStorage.getItem("favourites"));

favfun.forEach(function(ele,index){
     var tr=document.createElement("tr");
     var td1=document.createElement("td");
        td1.innerText=ele.matchnum
     var td2=document.createElement("td");
        td2.innerText=ele.team1
     var td3=document.createElement("td");
            td3.innerText=ele.team2
     var td4=document.createElement("td");
        td4.innerText=ele.matchdate
     var td5=document.createElement("td");
        td5.innerText=ele.place
        var td6=document.createElement("td")
        td6.innerText="delit"
        td6.style.cursor="pointer"
        td6.style.color="red"
        td6.addEventListener("click",function(){
            remove(ele,index)
        })
       tr.append(td1,td2,td3,td4,td5,td6);
 document.querySelector("tbody").append(tr);
    })
function remove(){
    event.target.parentNode.remove()
}