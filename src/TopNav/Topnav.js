import React, { useState } from 'react';
import style from './TopNav.module.css';
import { useNavigate } from 'react-router-dom';


const TopNav = ({ headerMenu, headerrightMenu, collapse, setCollapse }) => {
    return (
        <div className={style.TopNav}>
            <TopNavElements headerMenu={headerMenu} collapse={collapse} setCollapse={setCollapse} />
            <TopNavRightElements headerrightMenu={headerrightMenu} />
        </div>
    );
}

const TopNavElements = ({ headerMenu, collapse, setCollapse }) => {
    const [leftdrop, setleftdrop] = useState(false);
    const [activeButton, setActiveButton] = useState(null);

    const handleCollapse = () => {
        setCollapse(!collapse);
        handleClick("collicon");
    }

    const handleleftdrop = () => {
        setleftdrop(!leftdrop);
        handleClick("collicon2");
    }

    const handleClick = (id) => {
        (activeButton!==id)?(setActiveButton(id)):(setActiveButton(null));
    }


    return (
        <ul className={style.TopBar}>
            <li id="collicon" onClick={handleCollapse} className={`${style.barelements} ${style.hoverEffect}`}>
                <span className={activeButton === "collicon" ? style.underline : style.nounderline}>
                    {collapse ? <span className="material-symbols-outlined">left_panel_close</span> : <span className="material-symbols-outlined">left_panel_open</span>}
                </span>
            </li>
            {headerMenu.map(element => (
                <li onClick={() => handleClick(element.title)} className={`${style.barelements} ${style.hoverEffect} ${style.tobehidden}`} key={element.title}>
                    <span className={activeButton === element.title ? style.underline : style.nounderline}>{element.title}</span>
                </li>
            ))}
            <li id="collicon2" onClick={handleleftdrop} className={`${style.barelements} ${style.hoverEffect} ${style.dropelements}`}>
                <span className={activeButton === "collicon2" ? style.underline : style.nounderline}>
                    <span className="material-symbols-outlined">menu</span>
                </span>
                <div className={`${leftdrop ? style.show : style.hide} ${style.dropping}`}>
                    {headerMenu.map(element => (
                        <li className={`${style.barelementsdropped} ${style.hoverEffect} ${style.tobehid}`} key={element.title}>
                            {element.title}
                        </li>
                    ))}
                </div>
            </li>
        </ul>
    );
}

const TopNavRightElements = ({ headerrightMenu }) => {
    const [rightbarclick, setrightbarclick] = useState(true);

    const onrightbarclick = () => {
        setrightbarclick(!rightbarclick);
    }
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/formlayout');
    };
    const handleNavigatetoSetup=()=>{
        navigate('/Setup');
    }

    return (
        <ul className={style.TopBar}>
            <DropDownButton />
            <NewButton />
            <div className={style.forhiding}>
                {headerrightMenu.map(element => (
                    <li onClick={element.title==="settings"?handleNavigate:null || element.title==="breaking_news_alt_1"?handleNavigatetoSetup:null} className={`${style.barelements} ${style.rightbarelements} ${style.hoverEffect} ${element.class}`} key={element.title}>
                        {element.title}{element.title==="stadia_controller"?<span className={style.star}></span>:null}
                                      
                    </li>
                    
                ))}
                 
            </div>
            <div onClick={onrightbarclick} className={`${style.rightmediadrop} ${style.barelements} ${style.hoverEffect}`}>
                <span className="material-symbols-outlined">apps</span>
                <div className={`${style.rightmediadropcontainer} ${rightbarclick ? style.hide : style.showright}`}>
                    {headerrightMenu.map(element => (
                        <li className={`${style.barelements} ${style.rightbarelements} ${style.hoverEffect} ${element.class}`} key={element.title}>
                            {element.title}
                        </li>
                    ))}
                   
                </div>
            </div>
        </ul>
    );
}

const DropDownButton = () => {
    const [buttonState, setButtonState] = useState(false);

    const toggleDropdown = () => {
        setButtonState(!buttonState);
    }

    return (
        <div className={`${style.dropdown1}`} onClick={toggleDropdown}>
            <button className={`${style.dropbtn} ${style.hoverEffect}`}>
                Department DropDown<span className="material-symbols-outlined">arrow_drop_down</span>
            </button>
            <div className={`${style.dropdownContent} ${buttonState ? style.show : ''}`} id="mydrop">
                <button>Item1</button>
                <button>Item2</button>
                <button>Item3</button>
            </div>
        </div>
    );
}

const NewButton = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/form');
    };
    return <div className={style.button1}>
        <button onClick={handleNavigate} className={`${style.rightbarButton}`}><span className="material-symbols-outlined">add</span>
                                                    <span className={style.tooltip}>Add Ticket</span></button>
        <button className={`${style.rightbarButton2}`}><span className="material-symbols-outlined">arrow_drop_down</span></button>
    </div>
}

export default TopNav;
