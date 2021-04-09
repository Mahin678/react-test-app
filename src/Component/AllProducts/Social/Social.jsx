import React from 'react';
import instagram from '../../../assets/instagram (1).png';
import youtube from '../../../assets/005-youtube.png';
import facebook from '../../../assets/002-facebook-logo.png';
import Twiteer from '../../../assets/001-twitter-logo-silhouette.png';
import Linkedin from '../../../assets/004-linkedin-logo.png';
import './Social.scss';
const Social = () => {
	return (
		<div className="social">
			<div className="social--content">
				<img src={instagram} alt="icon" />
				<img src={youtube} alt="icon" />
				<img src={facebook} alt="icon" />
				<img src={Twiteer} alt="icon" />
				<img src={instagram} alt="icon" />
				<img src={Linkedin} alt="icon" />
			</div>
		</div>
	);
};

export default Social;
