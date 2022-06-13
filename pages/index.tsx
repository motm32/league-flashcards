import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [champions, setChampions] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const championsFromAPI = (
        await (
          await fetch(
            "http://ddragon.leagueoflegends.com/cdn/12.10.1/data/en_US/champion.json",
            {
              method: "GET",
              headers: {},
            }
          )
        ).json()
      ).data;
      setChampions(Object.keys(championsFromAPI));
    })();
  }, []);

  return champions.length > 0 ? (
    <div>
      {champions.map((x) => (
        <div key={x}>{x}</div>
      ))}
    </div>
  ) : (
    <div className={styles.container}>Hello World! as</div>
  );
};

export default Home;
