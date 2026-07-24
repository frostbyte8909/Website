import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import TheTeam from "../../public/theteam.png";
import DiscordLogo from "../../public/discord.png";
import DiscordLogoHover from "../../public/discord-hover.png";
import { motion } from "framer-motion";
import {
	ChevronDown,
	Figma,
	Github,
	Globe,
	Instagram,
	Linkedin,
} from "lucide-react";
import { achievements } from "./achievements";
import { teamMembers } from "./teamMembers";
import { alumniMembers } from "./alumniMembers";

export function MainPageComponent() {
	const [showAlumni, setShowAlumni] = useState(false);
	const [showAllMembers, setShowAllMembers] = useState(false);
	const [showAllAlumni] = useState(true);
	
	const carouselRef = useRef<HTMLDivElement>(null);
	const { ref: startRef, inView: startInView } = useInView();
	const { ref: endRef, inView: endInView } = useInView();

	useEffect(() => {
		if (startInView && carouselRef.current) {
			carouselRef.current.scrollLeft = carouselRef.current.scrollWidth / 3;
		}
	}, [startInView]);

	useEffect(() => {
		if (endInView && carouselRef.current) {
			carouselRef.current.scrollLeft = carouselRef.current.scrollWidth / 3;
		}
	}, [endInView]);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	return (
		<div className="min-h-screen bg-[#101010] text-[#FCFCFC]">
			{/* BOT 2K26 Banner */}
			<div className="bg-[#101010] text-[#9AFF27] py-2 px-4 text-center text-sm font-medium border-b border-[#333]">
				BOT 2K26 - Our Annual Tech Fest |{" "}
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSd5JjjyRFfEuKRXaZETUpV0PJjckfFd5SB3ie59vN-Pf0tIjg/viewform?usp=send_form"
					target="_blank"
					rel="noopener noreferrer"
					className="underline hover:no-underline text-[#9AFF27]"
				>
					Register Now
				</a>
			</div>

			{/* Cryptic Hunt Banner */}
			<div className="bg-[#101010] text-[#9AFF27] py-2 px-4 text-center text-sm font-medium border-b border-[#333]">
				Register for the 2nd edition of our Cryptic Hunt |{" "}
				<a
					href="https://tally.so/r/pb1WjB"
					target="_blank"
					rel="noopener noreferrer"
					className="underline hover:no-underline text-[#9AFF27]"
				>
					Register Here
				</a>
			</div>

			{/* Hero Section */}
			<section className="relative flex items-center justify-center h-screen overflow-hidden">
				<div className="absolute inset-0 z-0">
					<div className="h-full w-full bg-gradient-to-br from-[#101010] to-[#151515]">
						<motion.svg
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1.5, ease: "easeOut" }}
							className="absolute inset-0 w-full h-full"
							xmlns="http://www.w3.org/2000/svg"
						>
							<defs>
								<pattern id="hero-grid" width="8.333%" height="16.666%" patternUnits="userSpaceOnUse">
									<rect width="100%" height="100%" fill="none" stroke="rgba(252,252,252,0.1)" strokeWidth="0.4" />
								</pattern>
							</defs>
							<rect width="100%" height="100%" fill="url(#hero-grid)" />
						</motion.svg>
					</div>
				</div>
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="z-10 mb-2 text-center"
				>
					<motion.h1
						variants={itemVariants}
						className="max-sm:text-5xl text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#9AFF27] to-[#108838] leading-relaxed"
					>
						PARADIGM
					</motion.h1>

					<motion.div
						variants={itemVariants}
						className="flex items-center justify-center h-20 mb-8"
					>
						<span className="text-4xl italic font-light max-sm:text-3xl">
							Audere Est Facere
						</span>
					</motion.div>
					<motion.div
						variants={itemVariants}
						className="grid items-center justify-center grid-cols-2 gap-4 md:grid-cols-3"
					>
						<motion.a
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							href="#about"
							className="px-6 py-3 bg-transparent border border-[#FCFCFC] text-[#FCFCFC] font-semibold rounded-md hover:bg-[#FCFCFC] hover:text-[#101010] transition-colors"
						>
							Learn More
						</motion.a>
						<motion.a
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							href="#team"
							className="px-6 py-3 bg-transparent border border-[#FCFCFC] text-[#FCFCFC] font-semibold rounded-md hover:bg-[#FCFCFC] hover:text-[#101010] transition-colors"
						>
							The Team
						</motion.a>
						<motion.a
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							href="#membership"
							className="px-6 py-3 max-sm:col-span-2 bg-transparent border border-[#FCFCFC] text-[#FCFCFC] font-semibold rounded-md hover:bg-[#FCFCFC] hover:text-[#101010] transition-colors"
						>
							Join Us
						</motion.a>
					</motion.div>
				</motion.div>
				<motion.div
					className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
					animate={{ y: [0, 10, 0] }}
					transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
				>
					<ChevronDown className="w-8 h-8 text-[#108838]" />
				</motion.div>
			</section>

			{/* About Section */}
			<section id="about" className="px-8 py-32 md:px-16">
				<div className="container mx-auto">
					<motion.h2
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="mb-16 text-5xl font-bold text-center"
					>
						About Us
					</motion.h2>
					<div className="flex flex-col items-center gap-16 md:flex-row">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
							className="space-y-8 md:w-1/2"
						>
							<motion.h3
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								viewport={{ once: true }}
								className="text-3xl font-semibold text-[#9AFF27] underline underline-offset-8 decoration-4"
							>
								Who We Are
							</motion.h3>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.6 }}
								viewport={{ once: true }}
								className="text-xl leading-relaxed "
							>
								Paradigm is a student-led tech club at Mayoor School Noida,
								dedicated to fostering innovation, creativity and collaboration
								in the tech community. We provide a platform for students to
								learn, build and share their projects, and connect with
								like-minded individuals who share a passion for technology. We
								also serve as an official club of Hack Club.
							</motion.p>
							<motion.h3
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.8 }}
								viewport={{ once: true }}
								className="text-3xl font-semibold text-[#9AFF27] underline underline-offset-8 decoration-4"
							>
								Our History
							</motion.h3>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 1 }}
								viewport={{ once: true }}
								className="text-xl leading-relaxed"
							>
								Founded in 2011 by a group of tech enthusiasts, Paradigm has
								been revived in 2024 by a new generation of students who are
								passionate about technology. Over the years, we have
								successfully organized over 14 editions of our premier inter
								school event BOT hosting over 1000+ children annually and won
								numerous awards in various competitions.
							</motion.p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							viewport={{ once: true }}
							className="md:w-1/2"
						>
							<motion.img
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.3 }}
								src={TheTeam}
								alt="The Team"
								width={800}
								height={600}
								className="rounded-lg shadow-lg"
							/>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Achievements Section */}
			<section className="py-32 bg-[#101010]/50">
				<div className="container mx-auto">
					<motion.h2
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="mb-16 text-5xl font-bold text-center"
					>
						Our Accolades
					</motion.h2>
					<div className="relative overflow-hidden py-4">
						<div
							ref={carouselRef}
							className="flex gap-8 py-8 px-4 overflow-x-auto relative"
							style={{ scrollBehavior: "auto", scrollbarWidth: "none", msOverflowStyle: "none" }}
						>
							<div ref={startRef} className="w-1 shrink-0 bg-transparent" />
							{/* Duplicate array 3 times to allow seamless looping */}
							{[...achievements, ...achievements, ...achievements].map(
								(achievement, index) => (
									<motion.div
										key={index}
										whileHover={{ scale: 1.05 }}
										className="flex-shrink-0 w-80 bg-[#151515] p-6 rounded-lg border border-[#333] hover:border-[#108838] transition-colors"
									>
										<img
											loading="lazy"
											src={achievement.image}
											alt={achievement.title}
											width={100}
											height={100}
											className="mb-4 rounded h-28 w-28"
										/>
										<h3 className="text-xl font-semibold mb-2 text-[#FCFCFC]">
											{achievement.title}
										</h3>
										<p className="text-[#FCFCFC]/80">{achievement.description}</p>
									</motion.div>
								),
							)}
							<div ref={endRef} className="w-1 shrink-0 bg-transparent" />
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section id="team" className="px-8 py-32 md:px-16">
				<div className="container mx-auto">
					<motion.h2
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="mb-16 text-5xl font-bold text-center"
					>
						Our Team
					</motion.h2>
					<div className="flex justify-center mb-8">
						<button
							type="button"
							onClick={() => setShowAlumni(false)}
							className={`px-6 py-2 rounded-l-2xl ${
								!showAlumni ? "bg-[#9AFF27] text-[#101010]" : "bg-[#FCFCFC]/10"
							}`}
						>
							Current Team
						</button>

						<button
							type="button"
							onClick={() => setShowAlumni(true)}
							className={`px-6 py-2 rounded-r-2xl ${
								showAlumni ? "bg-[#9AFF27] text-[#101010]" : "bg-[#FCFCFC]/10"
							}`}
						>
							Alumni
						</button>
					</div>
					<div className="space-y-8">
						{/* President */}
						<div className="flex justify-center">
							{!showAlumni && teamMembers
								.filter((member) => member.position === "President")
								.map((member, index) => (
									<div key={index} className="w-full md:w-1/2">
										<TeamMemberCard member={member} />
									</div>
								))}
						</div>
						{/* Vice President */}
						<div className="flex justify-center mt-8">
							{!showAlumni && teamMembers
								.filter((member) => member.position === "Vice President")
								.map((member, index) => (
									<div key={index} className="w-full md:w-[27rem]">
										<TeamMemberCard member={member} />
									</div>
								))}
						</div>
						{/* Consultants */}
						{!showAlumni && teamMembers.filter((member) => member.position.includes("Consultant")).length > 0 && (
							<div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-8 max-w-4xl mx-auto">
								{teamMembers
									.filter((member) => member.position.includes("Consultant"))
									.map((member, index) => (
										<TeamMemberCard key={index} member={member} />
									))}
							</div>
						)}
						{/* Heads */}
						{!showAlumni && (
							<div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-8">
								{teamMembers
									.filter((member) => member.position.includes("Head"))
									.slice(0, 9)
									.map((member, index) => (
										<TeamMemberCard key={index} member={member} />
									))}
							</div>
						)}
						{/* Other Members / Alumni Grid */}
						<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 mt-8">
							{(showAlumni ? alumniMembers : teamMembers)
								.filter(
									(member) =>
										showAlumni || (
											!member.position.includes("President") &&
											!member.position.includes("Head") &&
											!member.position.includes("Consultant")
										),
								)
								.slice(
									0,
									showAlumni
										? showAllAlumni
											? undefined
											: undefined
										: showAllMembers
											? undefined
											: 0,
								)
								.map((member, index) => (
									<TeamMemberCard key={index} member={member} />
								))}
							{!showAlumni &&
								!showAllMembers &&
								teamMembers.filter(
									(member) =>
										!member.position.includes("President") &&
										!member.position.includes("Head") &&
										!member.position.includes("Consultant")
								).length > 0 && (
									<div className="relative col-span-1 sm:col-span-2 md:col-span-4">
										<div className="absolute inset-0 bg-gradient-to-t from-[#101010] to-transparent" />
										<button
											type="button"
											onClick={() => setShowAllMembers(true)}
											className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-[#9AFF27] text-[#101010] font-semibold rounded-md hover:bg-[#8AEF17] transition-colors flex items-center"
										>
											See All Members
											<ChevronDown className="w-5 h-5 ml-2" />
										</button>
									</div>
								)}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

interface Member {
	name: string;
	position: string;
	bio: string;
	image: string;
	github?: string;
	linkedin?: string;
	website?: string;
	behance?: string;
	insta?: string;
	discord?: string;
}

function TeamMemberCard({ member }: { member: Member }) {
	return (
		<div className="bg-[#FCFCFC]/10 rounded-lg overflow-hidden flex flex-col md:flex-row h-full">
			<div className="md:w-[35%] flex-shrink-0">
				<img
					src={member.image}
					alt={member.name}
					width={400}
					height={400}
					className={`object-cover w-full h-64 md:h-full ${
						(member as any).imageClass || ""
					}`}
				/>
			</div>
			<div className="w-full md:w-[65%] p-6 flex flex-col justify-between">
				<div>
					<h3 className="mb-2 text-2xl font-semibold">{member.name}</h3>
					<p className="text-[#9AFF27] mb-4">{member.position}</p>
					<p className="flex-grow mb-4 text-sm">{member.bio}</p>
				</div>
				<div className="flex mt-auto space-x-4">
					{member.website && (
						<a
							href={member.website}
							target="_blank"
							rel="noopener noreferrer"
							className="text-cyan-400 hover:text-[#9AFF27]"
						>
							<Globe className="w-6 h-6" />
						</a>
					)}
					{member.github && (
						<a
							href={member.github}
							target="_blank"
							rel="noopener noreferrer"
							className="text-cyan-400 hover:text-[#9AFF27]"
						>
							<Github className="w-6 h-6" />
						</a>
					)}
					{member.linkedin && (
						<a
							href={member.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="text-cyan-400 hover:text-[#9AFF27]"
						>
							<Linkedin className="w-6 h-6" />
						</a>
					)}
					{member.behance && (
						<a
							href={member.behance}
							target="_blank"
							rel="noopener noreferrer"
							className="text-cyan-400 hover:text-[#9AFF27]"
						>
							<Figma className="w-6 h-6" />
						</a>
					)}
					{member.insta && (
						<a
							href={member.insta}
							target="_blank"
							rel="noopener noreferrer"
							className="text-cyan-400 hover:text-[#9AFF27]"
						>
							<Instagram className="w-6 h-6" />
						</a>
					)}
					{member.discord && (
						<a
							href={member.discord}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center w-6 h-6 group"
						>
							<img src={DiscordLogo} alt="Discord" className="w-5 h-5 object-contain group-hover:hidden" />
							<img src={DiscordLogoHover} alt="Discord" className="w-5 h-5 object-contain hidden group-hover:block" />
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
