import SocialLinks from "@/components/sections/SocialLinks";

export default function Contact() {
  return (
    <section id="contact" className="w-full px-6 py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <p className="text-gray-600 mb-6">
        Feel free to connect with me on social media
      </p>

    <div className="flex gap-4 justify-center">
      <SocialLinks image="/images/github.png" alt="GitHub" href="https://github.com" />
      <SocialLinks image="/images/linkedin.png" alt="LinkedIn" href="https://linkedin.com" />
      <SocialLinks image="/images/mail_1.png" alt="Email" href="mailto:thea.marany@gmail.com" />
    </div>
    </section>
  );
}