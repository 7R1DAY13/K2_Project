import React,{useState,useEffect} from 'react';
import list_table from '../../../styles/main-component-styles/Listtable.module.css'
import ModalBox from '../modal-boxes/modalbox.jsx';
const Item_List = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
        console.log("Phin kyee dl")
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <>
            <div className={list_table.list_table} onClick={openModal}>
                <div>
                    <ul className={list_table.list_table_ul}>
                        <li className={list_table.item_1}><p className={list_table.fst_row_list}>佐藤スプリング</p></li>
                        <li className={list_table.item_2}><svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 352 448"><g id="icomoon-ignore"></g><path d="M96 328v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM96 264v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM160 264v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM96 200v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM288 328v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM224 264v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM160 200v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM96 136v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM288 264v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM224 200v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM160 136v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM96 72v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM288 200v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM224 136v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM160 72v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM288 136v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM224 72v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM288 72v16c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8zM224 416h96v-384h-288v384h96v-56c0-4.25 3.75-8 8-8h80c4.25 0 8 3.75 8 8v56zM352 16v416c0 8.75-7.25 16-16 16h-320c-8.75 0-16-7.25-16-16v-416c0-8.75 7.25-16 16-16h320c8.75 0 16 7.25 16 16z"></path></svg><p>坂本塗装株式会社</p></li>
                        <li className={list_table.item_3}><svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 20 20"><path d="M137.5,140.015a17.622,17.622,0,0,1,6.579,1.374q3.421,1.374,3.421,3.6V147.5h-20v-2.515q0-2.222,3.421-3.6A17.622,17.622,0,0,1,137.5,140.015Zm0-2.515a4.992,4.992,0,0,1-4.971-4.971,4.882,4.882,0,0,1,1.462-3.538,4.874,4.874,0,0,1,7.018,0,4.882,4.882,0,0,1,1.462,3.538A4.992,4.992,0,0,1,137.5,137.5Z" transform="translate(-127.5 -127.5)"></path></svg><p>秦寿夫</p></li>
                        <li className={list_table.item_4}><svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 768 768"><g id="icomoon-ignore"></g><path d="M224 64v32h-64c-26.496 0-50.56 10.784-67.872 28.128s-28.128 41.376-28.128 67.872v448c0 26.496 10.784 50.56 28.128 67.872s41.376 28.128 67.872 28.128h448c26.496 0 50.56-10.784 67.872-28.128s28.128-41.376 28.128-67.872v-448c0-26.496-10.784-50.56-28.128-67.872s-41.376-28.128-67.872-28.128h-64v-32c0-17.664-14.336-32-32-32s-32 14.336-32 32v32h-192v-32c0-17.664-14.336-32-32-32s-32 14.336-32 32zM640 288h-512v-96c0-8.832 3.552-16.8 9.376-22.624s13.792-9.376 22.624-9.376h64v32c0 17.664 14.336 32 32 32s32-14.336 32-32v-32h192v32c0 17.664 14.336 32 32 32s32-14.336 32-32v-32h64c8.832 0 16.8 3.552 22.624 9.376s9.376 13.792 9.376 22.624zM128 352h512v288c0 8.832-3.552 16.8-9.376 22.624s-13.792 9.376-22.624 9.376h-448c-8.832 0-16.8-3.552-22.624-9.376s-9.376-13.792-9.376-22.624z"></path></svg><p>~</p></li>
                    </ul>
                </div>
                <div className={list_table.list_status}>
                    <li ><span >施工中</span><div className={list_table.backarrow_li}></div></li>
                </div>
            </div>
            
            {  isModalOpen && <ModalBox closeModal={closeModal} />}
        </>
      );
}
 
export default Item_List;