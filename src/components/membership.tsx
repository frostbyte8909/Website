import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Lightbulb, UserCheck, Book, Shield, Gift } from "lucide-react";

export function Membership() {
	type SectionId =
		| "what-we-do"
		| "expectations"
		| "membership"
		| "focus-fields"
		| "code-of-conduct"
		| "benefits";

	const [activeSection, setActiveSection] = useState<SectionId | null>(null);

	const sections: { id: SectionId; label: string; icon: React.ElementType }[] =
		[
			{ id: "what-we-do", label: "What We Do", icon: Users },
			{ id: "expectations", label: "Expectations", icon: Lightbulb },
			{ id: "membership", label: "Membership", icon: UserCheck },
			{ id: "focus-fields", label: "Focus Fields", icon: Book },
			{ id: "code-of-conduct", label: "Code of Conduct", icon: Shield },
			{ id: "benefits", label: "Benefits", icon: Gift },
		];

	const content: Record<SectionId, string> = {
		"what-we-do":
			"At Paradigm we foster a community of tech enthusiasts, innovators, and problem-solvers. We provide a platform for members to explore, learn, and collaborate. Our goal is to create a supportive environment that encourages personal growth and skill development. We are also responsible for selecting and mentoring students for inter-school competitions.",
		expectations:
			"We expect our members to be passionate about technology, eager to learn, and willing to contribute to our community. Active participation in club activities, respect for fellow members, and a commitment to personal growth are key expectations.",
		membership:
			"Membership is open to all students willing to learn and grow in the field of technology from classes 6-12. To be a member of Paradigm, students must fill out the membership form and attend the club meetings regularly. Members are expected to actively participate in club activities and contribute positively to the community.",
		"focus-fields":
			"Our club focuses on a wide range of technology fields including but not limited to: Web Development, Mobile App Development, Artificial Intelligence, Designing, Cybersecurity, Photography, Robotics, Music Mixing, and Editing.",
		"code-of-conduct":
			"We maintain a respectful, inclusive, and collaborative environment. Discrimination, harassment, or disruptive behavior is not tolerated. We expect professional conduct, ethical practices, and adherence to intellectual property rights in all club activities.",
		benefits: `As a member, you'll work closely with like-minded individuals, learn from experienced mentors, and gain hands-on experience in various technology fields. You'll be the priority for interschools competitions and will get a chance to represent the school in various competitions. `,
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 50, opacity: 0 },
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
		<section
			id="membership"
			className="min-h-screen bg-[#101010] text-[#FCFCFC] py-24 px-6 md:px-12 lg:px-24"
		>
			<div className="mx-auto max-w-7xl">
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-5xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#9AFF27] to-[#108838]"
				>
					Join Us
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					className="max-w-3xl mx-auto mb-16 text-xl text-center text-[#FCFCFC]/80"
				>
					Embark on a journey of innovation, learning, and collaboration with
					like-minded tech enthusiasts.
				</motion.p>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2"
				>
					{sections.map((section) => (
						<motion.div
							key={section.id}
							variants={itemVariants}
							whileHover={{
								scale: 1.05,
								y: -5,
								transition: { duration: 0.3 },
							}}
							className={`bg-[#151515] border border-[#333] hover:border-[#108838] rounded-3xl p-6 cursor-pointer ${
								activeSection === section.id
									? "ring-2 ring-[#108838] shadow-lg shadow-[#108838]/20"
									: ""
							}`}
							onMouseEnter={() => setActiveSection(section.id)}
							onMouseLeave={() => setActiveSection(null)}
						>
							<div className="flex items-center mb-4">
								<motion.div
									transition={{ duration: 0.6 }}
								>
									<section.icon
										className={`w-6 h-6 mr-3 ${
											activeSection === section.id
												? "text-[#108838]"
												: "text-[#9AFF27]"
										}`}
									/>
								</motion.div>
								<h2 className="text-xl font-bold">{section.label}</h2>
							</div>
							<p className="text-base leading-relaxed break-words whitespace-normal">{content[section.id]}</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
