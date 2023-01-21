import Navbar from "./navbar";
import "./index.css";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Contacts from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />;
      <HowItWorks />
      <Aboutus />
      <Services />
      <Contacts />
      <Footer />
    </div>
  );
}
export default Home;
