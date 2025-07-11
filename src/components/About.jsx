import aboutImg from "../assets/AakashWorking.svg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react";

const About = () => {
	return (
		<div className="border-b border-neutral-900 pb-4">
			<h1 className="my-20 text-center text-4xl">
				About <span className="text-neutral-500">Me</span>
			</h1>
			<div className="flex flex-wrap">
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -100 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="w-full lg:w-1/2 lg:p-8"
				>
					<div className="flex items-center justify-center">
						<img
							className="rounded-2xl"
							width={500}
							height={500}
							src={aboutImg}
							alt=""
						/>
					</div>
				</motion.div>
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 100 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="w-full lg:w-1/2 lg:p-8"
				>
					<div className="flex justify-center lg:justify-start items-center h-[100%] ">
						<p className="my-2 max-w-l font-light">{ABOUT_TEXT}</p>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
