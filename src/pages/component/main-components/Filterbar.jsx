import styles from '../../styles/Fliterbar.module.css'
import Multiple from '../side-components/Multiple_select';

const FilterBar = () => {
    return ( 
        <>
            <div class= {styles.search_div}>
                <div class= {styles.search}>
                    <div class = {styles.glass}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 25 24.997"><path id="search_3_" data-name="search (3)" d="M207.669,178A9.917,9.917,0,1,1,210,175.669l6.517,6.517a1.626,1.626,0,0,1,0,2.306l-.027.027a1.632,1.632,0,0,1-2.306,0Zm-5.75-.5a7.585,7.585,0,1,0-7.585-7.585,7.585,7.585,0,0,0,7.585,7.585Z" transform="translate(-192 -160)" fill="currentColor"></path></svg>
                    </div>
                    <input type="text" class={styles.search_input} placeholder="キーワード検索" />
                    <span>x</span>
                </div>

                <div class= {styles.text_flex}>
                    <h5 class = {styles.text}>絞り込み条件</h5>
                    <h5 class= {styles.filter_text}>
                        絞り込み条件を設定してください。</h5>
                </div>
                <hr></hr>

                <div>
                    <div class= {styles.tick}>
                        <div>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 512"><g id="icomoon-ignore"></g><path d="M501.467 408.938l-230.276-197.38c10.724-20.149 16.809-43.141 16.809-67.558 0-79.529-64.471-144-144-144-14.547 0-28.586 2.166-41.823 6.177l83.195 83.195c12.445 12.445 12.445 32.81 0 45.255l-50.745 50.745c-12.445 12.445-32.81 12.445-45.255 0l-83.195-83.195c-4.011 13.237-6.177 27.276-6.177 41.823 0 79.529 64.471 144 144 144 24.417 0 47.409-6.085 67.558-16.81l197.38 230.276c11.454 13.362 31.008 14.113 43.452 1.669l50.746-50.746c12.444-12.444 11.693-31.997-1.669-43.451z"></path></svg>
                        </div>
                        <div>
                            <h5>施工状況</h5>
                            <div class= {styles.checkbox_one}>
                                <div class= {styles.box_flex}>
                                    <input type="checkbox" id="myCheck1" class= {styles.checkone}/>
                                    <label for="myCheck1" class= {styles.box_text}>未予定</label>
                                </div>
                                <div class= {styles.box_flex}>
                                    <input type="checkbox" id="myCheck2" class= {styles.checkone}/>
                                    <label for="myCheck2" class= {styles.box_text2}>施工前</label>
                                </div>
                            </div>
                            <div class= {styles.checkbox_one}>
                                <div class= {styles.box_flex}>
                                    <input type="checkbox" id="myCheck1" class= {styles.checkone}/>
                                    <label for="myCheck1" class= {styles.box_text3}>施工中</label>
                                </div>
                                <div class= {styles.box_flex}>
                                    <input type="checkbox" id="myCheck2" class= {styles.checkone}/>
                                    <label for="myCheck2" class= {styles.box_text4}>施工済</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class={styles.tick}>
                        <div>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 512"><g id="icomoon-ignore"></g><path d="M501.467 408.938l-230.276-197.38c10.724-20.149 16.809-43.141 16.809-67.558 0-79.529-64.471-144-144-144-14.547 0-28.586 2.166-41.823 6.177l83.195 83.195c12.445 12.445 12.445 32.81 0 45.255l-50.745 50.745c-12.445 12.445-32.81 12.445-45.255 0l-83.195-83.195c-4.011 13.237-6.177 27.276-6.177 41.823 0 79.529 64.471 144 144 144 24.417 0 47.409-6.085 67.558-16.81l197.38 230.276c11.454 13.362 31.008 14.113 43.452 1.669l50.746-50.746c12.444-12.444 11.693-31.997-1.669-43.451z"></path></svg>
                        </div>
                        <Multiple/>
                    </div>
                </div>

                <div>
                    <div class={styles.tick}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 20 20"><path d="M137.5,140.015a17.622,17.622,0,0,1,6.579,1.374q3.421,1.374,3.421,3.6V147.5h-20v-2.515q0-2.222,3.421-3.6A17.622,17.622,0,0,1,137.5,140.015Zm0-2.515a4.992,4.992,0,0,1-4.971-4.971,4.882,4.882,0,0,1,1.462-3.538,4.874,4.874,0,0,1,7.018,0,4.882,4.882,0,0,1,1.462,3.538A4.992,4.992,0,0,1,137.5,137.5Z" transform="translate(-127.5 -127.5)"></path></svg>
                        </div>
                        <Multiple/>
                    </div>
                </div>

                <div>
                    <div class={styles.tick}>
                        <div>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 768 768"><g id="icomoon-ignore"></g><path d="M224 64v32h-64c-26.496 0-50.56 10.784-67.872 28.128s-28.128 41.376-28.128 67.872v448c0 26.496 10.784 50.56 28.128 67.872s41.376 28.128 67.872 28.128h448c26.496 0 50.56-10.784 67.872-28.128s28.128-41.376 28.128-67.872v-448c0-26.496-10.784-50.56-28.128-67.872s-41.376-28.128-67.872-28.128h-64v-32c0-17.664-14.336-32-32-32s-32 14.336-32 32v32h-192v-32c0-17.664-14.336-32-32-32s-32 14.336-32 32zM640 288h-512v-96c0-8.832 3.552-16.8 9.376-22.624s13.792-9.376 22.624-9.376h64v32c0 17.664 14.336 32 32 32s32-14.336 32-32v-32h192v32c0 17.664 14.336 32 32 32s32-14.336 32-32v-32h64c8.832 0 16.8 3.552 22.624 9.376s9.376 13.792 9.376 22.624zM128 352h512v288c0 8.832-3.552 16.8-9.376 22.624s-13.792 9.376-22.624 9.376h-448c-8.832 0-16.8-3.552-22.624-9.376s-9.376-13.792-9.376-22.624z"></path></svg>
                        </div>
                        <div class= {styles.search_bar_right}>
                            <h5>案件期間</h5>
                            <div class={styles.search_bar3}>
                                <input type="date" id="date" name="date"/>
                                <div>~</div>
                                <input type="date" id="date" name="date"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default FilterBar;