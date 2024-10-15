import { Navbar } from "@/components/navbar";

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar/>
      <div>
        {children}
      </div>
    </section>
  );
}
