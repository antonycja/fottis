import { Images } from "./Images";
const Contents = {
  nav: {
    textLogo: Images.textLogo,
    btnText: "sign up",
    navLinks: ["home", "about", "how it works", "contact us"],
  },
  hero: {
    title: "Stress-Free Rent Deposit Solutions",
    text: "At Fottis, we empower individuals to access quality housing by eliminating the financial challenges of steep apartment deposits.",
    mainBtn: "Apply",
    secBtn: "",
    image: Images.heroImage,
  },
  about: {
    problem: {
      image: <Images.problem size={64} />,
      title: "The Problem",
      description:
        "Fottis addresses the challenge of high apartment deposits & monthly rent that often act as barriers to accessing quality rental housing.",
      contents: [
        {
          title: "High Rental Deposits",
          text: "Rental deposit is one of the biggest costs when someone is planning to move into a new apartment",
        },
        {
          title: "Monthly Rent",
          text: "On average, only 37% of tenants are able to pay their rent on time. This translates to about 63% of tenants being unable to pay their rent on time.",
        },
      ],
    },
    data: [
      {
        image: (
          <Images.search
            size={64}
            fill="white"
          />
        ),
        text: "Gauteng alone was previously at more than 15 million households, with more than 48% of those being residential rental households.",
      },
      {
        image: (
          <Images.houseLock
            size={64}
            fill="white"
            stroke="black"
          />
        ),
        text: "Of all the residential rental households, only 37% are able to pay their rent (in full & on time)",
      },
      {
        image: (
          <Images.homeStats
            size={64}
            fill="white"
          />
        ),
        text: "Average rent in South Africa is R7,974 with rent increases ranging between 7 - 10 % annually.",
      },
    ],

    solution: {
      image: <Images.solution size={64} />,
      title: "The Solution",
      description:
        "At Fottis, we eliminate the financial challenges of steep apartment deposits and monthly rent payments. Our financial solution covers both, offering flexible repayments. We empower individuals to access quality housing without the burden of immediate, substantial expenses.",
      contents: [
        {
          title: "Financial Access & Inclusion",
          text: "Fottis champions inclusive housing by offering an accessible financial solution for diverse renters to secure homes without large upfront deposits.",
        },
        {
          title: "Convenience & Efficiency",
          text: "Our solution simplifies renting financing with quick applications, approvals, and updates, enhancing convenience for tenants and property owners.",
        },
        {
          title: "Empowerment",
          text: "Fottis empowers renters to transform their journey, fostering growth by removing deposit barriers and making renting a pathway to positive change.",
        },
      ],
    },
  },
  whatWeDo: {
    problem: {
      image: <Images.work size={64} />,
      title: "How It Works",
      description:
        "Our intuitive platform ensures a smooth journey, simplifying the process of securing your ideal home without the financial stress.",
    },
    steps: [
      {
        image: <Images.one size={26} />,
        text: "Tenant must have applied and approved by Landlord for their desired apartment.",
      },
      {
        image: <Images.two size={26} />,
        text: "Visit our website - www.fottis.com to apply",
      },
      {
        image: <Images.three size={26} />,
        text: "Receive application outcome in minutes.",
      },
      {
        image: <Images.four size={26} />,
        text: "Loan repayment is in half the duration of the lease agreement.",
      },
    ],
    evaluation: {
      image: (
        <Images.evaluate
          size={64}
          fill="white"
        />
      ),
      title: "Evaluation Criteria",
      description:
        "We empower tenants by covering apartment deposits and monthly rentals - transforming renting into an accessible and empowering experience. To safeguard the financial wellbeing of both tenants and our platform; to enhance responsible lending practices and ensuring repayment feasibility, we factor the following:",
      data: [
        {
          title: "Employment Status",
          text: "As part of our comprehensive control measures, we assess applicants' employment status during the application process.",
        },
        {
          title: "Credit Score/History",
          text: "We evaluate applicants' credit history status, thus bolstering prudent lending practice.",
        },
        {
          title: "Same Rates",
          text: "We ensure fairness and transparency by applying consistent rates to all, creating an equitable lending environment for every tenant.",
        },
      ],
    },
  },
  contactUs: {
    statement: [
      {
        image: (
          <Images.rocket
            size={64}
            fill="white"
          />
        ),
        title: "Mission Statement",
        description:
          "At Fottis, our mission is to empower individuals to access quality housing by providing flexible financial solutions for both apartment deposits and monthly rent. We envision a future where everyone can secure their ideal home without upfront financial stress, fostering inclusivity and empowerment in the rental landscape.",
      },
      {
        image: (
          <Images.value
            size={64}
            fill="white"
          />
        ),
        title: "Our Value",
        description:
          "Fottis offers hassle-free access to quality rental apartments by providing flexible financial solutions for apartment deposits and monthly rent - Interest-free, thus removing stress about upfront costs and monthly financial constraints.",
      },
    ],
  },
  images: {
    bottomLandscape: Images.bottomLandscape,
    whiteCurve: Images.whiteCurve,
    close: <Images.close
    size={48}
    fill="white"
  />
  },
};

export default Contents;
