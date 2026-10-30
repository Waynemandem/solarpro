const benefits = [
  {
    number: "01",
    title: "Quality Products",
    description: "Explore carefully selected energy products.",
  },
  {
    number: "02",
    title: "Expert Guidance",
    description: "Get help choosing suitable energy solutions.",
  },
  {
    number: "03",
    title: "Easy Enquiries",
    description: "Speak with our team directly through WhatsApp.",
  },
];

export default function TrustBar() {
  return (
    <section className="border-b border-gray-100 bg-white py-12">
      <div className="container grid gap-8 md:grid-cols-3">
        {benefits.map((benefit) => (
          <div key={benefit.number} className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-sm font-extrabold text-[#FF8A26]">
              {benefit.number}
            </div>

            <div>
              <h3 className="font-bold text-[#10233F]">
                {benefit.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}