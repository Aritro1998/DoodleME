var toggler=0;
function clickListenter(){
    var nav=document.getElementById("doodlenav");
    if(toggler==0){
        toggler=1;
        //nav.style.cssText="background-color:rgba(245, 171, 238, 1); transition: background-color 300ms linear;";
        nav.style.cssText="background-color:rgba(255, 255, 255, 1); transition: all 300ms linear;";
    }
    else{
        toggler=0;
        //nav.style.cssText="background-color:rgba(245, 171, 238, 0.3); transition: background-color 300ms linear;";
        nav.style.cssText="background-color:rgba(255, 255, 255, 0); transition: all 300ms linear;";
    } 
}
