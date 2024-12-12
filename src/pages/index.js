import FilterBar from "./component/Filterbar";
import Listtable from "./component/Listtable";
import Navbar from "./component/Navbar";
import SideBar from "./component/Sidebar";
import styles from '../styles/Home.module.css'
import Searchbar from "./component/Searchbar";

const Home = () => {
  return (  
    <>
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