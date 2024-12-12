import React from "react";
import Image from "next/image";
import use_profile from '../../../public/icons/userlogo.png'
import nav_style from '../../styles/Navbar.module.css';
import page_logo from '../../../public/icons/案件一覧 - Google Chrome 11_21_2024 8_51_27 AM.png'
const Navbar = () => {
    return ( 
        <>
            <div className={nav_style.Heading}>
                <div className={nav_style.Logo}>
                    <Image src={page_logo}/>
                </div>
                <div className={nav_style.backarrow}></div>
                <div className={nav_style.page_name}> 
                    <span>
                    案件一覧</span>
                </div>
                <div className={nav_style.Head_Access_Button}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 20 20"><path id="help" d="M77.552,73.749a3.073,3.073,0,0,0,.939-2.254,3.991,3.991,0,0,0-7.981,0h1.972A2.019,2.019,0,1,1,75.908,72.9l-1.221,1.268a4.052,4.052,0,0,0-1.174,2.817V77.5h1.972a4.052,4.052,0,0,1,1.174-2.817ZM75.486,81.5V79.523H73.514V81.5Zm-.986-17a10.018,10.018,0,1,1-7.066,2.934A9.631,9.631,0,0,1,74.5,64.5Z" transform="translate(-64.5 -64.5)"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 30 24.085"><path id="mail_outline" d="M79.5,138.063l12.042-7.535H67.458Zm12.042,10.493v-15L79.5,141.021l-12.042-7.465v15Zm0-21.056a2.789,2.789,0,0,1,2.077.916,2.959,2.959,0,0,1,.88,2.113v18.028a2.958,2.958,0,0,1-.88,2.113,2.789,2.789,0,0,1-2.077.916H67.458a2.789,2.789,0,0,1-2.077-.916,2.958,2.958,0,0,1-.88-2.113V130.528a2.958,2.958,0,0,1,.88-2.113,2.789,2.789,0,0,1,2.077-.916Z" transform="translate(-64.5 -127.5)"></path></svg>
                    <Image className={nav_style.image}  src={use_profile}/>
                </div>
            </div>
        </>
    );
}

export default Navbar;
