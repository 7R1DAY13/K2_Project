import React from "react";
import styles from '../../../styles/side-component-styles/Searchbar.module.css';

const Searchbar = () => {
    return ( 
        <>
            <div className={styles.search}>
                <div class = {styles.glass}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 25 24.997"><path id="search_3_" data-name="search (3)" d="M207.669,178A9.917,9.917,0,1,1,210,175.669l6.517,6.517a1.626,1.626,0,0,1,0,2.306l-.027.027a1.632,1.632,0,0,1-2.306,0Zm-5.75-.5a7.585,7.585,0,1,0-7.585-7.585,7.585,7.585,0,0,0,7.585,7.585Z" transform="translate(-192 -160)" fill="currentColor"></path></svg>
                </div>
                <input type="text" class={styles.search_input} placeholder="Search" />
                <span>x</span>
            </div>
        </>
    );
}

export default Searchbar;
