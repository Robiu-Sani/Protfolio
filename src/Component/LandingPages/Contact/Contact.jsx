import ContactForm from "../Home/ContactForm";
import ContactBanner from "./ContactBanner";
import SocialContact from "./SocialContact";
import SupportHelp from "./SupportHelp";

export default function Contact() {
  return (
    <div>
      <ContactBanner></ContactBanner>
      <SupportHelp></SupportHelp>
      <SocialContact></SocialContact>
      <ContactForm></ContactForm>
    </div>
  );
}
