'use client';
import ContactForm from "./components/contactform-c";
import ConnectWithUs from "./components/connect";
import ContactSection from "./components/contactus";
import "./contactus.css";

export default function ContactPage() {
  return (
    <section className="bg-[#fff5f5]">
        
        <ContactSection />
        <div>
          <ContactForm />
          <ConnectWithUs />
        </div>
      </section>
  );
}