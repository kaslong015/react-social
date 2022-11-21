import './leftbar.scss';

import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";

const LeftBar = () => {
	return (
		<div className="leftbar">
			<div className="container">
				<div className="menu">
					<div className="user">
						<img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" srcset="" />
						<span>John Doe</span>
					</div>
					<div className="item">
						<img src={Friends} alt="" srcset="" />
						<span>Friends</span>
					</div>
					<div className="item">
						<img src={Groups} alt="" srcset="" />
						<span>Groups</span>
					</div>
					<div className="item">
						<img src={Market} alt="" srcset="" />
						<span>Market</span>
					</div>
					<div className="item">
						<img src={Watch} alt="" srcset="" />
						<span>Watch</span>
					</div>
					<div className="item">
						<img src={Memories} alt="" srcset="" />
						<span>Memories</span>
					</div>
				</div>
				<hr />
				<div className="menu">
					<span>your shortcut</span>
					<div className="item">
						<img src={Events} alt="" srcset="" />
						<span>Events</span>
					</div>
					<div className="item">
						<img src={Gaming} alt="" srcset="" />
						<span>Gaming</span>
					</div>
					<div className="item">
						<img src={Gallery} alt="" srcset="" />
						<span>Gallery</span>
					</div>
					<div className="item">
						<img src={Videos} alt="" srcset="" />
						<span>Video</span>
					</div>
					<div className="item">
						<img src={Messages} alt="" srcset="" />
						<span>Messages</span>
					</div>
				</div>
				<hr />
				<div className="menu">
					<span>Others</span>

					<div className="item">
						<img src={Fund} alt="" srcset="" />
						<span>Fundraiser</span>
					</div>
					<div className="item">
						<img src={Tutorials} alt="" srcset="" />
						<span>Tutorials</span>
					</div>
					<div className="item">
						<img src={Courses} alt="" srcset="" />
						<span>Courses</span>
					</div>
					<div className="item">
						<img src={Courses} alt="" srcset="" />
						<span>Courses</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LeftBar