import React from "react";
import CommentLine from "../atoms/CommentLine";
import LargeHeading from "../atoms/LargeHeading";
import MediumHeading from "../atoms/MediumHeading";
import SmallHeading from "../atoms/SmallHeading";
import VariableLine from "../atoms/VariableLine";
import Games from "./games/Games";

function Home() {
	return (
		<div className="home-container row">
			<div className="info-section col-6">
				<SmallHeading text="Hi there ππ½, I'm" color="#fff" />
				<LargeHeading text="Arpit Jangir" color="#fff" />
				<MediumHeading text="> A Full-stack web-developer π§π½βπ»" color="#4D5BCE" />
				<CommentLine text="Complete the game to continue πΎ" color="#607B96" />
				<CommentLine
					text="You can find it on my github page π"
					color="#607B96"
				/>
				<CommentLine
					text="I will keep adding new games just for fun! π₯³"
					color="#607B96"
				/>
				<VariableLine
					data={
						<>
							<span style={{ color: "#4D5BCE" }}>{"const "}</span>
							<span style={{ color: "#43D9AD" }}>{"ghLink = "}</span>
							<a
								href={"https://github.com/arpitj007/snake-game"}
								rel="noreferrer"
								target="_blank"
								className="link-class"
							>
								<span style={{ color: "#E99287" }}>
									{"βhttps://github.com/arpitj007/snake-gameβ"}
								</span>
							</a>
						</>
					}
				/>
			</div>
			<div className="game-section col-6">
				<Games />
			</div>
		</div>
	);
}

export default Home;
