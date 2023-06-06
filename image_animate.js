var img1= document.getElementById('img_stick_football');
var i=1;
var folder_name="stick_football_plays\\L";
var frame_count=21;
var btn_press_flag=0;
var btn=document.getElementsByClassName('btn');

function change(){
    setTimeout(function(){
        console.log("Here");
        img1.src=folder_name+i+".png";
        i++;
        if(btn_press_flag==2 && i>frame_count){
            return;
        }
        if(i>frame_count){
            i=1;
            if(btn_press_flag==1){
                changeVal();
                btn_press_flag=2;
            }
        }
        change();
    },130)
}

change();

function onBtnPressSayHi(){
    if(i<=9){
        btn_press_flag=2;
        changeVal();
    }
    else{
        btn_press_flag=1;
    }
}

function changeVal(){
    folder_name="stick_football_falls\\L";
    frame_count=25;
}
