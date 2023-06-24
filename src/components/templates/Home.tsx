import * as React from "react";
import Hero from "../modules/Hero";

export interface HomeTemplateProps {}

const HomeTemplate: React.FC<HomeTemplateProps> = () => {
	return (
		<div className="home-template">
			<Hero title="Lorem ipsum dolor" subtitle="Sit amet consecuitor" />
			<div className="prose max-w-none p-10">
				<h2 className="text-center text-5xl">Lorem ipsum dolor</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
					luctus mauris non nunc lobortis finibus. Etiam tempor sapien ut orci
					congue, non finibus augue ultrices. Nulla nec sem mattis, pretium nisi
					interdum, tincidunt leo. Mauris lobortis pulvinar ligula, eget
					elementum dolor lobortis placerat. Nulla id arcu at risus tristique
					aliquam id vel tellus. Sed accumsan sit amet augue ut vulputate.
					Aenean suscipit interdum ante, quis commodo neque ornare ac. Cras vel
					nibh ut dui fringilla suscipit ut in neque. In sit amet tellus luctus,
					lacinia quam vel, pulvinar nunc.
				</p>
			</div>
			{/* prettier-ignore */}
			<div className="prose max-w-none pr=10 pl-10">
				{/* prettier-ignore */}
				<h2 className="">Lorem ipsum dolor</h2>
				<div className="flex w-full flex-row flex-wrap justify-center">
					<div className="w-full pr-5 md:w-1/2">
						<div className="bg-blue-700 m-10 pt-2 pl-5 pb-2 pr-5">
							<h3 className="text-3xl text-slate-500">Lorem ipsum dolor</h3>
							<ul className="text-lg text-white">
								<li>Consectetur adipiscing elit.</li>
								<li>Phasellus luctus mauris.</li>
								<li>Etiam tempor sapien.</li>
							</ul>
						</div>
					</div>
					<div className="w-full pl-5 md:w-1/2">
						<div className="bg-red-500 m-10 pt-2 pl-5 pb-2 pr-5">
							<h3 className="text-3xl text-slate-500">Lorem ipsum dolor</h3>
							<ul className="text-lg text-white">
								<li>Consectetur adipiscing elit.</li>
								<li>Phasellus luctus mauris.</li>
								<li>Etiam tempor sapien.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="placeholder h-[1000px] bg-gray-200" />
		</div>
	);
};

export default HomeTemplate;
