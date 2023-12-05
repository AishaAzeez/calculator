function displayData(e){
    input.value+=e
}
function out(){
    input.value=eval(input.value)
}
function clea(){
    input.value=""
}
function remove(){
    input.value=input.value.slice(0,-1)
}