const title = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     const currentColor = title.style.color;
//     let newColor;

//     if (currentColor === "blue"){
//         newColor = "tomato";
//     }
//     else{
//         newColor = "blue";
//     }
//     title.style.color = newColor;
// }

function handleTitleClick(){
    const clickedClass = "clicked"
    // ## 1
    if(title.className === clickedClass){
        // className 교체해버림
        title.className = "";
    }
    else{
        title.className = clickedClass;
    }

    // ## USE CLASSLIST 기존의 class네임을 전체 교체 X
    if (title.classList.contains(clickedClass)){
        title.classList.remove(clickedClass);
    } else {
        title.classList.add(clickedClass);
    }

    // ## USE TOGGLE
    title.classList.toggle("clicked");
}
// function handleMouseEnter(){
//     title.innerText = "Mouse is here!"
// }

// function handleMouseLeave(){
//     title.innerText = "Mouse is gone!"
// }

// // click 시 function 실행, ()x function만을 넘겨줌. JS가 실행시켜줌
title.addEventListener("click", handleTitleClick);
// title.onclick = handleTitleClick // 위와 같음
// title.addEventListener("mouseenter", handleMouseEnter)
// title.addEventListener("mouseleave", handleMouseLeave)
// title.removeEventListener("mouseleave", handleMouseLeave)

// // console.dir 로 가능한 이벤트 확인 가능 on-
// // css 변경은 css에서! 

// // WINDOW
// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato"
// }

// function handleWindowCopy(){
//     alert("copier!")
// }

// function handleWindowOffline(){
//     alert("SOS no WIFI");
// }

// function handleWindowOnline(){
//     alert("ALL GOOD");
// }
// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

