import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";


import { FaArrowLeft } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import {useAuth} from "../../contexts/auth.context.jsx";

const ProfilePage = () => {
	const {account} = useAuth();
	return (
		<div className='flex-[3_3_0] border-r border-gray-700'>
			{/* HEADER */}
			<div className='flex flex-col'>
				<h2>{account?.name}</h2>
			</div>
		</div>
	);
};

export default ProfilePage;
