import React, { useState } from "react";
import OpenAI from "openai";

import SubmitButton from "./components/SubmitButton";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import TweetCard from "./components/TweetCard";

const openai = new OpenAI({
  apiKey: "",
  dangerouslyAllowBrowser: true,
});

const Home = () => {
  const [keywords, setKeywords] = useState("");
  const [tweet, setTweet] = useState("");
  const [showInput, setShowInput] = useState(true);

  const generateTweet = async () => {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Generate a viral tweet using the keywords: ${keywords}`,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    const generatedTweet = response.choices[0].message.content;
    if(generatedTweet) {
      setTweet(generatedTweet);
    }
    setShowInput(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywords(e.target.value);
  };

  const handleInputSubmit = async () => {
    await generateTweet();
  };

  return (
    <div className="home">
      <Header />
      <div className="content">
        <h2>Create Viral Tweet Content With Keywords</h2>
        {tweet && <TweetCard tweetContent={tweet} />}
      </div>
      {showInput && (
        <div className="input_container">
          <SearchInput
            placeHolder="Enter Keywords"
            value={keywords}
            handleChange={handleInputChange}
          />
          <SubmitButton
            buttonText="Generate Tweet"
            handleClick={handleInputSubmit}
          />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Home;
