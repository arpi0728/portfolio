import React from "react";

const dataPersonal = [
	{
		title: "bio",
		expand: false,
		color: "pink",
	},
	{
		title: "hobbies",
		expand: false,
		color: "red",
	},
	{
		title: "education",
		expand: true,
		color: "blue",
		content: [
			{
				title: "Self-Taught",
			},
			{
				title: "University",
			},
			{
				title: "School",
			},
		],
	},
];

function About() {
	return (
		<div className="row about-container">
			<div className="col-md-2 about-container-file-structure block">
				<div className="about-container-file-structure-title">
					<h3 className="small-heading about-container-file-structure-title-heading">
						<i class="ri-arrow-down-s-line icon"></i>personal-info
					</h3>
					{dataPersonal.map((item, index) => {
						return (
							<div key={index} className="fs-container">
								<h3 className="small-heading fs">
									<i class="ri-arrow-down-s-line icon"></i>
									{item.title}
								</h3>
								{item.content &&
									item.content.map((itm, index) => {
										return (
											<div>
												<h4>{itm.title}</h4>
											</div>
										);
									})}
							</div>
						);
					})}
				</div>
				<div className="about-container-file-structure-title">
					<h3 className="small-heading about-container-file-structure-title-heading">
						<i class="ri-arrow-down-s-line icon"></i>contact-info
					</h3>
				</div>
			</div>
			<div className="col-md-6 about-container-code"></div>
			<div className="col-md-4 about-container-snippets"></div>
		</div>
	);
}

export default About;
