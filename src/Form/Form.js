import React,{useState} from "react";
import BreadCrumbs from "../Bottom container/BreadCrumbs/BreadCrumbs";
import Floatingicon from "../Bottom container/Floatingicon/Floatingicon";
import style from './Form.module.css';
import FormFields from "./FormFields/FormFields";
import FormFooter from "./Footer/FormFooter";

export default function  Form(){
   const [submitform,setsubmitform]=useState(false);
   
   function handlebuttonclick(){
    setsubmitform(true);
   }

    return(
        <React.Fragment>
            <BreadCrumbs category='Edit Layout' bread1='Ticket' bread2='Onam'></BreadCrumbs>
            <div className={style.formpage}>
                <FormFields submitform={submitform} setsubmitform={setsubmitform}/>
            </div>
            <FormFooter onButtonClick={handlebuttonclick} />
            <Floatingicon/>
        </React.Fragment>
    );
}


