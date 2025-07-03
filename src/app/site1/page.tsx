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

type FamiliarCardProps = {
  initialTitle: string;
  flippedText: string;
  flippedTitle: string;
};

import hand from "../../../public/page-1/hand.svg";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      question:
        " I'm worried I'll be judged. Is anything off-limits to talk about?",
      answer:
        "Not at all. Please know that this is a judgment-free space. My role isn't to judge you, but to walk alongside you with empathy and understanding. You can talk about anything—the messy parts, the confusing parts, the things you've never said out loud before. Whatever you bring to the session is welcome. It takes immense courage to be vulnerable, and I deeply respect that.",
    },
    {
      question: "What if I don't know what to talk about when I get there?",
      answer:
        "It’s so common to feel this way. You don’t need to have it all figured out before you walk in the door. There's no pressure to perform. We can start wherever you feel comfortable—maybe it's with what happened in your week, a feeling you can't shake, or even just by saying, I don't know where to begin today. My job is to help guide the conversation gently, without pressure. Sometimes the most powerful sessions start with uncertainty.",
    },
    {
      question: "Will therapy actually help? I'm feeling a bit skeptical.",
      answer:
        " It's completely valid to feel skeptical, especially if things have been difficult for a long time or if you've tried other things that haven't worked. Therapy isn't a magic wand, but it is a proven, powerful tool for change. The goal is to help you gain new perspectives, develop healthier coping skills, and feel more in control of your life. The fact that you're even asking this question shows you have a spark of hope, and that's the perfect place to start.",
    },
    {
      question: 'Does coming to therapy mean Im "broken" or "crazy"?',
      answer:
        "Absolutely not. Deciding to come to therapy is a sign of strength, self-awareness, and courage. It means you are choosing to invest in your own well-being and face life's challenges head-on. Everyone faces struggles—it’s part of being human. Therapy is simply a dedicated space to navigate those struggles with support, just as you would see a doctor for a physical injury.",
    },
    {
      question:
        " I've had a bad experience with therapy before. How will this be different?",
      answer:
        "Thank you for being willing to try again. I know how difficult that can be. I'm truly sorry you had a previous experience that wasn't helpful. The connection between a client and therapist is the most important factor for success. I encourage you to bring your concerns into our first session. We can talk about what didn't work for you before and what you need to feel safe and understood now. My priority is to build a relationship based on trust and collaboration, and we will go at your pace.",
    },
  ];

  return (
    <div className="w-full   ">
      {items.map((item, index) => (
        <div
          key={index}
          className="border rounded-3xl  border-gray-300 bg-site1-white "
        >
          <button
            onClick={() => toggle(index)}
            className="flex justify-between items-center w-full text-left text-lg p-6 py-4 font-semibold    "
          >
            {item.question}
            <span className="ml-2">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className=" rounded-b-3xl text-base p-6  bg-site1-cta">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const FamiliarCard = ({
  initialTitle,
  flippedText,
  flippedTitle,
}: FamiliarCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="w-full h-full bg-site1-cta flex flex-col rounded-2xl cursor-pointer"
      onClick={handleClick}
    >
      {isFlipped ? (
        // flipped card
        <div className="w-full h-fit p-6 flex flex-col justify-between text-left">
          <div>
            <h4 className="font-semibold text-xl mb-2">{flippedTitle}</h4>
            <p>{flippedText}</p>
          </div>
          <button className="bg-white text-black px-4 py-2 rounded-full font-semibold w-fit self-start mt-4">
            Learn More
          </button>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col justify-center items-center">
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
        "Endless intrusive thoughts making relaxation difficult? We'll quiet the mind, challenge unhelpful patterns, and help you find peace. Learn to differentiate productive thought from rumination.",
    },
    { type: "image", src: cardimg3 },
    {
      type: "card",
      initialTitle: "Sudden Panic & Physical Symptoms",
      flippedTitle: "Navigating Panic Attacks",
      flippedText:
        "Terrifying surges of fear are manageable. We'll develop grounding techniques, understand triggers, and reframe your relationship with these experiences so they no longer control you.",
    },
    { type: "image", src: cardimg2 },
    {
      type: "card",
      initialTitle: "Fear in Social Situations",
      flippedTitle: "Overcoming Social Anxiety",
      flippedText:
        "Dread social gatherings? We'll build your confidence, practice social skills, and gradually face feared situations in a supportive way. Connect more authentically.",
    },
    { type: "image", src: cardimg1 },
    {
      type: "card",
      initialTitle: "Work/Life Stress",
      flippedTitle: "Managing Modern Stress",
      flippedText:
        "Overwhelmed by life's pressures? Explore effective stress management, boundary setting, and self-care strategies. Find balance and prevent burnout.",
    },
    { type: "image", src: cardimg4 },
    {
      type: "card",
      initialTitle: "Specific Fears & Phobias",
      flippedTitle: "Conquering Specific Phobias",
      flippedText:
        "Irrational fears impacting your life? We'll gently and systematically help you confront and overcome your phobia using evidence-based methods, reclaiming your freedom.",
    },
  ];

  return (
    <>
      <section
        className="bg-cover  bg-center bg-no-repeat min-h-screen flex   px-44 py-32 pl-32 "
        style={{ backgroundImage: "url('/Good/bg.svg')" }}
      >
        <div className="flex w-full ">
          <div className="w-1/2">
            {" "}
            <h1 className="font-site1-prim font-semibold text-6xl/[74px] mb-8">
              Feeling Overwhelmed? <br /> Let's Find a Path Forward, <br />{" "}
              Together.
            </h1>{" "}
            <p className="text-xl max-w-2xl mb-12 font-site1-sec font-semibold">
              I offer a safe, non-judgemental space where we can explore the
              challenges you're facing. My goal is to help you understand your
              feelings and build the tools for a calmer, more fulfilling life.
            </p>{" "}
            <button className="bg-site1-cta px-6 py-3 rounded-full font-semibold">
              Ready to Talk?
            </button>
          </div>
          <div className="w-1/2 "></div>
        </div>
      </section>

      <section className="flex h-[900px] pl-44 py-36 pb-0  gap-24">
        <div className="w-1/2 flex flex-col gap-4 ">
          {" "}
          <div className="bg-site1-cta h-4 w-24 "></div>
          <h2 className="text-4xl font-site1-prim">
            My Approach is All About You
          </h2>{" "}
          <p className="text-xl">
            I believe that you are the expert on your own life. My role is to be
            a warm, supportive guide. We'll work together at your pace, using
            techniques from Person-Centred and Mindfulness-based therapies to
            help you find clarity and self-compassion. There's no
            'one-size-fits-all' solution; our sessions will be tailored
            completely to you.
          </p>
          <div className="flex flex-col gap-8 mt-20">
            <div className="flex gap-4">
              <div className="w-12 h-12 border-site1-cta border-4 flex justify-center items-center p-4 rounded-xl">
                <div className="bg-site1-cta w-full h-full rounded-"></div>
              </div>
              <p className="max-w-95 font-semibold">
                Experience a judgment-free zone where your unique struggles are
                heard and respected.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 border-site1-cta border-4 flex justify-center items-center p-4 rounded-xl">
                <div className="bg-site1-cta w-full h-full rounded-"></div>
              </div>
              <p className="max-w-95 font-semibold">
                Gain effective strategies to manage anxiety and stress in your
                daily life.
              </p>
            </div>
          </div>
          <button className="bg-site1-cta px-6 py-3 rounded-full font-semibold w-fit mt-4">
            Ready to Talk?
          </button>
        </div>
        <div className="w-1/2 bg-site1-green rounded-t-[600px] flex justify-center items-center p-24 pb-12">
          {" "}
          <div className="bg-site1-white w-full h-full rounded-[200px] flex px-8 py-24 flex-col gap-4">
            {" "}
            <div className=" flex items-center">
              <Image src={pfp} width={0} height={0} alt="BACP Logo" />
              <h3 className="text-xl font-semibold">Dr. Elena Lee</h3>
            </div>
            <p>
              Hello, I'm Dr. Elena Lee. My passion is guiding individuals
              towards emotional freedom and resilience. With over a decade of
              experience, I create a collaborative, empathetic space where
              genuine transformation unfolds. I empower you with personalized
              tools and insights, fostering lasting peace.
            </p>
            <ul className="font-semibold">
              <li>- 10+ Years Experience</li>
              <li>- Doctorate in Clinical Psychology</li>
              <li>- Accredited by the BACP</li>
              <li>- Specializing in Anxiety & Stress</li>
              <li>- Client-Centered Approach</li>
            </ul>
          </div>{" "}
        </div>
      </section>

      <section className="bg-site1-green h-screen px-44 py-24">
        <div className="absolute right-0 ">
          <Image
            src={face1}
            width={0}
            height={0}
            alt="BACP Logo"
            className="   "
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className="bg-site1-cta h-4 w-24 z-10 "></div>

          <div>
            <h2 className="text-4xl font-site1-prim mb-4">
              Tailored Support for Your Unique Path
            </h2>{" "}
            <p className=" max-w-160 text-xl">
              My personalized approach is designed to help you not just manage,
              but thrive, leading to a more fulfilling and peaceful life. You
              are not alone, and healing is possible.
            </p>
          </div>
        </div>

        <div className="mt-24 flex gap-12 z-10">
          <div className="bg-site1-white rounded-2xl w-fit px-4 h-fit py-8 flex justify-center flex-col items-center ">
            <Image src={person} width={0} height={0} alt="BACP Logo" />
            <h4 className="text-2xl font-semibold">Individual Therapy</h4>

            <ul className=" text-center mt-4 ">
              <li>- Personalized 1-on-1 sessions</li>
              <li>- Deep exploration of root causes</li>
              <li>- Develop tailored coping mechanisms</li>
              <li>-Achieve lasting personal growth</li>
            </ul>
          </div>

          <div className="bg-site1-white rounded-2xl w-fit px-4 h-fit py-8 flex justify-center flex-col items-center z-10">
            <Image src={lotus} width={0} height={0} alt="BACP Logo" />
            <h4 className="text-2xl font-semibold">
              Mindfulness & Stress Reduction
            </h4>

            <ul className=" text-center mt-4 ">
              <li>Learn practical mindfulness techniques</li>
              <li>Reduce daily stress and tension</li>
              <li>Enhance emotional regulation</li>
              <li>Cultivate inner calm</li>
            </ul>
          </div>

          <div className="bg-site1-white rounded-2xl w-fit px-4 h-fit py-8 flex justify-center flex-col items-center z-10   ">
            <Image src={laptop} width={0} height={0} alt="BACP Logo" />
            <h4 className="text-2xl font-semibold">Online Counseling</h4>

            <ul className=" text-center mt-4 ">
              <li>Convenient and secure virtual sessions</li>
              <li>Accessible from anywhere in the UK</li>
              <li>Flexible scheduling options</li>
              <li>-Comfort of your own space</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-44 flex flex-col h-fit py-12 ">
        <div>
          <div className="bg-site1-cta h-4 w-24 z-10 "> </div>

          <h2 className="text-4xl font-site1-prim mb-4 mt-8">
            Does Any of This Sound Familiar?
          </h2>
          <p className=" max-w-160 text-xl">
            Sometimes, putting a name to what you're feeling can be the first
            step towards clarity. Below are some common challenges my clients
            face. Click on any card that resonates with you to learn more about
            how therapy can help you navigate these specific experiences.
          </p>

          <div className=" mt-12 grid grid-cols-3 grid-rows-3 gap-4 rounded-2xl h-[800px] pr-80 ">
            {familiarGridItems.map((item, index) => {
              if (item.type === "card") {
                return (
                  <FamiliarCard
                    key={index}
                    initialTitle={item.initialTitle}
                    flippedTitle={item.flippedTitle}
                    flippedText={item.flippedText}
                  />
                );
              }
              if (item.type === "image") {
                return (
                  <div
                    key={index}
                    className="w-full h-full bg-site1-green flex flex-col justify-center items-center rounded-2xl"
                  >
                    <Image
                      src={item.src}
                      width={0}
                      height={0}
                      alt="BACP Logo"
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>

      <section className="px-44 py-12 flex">
        <div>
          <div className="bg-site1-cta h-4 w-24 z-10 "> </div>
          <h2 className="text-4xl font-site1-prim mb-8 mt-4">
            What My Clients Say
          </h2>

          <div className="w-1/2">
            <div className="flex gap-1 mb-4">
              <Star /> <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p>
              "Working with Dr. Lee was truly life-changing. I finally found the
              tools to manage my overwhelming anxiety. Her empathetic approach
              made all the difference."
            </p>
            <p className=" font-semibold text-right">- Amy</p>
            <div className=" border w-fit rounded-full p-2">
              <ArrowRight />
            </div>
          </div>
        </div>
        <div>
          <Image src={testimg} width={0} height={0} alt="BACP Logo" />
        </div>
      </section>

      <section className="flex px-44 py-24 justify-between">
        <div className="w-1/2">
          <div className="bg-site1-cta h-4 w-24 z-10 "> </div>
          <div>
            <h2 className="text-4xl font-site1-prim mb-8 mt-4">
              An Investment in Yourself
            </h2>
            <p className="text-xl">
              Taking care of your mental health is a valuable investment in
              yourself. My fees reflect the specialized training, ongoing
              professional development, and dedicated time I commit to providing
              high-quality, personalized care. Below is a breakdown of my
              session rates.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-8 w-2/3">
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
                potential reimbursement. Please confirm your 'out-of-network'
                mental health benefits directly with your insurer.
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
        <div className="h-full w-[400px] flex flex-col gap-4[''">
          <div className=" bg-site1-green rounded-3xl p-8 flex flex-col">
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
              <button className="bg-site1-cta px-6 py-3 rounded-full w-fit font-semibold mt-8">
                Schedule Now
              </button>
            </div>
          </div>
          <div className=" bg-site1-green rounded-3xl p-8 flex flex-col">
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
              <button className="bg-site1-cta px-6 py-3 rounded-full w-fit font-semibold mt-8">
                Schedule Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex px-44 py-12 bg-site1-green">
        <div className="w-1/2">
          {" "}
          <Image src={testimg} width={0} height={0} alt="BACP Logo" />
        </div>
        <div className="w-1/2">
          {" "}
          <h2 className="text-4xl font-site1-prim mb-8">
            Questions You Might Have
          </h2>
          <div>
            <Accordion />
          </div>
        </div>
      </section>

      <section className="bg-site1-green px-44 py-12 flex justify-between ">
        <div className="">
          <div className="bg-site1-cta h-4 w-24 z-10 "> </div>
          <h2 className="text-4xl font-site1-prim mb-8 mt-4">Lets Connect</h2>
          <p className="text-xl max-w-98">
            Schedule your free 15-minute consultation to see if we're a good
            fit.
          </p>

          <div>
            {" "}
            <form
              action="#"
              method="POST"
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 mt-8"
            >
              <div>
                <label
                  htmlFor="full-name"
                  className="block text-sm font-medium "
                >
                  Your Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    placeholder="Jack..."
                    className=" w-full  border-b border-gray-500 py-2 px-1 "
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium ">
                  Your Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Hello@Example.com"
                    className="w-full  border-b border-gray-500 py-2 px-1"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Phone Number
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    placeholder="+44"
                    className="w-full  border-b border-gray-500 py-2 px-1"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium ">
                  Your Reason
                </label>
                <div className="mt-1">
                  <select
                    id="reason"
                    name="reason"
                    className="w-full  border-b border-gray-500 py-2 px-1"
                  >
                    <option className="text-gray-800">Not Selected</option>
                    <option className="text-gray-800">General Inquiry</option>
                    <option className="text-gray-800">Support</option>
                    <option className="text-gray-800">Feedback</option>
                  </select>
                </div>
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Let Us Know How We Can Help!"
                    className="w-full  border-b border-gray-500 py-2 px-1"
                  ></textarea>
                </div>
              </div>

              <div className=" flex flex-col  w-fit gap-6 mt-4">
                <button className="bg-site1-cta px-6 py-3 rounded-full font-semibold">
                  Send a Message
                </button>
                <p className="text-xs max-w-xs  ">
                  Your information is confidential and will only be used to
                  contact you regarding your inquiry.
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="p-8 rounded-4xl border  border-black w-1/3 relative overflow-hidden h-[600px] flex flex-col justify-between">
          <div className="flex flex-col gap-8">
            <div>
              <h4 className=" mb-2 text-xl font-semibold">Contact Info</h4>
              <p className="text-xl">
                Schedule your free 15-minSchedule your free 15-minute
                consultation to see if we're a good fit.ute consultation to see
                if we're a good fit.
              </p>
            </div>
            <Image
              src={hand}
              width={0}
              height={0}
              alt="BACP Logo"
              className=" absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-auto object-contain opacity-55 z-0 pointer-events-none "
            />
            <div className="flex flex-col gap-4 text-lg">
              <div className="flex gap-4">
                <Phone />
                <p>+44 3785 3434 333</p>
              </div>
              <div className="flex gap-4">
                <Mail />
                <p>Hello@ElenaLee.com</p>
              </div>
              <div className="flex gap-4">
                <Pin />
                <p>London, TW2 </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 w-full justify-end">
            <Facebook width={50} height={50} />
            <Instagram width={50} height={50} />
            <Linkedin width={50} height={50} />
          </div>
        </div>
      </section>
    </>
  );
}
