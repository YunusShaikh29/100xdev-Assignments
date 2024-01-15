import { useState } from "react";
import styles from "./App.module.css";
import BusinessCard from "./components/BusinessCard";
import Form from "./components/Form";

function App() {
  const [cardsData, setCardData] = useState([
    {
      name: "Yunus Shaikh 1",
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
      name: "Yunus Shaikh 2",
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
      name: "Yunus Shaikh 3",
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
      name: "Yunus Shaikh 4",
      description: "Software Developer | Open Source | Web Dev",
      interests: ["Cricket", "Football", "Treking"],
      linkedin: "https://www.linkedin.com/in/yunus-shaikh-07ba22204/",
      twitter: "https://twitter.com/Yunus_Shaikh29",
      otherSocialMedia: {
        link: "https://www.instagram.com/i_am_md_yunus/",
        label: "Instagram",
      },
    },
  ]);

  const onAddingCard = (newCardData) => {
    setCardData((prevState) => [...prevState, newCardData])
  }

  return (
    <div style={{ width: "100%", display: "flex", }}>
      <div className={styles.sidebar}>
        <Form onSubmit={onAddingCard}/>
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
