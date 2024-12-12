import styles from '../../styles/modal.module.css'
const Modal = () => {
    return ( 
        <div class = {styles.container}>
            <div class = {styles.main_container}>
                <div class = {styles.message_info}> 
                    <div class = {styles.user_info}>
                        <div>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 416"><g id="icomoon-ignore"></g><path d="M480,64H352V32c0-17.6-14.4-32-32-32H192c-17.6,0-32,14.4-32,32v32H32C14.4,64,0,78.4,0,96v288c0,17.6,14.4,32,32,32h448 c17.6,0,32-14.4,32-32V96C512,78.4,497.6,64,480,64z M192,32.1L192,32.1L319.9,32c0,0,0,0,0.1,0.1V64H192V32.1L192,32.1z M480,192.1 h-64v48c0,8.8-7.2,16-16,16h-32c-8.8,0-16-7.2-16-16v-48H160v48c0,8.8-7.2,16-16,16h-32c-8.8,0-16-7.2-16-16v-48H32v-32h448V192.1z"></path></svg>
                            <h3>Akari</h3>
                        </div>

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 16 21"><path id="map-pin" d="M7.5,0A7.516,7.516,0,0,0,0,7.514c0,6.2,7,12.162,7.3,12.412a.312.312,0,0,0,.4,0c.3-.246,7.3-6.1,7.3-12.415A7.516,7.516,0,0,0,7.5,0Zm0,19.274C6.351,18.246.625,12.862.625,7.514a6.875,6.875,0,1,1,13.75,0C14.375,12.952,8.655,18.259,7.5,19.274ZM7.5,3.75A3.75,3.75,0,1,0,11.25,7.5,3.754,3.754,0,0,0,7.5,3.75Zm0,6.875A3.125,3.125,0,1,1,10.625,7.5,3.129,3.129,0,0,1,7.5,10.625Z" transform="translate(0.5 0.5)" fill="currentColor" stroke="currentColor" stroke-width="1"></path></svg>
                            <p>- - -</p>
                        </div>

                        <div>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 352 448"><g id="icomoon-ignore"></g><path d="M96 328v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM96 264v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM160 264v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM96 200v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM288 328v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM224 264v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM160 200v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM96 136v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM288 264v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM224 200v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM160 136v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM96 72v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM288 200v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM224 136v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM160 72v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM288 136v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM224 72v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM288 72v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM224 416h96v-384h-288v384h96v-56c0-4.25 3.75-8 8-8h80c4.25 0 8 3.75 8 8v56zM352 16v416c0 8.75-7.25 16-16 16h-320c-8.75 0-16-7.25-16-16v-416c0-8.75 7.25-16 16-16h320c8.75 0 16 7.25 16 16z"></path></svg>
                            <p>得意先担01</p>
                        </div>

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 20 20"><path d="M137.5,140.015a17.622,17.622,0,0,1,6.579,1.374q3.421,1.374,3.421,3.6V147.5h-20v-2.515q0-2.222,3.421-3.6A17.622,17.622,0,0,1,137.5,140.015Zm0-2.515a4.992,4.992,0,0,1-4.971-4.971,4.882,4.882,0,0,1,1.462-3.538,4.874,4.874,0,0,1,7.018,0,4.882,4.882,0,0,1,1.462,3.538A4.992,4.992,0,0,1,137.5,137.5Z" transform="translate(-127.5 -127.5)"></path></svg>
                            <p>山田 太郎</p>
                        </div>

                        <div>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 768 768"><g id="icomoon-ignore"></g><path d="M224 64v32h-64c-26.496 0-50.56 10.784-67.872 28.128s-28.128 41.376-28.128 67.872v448c0 26.496 10.784 50.56 28.128 67.872s41.376 28.128 67.872 28.128h448c26.496 0 50.56-10.784 67.872-28.128s28.128-41.376 28.128-67.872v-448c0-26.496-10.784-50.56-28.128-67.872s-41.376-28.128-67.872-28.128h-64v-32c0-17.664-14.336-32-32-32s-32 14.336-32 32v32h-192v-32c0-17.664-14.336-32-32-32s-32 14.336-32 32zM640 288h-512v-96c0-8.832 3.552-16.8 9.376-22.624s13.792-9.376 22.624-9.376h64v32c0 17.664 14.336 32 32 32s32-14.336 32-32v-32h192v32c0 17.664 14.336 32 32 32s32-14.336 32-32v-32h64c8.832 0 16.8 3.552 22.624 9.376s9.376 13.792 9.376 22.624zM128 352h512v288c0 8.832-3.552 16.8-9.376 22.624s-13.792 9.376-22.624 9.376h-448c-8.832 0-16.8-3.552-22.624-9.376s-9.376-13.792-9.376-22.624z"></path></svg>
                            <p>~</p>
                        </div>

                        <div>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 768 768"><g id="icomoon-ignore"></g><path d="M325.4,381c-44.4,0-82.5-15.9-114.2-47.6s-47.6-69.8-47.6-114.2s15.9-82.8,47.6-115.1S281,55.7,325.4,55.7 s82.5,16.2,114.2,48.5s47.6,70.7,47.6,115.1s-15.9,82.5-47.6,114.2S369.8,381,325.4,381z"></path><g><path d="M465.3,644.7c-10.1,0-18.4,8.2-18.4,18.4c0,10.1,8.2,18.4,18.4,18.4c10.1,0,18.4-8.2,18.4-18.4 C483.7,653,475.4,644.7,465.3,644.7z"></path><path d="M465.3,447c-10.1,0-18.4,8.2-18.4,18.4c0,10.1,8.2,18.4,18.4,18.4c10.1,0,18.4-8.2,18.4-18.4 C483.7,455.2,475.4,447,465.3,447z"></path><path d="M415.9,545.9c-10.1,0-18.4,8.2-18.4,18.4c0,10.1,8.2,18.4,18.4,18.4c10.1,0,18.4-8.2,18.4-18.4 C434.2,554.1,426,545.9,415.9,545.9z"></path><path d="M564.2,694.2c-10.1,0-18.4,8.2-18.4,18.4c0,10.1,8.2,18.4,18.4,18.4c10.1,0,18.4-8.2,18.4-18.4 C582.6,702.4,574.3,694.2,564.2,694.2z"></path><path d="M564.2,434.2c10.1,0,18.4-8.2,18.4-18.4s-8.2-18.4-18.4-18.4c-10.1,0-18.4,8.2-18.4,18.4 S554.1,434.2,564.2,434.2z"></path><path d="M570.2,565.3v-83.7c0-6.7-5.5-12.2-12.2-12.2s-12.2,5.5-12.2,12.2v88.8c0,3.2,1.3,6.3,3.6,8.6l60.8,60.7 c2.3,2.3,5.4,3.6,8.6,3.6c3.2,0,6.3-1.3,8.6-3.6c4.7-4.7,4.7-12.5,0-17.2L570.2,565.3z"></path><path d="M675.5,447c-10.1,0-18.4,8.2-18.4,18.4c0,10.1,8.2,18.4,18.4,18.4c10.1,0,18.4-8.2,18.4-18.4 C693.8,455.2,685.6,447,675.5,447z"></path><path d="M663.1,644.7c-10.1,0-18.4,8.2-18.4,18.4c0,10.1,8.2,18.4,18.4,18.4s18.4-8.2,18.4-18.4 C681.5,653,673.2,644.7,663.1,644.7z"></path><path d="M564.2,360.4c-112.4,0-203.8,91.4-203.8,203.8c0,112.4,91.4,203.8,203.8,203.8C676.6,768,768,676.6,768,564.2 C768,451.8,676.6,360.4,564.2,360.4z M743.6,564.2c0,98.9-80.5,179.4-179.4,179.4s-179.4-80.5-179.4-179.4s80.5-179.4,179.4-179.4 S743.6,465.3,743.6,564.2z"></path><path d="M712.6,582.6c10.1,0,18.4-8.2,18.4-18.4c0-10.1-8.2-18.4-18.4-18.4c-10.1,0-18.4,8.2-18.4,18.4 C694.2,574.3,702.4,582.6,712.6,582.6z"></path></g><path d="M313.1,564.2c0-36,7.6-70.3,21.3-101.3c-3-0.1-6-0.1-9-0.1c-68.5,0-139.9,14.9-214.1,44.7S0,576.4,0,624.6v81.8h357.3 C329.4,666,313.1,617,313.1,564.2z"></path></svg>
                            <p>予定：0 人工 / 実績：0 人工</p>
                        </div>

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 26.25 30"><path id="locked_1_" data-name="locked (1)" d="M57.313,30H32.938A.937.937,0,0,1,32,29.063v-15a.937.937,0,0,1,.938-.937H35.75V9.375a9.375,9.375,0,0,1,18.75,0v3.75h2.813a.937.937,0,0,1,.938.938v15A.937.937,0,0,1,57.313,30ZM50.75,8.906a5.646,5.646,0,0,0-11.25,0v4.219H50.75Z" transform="translate(-32)" fill="#c2c5d9"></path></svg>
                            <p>- - -</p>
                        </div>

                        <div class = {styles.btn}>
                            <button>戻る</button>
                        </div>
                    </div>

                    <div class = {styles.message_box}>
                        <div class = {styles.message_head}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 30.049 30.049"><path id="chat-3" d="M8.492,42.452a1.96,1.96,0,1,1-1.96,1.96A1.96,1.96,0,0,1,8.492,42.452Zm6.532,0a1.96,1.96,0,1,1-1.96,1.96A1.96,1.96,0,0,1,15.025,42.452Zm6.532,0a1.96,1.96,0,1,1-1.96,1.96A1.96,1.96,0,0,1,21.557,42.452ZM26.13,32H3.919A3.924,3.924,0,0,0,0,35.919V51.6c0,2.161,2.613,2.613,3.919,2.613v7.839L15.678,54.21H26.13a3.924,3.924,0,0,0,3.919-3.919V35.919A3.924,3.924,0,0,0,26.13,32Zm1.306,18.291A1.309,1.309,0,0,1,26.13,51.6H14.371L6.532,58.13V51.6H3.919a1.309,1.309,0,0,1-1.306-1.306V35.919a1.309,1.309,0,0,1,1.306-1.306H26.13a1.309,1.309,0,0,1,1.306,1.306Z" transform="translate(0 -32)" fill="currentColor"></path></svg>
                            <p>メッセージ</p>
                        </div>

                        <div class = {styles.message_container}>
                            <div class = {styles.message_add}>
                                <p>メッセージを追加する</p>
                                <button>
                                    <svg data-name="Group 4471" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 39.463 36.905"><g id="Group_2578" data-name="Group 2578" transform="translate(26.352)"><path id="Path_311" data-name="Path 311" d="M487.341,150.676H475.57a.67.67,0,0,1-.671-.671v-.235a.67.67,0,0,1,.671-.671h11.77a.67.67,0,0,1,.671.671v.235A.67.67,0,0,1,487.341,150.676Z" transform="translate(-474.9 -143.33)" fill="currentColor"></path><path id="Path_312" data-name="Path 312" d="M572.9,63.446V51.671a.67.67,0,0,1,.671-.671h.235a.67.67,0,0,1,.67.671v11.77a.67.67,0,0,1-.67.671h-.235A.661.661,0,0,1,572.9,63.446Z" transform="translate(-567.136 -51)" fill="currentColor"></path></g><path id="chat-3" d="M7.447,41.166a1.719,1.719,0,1,1-1.719,1.719A1.718,1.718,0,0,1,7.447,41.166Zm5.729,0a1.719,1.719,0,1,1-1.719,1.719A1.718,1.718,0,0,1,13.176,41.166Zm5.729,0a1.719,1.719,0,1,1-1.719,1.719A1.718,1.718,0,0,1,18.9,41.166ZM22.915,32H3.437A3.441,3.441,0,0,0,0,35.437V49.186c0,1.9,2.291,2.291,3.437,2.291v6.874l10.312-6.874h9.166a3.441,3.441,0,0,0,3.437-3.437v-12.6A3.441,3.441,0,0,0,22.915,32ZM24.06,48.04a1.148,1.148,0,0,1-1.146,1.146H12.6L5.729,54.915V49.186H3.437A1.148,1.148,0,0,1,2.291,48.04v-12.6a1.148,1.148,0,0,1,1.146-1.146H22.915a1.148,1.148,0,0,1,1.146,1.146Z" transform="translate(0 -21.446)" fill="currentColor"></path></svg>
                                </button>
                            </div>
                                
                        </div>
                    </div>
                </div>

                <div class = {styles.menu}>
                    <div class = {styles.menu_grid}>
                        <div>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 416"><g id="icomoon-ignore"></g><path d="M480,64H352V32c0-17.6-14.4-32-32-32H192c-17.6,0-32,14.4-32,32v32H32C14.4,64,0,78.4,0,96v288c0,17.6,14.4,32,32,32h448 c17.6,0,32-14.4,32-32V96C512,78.4,497.6,64,480,64z M192,32.1L192,32.1L319.9,32c0,0,0,0,0.1,0.1V64H192V32.1L192,32.1z M480,192.1 h-64v48c0,8.8-7.2,16-16,16h-32c-8.8,0-16-7.2-16-16v-48H160v48c0,8.8-7.2,16-16,16h-32c-8.8,0-16-7.2-16-16v-48H32v-32h448V192.1z"></path></svg>
                            
                        </div>

                        <div>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 768 768"><g id="icomoon-ignore"></g><path d="M352 96h-224c-26.496 0-50.56 10.784-67.872 28.128s-28.128 41.376-28.128 67.872v448c0 26.496 10.784 50.56 28.128 67.872s41.376 28.128 67.872 28.128h448c26.496 0 50.56-10.784 67.872-28.128s28.128-41.376 28.128-67.872v-224c0-17.664-14.336-32-32-32s-32 14.336-32 32v224c0 8.832-3.552 16.8-9.376 22.624s-13.792 9.376-22.624 9.376h-448c-8.832 0-16.8-3.552-22.624-9.376s-9.376-13.792-9.376-22.624v-448c0-8.832 3.552-16.8 9.376-22.624s13.792-9.376 22.624-9.376h224c17.664 0 32-14.336 32-32s-14.336-32-32-32zM569.376 57.376l-304 304c-3.904 3.872-6.944 8.96-8.416 14.88l-32 128c-1.248 4.8-1.344 10.176 0 15.52 4.288 17.152 21.664 27.584 38.816 23.296l128-32c5.344-1.312 10.56-4.128 14.88-8.416l304-304c19.488-19.488 29.248-45.12 29.248-70.624s-9.76-51.136-29.248-70.624-45.152-29.28-70.656-29.28-51.136 9.76-70.624 29.248zM614.624 102.624c7.008-7.008 16.128-10.496 25.376-10.496s18.368 3.488 25.376 10.496 10.496 16.128 10.496 25.376-3.488 18.368-10.496 25.376l-297.728 297.728-67.648 16.928 16.928-67.648z"></path></svg>
                            <p>案件編集</p>
                            
                        </div>

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 16 21"><path id="map-pin" d="M7.5,0A7.516,7.516,0,0,0,0,7.514c0,6.2,7,12.162,7.3,12.412a.312.312,0,0,0,.4,0c.3-.246,7.3-6.1,7.3-12.415A7.516,7.516,0,0,0,7.5,0Zm0,19.274C6.351,18.246.625,12.862.625,7.514a6.875,6.875,0,1,1,13.75,0C14.375,12.952,8.655,18.259,7.5,19.274ZM7.5,3.75A3.75,3.75,0,1,0,11.25,7.5,3.754,3.754,0,0,0,7.5,3.75Zm0,6.875A3.125,3.125,0,1,1,10.625,7.5,3.129,3.129,0,0,1,7.5,10.625Z" transform="translate(0.5 0.5)" fill="currentColor" stroke="currentColor" stroke-width="1"></path></svg>
                            <p>MAP</p>
                            
                        </div>

                        <div>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 768 768"><g id="icomoon-ignore"></g><path d="M224 64v32h-64c-26.496 0-50.56 10.784-67.872 28.128s-28.128 41.376-28.128 67.872v448c0 26.496 10.784 50.56 28.128 67.872s41.376 28.128 67.872 28.128h448c26.496 0 50.56-10.784 67.872-28.128s28.128-41.376 28.128-67.872v-448c0-26.496-10.784-50.56-28.128-67.872s-41.376-28.128-67.872-28.128h-64v-32c0-17.664-14.336-32-32-32s-32 14.336-32 32v32h-192v-32c0-17.664-14.336-32-32-32s-32 14.336-32 32zM640 288h-512v-96c0-8.832 3.552-16.8 9.376-22.624s13.792-9.376 22.624-9.376h64v32c0 17.664 14.336 32 32 32s32-14.336 32-32v-32h192v32c0 17.664 14.336 32 32 32s32-14.336 32-32v-32h64c8.832 0 16.8 3.552 22.624 9.376s9.376 13.792 9.376 22.624zM128 352h512v288c0 8.832-3.552 16.8-9.376 22.624s-13.792 9.376-22.624 9.376h-448c-8.832 0-16.8-3.552-22.624-9.376s-9.376-13.792-9.376-22.624z"></path></svg>
                            <p>工程表編集</p>
                        </div>

                        <div>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 768 768"><g id="icomoon-ignore"></g><path d="M352 96h-224c-26.496 0-50.56 10.784-67.872 28.128s-28.128 41.376-28.128 67.872v448c0 26.496 10.784 50.56 28.128 67.872s41.376 28.128 67.872 28.128h448c26.496 0 50.56-10.784 67.872-28.128s28.128-41.376 28.128-67.872v-224c0-17.664-14.336-32-32-32s-32 14.336-32 32v224c0 8.832-3.552 16.8-9.376 22.624s-13.792 9.376-22.624 9.376h-448c-8.832 0-16.8-3.552-22.624-9.376s-9.376-13.792-9.376-22.624v-448c0-8.832 3.552-16.8 9.376-22.624s13.792-9.376 22.624-9.376h224c17.664 0 32-14.336 32-32s-14.336-32-32-32zM569.376 57.376l-304 304c-3.904 3.872-6.944 8.96-8.416 14.88l-32 128c-1.248 4.8-1.344 10.176 0 15.52 4.288 17.152 21.664 27.584 38.816 23.296l128-32c5.344-1.312 10.56-4.128 14.88-8.416l304-304c19.488-19.488 29.248-45.12 29.248-70.624s-9.76-51.136-29.248-70.624-45.152-29.28-70.656-29.28-51.136 9.76-70.624 29.248zM614.624 102.624c7.008-7.008 16.128-10.496 25.376-10.496s18.368 3.488 25.376 10.496 10.496 16.128 10.496 25.376-3.488 18.368-10.496 25.376l-297.728 297.728-67.648 16.928 16.928-67.648z"></path></svg>
                            <p>写真・報告書</p>
                        </div>

                        <div>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 768 768"><g id="icomoon-ignore"></g><path d="M528 192h48v367.5q0 73.5-51 125.25t-124.5 51.75-125.25-51.75-51.75-125.25v-399q0-52.5 38.25-90.75t90.75-38.25 90 38.25 37.5 90.75v336q0 33-23.25 56.25t-56.25 23.25-57-23.25-24-56.25v-304.5h48v304.5q0 13.5 9.75 22.5t23.25 9 22.5-9 9-22.5v-336q0-33-23.25-57t-56.25-24-57 24-24 57v399q0 52.5 38.25 90.75t90.75 38.25 90-38.25 37.5-90.75v-367.5z"></path></svg>
                            <p>資料</p>
                        </div>

                        <div>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 512"><g id="icomoon-ignore"></g><path d="M458.903 114.538c-11.106-15.146-26.587-32.85-43.589-49.852s-34.706-32.482-49.852-43.589c-25.787-18.91-38.296-21.097-45.462-21.097h-248c-22.056 0-40 17.944-40 40v432c0 22.056 17.944 40 40 40h368c22.056 0 40-17.944 40-40v-312c0-7.166-2.186-19.675-21.097-45.462zM392.687 87.313c15.35 15.35 27.4 29.199 36.29 40.687h-76.977v-76.973c11.492 8.89 25.339 20.939 40.687 36.286zM448 472c0 4.336-3.664 8-8 8h-368c-4.336 0-8-3.664-8-8v-432c0-4.336 3.664-8 8-8 0 0 247.978-0.001 248 0v112c0 8.836 7.163 16 16 16h112v312z"></path><path d="M368 416h-224c-8.836 0-16-7.163-16-16s7.164-16 16-16h224c8.837 0 16 7.163 16 16s-7.163 16-16 16z"></path><path d="M368 352h-224c-8.836 0-16-7.163-16-16s7.164-16 16-16h224c8.837 0 16 7.163 16 16s-7.163 16-16 16z"></path><path d="M368 288h-224c-8.836 0-16-7.163-16-16s7.164-16 16-16h224c8.837 0 16 7.163 16 16s-7.163 16-16 16z"></path></svg>
                            <p>日報</p>
                        </div>
                    </div>

                </div>
            </div>    
        </div>
     );
}
 
export default Modal;