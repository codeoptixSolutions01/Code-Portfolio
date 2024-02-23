import styles from "./page.module.css";
import ContactForm from "../components/contactSection/contactForm";
import ServiceSection from "../components/servicesection/service";
import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import ProjectSection from "@/components/projectSection/Project";



export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <About />
      {/* <ProjectSection/> */}
      <ServiceSection />
       <ContactForm />
    </main>
  );
}
