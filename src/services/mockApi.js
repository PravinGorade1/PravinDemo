export const fetchLicPlans = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "LIC Jeevan Anand",
          type: "Endowment Plan",
          features: ["Life cover", "Maturity benefit", "Bonus"],
          minAge: 18,
          maxAge: 50,
        },
        {
          id: 2,
          name: "LIC Jeevan Umang",
          type: "Whole Life Plan",
          features: ["8% return", "Lifelong cover", "Tax benefit"],
          minAge: 18, // days
          maxAge: 55,
        },
        {
          id: 3,
          name: "LIC Jeevan Lakshya",
          type: "Child Plan",
          features: ["Income benefit", "Maturity sum", "Premium waiver"],
          minAge: 18,
          maxAge: 50,
        },
        {
          id: 4,
          name: "LIC Tech Term",
          type: "Term Insurance",
          features: ["High cover", "Low premium", "Online only"],
          minAge: 18,
          maxAge: 65,
        }
      ]);
    }, 500); // simulate network delay
  });
};

export const fetchAchievements = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, label: "Years of Experience", value: "23+" },
        { id: 2, label: "Happy Clients", value: "1000+" },
        { id: 3, label: "Policies Sold", value: "1500+" },
        { id: 4, label: "Claim Settlement", value: "99.9%" }
      ]);
    }, 500);
  });
};

export const fetchReviews = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Rahul Deshmukh",
          rating: 5,
          comment: "Excellent service! Gorade sir explained all the LIC plans perfectly according to my needs. Highly recommended for future financial planning.",
          location: "Sambhajinagar"
        },
        {
          id: 2,
          name: "Priya Sharma",
          rating: 5,
          comment: "Very trustworthy and always available to answer queries. Took a child plan and feeling completely secure about my daughter's future.",
          location: "Pune"
        },
        {
          id: 3,
          name: "Suresh Patil",
          rating: 4,
          comment: "I appreciate the transparency and honest advice. Got my term insurance sorted quickly without any hassle. Great job!",
          location: "Nillod"
        }
      ]);
    }, 500);
  });
};
