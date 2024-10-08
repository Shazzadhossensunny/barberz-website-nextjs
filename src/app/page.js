import About from "./components/About";
import AppointmentForm from "./components/AppointmentForm";
import Blogs from "./components/Blogs";
import CallToAction from "./components/CallToAction";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurClients from "./components/OurClients";
import OurWork from "./components/OurWork";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Teams from "./components/Teams";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
<main>
<Navbar></Navbar>
<Hero></Hero>
<About></About>
<Services></Services>
<AppointmentForm></AppointmentForm>
<Stats></Stats>
<Teams></Teams>
<Testimonials></Testimonials>
<Pricing></Pricing>
<CallToAction></CallToAction>
<Blogs></Blogs>
<OurClients></OurClients>
<OurWork></OurWork>
</main>
  );
}
