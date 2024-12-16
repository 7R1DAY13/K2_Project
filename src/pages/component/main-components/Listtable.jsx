import list_table from '../../../styles/main-component-styles/Listtable.module.css'
import Category_Nav from '../side-components/Category_Nav';
import Item_List from '../side-components/Item_List';

const items = Array(30).fill(null);

const Listtable = () => {


    return ( 
        <>
        <div className={list_table.Item_List}>
            <Category_Nav/> 
            {items.map((_, index) => ( <Item_List  key={index} />))}
            <div className={list_table.add_btn}>
                <button>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 670 557.5" height="1em" fill="currentColor"><g id="icomoon-ignore"></g><path d="M480,205.4H352v-32c0-17.6-14.4-32-32-32H192c-17.6,0-32,14.4-32,32v32H32c-17.6,0-32,14.4-32,32v288c0,17.6,14.4,32,32,32 h448c17.6,0,32-14.4,32-32v-288C512,219.8,497.6,205.4,480,205.4z M192,173.5C192,173.5,192,173.5,192,173.5l127.9-0.1 c0,0,0,0,0.1,0.1v31.9H192L192,173.5L192,173.5z M480,333.5h-64v48c0,8.8-7.2,16-16,16h-32c-8.8,0-16-7.2-16-16v-48H160v48 c0,8.8-7.2,16-16,16h-32c-8.8,0-16-7.2-16-16v-48H32v-32h448V333.5z"></path><g><path d="M658.6,124.9H458.5c-6.3,0-11.4-5.1-11.4-11.4v-4c0-6.3,5.1-11.4,11.4-11.4h200.1c6.3,0,11.4,5.1,11.4,11.4v4 C670,119.8,664.9,124.9,658.6,124.9z"></path><path d="M545.1,211.5V11.4c0-6.3,5.1-11.4,11.4-11.4h4c6.3,0,11.4,5.1,11.4,11.4v200.1c0,6.3-5.1,11.4-11.4,11.4h-4 C550.2,222.9,545.1,217.8,545.1,211.5z"></path></g></svg>
                </button>
            </div>

        </div>
        </>
     );
}
 
export default Listtable;