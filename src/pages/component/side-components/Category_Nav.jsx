import CategoryNav from '../../styles/CategoryNav.module.css'

const Category_Nav = () => {
    return ( 
        <>
            <div className={CategoryNav.Nav_buttons}>
                <div className={CategoryNav.Nav_buttons_Pages}>
                    <button className={CategoryNav.NavBtn_Fst}><svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 416"><g id="icomoon-ignore"></g><path d="M480,64H352V32c0-17.6-14.4-32-32-32H192c-17.6,0-32,14.4-32,32v32H32C14.4,64,0,78.4,0,96v288c0,17.6,14.4,32,32,32h448 c17.6,0,32-14.4,32-32V96C512,78.4,497.6,64,480,64z M192,32.1L192,32.1L319.9,32c0,0,0,0,0.1,0.1V64H192V32.1L192,32.1z M480,192.1 h-64v48c0,8.8-7.2,16-16,16h-32c-8.8,0-16-7.2-16-16v-48H160v48c0,8.8-7.2,16-16,16h-32c-8.8,0-16-7.2-16-16v-48H32v-32h448V192.1z"></path></svg>全現場<span>12件</span></button>
                    <button className={CategoryNav.NavBtn_2nd}><svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 16 21"><path id="map-pin" d="M7.5,0A7.516,7.516,0,0,0,0,7.514c0,6.2,7,12.162,7.3,12.412a.312.312,0,0,0,.4,0c.3-.246,7.3-6.1,7.3-12.415A7.516,7.516,0,0,0,7.5,0Zm0,19.274C6.351,18.246.625,12.862.625,7.514a6.875,6.875,0,1,1,13.75,0C14.375,12.952,8.655,18.259,7.5,19.274ZM7.5,3.75A3.75,3.75,0,1,0,11.25,7.5,3.754,3.754,0,0,0,7.5,3.75Zm0,6.875A3.125,3.125,0,1,1,10.625,7.5,3.129,3.129,0,0,1,7.5,10.625Z" transform="translate(0.5 0.5)" fill="currentColor" stroke="currentColor" stroke-width="1"></path></svg><a href="pageview_map.html" >施工中</a> <span>2 件</span></button>
                </div>
                <button className={CategoryNav.Filter_mobile}><svg xmlns="http://www.w3.org/2000/svg" height="1.7em" fill="currentColor" viewBox="0 0 20 18.181"><path d="M49.131,65.818l-6.008,7.1a.9.9,0,0,0-.215.587V79.8l-1.818-.909V73.508a.905.905,0,0,0-.215-.587l-6.008-7.1ZM51.09,64H32.909a.91.91,0,0,0-.695,1.5l7.058,8.345v5.613a.909.909,0,0,0,.5.813l3.636,1.818a.908.908,0,0,0,1.315-.813V73.841L51.785,65.5A.91.91,0,0,0,51.09,64Z" transform="translate(-32 -64)"></path></svg><span>絞り込む</span><svg xmlns="http://www.w3.org/2000/svg" height="0.7em" fill="currentColor" viewBox="0 0 11.414 6.414"><path data-name="Path 193" d="M0,5,5,0l5,5" transform="translate(10.707 5.707) rotate(180)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1"></path></svg></button>
            </div>
        </>
     );
}
 
export default Category_Nav;