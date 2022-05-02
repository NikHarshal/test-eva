// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("form").addEventListener("submit",matchFunction);
var matchdata=JSON.parse(localStorage.getItem("schedule"))||[];
function matchFunction(){
    event.preventDefault()
    var matchdataobj={
        matchnum:masaiForm.matchNum.value,
        team1:masaiForm.teamA.value,
        team2:masaiForm.teamB.value,
        matchdate:masaiForm.date.value,
        place:masaiForm.venue.value,
      
    }
    window.location.href="matches.html"
    matchdata.push(matchdataobj)
   // console.log(matchdataobj)
   localStorage.setItem("schedule",JSON.stringify(matchdata))
}
//console.log(matchdata)