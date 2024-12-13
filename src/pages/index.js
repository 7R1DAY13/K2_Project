import FilterBar from "./component/Filterbar";
import Listtable from "./component/Listtable";
import Navbar from "./component/Navbar";
import SideBar from "./component/Sidebar";
import styles from '../styles/Home.module.css'
import Searchbar from "./component/Searchbar";
import Head from "next/head";
const Home = () => {
  return (  
    <>
     <Head>
          <title>案件一覧</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/案件一覧-Google-Chrome-11_21_2024-8_51_27-AM.ico" />
    </Head>
      <div class = {styles.container}>
          <Navbar/>
          <div class = {styles.main_div}>
            <Searchbar/>
            <SideBar/>
            <Listtable/>
            <FilterBar/>
          </div>
      </div>
    </>
  );
}
 
export default Home;