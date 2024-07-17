function mouseOver(){
    document.getElementById("1").className="btn btn-warning"
    //document.getElementById("1").style.backgroundColor="red"
}
function mouseOut(){
    document.getElementById("2").className="btn btn-primary"
    //document.getElementById("1").style.backgroundColor="red"
}
function onClick(){
    document.getElementById("3").className="btn btn-warning"
    //document.getElementById("1").style.backgroundColor="red"
}
function ondblClick(){
    document.getElementById("4").className="btn btn-warning"
    //document.getElementById("1").style.backgroundColor="red"
}
function Onfocus(){
    document.getElementById("5").className="bg-warning input-group form-control"
}
function Onblur(){
    var s=document.getElementById("6")
    s.value=s.value.toUpperCase();
}