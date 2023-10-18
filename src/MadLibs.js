import React, { useState } from "react";
import NewMadLibsForm from "./NewMadLibsForm";
import Story from "./Story";

const MadLibs = () => {
    
  const [story, setStory] = useState("");

  const createStory = ({ noun, noun2, adjective, color }) => {
    setStory(`There was a ${color} ${noun} who loved a ${adjective} ${noun2}`);
  };

  return (
    <div>
      <h1>Madlibs!</h1>
      <NewMadLibsForm createStory={createStory} />
      <div>
        <Story story={story} />
      </div>
    </div>
  );
};

export default MadLibs;
