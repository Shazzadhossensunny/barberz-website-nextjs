import About from "./components/About";
import AppointmentForm from "./components/AppointmentForm";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Stats from "./components/Stats";

export default function Home() {
  return (
<main>
<Navbar></Navbar>
<Hero></Hero>
<About></About>
<Services></Services>
<AppointmentForm></AppointmentForm>
<Stats></Stats>
</main>
  );
}
