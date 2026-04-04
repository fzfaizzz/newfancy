import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Satisfaction from "./components/Satisfaction";
import Team from "./components/Team";
import Newsletter from "./components/Newsletter";
import BookingForm from "./components/BookingForm";
import Location from "./components/Location";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="grow overflow-x-clip relative w-full">
        <Hero />
        <Experience />
        <Services />
        <WhyChooseUs />
        <Satisfaction />
        <Team />
        <BookingForm />
        <Newsletter />
        <Location />
      </main>
      <Footer />
    </>
  );
}
