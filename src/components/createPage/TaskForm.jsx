"use client";

import { useState } from "react";

const types = ["INPUT", "OPTION", "CONFORMITY", "CHECK"];

export function TaskForm() {
  const [formData, setFormData] = useState({
    condition: "",
    media: null,
    type: types[0],
    inputAnswer: "",
    multipleChoiceOptions: { question: [], answer: [] },
    matchingOptions: [],
    checkAnswer: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, media: URL.createObjectURL(file) }));
    }
  };

  const handleAddOption = () => {
    setFormData((prev) => ({
      ...prev,
      multipleChoiceOptions: {
        question: [...prev.multipleChoiceOptions.question, ""],
        answer: [...prev.multipleChoiceOptions.answer],
      },
    }));
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...formData.multipleChoiceOptions.question];
    updatedOptions[index] = value;
    setFormData((prev) => ({
      ...prev,
      multipleChoiceOptions: {
        ...prev.multipleChoiceOptions,
        question: updatedOptions,
      },
    }));
  };

  const handleToggleCorrectOption = (index) => {
    const optionValue = formData.multipleChoiceOptions.question[index];
    setFormData((prev) => {
      const updatedAnswers = prev.multipleChoiceOptions.answer.includes(
        optionValue
      )
        ? prev.multipleChoiceOptions.answer.filter((ans) => ans !== optionValue)
        : [...prev.multipleChoiceOptions.answer, optionValue];
      return {
        ...prev,
        multipleChoiceOptions: {
          ...prev.multipleChoiceOptions,
          answer: updatedAnswers,
        },
      };
    });
  };

  const handleRemoveOption = (index) => {
    setFormData((prev) => {
      const updatedQuestions = prev.multipleChoiceOptions.question.filter(
        (_, i) => i !== index
      );
      const updatedAnswers = prev.multipleChoiceOptions.answer.filter(
        (ans) => ans !== prev.multipleChoiceOptions.question[index]
      );
      return {
        ...prev,
        multipleChoiceOptions: {
          question: updatedQuestions,
          answer: updatedAnswers,
        },
      };
    });
  };

  const handleAddMatchingPair = () => {
    setFormData((prev) => ({
      ...prev,
      matchingOptions: [...prev.matchingOptions, { question: "", answer: "" }],
    }));
  };

  const handleMatchingChange = (index, key, value) => {
    const updatedMatching = [...formData.matchingOptions];
    updatedMatching[index][key] = value;
    setFormData((prev) => ({
      ...prev,
      matchingOptions: updatedMatching,
    }));
  };

  const handleRemoveMatchingPair = (index) => {
    setFormData((prev) => ({
      ...prev,
      matchingOptions: prev.matchingOptions.filter((_, i) => i !== index),
    }));
  };

  const validateForm = () => {
    if (!formData.condition.trim()) {
      setError("Task condition is required");
      return false;
    }
    if (formData.type === "INPUT" && !formData.inputAnswer.trim()) {
      setError("Input answer is required");
      return false;
    }
    if (
      formData.type === "OPTION" &&
      (formData.multipleChoiceOptions.question.length === 0 ||
        formData.multipleChoiceOptions.answer.length === 0)
    ) {
      setError("At least one option and one correct answer are required");
      return false;
    }
    if (
      formData.type === "CONFORMITY" &&
      formData.matchingOptions.some(
        (pair) => !pair.question.trim() || !pair.answer.trim()
      )
    ) {
      setError("All matching pairs must be filled");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const filteredQuestions = formData.multipleChoiceOptions.question.filter(
      (q) => q.trim() !== ""
    );
    const filteredAnswers = formData.multipleChoiceOptions.answer.filter(
      (ans) => filteredQuestions.includes(ans)
    );

    let cleanedFormData = {
      ...formData,
      multipleChoiceOptions: {
        question: filteredQuestions,
        answer: filteredAnswers,
      },
    };

    if (cleanedFormData.type !== "INPUT") delete cleanedFormData.inputAnswer;
    if (cleanedFormData.type !== "OPTION")
      delete cleanedFormData.multipleChoiceOptions;
    if (cleanedFormData.type !== "CONFORMITY")
      delete cleanedFormData.matchingOptions;
    if (cleanedFormData.type !== "CHECK") delete cleanedFormData.checkAnswer;

    console.log(cleanedFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6">
      {error && <p className="text-red-500 text-md">{error}</p>}
      <input
        name="condition"
        value={formData.condition}
        onChange={handleChange}
        required
        placeholder="Task Condition"
        className="w-full p-2 border border-gray-300 rounded-lg"
      />

      <label className="block text-sm font-medium text-gray-700">
        Attach Image/Video
      </label>
      <label className="w-32 h-32 border-2 border-gray-300 rounded-lg flex items-center justify-center overflow-hidden bg-gray-100 cursor-pointer">
        {formData.media ? (
          <img
            src={formData.media}
            alt="Preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-400">Upload</span>
        )}
        <input
          type="file"
          accept="image/*, video/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      <select
        name="type"
        value={formData.type}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg"
      >
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      {formData.type === "INPUT" && (
        <input
          name="inputAnswer"
          value={formData.inputAnswer}
          onChange={handleChange}
          required
          placeholder="Correct Answer"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      )}
      {formData.type === "OPTION" && (
        <div>
          {formData.multipleChoiceOptions.question.map((option, index) => (
            <div key={index} className="flex space-x-2 mt-2">
              <input
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder="Option"
                className="w-3/4 p-2 border border-gray-300 rounded-lg"
              />
              <input
                type="checkbox"
                checked={formData.multipleChoiceOptions.answer.includes(option)}
                onChange={() => handleToggleCorrectOption(index)}
              />
              <button type="button" onClick={() => handleRemoveOption(index)}>
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddOption}
            className="px-4 py-2 bg-green-500 text-white rounded-lg mt-2"
          >
            Add Option
          </button>
        </div>
      )}

      {formData.type === "CONFORMITY" && (
        <div>
          {formData.matchingOptions.map((pair, index) => (
            <div key={index} className="flex space-x-2 mt-2">
              <input
                value={pair.question}
                onChange={(e) =>
                  handleMatchingChange(index, "question", e.target.value)
                }
                placeholder="Question"
                className="w-1/3 p-2 border border-gray-300 rounded-lg"
              />
              <input
                value={pair.answer}
                onChange={(e) =>
                  handleMatchingChange(index, "answer", e.target.value)
                }
                placeholder="Answer"
                className="w-1/3 p-2 border border-gray-300 rounded-lg"
              />
              <button
                type="button"
                onClick={() => handleRemoveMatchingPair(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddMatchingPair}
            className="px-4 py-2 bg-green-500 text-white rounded-lg mt-2"
          >
            Add Pair
          </button>
        </div>
      )}
      <button
        type="submit"
        className="hover:bg-basic-color border-accent-color border-[1px] hover:text-accent-color rounded-[15px] p-4 text-basic-color bg-accent-color"
      >
        Create Task
      </button>
    </form>
  );
}
