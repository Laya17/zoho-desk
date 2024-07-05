import React from "react";
import style from "./NavigationCardPage.module.css";
import NavigationCards from "./NavigationCards/NavigationCards";

export default function NavigationCardPage(){

        const cards=[
            {heading:"Channels", listItems:[ "Email", "Help-Center","Chat","Community","Social", "Phone", "Web-Forms", "ASAP", "Instant Messaging"]},
            {heading:"General" , listItems:["Company", "Rebranding", "Business Hours","Customer Happiness", "Products", "Departments", "Zia", "Zia Powered by Chatgpt", "Guided Conversations", "Game Scope", "Trial Extension"]},
            {heading:"Customisation" , listItems:["Ticket Status", "Layouts and Fields","Time Tracking","Modules", "Templates", "General Settings","Languages", "Personal Settings"]},
            {heading:"Automation", listItems:["Assignment Rules","Notify","Workflows", "Skills","Blueprints", "Macros","Escalate(SLA)","Supervise","Support Contract","Schedules"]},
            {heading:"Channels", listItems:[ "Email", "Help-Center","Chat","Community","Social", "Phone", "Web-Forms", "ASAP", "Instant Messaging"]},
            {heading:"General" , listItems:["Company", "Rebranding", "Business Hours","Customer Happiness", "Products", "Departments", "Zia", "Zia Powered by Chatgpt", "Guided Conversations", "Game Scope", "Trial Extension"]},
            {heading:"Customisation" , listItems:["Ticket Status", "Layouts and Fields","Time Tracking","Modules", "Templates", "General Settings","Languages", "Personal Settings"]},
            {heading:"Automation", listItems:["Assignment Rules","Notify","Workflows", "Skills","Blueprints", "Macros","Escalate(SLA)","Supervise","Support Contract","Schedules"]}
        ];


        return(
            <div className={style.NavigationCardPageContainer}>
                 <NavigationCards cards={cards}/>
            </div>
        );

}