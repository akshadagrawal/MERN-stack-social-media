import React from 'react'
import './sidebar.css';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ChatIcon from '@material-ui/icons/Chat';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import GroupIcon from '@material-ui/icons/Group';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import HelpIcon from '@material-ui/icons/Help';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import WorkIcon from '@material-ui/icons/Work';
import EventIcon from '@material-ui/icons/Event';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeedIcon className= "sidebarIcon"/>
                        <span className="sidebarListItemtext">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatIcon className= "sidebarIcon"/>
                        <span className="sidebarListItemtext">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <VideoLibraryIcon className= "sidebarIcon"/>
                        <span className="sidebarListItemtext">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupIcon className= "sidebarIcon"/>
                        <span className="sidebarListItemtext">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarkIcon className= "sidebarIcon"/>
                        <span className="sidebarListItemtext">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpIcon className= "sidebarIcon"/>
                        <span className="sidebarListItemtext">Help</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkIcon className= "sidebarIcon"/>
                        <span className="sidebarListItemtext">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <EventIcon className= "sidebarIcon"/>
                        <span className="sidebarListItemtext">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <EmojiEventsIcon className= "sidebarIcon"/>
                        <span className="sidebarListItemtext">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/assets/person/1.jpeg" alt="/" className="sidebarFriendImg" />
                        <spm className="sidebarFriendName">Jane Doe</spm>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/3.jpeg" alt="/" className="sidebarFriendImg" />
                        <spm className="sidebarFriendName">Jane Doe</spm>
                    </li> <li className="sidebarFriend">
                        <img src="/assets/person/4.jpeg" alt="/" className="sidebarFriendImg" />
                        <spm className="sidebarFriendName">Jane Doe</spm>
                    </li> <li className="sidebarFriend">
                        <img src="/assets/person/5.jpeg" alt="/" className="sidebarFriendImg" />
                        <spm className="sidebarFriendName">Jane Doe</spm>
                    </li> <li className="sidebarFriend">
                        <img src="/assets/person/6.jpeg" alt="/" className="sidebarFriendImg" />
                        <spm className="sidebarFriendName">Jane Doe</spm>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/1.jpeg" alt="/" className="sidebarFriendImg" />
                        <spm className="sidebarFriendName">Jane Doe</spm>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/3.jpeg" alt="/" className="sidebarFriendImg" />
                        <spm className="sidebarFriendName">Jane Doe</spm>
                    </li> <li className="sidebarFriend">
                        <img src="/assets/person/4.jpeg" alt="/" className="sidebarFriendImg" />
                        <spm className="sidebarFriendName">Jane Doe</spm>
                    </li> <li className="sidebarFriend">
                        <img src="/assets/person/5.jpeg" alt="/" className="sidebarFriendImg" />
                        <spm className="sidebarFriendName">Jane Doe</spm>
                    </li> <li className="sidebarFriend">
                        <img src="/assets/person/6.jpeg" alt="/" className="sidebarFriendImg" />
                        <spm className="sidebarFriendName">Jane Doe</spm>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/1.jpeg" alt="/" className="sidebarFriendImg" />
                        <spm className="sidebarFriendName">Jane Doe</spm>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/3.jpeg" alt="/" className="sidebarFriendImg" />
                        <spm className="sidebarFriendName">Jane Doe</spm>
                    </li> <li className="sidebarFriend">
                        <img src="/assets/person/4.jpeg" alt="/" className="sidebarFriendImg" />
                        <spm className="sidebarFriendName">Jane Doe</spm>
                    </li> <li className="sidebarFriend">
                        <img src="/assets/person/5.jpeg" alt="/" className="sidebarFriendImg" />
                        <spm className="sidebarFriendName">Jane Doe</spm>
                    </li> <li className="sidebarFriend">
                        <img src="/assets/person/6.jpeg" alt="/" className="sidebarFriendImg" />
                        <spm className="sidebarFriendName">Jane Doe</spm>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar
