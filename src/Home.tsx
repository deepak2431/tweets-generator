import React, { useState } from "react";

import SubmitButton from "./components/SubmitButton";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";

const Home = () => {
  const [keywords, setKeywords] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywords(e.target.value);
  };

  const handleInputSubmit = () => {
    console.log(keywords);
  };

  return (
    <div className="home">
      <Header />
      <div className="content">
        <h2>Create Viral Tweet Content With Keywords</h2>
      </div>
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
      <Footer />
    </div>
  );
};

export default Home;
