import React from 'react';
import style from './sidebar.module.css';

function SidebarElements({ sidebarMenu, collapse }) {
    return (
        <ul className={`${style.sidebarelements} ${style.leftUnlist}`}>
            {sidebarMenu.map((entries, idx) => (
                <li key={idx}>{entries.Category !== "" && (<div className={style.sidebarCategory}>{collapse?<span className={style.category}>{entries.Category}</span>:null}</div>)}
                    <ul className={style.leftUnlist}>
                        {entries.items.map((innerentries, innerid) => (
                            <li className={(typeof innerentries.SubCategory==='string') ?(null):(style.sidebarlistitems)} key={innerid}>
                                {innerentries.SubCategory ? (<>
                                    {collapse?<div className={style.sidebarlistitems}>
                                        {innerentries.SubCategory}</div>:null}
                                        <ul className={`${collapse?style.subitems:style.subitemcollapsed} ${style.leftUnlist}`}>
                                            {innerentries.items.map((Subele, Subid) => (
                                                <li className={style.sidebarlistitems} key={Subid}>
                                                    {!collapse ? <span class="material-symbols-outlined">{Subele.icon} </span>: Subele.name}
                                                </li>
                                            ))}
                                        </ul>
                                        </>
                                ) : (
                                    <span>
                                        {!collapse ? <span class="material-symbols-outlined">{innerentries.icon}</span> : innerentries.name}
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}

export default function Sidebar2(props) {
    const { sidebarMenu, collapse } = props;
    return (
        <div className={`${style.lhs} ${collapse ? style.show : style.hide}`}>
            <SidebarElements sidebarMenu={sidebarMenu} collapse={collapse} />
        </div>
    );
}
