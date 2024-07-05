import React from "react";
import style from './GeneralSettings.module.css';
import LastCardElements from "../LastCardElements/LastCardElements";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

export default function GeneralSettings(){
    
    return(
    <div className={style.rhs}>
        <BreadCrumbs category='Customization' bread1='General Settings-Tickets' bread2='Z-Phone'/>
        <CardElements heading='GENERAL SETTINGS FOR TICKET' content='The CC feature enables your agents
                        and end users to copy additional requesters or contacts on
                        a ticket. Agents can copy other users in email
                        replies, ticket detail page, and the add ticket form. Likewise, end users can copy other
                        users in their email or from the Help Center.'/>
        <LastCardElements/>

    </div>);
}





function CardElements({heading,content}){
    return(
        <div className={style.cardelements}>
            <p className={style.cardheadingtop}>{heading}</p>
                    <p className={style.cardmid}>{content}</p>
                    <div className={style.cardlink} ><a >Watch Tutorial</a> <a style={{paddingLeft: '10px'}}>Read more</a></div>

        </div>
    );
}