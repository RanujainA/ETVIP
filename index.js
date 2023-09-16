function clicker(val){
    if(val==1){
        var img1=document.querySelector("#image1");
        img1.style.opacity="0.2";
        setTimeout(function(){
            img1.style.opacity="1";
        },100);
    }
    else{
        var img2=document.querySelector("#image2");
        img2.style.opacity="0.2";
        setTimeout(function(){
            img2.style.opacity="1";
        },100);
    }
    
}
var texttypeanimate=new Typed(".textanimate",{
    strings:["programmer.","web-developer."],
    typeSpeed:150,
    backSpeed:150,
    loop:true
})


