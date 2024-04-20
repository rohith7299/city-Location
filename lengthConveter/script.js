
function convert(){
    let cmval = Number( document.getElementById("input").value)
    let incVal = cmval/2.54
    let result = document.getElementById("result")
    result.innerHTML = incVal .toFixed(2) + "inches"
}