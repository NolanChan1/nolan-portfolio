import Navbar from "@/app/_components/nav/navbar";
import Header from "@/app/_components/header/header";
import PortfolioBody from "@/app/_components/body/portfolio-body";

export default function Home() {
  return (
    <div className="bg-off-white-100 font-poppins selection:bg-light-black-900 selection:text-white dark:bg-light-black-900 dark:selection:bg-white dark:selection:text-light-black-900">
      <Navbar />
      <Header />
      <PortfolioBody />
    </div>
  );
}
