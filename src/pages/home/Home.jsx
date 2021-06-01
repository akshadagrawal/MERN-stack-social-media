import Sidebar from "../../components/sidebar/Sidebar"
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed";
import './home.css'
import Toolbar from "../../components/toolbar/Toolbar";

const Home = () => {
    return (
        <div>
            <Toolbar/>
            <div className="homeContainer">
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </div>
            
        </div>
    )
}

export default Home
