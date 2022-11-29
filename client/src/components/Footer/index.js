// import Image from "next/image";
import styles from "../../styles/Footer.module.css";
import React from "react";
import image from "../../assets/Burger-and-Fries.jpeg"
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.img1}>
                <img src={image} objectFit="cover" layout="fill" alt="" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h3 className={styles.title}>What Our Customers Are Saying</h3>
                    <p className={styles.text}>
                        "My wife and I, amongst other relatives and friends we've introduced this place to, absolutely love the food and service! I haven't had 1 thing that I didn't like from The Shack. I personally don't even bother getting burgers from anywhere else because they don't compare. The owners recently catered our wedding also, and they knocked that straight out of the park. Everything was homemade, and not only was the food amazing - they went well above and beyond what we expected. AND they did it all for such a super low price by comparison to everywhere else we were considering.
                        I strongly recommend giving this place a try, and don't forget their catering - you won't be disappointed!"
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <p className={styles.text}>
                    2060 Logan Ave Ste. A, 
                        <br /> San Diego, CA 92113
                        <br />  (619) 539-7175
                    </p>
                    <p className={styles.text}>
                    879 W Harbor Dr Suite G, 
                        <br /> San Diego, CA 92101
                        <br />  (619) 539-7175
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY UNTIL FRIDAY
                        <br /> 9:00 – 22:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br /> 12:00 – 24:00
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
