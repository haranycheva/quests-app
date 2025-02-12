import { MySwiper } from "./Swiper/MySwiper";

export function QuestsInfo() {
  const questList = [
    {
      name: "Mystery of the Ancient Temple",
      description:
        "Solve puzzles and uncover the secrets of the ancient temple!",
      rating: 4.5,
      photo:
        "https://res.cloudinary.com/dk3syrsg5/image/upload/v1739016996/photo_2025-02-08_14-16-18_lwxlvx.jpg",
      id: 1,
    },
    {
      name: "Mystery of the Ancient Temple",
      description:
        "Solve puzzles and uncover the secrets of the ancient temple!",
      rating: 4.5,
      photo:
        "https://res.cloudinary.com/dk3syrsg5/image/upload/v1739016996/photo_2025-02-08_14-16-18_lwxlvx.jpg",
      id: 2,
    },
    {
      name: "Mystery of the Ancient Temple",
      description:
        "Solve puzzles and uncover the secrets of the ancient temple!",
      rating: 4.5,
      photo:
        "https://res.cloudinary.com/dk3syrsg5/image/upload/v1739016996/photo_2025-02-08_14-16-18_lwxlvx.jpg",
      id: 3,
    },
    {
      name: "Mystery of the Ancient Temple",
      description:
        "Solve puzzles and uncover the secrets of the ancient temple!",
      rating: 4.5,
      photo:
        "https://res.cloudinary.com/dk3syrsg5/image/upload/v1739016996/photo_2025-02-08_14-16-18_lwxlvx.jpg",
      id: 4,
    },
  ];

  return (
    <section className="quests-info py-20 px-4 ">
      <MySwiper questList={questList} category={"Adventure"} />
    </section>
  );
}
