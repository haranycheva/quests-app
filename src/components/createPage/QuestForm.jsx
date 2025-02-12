"use client";

import { createQuest } from "@/fetch";
import { useState } from "react";

const categories = [
  "educational",
  "adventurous",
  "fast",
  "mystery",
  "humorous",
  "sports",
  "logical",
];
const levels = ["EASY", "MEDIUM", "HARD"];

export function QuestForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: categories[0],
    level: levels[0],
  });
  const [poster, setPoster] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPoster(file);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("level", formData.level);

    if (poster) {
      formDataToSend.append("file", poster);
    }

    console.log("FormData:", Object.fromEntries(formDataToSend.entries()));
    const res = await createQuest(formDataToSend)
    console.log(res)
    console.log(2);
    
    setFormData({
      name: "",
      description: "",
      category: categories[0],
      level: levels[0],
    });
    setPoster(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Quest Poster
        </label>
        <label className="w-32 h-32 border-2 border-gray-300 rounded-lg flex items-center justify-center overflow-hidden bg-gray-100 cursor-pointer">
          {poster ? (
            <img
              src={URL.createObjectURL(poster)}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-400">Upload</span>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      <input
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
        placeholder="Quest Name"
        className="w-full p-2 border border-gray-300 rounded-lg"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Quest Description"
        className="w-full p-2 border border-gray-300 rounded-lg"
      />
      <label className="block text-sm font-medium text-gray-700">
        Quest category
      </label>
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <label className="block text-sm font-medium text-gray-700">
        Quest level
      </label>
      <select
        name="level"
        value={formData.level}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg"
      >
        {levels.map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="hover:bg-basic-color border-accent-color border-[1px] hover:text-accent-color rounded-[15px] p-4 text-basic-color bg-accent-color"
      >
        Create Quest
      </button>
    </form>
  );
}
