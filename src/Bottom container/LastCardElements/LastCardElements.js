import React from "react";
import style from './LastCardElements.module.css';

export default function LastCardElements(){
    return(
        <div className={style.lastcard}>
            <Card heading='Secondary Contacts(CC) in Tickets' desc='The Secondary Contacts (CCs) are additional
                            requestors of a ticket. They can view the ticket via help centre and will automatically
                            be added as recipients...' toggleid='check1' />
            <Card heading='Send as Email' desc='Agents can send outbound emails to new or existing contacts, convert
                             them into tickets, and track their progress. Besides, such contacts do not receive the new
                             request notification...' toggleid='check2'/>

        </div>
    );
}


function Card({heading,desc,toggleid}){
    return (<div className={style.lastcardelements}>
        <div className={style.lastcard1}>
                            <div className={style.cardheading}>{heading}</div>
                            <div className={style.toggleContainer}>
                                <input type="checkbox" id={toggleid}/>
                                <label for={toggleid} className={style.togglebutton}></label>
                            </div>
                        </div>
                        <div className={style.cardcontent}>{desc}<a style={{color: 'blue'}}>Learn More</a>
                        </div>

    </div>);
}


