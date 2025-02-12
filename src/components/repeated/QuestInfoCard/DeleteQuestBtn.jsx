export function DeleteQuestButton({ questId, onDelete }) {
  return (
    <button
      onClick={() => onDelete(questId)}
      className="ml-4 px-3 py-1 text-lg text-white bg-red-500 rounded-lg shadow-sm hover:bg-red-600 active:bg-red-700 transition duration-200"
    >
      ×
    </button>
  );
}
