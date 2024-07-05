import React from "react";
import style from '../General Settings/GeneralSettings.module.css';


export default function BreadCrumbs({category,bread1,bread2}){

    return(
        <div className={style.breadcrumbs}>
             <ul className={style.breadcrumbsinner}>
                <li className={style.breadcrumbsitem} style={{ color: 'blue', fontWeight: 400 }}>{category}</li>
                <li className={style.breadcrumbsitem} style={{ fontSize: '16px', fontWeight: 550 }}> <span style={{ marginRight: '5px' }}>/</span>{bread1}</li>
                <li className={style.breadcrumbsitem} ><span style={{ marginRight: '10px' }}>/</span>{bread2}</li>
            </ul>
            <div className={style.rightbreadcrumbs}>
                    <input className={style.searchBar} type="text" placeholder="Search..."/>
                    <button class={style.searchButton} ><span class="material-symbols-outlined">info</span></button>
            </div>
        </div>
    )

}