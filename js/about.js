window.onload = function(){
	loadTeamMembers();
	setEventListeners();
}

function loadTeamMembers(){
	teamMembers = [];
	teamMembers.push(getBenedictProfile());
	teamMembers.push(getAishaProfile());
	teamMembers.push(getBenjaminProfile());
	teamMembers.push(getLegendProfile());
	teamMembers.push(getRexProfile());
	
	setupMeetOurTeam(teamMembers);
}

function TeamMember(name, title, src, email, profile){
	this.name = name;
	this.title = title;
	this.src = src;
	this.email = email;
	this.profile = profile;
}

function setupMeetOurTeam(teamMembers){
	setupMeetOurTeamGrid4(teamMembers);
	setupMeetOurTeamGrid2(teamMembers);
	setupMeetOurTeamVertical(teamMembers);
}

function setupMeetOurTeamGrid4(teamMembers){
	let grid = 4;
	let innerHTML = "<h1>MEET OUR TEAM</h1><table>";
	for(let i = 0; i <= (teamMembers.length / grid); i++){
		innerHTML += "<tr>";
			for(let j = (i * grid); j < ((i * grid) + grid); j++){
				let member = teamMembers[j];
				if(member != undefined){
					innerHTML += "<td><figure></figure><figcaption><h3 id="+j+" class='teamMember'>"+member.name+"</h3><p>"+member.title+"</p></figcaption></td>";
				}
			}
		innerHTML += "</tr>";
	}
	innerHTML += "</table>";
	
	getMeetOurTeamLayoutElementGrid4().innerHTML = innerHTML;
}

function setupMeetOurTeamGrid2(teamMembers){
	let grid = 2;
	let innerHTML = "<h1>MEET OUR TEAM</h1><table>";
	for(let i = 0; i <= (teamMembers.length / grid); i++){
		innerHTML += "<tr>";
			for(let j = (i * grid); j < ((i * grid) + grid); j++){
				let member = teamMembers[j];
				if(member != undefined){
					innerHTML += "<td><figure></figure><figcaption><h3 id="+j+" class='teamMember'>"+member.name+"</h3><p>"+member.title+"</p></figcaption></td>";
				}
			}
		innerHTML += "</tr>";
	}
	innerHTML += "</table>";
	
	getMeetOurTeamLayoutElementGrid2().innerHTML = innerHTML;
}

function setupMeetOurTeamVertical(teamMembers){
	let grid = 1;
	let innerHTML = "<h1>MEET OUR TEAM</h1><table>";
	for(let i = 0; i <= (teamMembers.length / grid); i++){
		innerHTML += "<tr>";
			for(let j = (i * grid); j < ((i * grid) + grid); j++){
				let member = teamMembers[j];
				if(member != undefined){
					innerHTML += "<td><figure></figure><figcaption><h3 id="+j+" class='teamMember'>"+member.name+"</h3><p>"+member.title+"</p></figcaption></td>";
				}
			}
		innerHTML += "</tr>";
	}
	innerHTML += "</table>";
	
	getMeetOurTeamLayoutElementVertical().innerHTML = innerHTML;
}

function setEventListeners(){
	let teamMembersLayoutElements = getTeamMembers();
	
	for(let i = 0; i < teamMembersLayoutElements.length; i++){
		let layoutElement = teamMembersLayoutElements[i];
		layoutElement.onclick = function(e){
			stopClickPropagation(e);
			getProfileModalImage().src = teamMembers[this.id].src;
			getProfileModalName().textContent = teamMembers[this.id].name;
			getProfileModalPosition().textContent = teamMembers[this.id].title;
			getProfileModalAddress().textContent = teamMembers[this.id].email;
			getProfileModalBody().innerHTML = teamMembers[this.id].profile;
			
			showModalBackground();
			showProfileModal();
		};
	}
	
	getProfileModal().onclick = function(e){
		stopClickPropagation(e);
	};
	
	window.onclick = function(){
		hideModalBackground();
	}
	
	getProfileClose().onclick = function(e){
		hideModalBackground();
	};
}

function showModalBackground(){
	let modalBackground = getModalBackground();
	modalBackground.style.display = "block";
}

function hideModalBackground(){
	let modalBackground = getModalBackground();
	modalBackground.style.display = "none";
}

function showProfileModal(){
	let profileModal = getProfileModal();
	profileModal.style.display = "block";
}

function hideProfileModal(){
	let profileModal = getProfileModal();
	profileModal.style.display = "none";
}

function getProfileClose(){
	return document.getElementById("profileClose");
}

function getMeetOurTeamLayoutElementGrid4(){
	return document.getElementById("meetOurTeam");
}

function getMeetOurTeamLayoutElementGrid2(){
	return document.getElementById("meetOurTeam1");
}

function getMeetOurTeamLayoutElementVertical(){
	return document.getElementById("meetOurTeam2");
}

function getTeamMembers(){
	return document.getElementsByClassName("teamMember");
}

function getModalBackground(){
	return document.getElementById("modalBackground");
}

function getProfileModal(){
	return document.getElementById("profileModal");
}

function getProfileModalImage(){
	return document.getElementById("profileImage");
}

function getProfileModalName(){
	return document.getElementById("profileName");
}

function getProfileModalPosition(){
	return document.getElementById("profilePosition");
}

function getProfileModalAddress(){
	return document.getElementById("profileAddress");
}

function getProfileModalBody(){
	return document.getElementById("profileBody");
}

function stopClickPropagation(e){
	if(!e) e = window.event;
	if(e.stopPropagation){
		e.stopPropagation();
	}else{
		e.cancelBubble = true;
	}
}

function getBenedictProfile(){
	let src = "images/about/1.png";
	let name = "Benedict Israel Obianuju";
	let position = "Technical Director";
	let email = "timben2008@gmail.com";
	let profile = 
	"<p>Benedict Israel Obianuju jnr. (born 30<sup>th</sup> September, 1985) also known as Mc Kpakam is a recent graduate and certified welder and fabricator from the City and Guilds of London Institute who was given the honor of best graduating student in the department in July 2015 which was a first of its kind since the inception of the institution.</p>" +
	
	"<p class='pgraph'>A highly skilled and determined installer working with Mycolis Technology as a Technical Director from 1st of June till date, a graduate with a 2:1 degree in Computer Science from Delta State polytechnic, Ogwashi-Uku. An ambitious educator looking to progress into global mentoring, he is an accomplished and energetic computer instructor with a solid history of achievements in media and communication world.</p>" +
	
	"<p class='pgraph'>He was born in Sabon-gari, Kano state to a Christian Family; and he is blessed with a son. In July 2005 he graduated from Federal Government College, Daura, Kastina State, and subsequently attended Delta state Polytechnic Ogwashi-uku, Delta State, where he graduated with a 2:1 in the field of Computer Science. During his University days was appointed as the Course Representative due to his academic prowess and exemplary leadership qualities.</p>" +
	
	"<p class='pgraph'>He was awarded a scholarship to study Welding and Fabrication at Ebgokodo-Itsekiri, during his time there, he developed an excellent eye for detail, due to the heavy demands of assignments and research. As a result, he is able to work under pressure, especially when balancing his educational workload with his volunteering placement at Multipurpose Youth Training Centre, Egbokodo-Itsekiri, Delta state.</p>" +
	
	"<p class='pgraph'>He is a knowledgeable technical engineer with a wide skill-set, including condition-based maintenance, through working on automated systems such as installation and activation of both local and international TV providers, CCTV, Installation of car tracker, automated gate and doors, networking and administration, maintain or repair audio and visual electronic reception equipment or accessories, measure signal strength at utility poles using electronic test equipment, install equipment such as amplifier to maintain the strength of communication transmission.</p>" +
	
	"<p class='pgraph'>He has been known to engage in other activities which he shows great passion, which includes Humanitarian outreach (which he was rewarded by Rotary Club of Nigeria in 2018), poetry, dance and sports.  He is a great rugby player who has represented himself both at state and national levels. He currently plays for Delta state rugby team as a forward player; he is an enthusiastic lover of the game and hopes to play more international matches.</p>" +
	
	"<p class='pgraph'>In general, Benedict Obianuju is a fun, creative and passionate  person who loves children and has great love for the work of God, he believes that everyone deserves a fair chance to express themselves.</p>";
	
	return new TeamMember(name, position, src, email, profile);
}

function getAishaProfile(){
	let src = "images/about/2.png";
	let name = "Aisha Bello";
	let position = "Head of Marketing";
	let email = "dollychick@yahoo.com";
	let profile = 
	"<p>Aisha Adewole (born 2nd November, 1987) also known as Princess Aisha, a Political Scientist (BSc). She is the founder of Charming Events and Interiors NG located at DLA Road Asaba, Delta State. She is single.</p>" +
	
	"<p class='pgraph'>She was born to the Royal Household of the Adewole Family in Kogi State; she has three Siblings. In 2007 she graduated from Queens College in Lagos State, and subsequently attended Enugu State University of Science and Technology, Enugu State, where she graduated with a BSc degree in Political Science.</p>" +
	
	"<p class='pgraph'>After obtaining her University degree in Political Science she enlisted for the compulsory NYSC service to serve her Fatherland where she was deployed to Government Day Secondary School Tanke Ilorin, Kwara State, while there she Tutored Government. After the completion of her NYSC Service founded Charming Events and Interiors NG and is presently employed at Mycolis Technology as a Marketing Officer where she is presently working.</p>" +
	
	"<p class='pgraph'>She is a dynamic and result driven person with an in- depth background in Marketing and Administrative related engagements. Committed to achieving and exceeding demanding targets and business objectives while remaining focused on proving an exceptional standard of Service. Knowledgeable in Relationship Management, Market Segmentation, Customer Retention and Sales Optimisation. </p>" +
	
	"<p class='pgraph'>Has a multi - tasking ability that works under pressure, equipped with computer skills to create an efficient work environment. A good communicator, diligent, loyal, smart, a hard worker and team player.</p>" +
	
	"<p class='pgraph'>She performed general administrative tasks and provided exceptional marketing support to managers and co- workers which increased overall efficiency by 75%, has developed international marketing and advertising strategies via phone calls and social media, and has built sustainable relationships with 20 corporate clients, resulting in increased trust and eventual increased business opportunities.</p>";
	
	return new TeamMember(name, position, src, email, profile);
}

function getBenjaminProfile(){
	let src = "images/about/3.png";
	let name = "Benjamin Okwuose";
	let position = "Policy/Strategy";
	let email = "jamincares@gmail.com";
	let profile = 
	"<p>A hardworking and motivated Policy and Strategic Personal who has acquired extensive knowledge in Retail Sales and Customer Service professional with over Twelve years’ experience combined with sales and customer service functional skills, and strong desire to succeed in a corporate organization. Knowledgeable in Business Optimization, Customer Service, Goal Alignment, Relationship Management, Market Segmentation, Customer Retention, Sales Optimization and Performance Management. Holds a National Diploma (ND) in Science Lab. Tech and certified in Satellite installation and digital satellite Decoder setup.</p>" +
	
	"<p class='pgraph'>Expertly demonstrated speed and accuracy; managed a high-volume workload within a deadline-driven environment; resolved an average of 558 inquiries in any given week and consistently met performance benchmarks.</p>" +
	
	"<p class='pgraph'>Built sustainable relationships with 50 corporate account holders, resulting in increased trust and eventual increased business opportunities.</p>" +
	
	"<p class='pgraph'>Hired, trained, and supervised staff of Ten serving customers, helped company attain the highest customer service ratings during 2017 customers service audit earned average of 84% marks in all categories including communication skills, listening skills, problem resolution and politeness</p>" +
	
	"<p class='pgraph'>Performed general administrative tasks and provided exceptional support to managers and co-workers which increased overall efficiency by 90%</p>" +
	
	"<p class='pgraph'>Swiftly responded to steamy situations between another customer service representative and a valued client, saving the company from having churn customers.</p>" +
	
	"<p class='pgraph'>Provided exceptional customer services to high end consumers, regularly including direct email and phone contact.</p>" +
	
	"<p class='pgraph'>Implemented new customer service policies and feedback procedures which provided an umbrella for CSRs in the event of serious complaints. </p>" +
	
	"<p class='pgraph'>Drive sales initiatives across the value chain</p>" +
	
	"<p class='pgraph'>Develop international marketing and advertising strategies via phone calls.</p>" +
	
	"<p class='pgraph'>Inspire call Agent staff to develop and implement special communication skills.</p>" +
	
	"<p class='pgraph'>Carry out system repair, installation, networking and administration </p>" +
	
	"<p class='pgraph'>Review Staffs performance report for accuracy </p>" +
	
	"<p class='pgraph'>Support in maintenance activities and provide feedback to the operations team </p>" +
	
	"<p class='pgraph'>Advise Technical teams on areas of low performance and suggest improvement plan</p>";
	
	return new TeamMember(name, position, src, email, profile);
}

function getLegendProfile(){
	let src = "images/about/4.png";
	let name = "Legend";
	let position = "Administration/Design";
	let email = "delegend2022@gmail.com";
	let profile = 
	"<p>Courage Osagie - Aaron (born 6th June 1808) also known as Legend a Human Physiologist (BSc). Was awarded the Personality of the Year award by the National Emergency Management Agency Community Development Service Group which was a first of its kind since the inception of the association and has never married and is presently single, he resides at B.A Ukpebor House Asaba Delta State.</p>" +
	
	"<p class='pgraph'>He was born to a Christian Esan Family of four Siblings in Ubiaja, Edo State. In 2010 he graduated from Ideal Secondary School in Irrua Edo State, and subsequently attended Ambrose Alli University Ekpoma Edo State, where he graduated with a 2:1 in the field of Human Physiology. During his University days was appointed as the Hostel Governor due to his academic prowess and exemplary leadership qualities, also won numerous Awards in sports and academics, from the summer of 2015 to the summer of 2018 was the undisputed athletics champion for his Hostel, and on August 2017 led his Hostel Debate Team for the School debate Competition which his Hostel female Team won the competition and the male Team came out as 3rd runners up.</p>" +
	
	"<p class='pgraph'>After obtaining his University degree in Human Physiology he enlisted for the compulsory NYSC service to serve his Fatherland where he was deployed to Asagba Mixed Secondary School Asaba Delta State, while there he Tutored History, and was also elected President of the National Emergency Management Agency Community Development Service. After the completion of his NYSC Service was employed at Mycolis Technology as an Administration Officer which he is presently working.</p>" +
	
	"<p class='pgraph'>He is an enthusiastic educator bringing strong background in creating lessons Plans, devising multimedia presentations, giving group lectures and hosting exams. Professional and helpful in fielding student questions to clarify information, explain lesson content and suggest points of Research for deeper understanding of subject matter.</p>" +
	
	"<p class='pgraph'>He has been known to engage in other activities which he shows great passion for, which includes Humanitarian outreach (which he was a great part of during his NYSC Service Year), poetry, dance and sports. </p>";
	
	return new TeamMember(name, position, src, email, profile);
}

function getRexProfile(){
	let src = "images/about/5.png";
	let name = "Analikwu Anthony Rex";
	let position = "Web developer";
	let email = "rexthonyy@gmail.com";
	let profile = 
	"<p>Analikwu Anthony Rex (born 8th January, 1995) is a graduate of Ahmadu Bello University where he was awarded a degree in B.Eng Metallurgical and Materials Engineering in 2019. He was born in Kaduna State Nigeria to a Christian family and has 3 brothers and a sister.</p>" +
	
	"<p class='pgraph'>He attended Federal College of Education Zaria Kaduna State Nigeria, where he studied Physics and Computer science and it was there that his interest in computers developed.</p>" +
	
	"<p class='pgraph'>A highly motivated and intelligent student, he served at the Centre for Energy research and training, Ahmadu Bello University as an intern for 6 months where he participated in activities such as chemical analysis, sample preparation, testing, welding, fabrication and servicing of the Nuclear reactor at the facility.</p>" +
	
	"<p class='pgraph'>For his final year project, he studied the power conversion efficiency of a dye sensitized solar cell using a titanium dioxide coated photo electrode, as well as performed a comparative study on the frictional characteristics of a chemically modified mahogany seed oil and cotton seed oil as bio lubricants using ring compression test.</p>" +
	
	"<p class='pgraph'>During his National service year, he was posted to Asaba Delta State Nigeria, and served at the state Ministry of works for a period of one year as an Engineer in training. While there, he performed tasks such as building design, site inspection, quantity survey and project management.</p>" +
	
	"<p class='pgraph'>He is a knowledgeable engineer with a wide ranging skillset. His interest in computers resulted in the creation of software which have been downloaded and used by people all over the world. He has skills in full stack web and app development and has created projects for clients all over the world. More information can be found at his website <a href='http://rexanthony.ga' target='_blank'>rexanthony.ga</a>. He built and maintains this website for Mycolis Technology" +

	"<p class='pgraph'>Rex Anthony loves reading, discovering and sharing new ideas, he loves participating in chess competitions and plays games such as football, volleyball, athletics and gymnastics.</p>" +
	
	"<p class='pgraph' style='padding-bottom: 64px'>In general, Analikwu Anthony Rex is a fun, interesting and creative person who constantly thinks of how to apply technology in new and interesting ways to solve a problem or just for fun.</p>";
	
	return new TeamMember(name, position, src, email, profile);
}