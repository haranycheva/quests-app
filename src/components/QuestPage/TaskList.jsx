import { barrio } from "@/fonts/barrio";


export const TaskList = ({ tasks }) => {
    const truncateText = (text, maxLength = 50) => {
      return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };
  
    return (
      <div className="mt-6">
        {tasks.length > 0 ? (
          <ul className="flex flex-col gap-3 items-center">
            {tasks.map((task) => (
              <li key={task.id} className="p-3  w-10/12 border rounded-lg bg-gray-100 shadow-sm flex justify-between">
                <p className="text-gray-700">{truncateText(task.condition)}</p>
                <p className="text-gray-700">{task.type}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className={`${barrio.className} md:text-5xl  text-4xl text-accent-color ml-4`}>No tasks yet</p>
        )}
      </div>
    );
  };
  