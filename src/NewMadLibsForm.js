import React, { useState } from "react";

const NewMadLibsForm = ({ createStory }) => {
  const INITIAL_STATE = {
    noun: "",
    noun2: "",
    adjective: "",
    height: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createStory(formData);
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="noun"></label>
      <input
        id="noun"
        type="text"
        name="noun"
        placeholder="noun"
        value={formData.noun}
        onChange={handleChange}
      />
      <label htmlFor="noun2"></label>
      <input
        id="noun2"
        type="text"
        name="noun2"
        placeholder="noun 2"
        value={formData.noun2}
        onChange={handleChange}
      />
      <label htmlFor="adjective"></label>
      <input
        id="adjective"
        type="text"
        name="adjective"
        placeholder="adjective"
        value={formData.adjective}
        onChange={handleChange}
      />
      <label htmlFor="color"></label>
      <input
        id="color"
        type="text"
        name="color"
        placeholder="color"
        value={formData.color}
        onChange={handleChange}
      />
      <button>Get Story</button>
    </form>
  );
};

export default NewMadLibsForm;
