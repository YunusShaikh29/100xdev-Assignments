import "./App.css";
import BusinessCard from "./components/BusinessCard";

function App() {
  const cardsData = [
    {
      name: "Yunus Shaikh",
      description: "Software Developer | Open Source | Web Dev",
      interests: ["Cricket", "Football", "Treking"],
      linkedin: "https://www.linkedin.com/in/yunus-shaikh-07ba22204/",
      twitter: "https://twitter.com/Yunus_Shaikh29",
      otherSocialMedia: {
        link: "https://www.instagram.com/i_am_md_yunus/",
        label: "Instagram",
      },
    },
    {
      name: "Yunus Shaikh",
      description: "Software Developer | Open Source | Web Dev",
      interests: ["Cricket", "Football", "Treking"],
      linkedin: "https://www.linkedin.com/in/yunus-shaikh-07ba22204/",
      twitter: "https://twitter.com/Yunus_Shaikh29",
      otherSocialMedia: {
        link: "https://www.instagram.com/i_am_md_yunus/",
        label: "Instagram",
      },
    },
    {
      name: "Yunus Shaikh",
      description: "Software Developer | Open Source | Web Dev",
      interests: ["Cricket", "Football", "Treking"],
      linkedin: "https://www.linkedin.com/in/yunus-shaikh-07ba22204/",
      twitter: "https://twitter.com/Yunus_Shaikh29",
      otherSocialMedia: {
        link: "https://www.instagram.com/i_am_md_yunus/",
        label: "Instagram",
      },
    },
    {
      name: "Yunus Shaikh",
      description: "Software Developer | Open Source | Web Dev",
      interests: ["Cricket", "Football", "Treking"],
      linkedin: "https://www.linkedin.com/in/yunus-shaikh-07ba22204/",
      twitter: "https://twitter.com/Yunus_Shaikh29",
      otherSocialMedia: {
        link: "https://www.instagram.com/i_am_md_yunus/",
        label: "Instagram",
      },
    },
  ];

  return (
    <div style={{display: "flex", flexWrap: 'wrap'}}>
      {cardsData.map((card) => (
        <BusinessCard
          key={card.name}
          name={card.name}
          description={card.description}
          interests={card.interests}
          linkedin={card.linkedin}
          twitter={card.twitter}
          otherSocialMedia={card.otherSocialMedia}
        />
      ))}
      {/* <BusinessCard
        name={"yunus"}
        description={"dev"}
        interests={["cricket", "Football"]}
        linkedin={"https://www.linkedin.com/in/yunus-shaikh-07ba22204/"}
        twitter={"https://twitter.com/Yunus_Shaikh29"}
      /> */}
    </div>
  );
}

export default App;
