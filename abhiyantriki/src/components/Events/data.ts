export interface EventInfo {
  title: string;
  description: string;
  entryFee: string;
  members: string;
  prize: string;
  contactNo: string;
  imageSlug: string;
}

export const events: Record<string, EventInfo[]> = {
  Tech: [
    {
      title: "Bid-By-Bit",
      description:
        "THE EVENT CHALLENGES TEAMS TO TEST THEIR SKILLS ON DATA STRUCTURES",
      entryFee: "50rs Per Participant",
      members: "GROUP COMPETITION",
      prize: "Cash prize worth 8k Goodies worth 20k",
      contactNo: "9987853030, 8355821436",
      imageSlug: "bitbybit.png",
    },
    {
      title: "CSI - Algorithmic Trading",
      description:
        "THE EVENT CHALLENGES TEAMS TO TEST THEIR SKILLS ON DATA STRUCTURES",
      entryFee: "250rs Per Participant",
      members: "INDIVIDUAL COMPETITION",
      prize: "Cash prize worth 8k Goodies worth 20k",
      contactNo: "9987853030, 8355821436",
      imageSlug: "bitbybit.png",
    },
    {
      title: "Crackathon",
      description: "HackerRank and Codechef based coding competition",
      entryFee: "150rs",
      members: "INDIVIDUAL COMPETITION",
      prize: "13,000 prize pool",
      contactNo: "9987853030, 8355821436",
      imageSlug: "crackathon.png",
    },
    {
      title: "Arthemis",
      description: "HackerRank and Codechef based coding competition",
      entryFee: "50rs per participant",
      members: "GROUP COMPETITION",
      prize: "30,000 prize pool",
      contactNo: "9987853030, 8355821436",
      imageSlug: "crackathon.png",
    },
    {
      title: "Code Golf",
      description: "HackerRank and Codechef based coding competition",
      entryFee: "200Rs For 1 person and 250Rs for team of 2",
      members: "1/2 members per team",
      prize: "5000 prize pool and Exciting Goodies",
      contactNo: "9987853030, 8355821436",
      imageSlug: "crackathon.png",
    },
    {
      title: "THE MEMARCHY",
      description:
        "The GenAI WebCraft Challenge is an exciting competition that challenges participants to harness the power of artificial intelligence to create innovative solutions. In this event, participants will receive a problem statement and will be tasked with using various AI tools to develop a website or application. These AI tools will encompass a wide range of generative capabilities, enabling participants to unleash their creativity and technical skills.",
      entryFee: "RS.100 per/RS.150 PER DUO",
      members: "1/2 members per team",
      prize: "2,000 AND EXCITING GOODIES",
      contactNo: "9987853030, 8355821436",
      imageSlug: "bitbybit.png",
    },
    {
      title: "QUIZ TO INFINITY",
      description:
        "Math of Fortune is an entertaining math-based event which tests the participants' problem solving skills as well as confidence and luck",
      entryFee: "RS. 100 PER TEAM",
      members: "GROUP COMPETETION",
      prize: "4,000 prize money",
      contactNo: "9987853030, 8355821436",
      imageSlug: "electrohunt.png",
    },
    {
      title: "HOGWARTS TECHNO - WIZARD 24",
      description:
        "The Integrated Ideathon Competition isn't just an event: it's a transformative journey that enriches our students' educational trajectory. This meticulously designed, two-phase event provides a holistic experience that sharpens innovation, problem-solving acumen, and technical prowess.",
      entryFee: "50rs PER PERSON",
      members: "iNDIVIDUAL",
      prize: "5,000 PRIZE POOL",
      contactNo: "9987853030, 8355821436",
      imageSlug: "pong.png",
    },
    {
      title: "TECHTANGLE",
      description:
        "A thrilling 3 stage - Trivia Quiz, Jeopardy round and a Circuit building round where your speed and accuracy for giving the right answers and ability to build an efficient, correct working circuit will be tested.",
      entryFee: "50RS per person / 80Rs per duo",
      members: "SOLO/DUO",
      prize: "RS. 5,000 PRIZE POOL",
      contactNo: "9987853030, 8355821436",
      imageSlug: "operation.png",
    },
    {
      title: "Rush",
      description:
        "Rush is an signature event conducted by mesa, for all car enthusiasts time is the key the fastest car leads you to victory",
      entryFee: "250rs per team",
      members: "4-5 members per team",
      prize: "4,000 prize pool",
      contactNo: "9987853030, 8355821436",
      imageSlug: "rush.png",
    },
  ],
  "Tech Shield": [
    {
      title: "Tech Quiz",
      description:
        "Prove your tech-savvy skills in a quiz that tests the limits of your technical expertise.",
      entryFee: "100rs",
      members: "3 members per team",
      prize: "12,000 prize pool",
      contactNo: "9987853030, 8355821436",
      imageSlug: "techdebate.png",
    },
    {
      title: "Technical Paper Presentation",
      description:
        "The Technical Paper Presentation event offers participants the chance to present their research and innovative ideas on various technical subjects. Teams will be evaluated on the quality of their paper, presentation skills, and ability to answer questions effectively",
      entryFee: "100rs",
      members: "3 members per team",
      prize: "12,000 prize pool",
      contactNo: "9987853030, 8355821436",
      imageSlug: "techdebate.png",
    },
    {
      title: "Technovate",
      description:
        "Technovate is a thrilling competition where participants showcase their technical knowledge and problem-solving skills. Through engaging presentations and dynamic debates, teams will compete to prove their mastery of innovative solutions in the tech world",
      entryFee: "100rs",
      members: "3 members per team",
      prize: "12,000 prize pool",
      contactNo: "9987853030, 8355821436",
      imageSlug: "technovate.png",
    },
    {
      title: "Tech Hunt",
      description:
        "Follow the clues, crack the codes, and unlock the next location in this fast-paced, technology-driven hunt",
      entryFee: "100rs",
      members: "3 members per team",
      prize: "12,000 prize pool",
      contactNo: "9987853030, 8355821436",
      imageSlug: "techhunt.png",
    },
  ],
  Informals: [
    {
      title: "FIFA",
      description:
        "The legendary FIFA series has been produced by EA SPORTS for over 20 years, and is now the largest sports video game franchise on the planet. It is available on most platforms and boasts highly engaging and competitive gameplay",
      entryFee: "150rs",
      members: "Individual",
      prize: "21,000 prize pool",
      contactNo: "9987853030, 8355821436",
      imageSlug: "FIFA.png",
    },
    {
      title: "VALORANT",
      description:
        "VALORANT is a free-to-play first-person shooter game developed and published by Riot Games, that has taken the market by storm with its blend of ability and aim based gameplay",
      entryFee: "300rs",
      members: "5 members per team",
      prize: "22,000 prize pool",
      contactNo: "9987853030, 8355821436",
      imageSlug: "valorant.png",
    },
    {
      title: "BGMI",
      description:
        "CALL OF DUTY MOBILE is one of the most popular free-to-play shooter game developed by TiMi Studio Group and published by Activision for Android and iOS. Duration: 10mins Search and destroy Team of 5 (5v5)",
      entryFee: "FREE",
      members: "4 members per team",
      prize: "20,000 prize pool",
      contactNo: "9987853030, 8355821436",
      imageSlug: "BGMI2.jpg",
    },
    {
      title: "BULLET ECHO",
      description:
        "ROCKET LEAGUE is the high-powered hybrid of arcade-style soccer and vehicular mayhem! Customize your car, hit the field, and compete in one of the most critically acclaimed sports games of all time!",
      entryFee: "FREE",
      members: "Individual",
      prize: "10,000 prize pool",
      contactNo: "9987853030, 8355821436",
      imageSlug: "Bullet_Echo.jpeg",
    },
    {
      title: "ROAD TO VALOR",
      description:
        "ROCKET LEAGUE is the high-powered hybrid of arcade-style soccer and vehicular mayhem! Customize your car, hit the field, and compete in one of the most critically acclaimed sports games of all time!",
      entryFee: "FREE",
      members: "Individual",
      prize: "10,000 prize pool",
      contactNo: "9987853030, 8355821436",
      imageSlug: "RoadtoValorEmpires.png",
    },
    {
      title: "REAL CRICKET 24",
      description:
        "ROCKET LEAGUE is the high-powered hybrid of arcade-style soccer and vehicular mayhem! Customize your car, hit the field, and compete in one of the most critically acclaimed sports games of all time!",
      entryFee: "FREE",
      members: "Individual",
      prize: "10,000 prize pool",
      contactNo: "9987853030, 8355821436",
      imageSlug: "Realcricket24.jpg",
    },
  ],
  "Tech MUN": [
    {
      title: "TECH MUN",
      description:
        "Dive into the dynamic intersection of technology and diplomacy as you engage with fellow delegates on groundbreaking topics that shape our world. Unleash your creativity, tackle real-world challenges, and showcase your negotiation skills in this innovative forum. Don’t miss your chance to be part of this historic event where the future of tech meets the art of governance!",
      entryFee: "d",
      members: "d",
      prize: "d",
      contactNo: "d",
      imageSlug: "d",
    },
  ],
};
