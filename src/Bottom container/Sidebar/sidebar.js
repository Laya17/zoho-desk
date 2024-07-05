import style from './sidebar.module.css';
import React from 'react';


function SidebarElements({ sidebarMenu }) {
    return (
        <ul className={style.sidebarelements}>
            {sidebarMenu.map((categoryObj, index) => (
                <li key={index} >
                    {categoryObj.Category &&<div  className={style.sidebarCategory}> <span className={style.category}>{categoryObj.Category}</span></div>}
                    
                    <ul>
                    {categoryObj.items.map((item, idx) => (
                        typeof item.name === 'string' ? (
                            <li className={style.sidebarlistitems} key={idx}>
                                {item.name}
                            </li>
                        ) : (
                            <li key={idx}>
                                 {<div className={style.sidebarlistitems} > <span >{item.Category}</span></div>}
                                 <ul>
                                {item.items && item.items.map(subcategoryelements=>
                                    <li className={style.sidebarlistitems}>
                                        {subcategoryelements.name}
                                    </li>
                                )}
                                </ul>
                            </li>
                        )
                    ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}

export default function Sidebar(props) {
    const { sidebarMenu } = props;
    return (
        <div className={style.lhs}>
            <SidebarElements sidebarMenu={sidebarMenu} />

        </div>
    );

}