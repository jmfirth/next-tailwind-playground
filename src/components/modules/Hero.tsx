export interface HeroProps {
	title: string;
	subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
	return (
		<div className="hero">
			<div className="m-5 h-[200px] bg-slate-500"></div>
		</div>
	);
};

export default Hero;
