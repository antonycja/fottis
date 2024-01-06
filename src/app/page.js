import Image from "next/image";
import Contents from "@/constants/data";
import Card from "@/components/card";
import ContactForm from "@/components/contactForm";
import HeroSection from "@/components/hero";

export default function Home() {
  return (
    <>
      <main className="">
        <HeroSection />

        <section
          id="about"
          className="about-section z-40 relative text-white "
        >
          <div className="blue-bg-content bg-[#000B50] h-96 relative">
            <div className="content mx-24 pt-6 px-28 text-center">
              <Card
                image={Contents.about.problem.image}
                heading={Contents.about.problem.title}
                cardText={Contents.about.problem.description}
              />
            </div>
            <Image
              className="absolute bottom-0 z-0"
              src={Contents.images.whiteCurve}
              width={5000}
              height={50}
              alt="White background curve"
            />
          </div>
          <div className="about-cards mx-24 -mt-2 relative z-0 text-black">
            <div className="problems mx-24 grid grid-flow-col-dense gap-24 ">
              {Contents.about.problem.contents.map((details, index) => (
                <Card
                  title={details.title}
                  cardText={details.text}
                  index={index}
                  key={index}
                />
              ))}
            </div>
            <div className="data-cards my-24 mx-8 grid grid-flow-col-dense gap-28">
              {Contents.about.data.map((details, index) => (
                <div
                  className="card border-2 bg-slate-100 rounded-3xl p-6"
                  key={index}
                >
                  <Card
                    image={details.image}
                    cardText={details.text}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="blue-bg-content bg-slate-200 text-black h-96 relative flex items-center pb-6  border-white rounded-[100rem]">
            <div className="content mx-24 px-28 text-center relative z-10">
              <Card
                image={Contents.about.solution.image}
                heading={Contents.about.solution.title}
                headingColor="[#000B50]"
                cardText={Contents.about.solution.description}
              />
            </div>
          </div>
          <div className="about-cards mx-24 my-24 relative z-0 text-black">
            <div className="problems mx-24 grid grid-flow-col-dense gap-20 ">
              {Contents.about.solution.contents.map((details, index) => (
                <Card
                  title={details.title}
                  cardText={details.text}
                  index={index}
                  key={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="how it works"
          className="how-it-works-section z-40 relative text-white"
        >
          <div className="blue-bg-content bg-[#000B50] h-fit relative flex flex-col items-center gap-12 pb-6">
            <div className="content mx-24 px-28 text-center relative z-10">
              <Card
                image={Contents.whatWeDo.problem.image}
                heading={Contents.whatWeDo.problem.title}
                cardText={Contents.whatWeDo.problem.description}
              />
            </div>
            <Image
              className="absolute top-0 z-0 rotate-180"
              src={Contents.images.whiteCurve}
              width={5000}
              height={50}
              alt="White background curve"
            />
            <div className="process-cards mx-24 grid grid-flow-col gap-4 text-center">
              {Contents.whatWeDo.steps.map((step, index) => (
                <Card
                  image={step.image}
                  cardText={step.text}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="evaluation my-12 mx-24 text-center text-black">
            <Card
              headingColor="[#000B50]"
              image={Contents.whatWeDo.evaluation.image}
              heading={Contents.whatWeDo.evaluation.title}
              cardText={Contents.whatWeDo.evaluation.description}
            />
          </div>

          <div className="evaluation-content my-24 text-black mx-24 grid grid-flow-col-dense gap-20">
            {Contents.whatWeDo.evaluation.data.map((info, index) => (
              <Card
                index={index}
                title={info.title}
                cardText={info.text}
                key={index}
              />
            ))}
          </div>
        </section>

        <section
          id="contact us"
          className="contact z-50 relative min-h-[75vh] bg-[#000B50] text-white"
        >
          <footer className="mx-24 py-12 pb-16">
            <div className="statements grid grid-flow-col-dense justify-between gap-40">
              {Contents.contactUs.statement.map((template, index) => (
                <div
                  className="card border-2 bg-slate-200 rounded-3xl p-6 text-black"
                  key={index}
                >
                  <Card
                    image={template.image}
                    heading={template.title}
                    headingColor="black"
                    cardText={template.description}
                  />
                </div>
              ))}
            </div>

            <div className="contact-form mt-28">
              <ContactForm />
            </div>
          </footer>
        </section>

        <div className="bottom-img fixed mx-0 -left-1 mb-0 -bottom-4 z-40">
          <Image
            src={Contents.images.bottomLandscape}
            width={5000}
            height={50}
            alt="water landscape for bottom of every page"
          />
        </div>
      </main>
    </>
  );
}
