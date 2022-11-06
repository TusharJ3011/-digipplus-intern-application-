import React from 'react';
import { useState } from 'react';
import logo from '../../../logo.svg';
import styles from './JobsScreen.module.css';
import bar from "../../assets/images/3bar.png";
import img from "../../assets/images/img.png";
import close from "../../assets/images/close.png";
import globalStyles from "../../assets/css/global.module.css";

export const JobsScreen = () => {
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
                        <li><a href="/">HOME</a></li>
                        <li><a href="/jobs" class={globalStyles.active}>My Jobs</a></li>
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
            <div id={styles.flexBar1}>
                <div className={styles.sideBarContainer}>
                    <p className={styles.sideBarContainerText}>JOBS</p>
                    <div className={styles.sideBarSubContainer}>
                        <p className={styles.sideBarSubContainerText}>Solution Writing</p>
                    </div>
                </div>
            
                <div className={styles.sideBarContainer}>
                    <p className={styles.sideBarContainerText}>FOR JOB APPLICATION</p>
                    <div className={styles.sideBarSubContainer + " " + styles.selected}>
                        <p className={styles.sideBarSubContainerText}>SCREENING TEST</p>
                    </div>
                </div>
                
                
                <div className={styles.sideBarContainer}>
                    <p className={styles.sideBarContainerText}>APPLICATION STATUS</p>
                    <div className={styles.sideBarSubContainer}>
                        <p className={styles.sideBarSubContainerText}>JOB APPLICATION STATUS</p>
                    </div>
                </div>    
            </div>

            <div id={styles.flexBar2}>
                <div>
                    <div className={styles.jobSubSubContainer}>
                        <p>K10 Maths Text Solution Book</p>
                        <p className={styles.jobSubSubContainerTag}>intern digipplus</p>
                    </div>
                </div>
            </div>

            <div id={styles.flexBar3}>
                <div className={styles.announcementContainer}>
                    <div className={styles.announcementIconContainer}>
                        <p className={styles.announcementIconText}>Announcements 📢📢</p>
                    </div>
                    <div className={styles.announcementSubContainer}>
                        <p className={styles.announcementSubContainerText}>We are working on adding Project and Internship Details , So just fill up the profile only</p>
                    </div>
            </div>
            </div>
        </div>
    </>
  )
}
