import './toolbar.css';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
const Toolbar = () => {
    return (
        <div className= "toolbarContainer">
            <div className="toolbarLeft">
                <span className="logo">LamaSocial</span>
            </div>
            <div className="toolbarCenter">
                <div className="searchBar">
                    <SearchIcon className="searchIcon"/>
                    <input placeholder="Search for friends post , or any video" className="searchInput" />
                </div>
            </div>
            <div className="toolbarRight">
                <div className="toolbarLinks">
                    <span className="toolbarLink">Homepage</span>
                    <span className="toolbarLink">Timeline</span>
                </div>
                <div className="toolbarIcons">
                    <div className="toolbarIconItem">
                        <PersonIcon/>
                        <span className="toolbarIconBadge">1</span>
                    </div>
                    <div className="toolbarIconItem">
                        <ChatIcon/>
                        <span className="toolbarIconBadge">1</span>
                    </div><div className="toolbarIconItem">
                        <NotificationsIcon/>
                        <span className="toolbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/2.jpeg" alt="hi" className="toolbarImg" />
            </div>

        </div>
    )
}

export default Toolbar
