import FilterBar from "./component/Filterbar";
import Listtable from "./component/Listtable";
import Navbar from "./component/Navbar";
import SideBar from "./component/Sidebar";
import styles from '../styles/Home.module.css'

const Home = () => {
  return (  
    <>
    <div class = {styles.container}>
      <Navbar/>
      <div class = {styles.main_div}>
        <SideBar/>
        <Listtable/>
        <FilterBar/>
      </div>
    </div>
    </>
  );
}
 
export default Home;