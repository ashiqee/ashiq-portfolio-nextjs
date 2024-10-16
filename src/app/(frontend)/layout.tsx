import { Navbar } from "@/components/navbar";

export default function PricingLayout({
  banner,
  about,
  work,
  contact,
}: {
  banner: React.ReactNode;
  about: React.ReactNode;
  work: React.ReactNode;
  contact: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <section className=" h-screen bg-slate-700/15">{banner}</section>

      <section className="h-screen pt-20" id="about">
        {about}
      </section>
      <section className="h-screen pt-20" id="work">
        {work}
      </section>
      <section className="h-screen pt-20" id="contact">
        {contact}
      </section>
    </>
  );
}
