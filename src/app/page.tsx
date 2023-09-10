import Card from "./components/Card";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import styles from "./page.module.css";

export default async function Home() {

  const res = await fetch('http://worldtimeapi.org/api/timezone/Asia/Karachi', {
    next: {
      revalidate: 5
    }
  })
  const data = await res.json()

  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        <p>{data.datetime}</p>
        <Card />
      </div>
    </main>
  );
}