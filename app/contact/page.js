import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Menga bog‘laning 📩</h1>
      <ContactForm />
    </div>
  );
}
