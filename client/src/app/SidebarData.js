import React from "react";
import * as FaIcons from "react-icons/fa";

export const SidebarData =[
    {
        title: "test",
        path: '/user/guest/test',
        icon: <FaIcons.FaCartPlus className='mr-3'/>,
        className: 'nav-text'
    },
    {
        title: "test1",
        path: '/user/:id/test2',
        icon: <FaIcons.FaCartPlus className='mr-3'/>,
        className: 'nav-text'
    }
]