

var bestscore=0;
function change(){
    var ob=document.getElementById("sqr");
    ob.classList.add("sqr");
    var obj=document.getElementById("hole");
    obj.classList.add("hole");
  if(ob.getBoundingClientRect().top=='108')
   {

    ob.style.top="150px";
   }
   else
   {
    ob.style.top="0px";
   }
 
   
}

document.addEventListener("keydown",function(event){
    
    change();
   
});


var y=setInterval(function(){
    var k=Math.random()*(7000-2000);
    var obj=document.getElementById("hole");
     obj.classList.add("hole2");
    setTimeout(function(){
     obj.classList.remove("hole2");
    },k);
  
 },3000);



var score=0;
setInterval(function(){
    var obj=document.getElementById("hole");
    var ob=document.getElementById("sqr");
    var style=getComputedStyle(obj);
    var x="rgb(128, 128, 128)";
  if(x.localeCompare(style.backgroundColor)==0&&(obj.getBoundingClientRect().left-ob.getBoundingClientRect().left<40&&(obj.getBoundingClientRect().left-ob.getBoundingClientRect().left))>10&&ob.getBoundingClientRect().top=='258')
    { 
  
        ob.classList.remove("sqr");
        ob.classList.remove("hole");
        ob.classList.remove("hole2");
       
       
        alert("gameover,score:"+ score +",bg="+style.backgroundColor+"");
       
        if(score>bestscore)
        {
        if(bestscore!='0')
        bs.remove();
        bestscore=score;
        bs=document.createElement('div');
        bs.innerHTML="best score:"+bestscore+"";
        bs.style.width="100px"
        bs.style.height="50px"
        bs.style.backgroundColor="yellow"
        bs.style.textColor="black"
        document.getElementById("bd").appendChild(bs);
        score=0;
        }
        else{
        score=0;
        }
    }
    else
    {
        if(ob.getBoundingClientRect().top=='258')
        score++;
       
    }
},2)


/*var nw=document.createElement('div');
nw.innerHTML="..";
nw.style.width="150px"
nw.style.height="150px"
nw.style.backgroundColor="gray"
document.body.appendChild(nw);
nw.setAttribute('id',"hole");*/

/*function onclick(keycode){
    if(keycode==13)
    {
        if()
    }
}*/
/*function click(){
    const obj=document.getElementById('sqr');
}
    obj.animate( from{top:0px}
    to{top:150px;},.5,forwards);
    const obj=document.getElementById('sqr');
}*/

/*var obj=document.getElementById("sqr");
   obj.classList.add("up");
   setTimeout(function(){
    obj.classList.remove("up");
   },1000);*/
    /*obj.classList.add("down");
   setTimeout(function(){
    obj.classList.remove("down");
  
   var ob=document.getElementById("sqr");
   ob.style.top="150px";
   
   },1000);*/
      //var sqr=document.getElementById('sqr');
    //var obj=document.getElementById("sqr2");
    /*obj.style.position="relative";
    console.log(obj.getBoundingClientRect().top);*/
     //console.log(style.backgroundColor);
    //console.log(obj.offsetLeft);
    //console.log(obj.style.backgroundColor);
   // var flag=obj.hasAttribute("data-gray")
  // console.log(obj.getAttribute('style').backgroundColor);
    // console.log(ob.offsetTop)
  // if(ob.offsetTop=)
  //var hl=document.getElementById("hole");
     //window.localStorage.setItem('highscore',highscore);
        //obj.style.animation=" none";