import ContentHeader from "../../components/ContentHeader";
import styles from "./../page.module.css";
import "../globals.css";
//import { testDatabaseConnection } from "../actions";

export default async function AboutMe() {
  //const isConnected = await testDatabaseConnection();
  return (
    <div className={`${styles["about-me"]}`}>
      <ContentHeader text="About me" />
      {/*  <div className={`${["paragraphs"]}`}>
                {content.map((paragraph, pIndex) => (
                  <p key={pIndex} className={pIndex === 0 ? `${styles["ingress"]}`: ''}> {paragraph} </p>
                ))}
              </div> 

      {isConnected ? (
        <h2 className="text-lg text-green-500">
          You are connected to MongoDB!
        </h2>
      ) : (
        <h2 className="text-lg text-red-500">
          You are NOT connected to MongoDB. Check the <code>README.md</code>{" "}
          for instructions.
        </h2>
      )}*/}
      <a
        className={`${styles["filled-btn"]}`}
        href="/elin_carlsson_CV_en_20231127.pdf"
        target="_blank"
      >
        Download CV
      </a>
    </div>
  );
}
