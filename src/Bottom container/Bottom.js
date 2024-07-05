import React from 'react';
import style from './Bottom.module.css';
import Sidebar2 from './Sidebar/sidebar2';
import GeneralSettings from './General Settings/GeneralSettings';
import Floatingicon from './Floatingicon/Floatingicon';

export default function Bottom({collapse}) {
    const sidebarMenu = [
        { Category: "", items: [{ name: "Setup", icon: "phonelink_setup" }, { name: "Setup Overview", icon: "overview" }] },
        {
            Category: "Customisation", items: [
                { name: "Modules & Tabs", icon: "view_module" },
                { name: "Layouts & fields", icon: "dashboard" },
                {
                    SubCategory: "General Settings", items: [
                        { name: "Tickets", icon: "local_activity" },
                        { name: "Contacts", icon: "contacts" },
                        { name: "Agents", icon: "support_agent" }
                    ]
                },
                { name: "Notification", icon: "notifications" },
                { name: "Languages", icon: "language_korean_latin" },
                { name: "Dynamic placeholders", icon: "grid_guides" },
                { name: "Skills", icon: "skillet" },
                { name: "Email Templates", icon: "mail" },
                { name: "Ticket Templates", icon: "move_to_inbox" },
                { name: "Time tracking", icon: "update" }
            ]
        },
        { Category: "Automation", items: [{ name: "Assignment-rules", icon: "assignment" }, { name: "workflow", icon: "rebase" }] }
    ];

    return (
        <div className={style.bottom}>
            <Sidebar2 sidebarMenu={sidebarMenu} collapse={collapse}/>
            <GeneralSettings/>
            <Floatingicon/>
            
        </div>

    );
}