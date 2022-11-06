import React from 'react';
import { useState } from 'react';
import logo from '../../../logo.svg';
import styles from './PaymentScreen.module.css';
import bar from "../../assets/images/3bar.png";
import img from "../../assets/images/img.png";
import close from "../../assets/images/close.png";
import globalStyles from "../../assets/css/global.module.css";

export const PaymentScreen = () => {
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
                            <li><a href="/jobs">My Jobs</a></li>
                            <li><a href="/payments" class={globalStyles.active}>My Payment</a></li>
                            <li><a href="/">My Offerletter</a></li>
                            <li><a href="/">My Certificate</a></li>
                        </ul>
                    </div>
                    <div class={globalStyles.menu_btn}>
                        <img src={icon} id={globalStyles.collapse} alt="expand" onClick={ToggleClass}/>
                        <img src={img} id={globalStyles.uncollapse} alt="expand" />
                    </div>
                </div>
            </nav>

            <div class={globalStyles.bottomgrad}></div>
            <div className={styles.container}>
                <div id={styles.flexBar1}>
                    <div className={styles.sideBarContainer}>
                        <p className={styles.sideBarContainerText}>PAYMENT NAVIGATION</p>
                        <div className={styles.sideBarSubContainer + " " + styles.selected}>
                            <p className={styles.sideBarSubContainerText}>Invoices</p>
                        </div>

                        <div className={styles.sideBarSubContainer}>
                            <p className={styles.sideBarSubContainerText}>My Bank Details</p>
                        </div>
                    </div>  
                </div>

                <div id={styles.flexBar2}>
                    <div>
                        <div className={styles.paymentSubContainer}>
                            <p className={styles.paymentSubContainerText}>Payment Date: <span  className={styles.paymentSubContainerTextHighlight}>Oct. 25, 2022, 11:07a.m.</span>  Amount Paid: <span className={styles.paymentSubContainerTextHighlight}>₹ 3150</span></p>
                            <p className={styles.paymentSubContainerText}>Payment made for Project</p>
                            <p className={styles.paymentSubContainerText}>K10 Maths Text Solution Book</p>
                            <p className={styles.paymentSubContainerText}>K12 Maths Text Solution Book</p>
                        </div>
                    </div>
                </div>

                <div id={styles.flexBar3}>
                    <div className={styles.sideBar2Container}>
                        <p className={styles.sideBar2ContainerText}>Lifetime Earning</p>
                        <p className={styles.sideBar2ContainerText2}>₹ 3150</p>
                    </div>

                    <div className={styles.sideBar2Container}>
                        <p className={styles.sideBar2ContainerText}>This Month Earning</p>
                        <p className={styles.sideBar2ContainerText2}>₹ 0</p>
                    </div>
                </div>
            </div>
        </>
    )
}
