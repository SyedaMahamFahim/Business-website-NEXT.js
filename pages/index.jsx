import styles from "../styles/Home.module.css";
import { MetaTag ,Header} from "../src/components";

export default function Home() {
  return (
    <div className={styles.container}>
      <MetaTag
        title={"Haider Business"}
        description={"Haider Business"}
        keywords={
          "Business,Website,Karachi,Pakistan,Graphic Designing,Web Development,Web Designing,Web Hosting,Domain Registration,SEO,Search Engine Optimization,Haider Business"
        }
        author={"Haider"}
      />
<Header/>

     

    </div>
  );
}
