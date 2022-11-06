import React from 'react';
import { useState } from 'react';
import logo from '../../../logo.svg';
import styles from "./HomeScreen.module.css";
import bar from "../../assets/images/3bar.png";
import img from "../../assets/images/img.png";
import close from "../../assets/images/close.png";
import globalStyles from "../../assets/css/global.module.css";

export const HomeScreen = () => {
    const [isActive, setActive] = useState(false);
    const [menuStyle, setMenuStyle] = useState(globalStyles.menu);
    const [icon, setIcon] = useState(bar)
    const ToggleClass = () => {
        console.log("Toggled");
        setActive(!isActive);
        if (isActive){
            setMenuStyle(globalStyles.menu + " " + globalStyles.active)
            setIcon(close)
        }else{
            setMenuStyle(globalStyles.menu)
            setIcon(bar)
        }
    };
  return (
    <>
        <nav class={globalStyles.navbar_1}>
            <div class={globalStyles.max_width}>
                <div class={globalStyles.logo}><a href="/"><img src={logo} className={globalStyles.appLogo} alt="logo" /><span class={globalStyles.colora}>Digi</span>pplus</a></div>
                <div>
                    <ul className={menuStyle}>
                        <li><a href="/" class={globalStyles.active}>HOME</a></li>
                        <li><a href="/jobs">My Jobs</a></li>
                        <li><a href="/payments">My Payment</a></li>
                        <li><a href="/">My Offerletter</a></li>
                        <li><a href="/">My Certificate</a></li>
                    </ul>
                </div>
                <div class={globalStyles.menu_btn}>
                    <img src={icon} id={globalStyles.collapse} alt="expand" onClick={ToggleClass} />
                    <img src={img} id={globalStyles.uncollapse} alt="expand" />
                    {/* <i class="fa fa-bars" id={globalStyles.collapse}></i> */}
                    {/* <i class="fa fa-home" id={globalStyles.uncollapse}></i> */}
                </div>
            </div>
        </nav>

        <div class={globalStyles.bottomgrad}></div>
        <div className={styles.container}> 
            <div className={styles.logoContainer}>
                <img src={logo} className={styles.AppLogo} alt="logo" />
                <h1 className={styles.companyName}>Welcome to Digipplus.</h1>
            </div>

            <div className={styles.announcementContainer}>
                <div className={styles.announcementIconContainer}>
                    <p className={styles.announcementIconText}>Announcements 📢</p>
                </div>
                <div className={styles.announcementSubContainer}>
                    <p className={styles.announcementSubContainerText}>We are working on adding Project and Internship Details , So just fill up the profile only</p>
                </div>
            </div>

            <div className={styles.homeContainer}>
                <div className={styles.homeSubContainer}>
                    <p className={styles.homeSubContainerText}>Work Action</p>
                    <div className={styles.homeSubSubContainer}>
                        <div>
                            <p>View Intern Data</p>
                        </div>
                    </div>
                </div>
                <div className={styles.homeSubContainer}>
                    <p className={styles.homeSubContainerText}  id={styles.internshipContainer}>Internships</p>
                    <div className={styles.homeSubSubContainer}>
                        <div>
                            <p className={styles.homeSubSubContainerText}>Solution Writing</p>
                            <p>Write Solution</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
