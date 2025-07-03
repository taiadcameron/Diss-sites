"use client";
import Image from "next/image";
import pfp from "../../../public/logo1.png";
import person from "../../../public/page-1/Person.svg";
import lotus from "../../../public/page-1/Lotus.svg";
import laptop from "../../../public/page-1/Laptop.svg";
import face1 from "../../../public/page-1/face1.svg";
import cardimg1 from "../../../public/page-1/cardimg (1).svg";
import cardimg2 from "../../../public/page-1/cardimg (2).svg";
import cardimg3 from "../../../public/page-1/cardimg (3).svg";
import cardimg4 from "../../../public/page-1/cardimg (4).svg";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Pin,
  Star,
} from "lucide-react";
import testimg from "../../../public/page-1/testimg.svg";
import { useState } from "react";
import * as gtag from "@/lib/gtag";
import hand from "../../../public/page-1/hand.svg";

type FamiliarCardProps = {
  initialTitle: string | undefined;
  flippedText: string | undefined;
  flippedTitle: string | undefined;
};

//faq
const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      question:
        "I'm worried I'll be judged. Is anything off-limits to talk about?",
      answer:
        "Not at all. Please know that this is a judgment-free space. My role isn't to judge you, but to walk alongside you with empathy and understanding. You can talk about anything—the messy parts, the confusing parts, the things you've never said out loud before. Whatever you bring to the session is welcome.",
    },
    {
      question: "What if I don't know what to talk about when I get there?",
      answer:
        "It’s so common to feel this way. You don’t need to have it all figured out before you walk in the door. There's no pressure to perform. We can start wherever you feel comfortable. My job is to help guide the conversation gently, without pressure.",
    },
    {
      question: "Will therapy actually help? I'm feeling a bit skeptical.",
      answer:
        "It's completely valid to feel skeptical. Therapy isn't a magic wand, but it is a proven, powerful tool for change. The goal is to help you gain new perspectives, develop healthier coping skills, and feel more in control of your life. The fact that you're even asking this question shows you have a spark of hope.",
    },
    {
      question: 'Does coming to therapy mean Im "broken" or "crazy"?',
      answer:
        "Absolutely not. Deciding to come to therapy is a sign of strength, self-awareness, and courage. It means you are choosing to invest in your own well-being and face life's challenges head-on. Everyone faces struggles—it’s part of being human.",
    },
    {
      question:
        "I've had a bad experience with therapy before. How will this be different?",
      answer:
        "Thank you for being willing to try again. I know how difficult that can be. The connection between a client and therapist is the most important factor for success. I encourage you to bring your concerns into our first session so we can talk about what didn't work for you before.",
    },
  ];

  return (
    <div className="w-full space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border rounded-3xl border-gray-300 bg-site1-white"
        >
          <button
            onClick={() => toggle(index)}
            className="flex justify-between items-center w-full text-left text-lg p-6 py-4 font-semibold"
          >
            {item.question}
            <span className="ml-2 text-2xl">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div className="rounded-b-3xl text-base p-6 bg-site1-cta">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

//flip card component
const FamiliarCard = ({
  initialTitle,
  flippedText,
  flippedTitle,
}: FamiliarCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleLearnMoreClick = () => {
    gtag.event({
      action: "learn_more",
      category: "familiar_card",
      label: flippedTitle || "N/A",
      value: 0,
    });
  };

  return (
    <div
      className="w-full h-full bg-site1-cta flex flex-col rounded-2xl cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {isFlipped ? (
        <div className="w-full h-full p-6 flex flex-col justify-between text-left">
          <div>
            <h4 className="font-semibold text-xl mb-2">{flippedTitle}</h4>
            <p>{flippedText}</p>
          </div>
          <button
            onClick={handleLearnMoreClick}
            className="bg-white text-black px-4 py-2 rounded-full font-semibold w-fit self-start mt-4"
          >
            Learn More
          </button>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col justify-center items-center text-center p-4">
          <h4 className="font-semibold">{initialTitle}</h4>
          <p>(Click Me)</p>
        </div>
      )}
    </div>
  );
};

export default function Home() {
  const familiarGridItems = [
    {
      type: "card",
      initialTitle: "Constant Worry & Overthinking?",
      flippedTitle: "Unpacking Constant Worry",
      flippedText:
        "Endless intrusive thoughts making relaxation difficult? We'll quiet the mind, challenge unhelpful patterns, and help you find peace.",
    },
    { type: "image", src: cardimg3 },
    {
      type: "card",
      initialTitle: "Sudden Panic & Physical Symptoms",
      flippedTitle: "Navigating Panic Attacks",
      flippedText:
        "Terrifying surges of fear are manageable. We'll develop grounding techniques, understand triggers, and reframe your relationship with these experiences.",
    },
    { type: "image", src: cardimg2 },
    {
      type: "card",
      initialTitle: "Fear in Social Situations",
      flippedTitle: "Overcoming Social Anxiety",
      flippedText:
        "Dread social gatherings? We'll build your confidence, practice social skills, and gradually face feared situations in a supportive way.",
    },
    { type: "image", src: cardimg1 },
    {
      type: "card",
      initialTitle: "Work/Life Stress",
      flippedTitle: "Managing Modern Stress",
      flippedText:
        "Overwhelmed by life's pressures? Explore effective stress management, boundary setting, and self-care strategies to find balance and prevent burnout.",
    },
    { type: "image", src: cardimg4 },
    {
      type: "card",
      initialTitle: "Specific Fears & Phobias",
      flippedTitle: "Conquering Specific Phobias",
      flippedText:
        "Irrational fears impacting your life? We'll gently and systematically help you confront and overcome your phobia using evidence-based methods.",
    },
  ];

  const handleCTAClick = (ctaLabel: string) => {
    gtag.event({
      action: "cta_click",
      category: "engagement",
      label: ctaLabel,
      value: 0,
    });
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    gtag.event({
      action: "submit_form",
      category: "contact",
      label: "contact_form_submission",
      value: 0,
    });

    alert("Thank you for your message! We will get back to you shortly.");

    event.currentTarget.reset();
  };

  return (
    <>
      <section
        className="bg-cover bg-center bg-no-repeat min-h-screen flex px-4 sm:px-8 md:px-32 py-32"
        style={{ backgroundImage: "url('/Good/bg.svg')" }}
      >
        <div className="flex w-full">
          <div className="w-full md:w-1/2">
            <h1 className="font-site1-prim font-semibold text-4xl sm:text-6xl/[74px] mb-8">
              Feeling Overwhelmed? <br /> Let's Find a Path Forward, <br />{" "}
              Together.
            </h1>
            <p className="text-xl max-w-2xl mb-12 font-site1-sec font-semibold">
              I offer a safe, non-judgemental space where we can explore the
              challenges you're facing. My goal is to help you understand your
              feelings and build the tools for a calmer, more fulfilling life.
            </p>
            <button
              onClick={() => handleCTAClick("hero_ready_to_talk")}
              className="bg-site1-cta px-6 py-3 rounded-full font-semibold"
            >
              Ready to Talk?
            </button>
          </div>
          <div className="w-1/2 hidden md:block"></div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row h-auto lg:h-[900px] px-4 sm:px-8 md:pl-44 py-16 lg:py-36 pb-0 gap-12 lg:gap-24">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="bg-site1-cta h-4 w-24"></div>
          <h2 className="text-4xl font-site1-prim">
            My Approach is All About You
          </h2>
          <p className="text-xl">
            I believe that you are the expert on your own life. My role is to be
            a warm, supportive guide. We'll work together at your pace, using
            techniques from Person-Centred and Mindfulness-based therapies to
            help you find clarity and self-compassion. There's no
            'one-size-fits-all' solution; our sessions will be tailored
            completely to you.
          </p>
          <div className="flex flex-col gap-8 mt-10 lg:mt-20">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 border-site1-cta border-4 flex justify-center items-center p-4 rounded-xl">
                <div className="bg-site1-cta w-full h-full rounded-sm"></div>
              </div>
              <p className="max-w-md font-semibold">
                Experience a judgment-free zone where your unique struggles are
                heard and respected.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 border-site1-cta border-4 flex justify-center items-center p-4 rounded-xl">
                <div className="bg-site1-cta w-full h-full rounded-sm"></div>
              </div>
              <p className="max-w-md font-semibold">
                Gain effective strategies to manage anxiety and stress in your
                daily life.
              </p>
            </div>
          </div>
          <button
            onClick={() => handleCTAClick("about_ready_to_talk")}
            className="bg-site1-cta px-6 py-3 rounded-full font-semibold w-fit mt-8"
          >
            Ready to Talk?
          </button>
        </div>
        <div className="w-full lg:w-1/2 bg-site1-green rounded-t-[300px] lg:rounded-t-[600px] flex justify-center items-center p-8 lg:p-24 pb-12">
          <div className="bg-site1-white w-full h-full rounded-[150px] lg:rounded-[200px] flex px-8 py-12 lg:py-24 flex-col gap-4">
            <div className="flex items-center">
              <Image src={pfp} width={60} height={60} alt="BACP Logo" />
              <h3 className="text-xl font-semibold ml-4">Dr. Elena Lee</h3>
            </div>
            <p>
              Hello, I'm Dr. Elena Lee. My passion is guiding individuals
              towards emotional freedom and resilience. With over a decade of
              experience, I create a collaborative, empathetic space where
              genuine transformation unfolds.
            </p>
            <ul className="font-semibold list-disc list-inside">
              <li>10+ Years Experience</li>
              <li>Doctorate in Clinical Psychology</li>
              <li>Accredited by the BACP</li>
              <li>Specializing in Anxiety & Stress</li>
              <li>Client-Centered Approach</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-site1-green h-auto relative px-4 sm:px-8 md:px-44 py-24">
        <div className="absolute right-0 top-0 hidden lg:block">
          <Image
            src={face1}
            width={400}
            height={400}
            alt="Decorative face illustration"
            className="opacity-30"
          />
        </div>
        <div className="relative z-10 flex flex-col gap-8">
          <div className="bg-site1-cta h-4 w-24"></div>
          <div>
            <h2 className="text-4xl font-site1-prim mb-4">
              Tailored Support for Your Unique Path
            </h2>
            <p className="max-w-2xl text-xl">
              My personalized approach is designed to help you not just manage,
              but thrive, leading to a more fulfilling and peaceful life. You
              are not alone, and healing is possible.
            </p>
          </div>
        </div>
        <div className="relative z-10 mt-12 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-site1-white rounded-2xl w-full p-8 flex flex-col items-center text-center">
            <Image
              src={person}
              width={80}
              height={80}
              alt="Individual Therapy Icon"
            />
            <h4 className="text-2xl font-semibold mt-4">Individual Therapy</h4>
            <ul className="mt-4 space-y-2">
              <li>- Personalized 1-on-1 sessions</li>
              <li>- Deep exploration of root causes</li>
              <li>- Develop tailored coping mechanisms</li>
              <li>- Achieve lasting personal growth</li>
            </ul>
          </div>
          <div className="bg-site1-white rounded-2xl w-full p-8 flex flex-col items-center text-center">
            <Image src={lotus} width={80} height={80} alt="Mindfulness Icon" />
            <h4 className="text-2xl font-semibold mt-4">
              Mindfulness & Stress Reduction
            </h4>
            <ul className="mt-4 space-y-2">
              <li>- Learn practical mindfulness techniques</li>
              <li>- Reduce daily stress and tension</li>
              <li>- Enhance emotional regulation</li>
              <li>- Cultivate inner calm</li>
            </ul>
          </div>
          <div className="bg-site1-white rounded-2xl w-full p-8 flex flex-col items-center text-center">
            <Image
              src={laptop}
              width={80}
              height={80}
              alt="Online Counseling Icon"
            />
            <h4 className="text-2xl font-semibold mt-4">Online Counseling</h4>
            <ul className="mt-4 space-y-2">
              <li>- Convenient and secure virtual sessions</li>
              <li>- Accessible from anywhere in the UK</li>
              <li>- Flexible scheduling options</li>
              <li>- Comfort of your own space</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-8 md:px-44 flex flex-col h-auto py-24">
        <div>
          <div className="bg-site1-cta h-4 w-24"></div>
          <h2 className="text-4xl font-site1-prim mb-4 mt-8">
            Does Any of This Sound Familiar?
          </h2>
          <p className="max-w-4xl text-xl">
            Sometimes, putting a name to what you're feeling can be the first
            step towards clarity. Below are some common challenges my clients
            face. Click on any card that resonates with you to learn more about
            how therapy can help.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-auto">
            {familiarGridItems.map((item, index) => (
              <div key={index} className="h-72">
                {item.type === "card" ? (
                  <FamiliarCard
                    initialTitle={item.initialTitle}
                    flippedTitle={item.flippedTitle}
                    flippedText={item.flippedText}
                  />
                ) : (
                  <div className="w-full h-full bg-site1-green flex justify-center items-center rounded-2xl overflow-hidden relative">
                    <Image
                      src={item.src}
                      alt="Familiar scenario visual"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-8 md:px-44 py-12 flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/2">
          <div className="bg-site1-cta h-4 w-24"></div>
          <h2 className="text-4xl font-site1-prim mb-8 mt-4">
            What My Clients Say
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-1 text-yellow-500">
              <Star fill="currentColor" /> <Star fill="currentColor" />{" "}
              <Star fill="currentColor" /> <Star fill="currentColor" />{" "}
              <Star fill="currentColor" />
            </div>
            <p className="text-lg italic">
              "Working with Dr. Lee was truly life-changing. I finally found the
              tools to manage my overwhelming anxiety. Her empathetic approach
              made all the difference."
            </p>
            <p className="font-semibold text-right">- Amy S.</p>
            <div className="flex justify-end mt-4">
              <div className="border border-black rounded-full p-2 cursor-pointer hover:bg-gray-100">
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src={testimg}
            width={500}
            height={500}
            alt="Testimonial visual"
          />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-44 py-24 justify-between gap-12">
        <div className="w-full lg:w-1/2">
          <div className="bg-site1-cta h-4 w-24"></div>
          <h2 className="text-4xl font-site1-prim mb-8 mt-4">
            An Investment in Yourself
          </h2>
          <p className="text-xl">
            Taking care of your mental health is a valuable investment. My fees
            reflect specialized training, ongoing professional development, and
            the dedicated time I commit to providing high-quality, personalized
            care.
          </p>
          <div className="flex flex-col gap-6 mt-8">
            <h3 className="text-2xl font-bold">Insurance & Payment Details</h3>
            <div>
              <h4 className="text-xl font-semibold">Payment</h4>
              <p>
                Payment is due at the time of session via bank transfer or
                credit/debit card.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Insurance</h4>
              <p>
                While I do not directly accept insurance, I can provide a
                detailed invoice for you to submit to your provider for
                potential reimbursement.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Cancellation Policy</h4>
              <p>
                Please provide at least 48 hours' notice for cancellations or
                rescheduling to avoid being charged for the session.
              </p>
            </div>
          </div>
        </div>
        <div className="h-auto w-full lg:w-[400px] flex flex-col gap-4">
          <div className="bg-site1-green rounded-3xl p-8 flex flex-col">
            <h4 className="text-2xl mb-2">Free Initial Consultation</h4>
            <p>
              A no-obligation chat to discuss your needs and see if we're a good
              fit.
            </p>
            <div className="flex flex-col mt-8 gap-2">
              <div className="flex justify-between">
                <p className="font-semibold">Price:</p>
                <p>£0</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Duration:</p>
                <p>15 Minutes</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Location:</p>
                <p>Online</p>
              </div>
              <button
                onClick={() => handleCTAClick("schedule_free_consultation")}
                className="bg-site1-cta px-6 py-3 rounded-full w-fit font-semibold mt-8"
              >
                Schedule Now
              </button>
            </div>
          </div>
          <div className="bg-site1-green rounded-3xl p-8 flex flex-col">
            <h4 className="text-2xl mb-2">Individual Session</h4>
            <p>
              A dedicated 50-minute session focused entirely on your goals and
              well-being.
            </p>
            <div className="flex flex-col mt-8 gap-2">
              <div className="flex justify-between">
                <p className="font-semibold">Price:</p>
                <p>£85</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Duration:</p>
                <p>50 Minutes</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Location:</p>
                <p>Online / In-Person</p>
              </div>
              <button
                onClick={() => handleCTAClick("schedule_standard_session")}
                className="bg-site1-cta px-6 py-3 rounded-full w-fit font-semibold mt-8"
              >
                Schedule Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-44 py-12 bg-site1-green gap-12">
        <div className="w-full lg:w-1/2 hidden lg:flex items-center justify-center">
          <Image
            src={testimg}
            alt="A person in contemplation"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-site1-prim mb-8">
            Questions You Might Have
          </h2>
          <div>
            <Accordion />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 sm:px-8 md:px-44 py-24 flex flex-col lg:flex-row justify-between gap-12">
        <div className="w-full lg:w-1/2">
          <div className="bg-site1-cta h-4 w-24"></div>
          <h2 className="text-4xl font-site1-prim mb-8 mt-4">Let's Connect</h2>
          <p className="text-xl max-w-md">
            Schedule your free 15-minute consultation to see if we're a good
            fit.
          </p>
          <form
            onSubmit={handleFormSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 mt-8"
          >
            <div>
              <label htmlFor="full-name" className="block text-sm font-medium">
                Your Full Name
              </label>
              <input
                type="text"
                name="full-name"
                id="full-name"
                placeholder="Jack..."
                className="w-full border-b bg-transparent border-gray-500 py-2 px-1 focus:outline-none focus:border-site1-cta"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Hello@Example.com"
                className="w-full border-b bg-transparent border-gray-500 py-2 px-1 focus:outline-none focus:border-site1-cta"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">
                Your Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                placeholder="+44"
                className="w-full border-b bg-transparent border-gray-500 py-2 px-1 focus:outline-none focus:border-site1-cta"
              />
            </div>
            <div>
              <label htmlFor="reason" className="block text-sm font-medium">
                Your Reason
              </label>
              <select
                id="reason"
                name="reason"
                className="w-full border-b bg-transparent border-gray-500 py-2 px-1 focus:outline-none focus:border-site1-cta"
              >
                <option>Not Selected</option>
                <option>General Inquiry</option>
                <option>Support</option>
              </select>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Let us know how we can help!"
                className="w-full border-b bg-transparent border-gray-500 py-2 px-1 focus:outline-none focus:border-site1-cta"
              ></textarea>
            </div>
            <div className="flex flex-col w-fit gap-4 mt-4 col-span-1 sm:col-span-2">
              <button
                type="submit"
                className="bg-site1-cta px-6 py-3 rounded-full font-semibold"
              >
                Send a Message
              </button>
              <p className="text-xs max-w-xs">
                Your information is confidential and will only be used to
                contact you regarding your inquiry.
              </p>
            </div>
          </form>
        </div>
        <div className="p-8 rounded-2xl border border-black w-full lg:w-1/3 h-auto lg:h-[600px] flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="mb-2 text-xl font-semibold">Contact Info</h4>
            <p className="text-lg">
              I aim to respond to all inquiries within 48 hours. Please feel
              free to reach out via phone, email, or the contact form.
            </p>
            <div className="flex flex-col gap-4 text-lg mt-8">
              <div className="flex gap-4 items-center">
                <Phone />
                <p>+44 3785 3434 333</p>
              </div>
              <div className="flex gap-4 items-center">
                <Mail />
                <p>Hello@ElenaLee.com</p>
              </div>
              <div className="flex gap-4 items-center">
                <Pin />
                <p>London, TW2</p>
              </div>
            </div>
          </div>
          <Image
            src={hand}
            alt="Decorative hand illustration"
            width={400}
            height={400}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-auto object-contain opacity-20 z-0 pointer-events-none"
          />
          <div className="flex gap-4 w-full justify-end relative z-10">
            <Facebook width={40} height={40} className="cursor-pointer" />
            <Instagram width={40} height={40} className="cursor-pointer" />
            <Linkedin width={40} height={40} className="cursor-pointer" />
          </div>
        </div>
      </section>
    </>
  );
}
