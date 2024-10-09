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
      description: "THE EVENT CHALLENGES TEAMS TO TEST THEIR SKILLS ON DATA STRUCTURES",
      entryFee: "50rs Per Participant",
      members: "GROUP COMPETITION",
      prize: "Cash prize worth 8k Goodies worth 20k",
      contactNo: "+1 12312134",
      imageSlug: "bitbybit.png",
    },
    {
      title: "CSI - Algorithmic Trading",
      description: "THE EVENT CHALLENGES TEAMS TO TEST THEIR SKILLS ON DATA STRUCTURES",
      entryFee: "250rs Per Participant",
      members: "INDIVIDUAL COMPETITION",
      prize: "Cash prize worth 8k Goodies worth 20k",
      contactNo: "+1 12312134",
      imageSlug: "bitbybit.png",
    },
    {
      title: "Crackathon",
      description: "HackerRank and Codechef based coding competition",
      entryFee: "150rs",
      members: "INDIVIDUAL COMPETITION",
      prize: "13,000 prize pool",
      contactNo: "+1 12312134",
      imageSlug: "crackathon.png",
    },
    {
      title: "Arthemis",
      description: "HackerRank and Codechef based coding competition",
      entryFee: "50rs per participant",
      members: "GROUP COMPETITION",
      prize: "30,000 prize pool",
      contactNo: "+1 12312134",
      imageSlug: "crackathon.png",
    },
    {
      title: "Code Golf",
      description: "HackerRank and Codechef based coding competition",
      entryFee: "200Rs For 1 person and 250Rs for team of 2",
      members: "1/2 members per team",
      prize: "5000 prize pool and Exciting Goodies",
      contactNo: "+1 12312134",
      imageSlug: "crackathon.png",
    },
    {
      title: "THE MEMARCHY",
      description:
        "The GenAI WebCraft Challenge is an exciting competition that challenges participants to harness the power of artificial intelligence to create innovative solutions. In this event, participants will receive a problem statement and will be tasked with using various AI tools to develop a website or application. These AI tools will encompass a wide range of generative capabilities, enabling participants to unleash their creativity and technical skills.",
      entryFee: "RS.100 per/RS.150 PER DUO",
      members: "1/2 members per team",
      prize: "2,000 AND EXCITING GOODIES",
      contactNo: "+1 12312134",
      imageSlug: "bitbybit.png",
    },
    {
      title: "QUIZ TO INFINITY",
      description:
        "Math of Fortune is an entertaining math-based event which tests the participants' problem solving skills as well as confidence and luck",
      entryFee: "RS. 100 PER TEAM",
      members: "GROUP COMPETETION",
      prize: "4,000 prize money",
      contactNo: "+1 12312134",
      imageSlug: "electrohunt.png",
    },
    {
      title: "HOGWARTS TECHNO - WIZARD 24",
      description:
        "The Integrated Ideathon Competition isn't just an event: it's a transformative journey that enriches our students' educational trajectory. This meticulously designed, two-phase event provides a holistic experience that sharpens innovation, problem-solving acumen, and technical prowess.",
      entryFee: "50rs PER PERSON",
      members: "iNDIVIDUAL",
      prize: "5,000 PRIZE POOL",
      contactNo: "+1 12312134",
      imageSlug: "pong.png",
    },
    {
      title: "TECHTANGLE",
      description:
        "A thrilling 3 stage - Trivia Quiz, Jeopardy round and a Circuit building round where your speed and accuracy for giving the right answers and ability to build an efficient, correct working circuit will be tested.",
      entryFee: "50RS per person / 80Rs per duo",
      members: "SOLO/DUO",
      prize: "RS. 5,000 PRIZE POOL",
      contactNo: "+1 12312134",
      imageSlug: "operation.png",
    },
    {
      title: "Rush",
      description:
        "Rush is an signature event conducted by mesa, for all car enthusiasts time is the key the fastest car leads you to victory",
      entryFee: "250rs per team",
      members: "4-5 members per team",
      prize: "4,000 prize pool",
      contactNo: "+1 12312134",
      imageSlug: "rush.png",
    },
  ],
  // Ideate: [
  //   {
  //     title: "",
  //     description: "A coding challenge in Bhailang",
  //     entryFee: "100rs",
  //     members: "3 members per team",
  //     prize: "12,000 prize pool",
  //     contactNo: "+1 12312134",
  //     imageSlug: "unl.png",
  //   },
  //   {
  //     title: "NRDC",
  //     description: "A coding challenge in Bhailang",
  //     entryFee: "100rs",
  //     members: "3 members per team",
  //     prize: "12,000 prize pool",
  //     contactNo: "+1 12312134",
  //     imageSlug: "nrdc.png",
  //   },
  // ],
  "Tech Shield": [
    {
      title: "Technical Paper Presentation",
      description:
        "A debate is an organized argument or contest of ideas in which the participants discuss a topic from two opposing sides. Those who agree with this statement or idea are the 'Government' side. Those who will not agree with this statement or idea are the Opposition side.",
      entryFee: "100rs",
      members: "3 members per team",
      prize: "12,000 prize pool",
      contactNo: "+1 12312134",
      imageSlug: "techdebate.png",
    },
    {
      title: "Technovate",
      description:
        "Participants are expected to formulate engineering solutions to the underlying issues hindering the smooth functioning of various aspects of the society.",
      entryFee: "100rs",
      members: "3 members per team",
      prize: "12,000 prize pool",
      contactNo: "+1 12312134",
      imageSlug: "technovate.png",
    },
    {
      title: "Tech Hunt",
      description:
        "A classic game of follow the clues but with a element of surprise, where your technical knowledge will be pushed to its limits. So sign right up for this event that is sure to test both your bookish knowledge as well as street smarts! Happy hunting!",
      entryFee: "100rs",
      members: "3 members per team",
      prize: "12,000 prize pool",
      contactNo: "+1 12312134",
      imageSlug: "techhunt.png",
    },
  ],
  Informals: [
    {
      title: "FIFA",
      description:
        "The legendary FIFA series has been produced by EA SPORTS for over 20 years, and is now the largest sports video game franchise on the planet. It is available on most platforms and boasts highly engaging and competitive gameplay",
      entryFee: "150rs",
      members: "3 members per team",
      prize: "21,000 prize pool",
      contactNo: "+1 12312134",
      imageSlug: "FIFA.png",
    },
    {
      title: "VALORANT",
      description:
        "VALORANT is a free-to-play first-person shooter game developed and published by Riot Games, that has taken the market by storm with its blend of ability and aim based gameplay",
      entryFee: "300rs",
      members: "5 members per team",
      prize: "22,000 prize pool",
      contactNo: "+1 12312134",
      imageSlug: "valorant.png",
    },
    {
      title: "BGMI",
      description:
        "CALL OF DUTY MOBILE is one of the most popular free-to-play shooter game developed by TiMi Studio Group and published by Activision for Android and iOS. Duration: 10mins Search and destroy Team of 5 (5v5)",
      entryFee: "FREE",
      members: "4 members per team",
      prize: "20,000 prize pool",
      contactNo: "+1 12312134",
      imageSlug: "cod.png",
    },
    {
      title: "BULLET ECHO",
      description:
        "ROCKET LEAGUE is the high-powered hybrid of arcade-style soccer and vehicular mayhem! Customize your car, hit the field, and compete in one of the most critically acclaimed sports games of all time!",
      entryFee: "FREE",
      members: "3 members per team",
      prize: "10,000 prize pool",
      contactNo: "+1 12312134",
      imageSlug: "RL.png",
    },
    {
      title: "ROAD TO VALOR",
      description:
        "ROCKET LEAGUE is the high-powered hybrid of arcade-style soccer and vehicular mayhem! Customize your car, hit the field, and compete in one of the most critically acclaimed sports games of all time!",
      entryFee: "FREE",
      members: "3 members per team",
      prize: "10,000 prize pool",
      contactNo: "+1 12312134",
      imageSlug: "RL.png",
    },
    {
      title: "REAL CRICKET 24",
      description:
        "ROCKET LEAGUE is the high-powered hybrid of arcade-style soccer and vehicular mayhem! Customize your car, hit the field, and compete in one of the most critically acclaimed sports games of all time!",
      entryFee: "FREE",
      members: "3 members per team",
      prize: "10,000 prize pool",
      contactNo: "+1 12312134",
      imageSlug: "RL.png",
    },
  ],
};
