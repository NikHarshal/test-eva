// write js code here corresponding to matches.html
var matchdata=JSON.parse(localStorage.getItem("schedule"))
shedualdata(matchdata)
var favfun=JSON.parse(localStorage.getItem("favourites"))||[]
function shedualdata(matchdata){
matchdata.forEach(function(ele,index){
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
 var td6=document.createElement("td");
 td6.innerText="Favourite"
 td6.style.color="green"
 td6.style.cursor="pointer"
 td6.addEventListener("click",function()
 {
     favfunction(ele)
 });
 tr.append(td1,td2,td3,td4,td5,td6);
 document.querySelector("tbody").append(tr)
})
}
function favfunction(ele){
    favfun.push(ele)
    localStorage.setItem("favourites",JSON.stringify(favfun));
    }
