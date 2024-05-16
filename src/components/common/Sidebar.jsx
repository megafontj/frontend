import XSvg from "../svgs/X";

import { MdHomeFilled } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import {useAuth} from "../../contexts/auth.context.jsx";
import {useEffect} from "react";
import http from "../../api/http.js";
import {API_ROUTES} from "../../api/api_routes.js";


const Sidebar = () => {
	const {account, setAccountInfo} = useAuth();

	useEffect(() => {
		const getAccount = async () => {
			const response = await http.get(API_ROUTES.GET_ACCOUNT);
			setAccountInfo(response.data.data);
		}
		getAccount();
	}, []);

	return (
		<div className='md:flex-[2_2_0] w-18 max-w-52'>
			<div className='sticky top-0 left-0 h-screen flex flex-col border-r border-gray-700 w-20 md:w-full'>
				<Link to='/' className='flex justify-center items-center md:justify-start'>
					<XSvg className='px-2 w-12 h-12 rounded-full fill-white hover:bg-stone-900' />
					<span className='font-bold text-lg'>{account?.name}</span>
				</Link>
				<ul className='flex flex-col gap-3 mt-4'>
					<li className='flex justify-center md:justify-start'>
						<Link
							to='/'
							className='flex gap-3 items-center hover:bg-stone-900 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer'
						>
							<MdHomeFilled className='w-8 h-8' />
							<span className='text-lg hidden md:block'>Главная</span>
						</Link>
					</li>
					<li className='flex justify-center md:justify-start'>
						<Link
							to='/notifications'
							className='flex gap-3 items-center hover:bg-stone-900 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer'
						>
							<IoNotifications className='w-6 h-6' />
							<span className='text-lg hidden md:block'>Увидомления</span>
						</Link>
					</li>

					<li className='flex justify-center md:justify-start'>
						<Link
							to={`/profile`}
							className='flex gap-3 items-center hover:bg-stone-900 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer'
						>
							<FaUser className='w-6 h-6' />
							<span className='text-lg hidden md:block'>Профиль</span>
						</Link>
					</li>
					<li className='flex ml-1 gap-3 justify-center md:justify-start cursor-pointer'>
						<BiLogOut className='w-6 h-6' />
						<span className='text-lg hidden md:block'>Выход</span>
					</li>
				</ul>
				{account && (
					<Link
						to={`/profile/`}
						className='mt-auto mb-10 flex gap-2 items-start transition-all duration-300 hover:bg-[#181818] py-2 px-4 rounded-full'
					>
						<div className='avatar hidden md:inline-flex'>
							<div className='w-8 rounded-full'>
								<img src={"/avatar-placeholder.png"} />
							</div>
						</div>
						<div className='flex justify-between flex-1'>
							<div className='hidden md:block'>
								<p className='text-white font-bold text-sm w-20 truncate'>{account?.name}</p>
								<p className='text-slate-500 text-sm'>@{account?.username}</p>
							</div>
						</div>
					</Link>
				)}
			</div>
		</div>
	);
};
export default Sidebar;
