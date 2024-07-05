import React, { useState, useEffect, useCallback } from "react";
import style from './FormFields.module.css';


export default function LeftSide({ submitform, setsubmitform }) {
    const [fieldvalues, setfieldvalues] = useState({
        Department: '',
        Contact_Name: '',
        Account_name: '',
        Email: '',
        Phone: '',
        Subject: '',
        Description: '',
        Status: '',
        Ticket_owner: '',
        Product_name: ''
    });
    const [error, seterror] = useState({});

    const initialItems = [
        { idc: "Department", name: "Department", icon: "badge", mandatory: true, fullsize: false },
        { idc: "Contact_Name", name: "Contact Name", icon: "badge", mandatory: true, fullsize: false },
        { idc: "Account_Name", name: "Account Name", icon: "account_circle", mandatory: false, fullsize: false },
        { idc: "Email", name: "Email", icon: "mail", mandatory: false, fullsize: false },
        { idc: "Phone", name: "Phone", icon: "phone_iphone", mandatory: false, fullsize: false },
        { idc: "Subject", name: "Subject", icon: "phone_iphone", mandatory: true, fullsize: true },
        { idc: "Description", name: "Description", icon: "phone_iphone", mandatory: false, fullsize: true },
        { idc: "Status", name: "Status", icon: "phone_iphone", mandatory: true, fullsize: false },
        { idc: "Ticket_owner", name: "Ticket owner", icon: "phone_iphone", mandatory: false, fullsize: false },
        { idc: "Product_name", name: "Product name", icon: "phone_iphone", mandatory: false, fullsize: false }
    ];

    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem("changedarray");
        return storedItems ? JSON.parse(storedItems) : initialItems;
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setfieldvalues({
            ...fieldvalues,
            [name]: value,
        });
    };

    const handleSubmit = useCallback(() => {
        const newerrors = {};
        if (!fieldvalues.Department) {
            newerrors.Department = "Department is required";
        }
        if (!fieldvalues.Contact_Name) {
            newerrors.Contact_Name = "Contact name is required";
        }
        if (!fieldvalues.Subject) {
            newerrors.Subject = "Subject is required";
        }
        if (fieldvalues.Email && !(/\S+@zohocorps.com/.test(fieldvalues.Email))) {
            newerrors.Email = "Please give your zohocorps Email";
        }

        if (Object.keys(newerrors).length === 0) {
            seterror({});
            window.alert("form submitted");
        } else {
            seterror(newerrors);
        }
    }, [fieldvalues]);

    useEffect(() => {
        if (submitform) {
            handleSubmit();
            setsubmitform(false);
        }
    }, [submitform, setsubmitform, handleSubmit]);

    const ListItem = ({ element }) => {
       
        return (
            <div className={`${style.inputelementcontainer} ${element.fullsize ? style.fullsizedcontainer : ''}`}>
                <label htmlFor={element.idc} className={!element.mandatory ? style.elementlabel : style.mandatorylabel}>
                    <span className='material-symbols-outlined'>{element.icon}</span>
                    <span className={style.name}>{element.name}</span>
                </label>
                <div className={style.inputwrapper}>
                    <input
                        type="text"
                        name={element.idc}
                        value={fieldvalues[element.idc]}
                        onChange={handleChange}
                        id={element.idc}
                        className={style.inputbox}
                        placeholder={element.mandatory ? "Non removable standard field" : null}
                    />
                    <span className={`material-symbols-outlined ${style.iconstyle}`}>search</span>
                </div>
                {error[element.idc] && <span style={{ color: 'red' }}>{error[element.idc]}</span>}
            </div>
        );
    };


    return (
        <div className={style.leftside}>
            <div className={style.title}>Ticket Information</div>
           
                    <form className={style.form}>
                        {items.map(element => (
                            <ListItem key={element.idc} element={element} />
                        ))}
                    </form>
                
        </div>
    );
}
