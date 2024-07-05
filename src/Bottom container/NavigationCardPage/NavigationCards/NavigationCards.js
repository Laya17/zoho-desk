import React from "react";
import style from "./NavigationCards.module.css";
import NavigationCardItems from "../NavigationCardItems/NavigationCardItems";


export default function NavigationCards({cards}){

    return(
        <React.Fragment>
        {cards.map(element=>(
            <div className={style.ListContainer}>
                <div className={style.listHeader}>{element.heading}</div>
                <NavigationCardItems element={element} />
            </div>
                   
        ))}
        </React.Fragment>
       
    );
}