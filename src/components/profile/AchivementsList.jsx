import { achivements } from "@/data/achivements";
import { Achivement } from "./Achivement";
import { barrio } from "@/fonts/barrio";

export function AchivementsList({ achivesList }) {
  if (!achivesList || achivesList?.length === 0) {
    return (
      <p
        className={`${barrio.className} text-accent-color md:text-5xl  text-4xl`}
      >
        You have no achivements yet
      </p>
    );
  }
  return (
    <>
        <h4 className={`${barrio.className} text-accent-color md:text-5xl  text-4x mb-4`}>My achivements</h4>
      <ul className="flex flex-wrap gap-4">
        {achivesList.map((achiveName) => (
          <Achivement key={achivements[achiveName]} achive={achivements[achiveName]} />
        ))}
      </ul>
    </>
  );
}
