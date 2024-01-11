import styles from "./App.module.css";
import BusinessCard from "./components/BusinessCard";
import Form from "./components/Form";

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
    <div style={{ width: "100%", display: "flex", }}>
      <div className={styles.sidebar}>
        <Form />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
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
      </div>
    </div>
  );
}

export default App;
