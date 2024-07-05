import React,{useState} from "react";
import style from './FormFooter.module.css';

export default function FormFooter({onButtonClick}){
    return(
        <div className={style.BottomContainer}> 
            <button className={style.buttons} onClick={onButtonClick} color="blue">Save</button>
            <button className={style.buttons} onClick={onButtonClick} color="blue">Save and Close</button>
            <button className={style.whitebutton} color="none">Cancel</button>
        </div>
    );
}



