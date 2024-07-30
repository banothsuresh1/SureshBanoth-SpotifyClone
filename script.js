let audioEle=new Audio("song1.mp3");
let masterPlay=document.getElementById("masterPlay");
let backward=document.getElementById("backward");
let forward=document.getElementById("forward");
let gif=document.querySelector(".gif");
let myprogress=document.getElementById("myprogress");
let songItems=Array.from(document.getElementsByClassName("songItem"));
let songIndex=0
let songPlaying=document.querySelector(".songplaying");
list1=Array.from(document.getElementsByClassName("songItemPlay"));


let songs=[{songName:"New York Nagaram", filePath:"song1.mp3", coverPath:"cover/newyorklogo.png"},
{songName:"Uppenatha", filePath:"Uppenantha.mp3", coverPath:"cover/uppenathalogo.png"},
{songName:"Pedhave Palikina", filePath:"Pedave Palikina.mp3", coverPath:"cover/nani.png"},
{songName:"My love is gone", filePath:"My Love Is Gone.mp3", coverPath:"cover/uppenathalogo.png"},
{songName:"Chaila chaila", filePath:"Chaila Chaila.mp3", coverPath:"cover/cheila.png"}]




songItems.forEach((ele,i)=>{
    ele.getElementsByTagName('img')[0].src=songs[i].coverPath;
    ele.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})




audioEle.addEventListener("timeupdate",()=>{
    let progress=parseInt((audioEle.currentTime/audioEle.duration)*100);
    myprogress.value=progress;
})

myprogress.addEventListener('change',()=>{
    audioEle.currentTime=(myprogress.value*audioEle.duration)/100 ;
})


const allplay=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((e)=>{
        e.classList.add("fa-circle-play");
        e.classList.remove("fa-circle-pause");
    })

}


Array.from(document.getElementsByClassName("songItemPlay")).forEach((ele)=>{
    ele.addEventListener("click",(e)=>{    
    allplay(); 
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause"); 
    songIndex=e.target.id 
    audioEle.src=songs[songIndex].filePath;
    songPlaying.innerText=songs[songIndex].songName;
    if (audioEle.paused ){
        audioEle.play();
        e.target.classList.add("fa-circle-pause");
        e.target.classList.remove("fa-circle-play");
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }/*else{
        audioEle.pause();
        e.target.classList.remove("fa-circle-pause");
        e.target.classList.add("fa-circle-play");
        gif.style.opacity=1;
        masterPlay.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
    }*/
    })  
})

document.getElementById("backward").addEventListener('click',()=>{
        if (songIndex<=0){
            songIndex=0
        }
        else{
            songIndex=songIndex-1
        }
        audioEle.src=songs[songIndex].filePath;
        audioEle.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        songPlaying.innerText=songs[songIndex].songName;
        gif.style.opacity=1;
        
        allplay();
        list1[songIndex].classList.add("fa-circle-pause");
        list1[songIndex].classList.remove("fa-circle-play");
        
    
})
document.getElementById("forward").addEventListener('click',()=>{
    
        if (songIndex===songs.length-1){
            songIndex=0 
        }
        else{
            songIndex=songIndex+1
        }
        audioEle.src=songs[songIndex].filePath;
        audioEle.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        songPlaying.innerText=songs[songIndex].songName;
        gif.style.opacity=1;
        
        allplay();
        list1[songIndex].classList.add("fa-circle-pause");
        list1[songIndex].classList.remove("fa-circle-play");
    
})

masterPlay.addEventListener('click',()=>{
    if(audioEle.paused || audioEle.currentTime<=0){
        audioEle.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
        list1[songIndex].classList.add("fa-circle-pause");
        list1[songIndex].classList.remove("fa-circle-play");
    }
    else{
        audioEle.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity=0;
        list1[songIndex].classList.add("fa-circle-play");
        list1[songIndex].classList.remove("fa-circle-pause");
    }
})

let menu =document.querySelector(".menu");
let xmark=document.querySelector(".xmark");
let list=document.querySelector(".menu-list");

menu.addEventListener('click',()=>{
    list.classList.remove("menu-list");
    list.classList.add("menu-visible");
    menu.classList.add("menu-bar-invisi");
    menu.classList.remove("menu")
    xmark.classList.add("xmark-vis")
})

xmark.addEventListener('click',()=>{
    list.classList.add("menu-list");
    list.classList.remove("menu-visible");
    menu.classList.remove("menu-bar-invisi");
    menu.classList.add("menu")
    xmark.classList.remove("xmark-vis")

})
