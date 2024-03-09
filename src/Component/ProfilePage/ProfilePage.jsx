import Info  from "../Info";
import Education  from "../Education";
import About  from "../About";
import Skill  from "../Skill";
import Profile from "../Profile";
import Header from "../Header";
import React , { useCallback, useEffect, useState } from "react";
import {  useSelector, useDispatch  } from "react-redux";
import { useGetUserData , useUpdateUserData } from "../../queryUtils/queryUtils";
const ProfilePage = () => {

	const userId = useSelector(state => state.user.userId);
	const dispatch = useDispatch();
	//eslint-disable-next-line
  const [isDialogOpenAbout, setIsDialogOpenAbout] = useState(false);
	const [isDialogOpenInfo, setIsDialogOpenInfo] = useState(false);
	const [isDialogOpenSkill, setIsDialogOpenSkill] = useState(false);
	const [isDialogOpenEducation, setIsDialogOpenEducation] = useState(false);


	const {
		data  : retrieveData
	} = useGetUserData(userId);
	const [educationDetails, setEducationDetails] = useState({
		instituteName: "",
		specification: "",
		yoj: "",
		yoe: "",
		grade: "",
		activity: "",
		Name:"",
		state:"",
		district:"",
		skill :"",
		language:""
	});

	// useEffect(() => {
	// 	//eslint-disable-next-line
	// 	console.log("data from profile Page:", retrieveData?.data);
	// 	const newData = retrieveData?.data;
	// setEducationDetails(prevState => ({
	// 	...prevState,
	// 	instituteName: newData.instituteName || "",
	// 	specification: newData.specification || "",
	// 	yoj: newData.yoj || "",
	// 	yoe: newData.yoe || "",
	// 	grade: newData.grade || "",
	// 	activity: newData.activity || "",
	// 	Name: newData.Name || "",
	// 	state: newData.state || "",
	// 	district: newData.district || "",
	// 	skill: newData.skill || "",
	// 	language: newData.language || ""
	// }));
	// }, [retrieveData?.data]);

	const {
		mutate: createUserData,
		data: createdUserData
	} = useUpdateUserData();

	const handleSave = useCallback(fieldKey => () => {
		if(fieldKey==="About") {
			dispatch({ type: "ADD_ABOUT", payload: educationDetails });
			setIsDialogOpenAbout(false);
		}else if(fieldKey==="Info") {
			dispatch({ type: "ADD_INFO", payload: educationDetails });
			setIsDialogOpenInfo(false);
		}else if(fieldKey==="Education") {
			dispatch({ type: "ADD_EDUCATION", payload: educationDetails });
			setIsDialogOpenEducation(false);
		}else if(fieldKey==="Skill") {
			dispatch({ type: "ADD_Skill", payload: educationDetails });
			setIsDialogOpenSkill(false);
		}
		//eslint-disable-next-line
		console.log('userID ' , userId ,  " lkdfm " , educationDetails);
		createUserData(userId , educationDetails);
	},[
		dispatch,
		setIsDialogOpenAbout,
		setIsDialogOpenInfo,
		setIsDialogOpenSkill,
		setIsDialogOpenEducation,
		educationDetails,
		createUserData,
		userId
	]);

	const handleAdd = useCallback((fieldKey) => () => {
		//eslint-disable-next-line
    console.log("fieldKey profile page : ", fieldKey);

		if (fieldKey === "About") {
			setIsDialogOpenAbout(true);
		}else if (fieldKey === "Info") {
			setIsDialogOpenInfo(true);
		}else if (fieldKey === "Education") {
			setIsDialogOpenEducation(true);
		}else if (fieldKey === "Skill") {
			setIsDialogOpenSkill(true);
		}
	}, [setIsDialogOpenAbout,setIsDialogOpenInfo,setIsDialogOpenEducation,setIsDialogOpenSkill]);


	const handleCloseDialog = useCallback(fieldKey => () => {
		if(fieldKey==="About") {
			setIsDialogOpenAbout(false);
		}else if(fieldKey==="Info") {
			setIsDialogOpenInfo(false);
		}else if(fieldKey==="Education") {
			setIsDialogOpenEducation(false);
		}else if(fieldKey==="Skill") {
			setIsDialogOpenSkill(false);
		}
	} , [setIsDialogOpenAbout,setIsDialogOpenInfo , setIsDialogOpenEducation,setIsDialogOpenSkill]);



	const language  = "English";
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setEducationDetails((prevDetails) => ({
			...prevDetails,
			[name]: value
		}));
	};

	// eslint-disable-next-line
	console.log('educationDetails : ' , educationDetails);


	return (
		<>
			<Header/>
			<Profile language={language}/>
			<About
				educationDetails={educationDetails}
				handleInputChange={handleInputChange}
				handleSave={handleSave}
				handleAdd={handleAdd}
				handleCloseDialog={handleCloseDialog}
				isDialogOpen={isDialogOpenAbout}
			/>
			<Education
				educationDetails={educationDetails}
				handleInputChange={handleInputChange}
				handleSave={handleSave}
				handleAdd={handleAdd}
				handleCloseDialog={handleCloseDialog}
				isDialogOpen={isDialogOpenEducation}
			/>
			<Info
				educationDetails={educationDetails}
				handleInputChange={handleInputChange}
				handleSave={handleSave}
				handleAdd={handleAdd}
				handleCloseDialog={handleCloseDialog}
				isDialogOpen={isDialogOpenInfo}
			/>
			<Skill
				educationDetails={educationDetails}
				handleInputChange={handleInputChange}
				handleSave={handleSave}
				handleAdd={handleAdd}
				handleCloseDialog={handleCloseDialog}
				isDialogOpen={isDialogOpenSkill}
			/>
		</>
	);
};

export default ProfilePage;