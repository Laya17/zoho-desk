import React, { useState } from "react";
import style from '../FormFields/FormFields.module.css';
import { DndContext, closestCorners } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import AdditionalFormItems from "../FormAdditionalButtonContainers/AdditionalFormItems";


export default function FormLayout() {
    


    
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

    

    const SortableItem = ({ element }) => {
        const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: element.idc });
        const itemStyle = {
            transform: CSS.Transform.toString(transform),
            transition,
        };

        return (
            <div
                ref={setNodeRef}
                {...attributes}
                {...listeners}
                style={itemStyle}
                className={`${style.inputelementcontainer} ${element.fullsize ? style.fullsizedcontainer : ''}`}
            >
                <label htmlFor={element.idc} className={!element.mandatory ? style.elementlabel : style.mandatorylabel}>
                    <span className='material-symbols-outlined'>{element.icon}</span>
                    <span className={style.name}>{element.name}</span>
                </label>
                <div className={style.inputwrapper}>
                    <input
                        type="text"
                        name={element.idc}
                        id={element.idc}
                        className={style.inputbox}
                        placeholder={element.mandatory ? "Non removable standard field" : null}
                    />
                    <span className={`material-symbols-outlined ${style.iconstyle}`}>search</span>
                </div>
            </div>
        );
    };

    const getItemPos = id => items.findIndex(item => item.idc === id);
    const handleDragEnd = event => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;

        setItems(items => {
            const original = getItemPos(active.id);
            const newpos = getItemPos(over.id);
            const changed = arrayMove(items, original, newpos);
            return changed;
        });
    };

    const handleSaveLayout=()=>{
        localStorage.setItem("changedarray", JSON.stringify(items));
        console.log("Saved");
    }

    return (
       <div className={style.formcontainer}>
        <div className={style.leftside}>
            <div className={style.title}>Ticket Information</div>
            <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
                <SortableContext items={items.map(item => item.idc)} strategy={verticalListSortingStrategy}>
                    <form className={style.form}>
                        {items.map(element => (
                            <SortableItem key={element.idc} element={element} />
                        ))}
                    </form>
                </SortableContext>
            </DndContext>
            
            <button className={style.saveLayout} onClick={handleSaveLayout}>Save</button>
          
        </div>
        <AdditionalFormItems/>
        
        </div>
       
      
    );
}
