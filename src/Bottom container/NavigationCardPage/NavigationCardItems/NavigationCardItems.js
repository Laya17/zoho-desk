import React from "react";
import style from "./NavigationCardItems.module.css";
import { useNavigate } from 'react-router-dom';


export default function NavigationCardItems({element}){
    const navigate = useNavigate();

    const handleNavigatetoLayout = () => {
        navigate('/formlayout');
    };

    const handleNavigatetoForm = () => {
        navigate('/form');
    };

    return(
        <React.Fragment>
        {element.listItems.map(item=>(
            <div onClick={item==="Layouts and Fields"?handleNavigatetoLayout:null || item==="General Settings"? handleNavigatetoForm:null} className={style.itemcontainer}>
                <div className={style.navigationcarditems}>{item} </div>
                <div className={style.icon}><span className='material-symbols-outlined'>search</span></div>
            </div>
        ))}
        </React.Fragment>
    );
}