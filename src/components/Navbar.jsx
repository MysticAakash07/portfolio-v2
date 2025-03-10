import logo from "../assets/kevinRushLogo.png"
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
const Navbar = () => {
	return (
		<nav className="mb-20 flex items-center justify-between py-6">
			<div className="flex flex-shirnk-0 items-center">
				<img className="mx-2 w-10" src={logo} alt="" />
			</div>
			<div className="mg-8 flex justify-center items-center gap-4 text-2xl">
				<FaLinkedin className="" />
				<FaGithub />
				<FaCode />
				<FaInstagram />
			</div>
		</nav>
	);
};

export default Navbar;
