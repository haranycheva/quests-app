import { getQuestList } from "@/fetch";
import { MySwiper } from "./Swiper/MySwiper";

export async function QuestsInfo() {
  const questListAdventure = await getQuestList("adventurous");
  const questListEducational = await getQuestList("educational");
  const questListHumorous = await getQuestList("humorous");
  const questListSport = await getQuestList("sport");
  const questListLogical = await getQuestList("logical");
  const questListFast = await getQuestList("fast");
  const questListMystery = await getQuestList("mystery");

  return (
    <>
      {questListAdventure && questListAdventure.length > 0 && (
        <section className="quests-info py-20 px-4 ">
          <MySwiper questList={questListAdventure} category={"Adventure"} />
        </section>
      )}

      {questListEducational && questListEducational.length > 0 && (
        <section className="quests-info py-20 px-4 ">
          <MySwiper questList={questListEducational} category={"Educational"} />
        </section>
      )}

      {questListHumorous && questListHumorous.length > 0 && (
        <section className="quests-info py-20 px-4 ">
          <MySwiper questList={questListHumorous} category={"Humorous"} />
        </section>
      )}

      {questListSport && questListSport.length > 0 && (
        <section className="quests-info py-20 px-4 ">
          <MySwiper questList={questListSport} category={"Sport"} />
        </section>
      )}

      {questListLogical && questListLogical.length > 0 && (
        <section className="quests-info py-20 px-4 ">
          <MySwiper questList={questListLogical} category={"Logical"} />
        </section>
      )}

      {questListFast && questListFast.length > 0 && (
        <section className="quests-info py-20 px-4 ">
          <MySwiper questList={questListFast} category={"Fast"} />
        </section>
      )}

      {questListMystery && questListMystery.length > 0 && (
        <section className="quests-info py-20 px-4 ">
          <MySwiper questList={questListMystery} category={"Mystery"} />
        </section>
      )}
    </>
  );
}
