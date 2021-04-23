var div1 = document.getElementById("myDIV1");
var div2 = document.getElementById("myDIV2");
var div3 = document.getElementById("myDIV3");
var div4 = document.getElementById("myDIV4");
var div5 = document.getElementById("myDIV5");
btn1.style.borderBottom="2px solid blue";

btn1.style.paddingDown="2px";
function display1(){
    div1.classList.remove("hidden");
    div2.classList.add("hidden");
    div3.classList.add("hidden");
    div4.classList.add("hidden");
 
    
    btn1.style.borderBottom="2px solid blue";
    btn2.style.borderBottom="none";
    btn3.style.borderBottom="none";
    btn4.style.borderBottom="none";
    // forButton1()
    
    
}
function display2(){
    div1.classList.add("hidden");
    div2.classList.remove("hidden");
    div3.classList.add("hidden");
    div4.classList.add("hidden");
  
    btn1.style.borderBottom="none";
    btn2.style.borderBottom="2px solid blue";
    btn3.style.borderBottom="none";
    btn4.style.borderBottom="none";
    // forButton2()
   
}
function display3(){
    div1.classList.add("hidden");
    div2.classList.add("hidden");
    div3.classList.remove("hidden");
    div4.classList.add("hidden");
 
    btn1.style.borderBottom="none";
    btn2.style.borderBottom="none";
    btn3.style.borderBottom="2px solid blue";
    btn4.style.borderBottom="none";

    // forButton3()
}
function display4(){
    div1.classList.add("hidden");
    div2.classList.add("hidden");
    div3.classList.add("hidden");
    div4.classList.remove("hidden");
   
    btn1.style.borderBottom="none";
    btn2.style.borderBottom="none";
    btn3.style.borderBottom="none";
    btn4.style.borderBottom="2px solid blue";
    // forButton4()   
}




btn1.addEventListener("click",display1);
btn2.addEventListener("click",display2);
btn3.addEventListener("click",display3);
btn4.addEventListener("click",display4);