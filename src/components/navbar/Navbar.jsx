import './navbar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { EmailOutlined, NotificationsOutlined, PersonOutlined, WbSunnyOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";


const Navbar = () => {

    const { toggle, darkMode } = useContext(DarkModeContext);

    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span>lemaSocial</span>
                </Link>
                <HomeOutlinedIcon />
                {darkMode ? (
                <WbSunnyOutlinedIcon onClick={toggle} />
               ) : (
              <DarkModeOutlinedIcon onClick={toggle} />
               )}

                <GridViewOutlinedIcon />
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="search..." />
                </div>
            </div>
            <div className="right">
                <PersonOutlined />
                <EmailOutlined />
                <NotificationsOutlined />
                <div className="user">
                    <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" srcset="" />
                    <span>John Doe</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar