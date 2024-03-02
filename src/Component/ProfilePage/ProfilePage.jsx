import React from "react";

import Header from "../Header";
import Profile from "../Profile";
import About from "../About";
import Info from "../Info";
import Education from "../Education";
import Skill from "../Skill";

const ProfilePage = () => {
	return (
		<>
			<Header/>
			<Profile/>
			<Info/>
			<About/>
			<Education/>
			<Skill/>
		</>
	);
};

export default ProfilePage;