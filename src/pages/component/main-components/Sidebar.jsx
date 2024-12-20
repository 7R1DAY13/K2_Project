import styles from '../../../styles/main-component-styles/Sidebar.module.css'

const SideBar = () => {
    return ( 
        <div>
            <div class={styles.sidebar}>
                <ul class={styles.list}>
                    <li>
                        <div>
                            <div><svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 22.571 20"><path id="home" d="M51.49,72.356H49.412v7.457a1.132,1.132,0,0,1-1.243,1.243H43.2V73.6H38.226v7.457H33.255a1.132,1.132,0,0,1-1.243-1.243V72.356H29.934c-.743,0-.584-.4-.075-.93l9.973-9.983a1.192,1.192,0,0,1,1.76,0l9.971,9.981C52.074,71.953,52.233,72.356,51.49,72.356Z" transform="translate(-29.426 -61.056)" fill="currentColor"></path></svg></div>
                            <h5>Home</h5>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div><svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 512"><g id="icomoon-ignore"></g><path d="M458.903 114.538c-11.106-15.146-26.587-32.85-43.589-49.852s-34.706-32.482-49.852-43.589c-25.787-18.91-38.296-21.097-45.462-21.097h-248c-22.056 0-40 17.944-40 40v432c0 22.056 17.944 40 40 40h368c22.056 0 40-17.944 40-40v-312c0-7.166-2.186-19.675-21.097-45.462zM392.687 87.313c15.35 15.35 27.4 29.199 36.29 40.687h-76.977v-76.973c11.492 8.89 25.339 20.939 40.687 36.286zM448 472c0 4.336-3.664 8-8 8h-368c-4.336 0-8-3.664-8-8v-432c0-4.336 3.664-8 8-8 0 0 247.978-0.001 248 0v112c0 8.836 7.163 16 16 16h112v312z"></path><path d="M368 416h-224c-8.836 0-16-7.163-16-16s7.164-16 16-16h224c8.837 0 16 7.163 16 16s-7.163 16-16 16z"></path><path d="M368 352h-224c-8.836 0-16-7.163-16-16s7.164-16 16-16h224c8.837 0 16 7.163 16 16s-7.163 16-16 16z"></path><path d="M368 288h-224c-8.836 0-16-7.163-16-16s7.164-16 16-16h224c8.837 0 16 7.163 16 16s-7.163 16-16 16z"></path></svg></div>
                            <h5>未予定</h5>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div><svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 530.1 605.8"><g id="icomoon-ignore"></g><path id="Icon_awesome-calendar-alt" d="M0,549c0,31.4,25.4,56.8,56.8,56.8l0,0h416.5c31.4,0,56.8-25.4,56.8-56.8l0,0V227.2H0V549z M378.6,317.1c0-7.8,6.4-14.2,14.2-14.2h47.3c7.8,0,14.2,6.4,14.2,14.2v47.3c0,7.8-6.4,14.2-14.2,14.2h-47.3 c-7.8,0-14.2-6.4-14.2-14.2V317.1z M378.6,468.6c0-7.8,6.4-14.2,14.2-14.2h47.3c7.8,0,14.2,6.4,14.2,14.2v47.3 c0,7.8-6.4,14.2-14.2,14.2h-47.3c-7.8,0-14.2-6.4-14.2-14.2V468.6z M227.2,317.1c0-7.8,6.4-14.2,14.2-14.2h47.3 c7.8,0,14.2,6.4,14.2,14.2v47.3c0,7.8-6.4,14.2-14.2,14.2h-47.3c-7.8,0-14.2-6.4-14.2-14.2V317.1z M227.2,468.6 c0-7.8,6.4-14.2,14.2-14.2h47.3c7.8,0,14.2,6.4,14.2,14.2v47.3c0,7.8-6.4,14.2-14.2,14.2h-47.3c-7.8,0-14.2-6.4-14.2-14.2V468.6z M75.7,317.1c0-7.8,6.4-14.2,14.2-14.2h47.3c7.8,0,14.2,6.4,14.2,14.2v47.3c0,7.8-6.4,14.2-14.2,14.2H89.9 c-7.8,0-14.2-6.4-14.2-14.2V317.1z M75.7,468.6c0-7.8,6.4-14.2,14.2-14.2h47.3c7.8,0,14.2,6.4,14.2,14.2v47.3 c0,7.8-6.4,14.2-14.2,14.2H89.9c-7.8,0-14.2-6.4-14.2-14.2V468.6z M473.3,75.7h-56.8V18.9C416.5,8.5,408,0,397.6,0h-37.9 c-10.4,0-18.9,8.5-18.9,18.9v56.8H189.3V18.9c0-10.4-8.5-18.9-18.9-18.9h-37.9c-10.4,0-18.9,8.5-18.9,18.9v56.8H56.8 C25.4,75.7,0,101.2,0,132.5v56.8h530.1v-56.8C530.1,101.2,504.7,75.7,473.3,75.7z"></path></svg></div>
                            <h5>スケジュール</h5>
                        </div>
                    </li>
                    <li>
                        <div class={styles.project}>
                            <div><svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 416"><g id="icomoon-ignore"></g><path d="M480,64H352V32c0-17.6-14.4-32-32-32H192c-17.6,0-32,14.4-32,32v32H32C14.4,64,0,78.4,0,96v288c0,17.6,14.4,32,32,32h448 c17.6,0,32-14.4,32-32V96C512,78.4,497.6,64,480,64z M192,32.1L192,32.1L319.9,32c0,0,0,0,0.1,0.1V64H192V32.1L192,32.1z M480,192.1 h-64v48c0,8.8-7.2,16-16,16h-32c-8.8,0-16-7.2-16-16v-48H160v48c0,8.8-7.2,16-16,16h-32c-8.8,0-16-7.2-16-16v-48H32v-32h448V192.1z"></path></svg></div>
                            <h5>案件一覧</h5>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div><svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 20 20"><g id="Group_1042" data-name="Group 1042" transform="translate(-356 -25)"><rect id="Rectangle_578" data-name="Rectangle 578" width="20" height="3" rx="1.5" transform="translate(356 25)"></rect><rect id="Rectangle_579" data-name="Rectangle 579" width="20" height="3" rx="1.5" transform="translate(356 33)"></rect><rect id="Rectangle_580" data-name="Rectangle 580" width="20" height="3" rx="1.5" transform="translate(356 42)"></rect></g></svg></div>
                            <h5>メニュー</h5>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default SideBar;