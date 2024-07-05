import React,{useState} from 'react';
import style from './AdditionalFormItems.module.css';


export default function RightSideButtons(){

    const toggles=[
        {name:"Add Field", values:[{key:"SingleLine",icon:"sort"},
                                    {key:"MultiLine",icon:"list_alt "},
                                    {key:"Integer",icon:"list_alt "},
                                    {key:"Percent",icon:"list_alt "},
                                    {key:"Decimal",icon:"list_alt "},
                                    {key:"Currency",icon:"list_alt "},
                                    {key:"Date",icon:"list_alt "},
                                    {key:"Date/Time",icon:"list_alt "},
                                    {key:"Email",icon:"list_alt "},
                                    {key:"Phone",icon:"list_alt "},
                                    {key:"Picklist",icon:"list_alt "},
                                    {key:"Multi-Select",icon:"list_alt "},
                                    {key:"Url",icon:"list_alt "},
                                    {key:"Check Box",icon:"list_alt "},
                                    {key:"Check Boxes",icon:"list_alt "},
                                    {key:"File Upload",icon:"list_alt "},
                                    {key:"Formula",icon:"list_alt "},
                                    {key:"Look up",icon:"list_alt "},
                                    {key:"Add Section",icon:"list_alt "}
        ]},
        {name:"Unused Fields", values:[{key:"SingleLine",icon:"list_alt"},
                                        {key:"SingleLine",icon:"list_alt"}
        ]},
        {name:"Custom Fields Left", values:[{key:"SingleLine",icon:"list_alt"},
            {key:"SingleLine",icon:"list_alt"}
        ]}
    ];


    return(
        <div className={style.rightside}>
            {toggles.map(element=>(
                <div>
                    <Togglebuttons element={element}/>
                  
                </div>
            ))}
        </div>
    );
}


function Togglebuttons({element}){
    const [open,setOpen]=useState(false);

    function handleOnclick(){
        setOpen(!open);
    }

    return(
        <div className={style.rightContainer}>
            <button onClick={handleOnclick} className={style.ToggleonClick}>{element.name+" (" +element.values.length+")"}</button>
            <span className={style.arrow}><span className='material-symbols-outlined'>arrow_drop_down </span></span>
            {open && <div className={style.buttonContainer}>
                {element.values.map(elementkey=>(
                    <button className={style.rightsmallbuttons}><span className='material-symbols-outlined'>{elementkey.icon}</span><span className={style.buttonnames}>{elementkey.key}</span></button>
                ))}
                </div>}
        </div>
    );
}