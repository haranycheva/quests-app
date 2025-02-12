  import { barrio } from "@/fonts/barrio";


export function Hero() {
  return (
    <section className={`hero pt-12 pl-10 text-accent-color`}>
      <h1
        className={`${barrio.className} lg:text-9xl  md:max-w-[700px] md:text-7xl text-5xl min-w-[200px]`}
      >
        Welcome to Questify
      </h1>
      <h3 className={`${barrio.className} md:text-5xl  text-4xl lg:ml-[20px] lg:mt-0 mt-[10px]`}>
        Questify – Create and Play Quests Online!
      </h3>
      <p className={`md-text-3xl  text-2xl lg:ml-[20px]  md:max-w-[800px] mt-[30px]`}>An interactive platform for
        creating, playing, and competing in quests. Add challenges, compete with
        friends, and explore new adventures!</p>
    </section>
  );
}
