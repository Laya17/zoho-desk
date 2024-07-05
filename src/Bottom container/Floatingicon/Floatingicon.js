import React,{useState} from "react";
import './Floatingicon.css'


export default function Floatingicon(){

    const [darkmode, setdarkmode] = useState(localStorage.getItem("mode")==="dark" );
    const [fontsize,setfontsize]=useState(14);
    if(darkmode){
        document.documentElement.classList.add('dark-mode');
    }
    
    function DarkLight() {
      setdarkmode(!darkmode);
      if (!darkmode) {
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem("mode","dark")
      } else {
        document.documentElement.classList.remove('dark-mode');
        localStorage.setItem("mode","light")
      }
    };

    function increasesize(){
        setfontsize(fontsize+2);
        document.body.style.fontSize=`${fontsize}px`
    }

    function decreasesize(){
        setfontsize(fontsize-2);
        document.body.style.fontSize=`${fontsize}px`
    }
    
    
    
    return(
        <div class="floating-icon-container">
            <div class="floating-icon material-symbols-outlined hoverEffect" onClick={DarkLight}>dark_mode</div>
            <div class="floating-icon material-symbols-outlined hoverEffect" onClick={increasesize}>add</div>
            <div class="floating-icon material-symbols-outlined hoverEffect" onClick={decreasesize}>remove</div>
        </div>
    );
}