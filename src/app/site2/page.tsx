"use client";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";
import { useState } from "react";

const cred1 = "/page-2/cred (1).png";
const cred2 = "/page-2/cred (2).png";
const cred3 = "/page-2/cred (3).png";
const pfp = "/page-2/pfp.png";
const fee = "/page-2/fee.png";
const office = "/page-2/table.png";
const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      question:
        "What therapeutic approaches or methods do you use in your practice?",
      answer:
        "My practice is grounded in clinically-validated, evidence-based methodologies, primarily integrating Cognitive Behavioral Therapy (CBT) and Acceptance and Commitment Therapy (ACT). This allows for a structured, goal-oriented approach focused on changing destructive thought patterns and behaviors. Each treatment plan is carefully tailored to the client's unique needs following a comprehensive initial assessment to ensure the most effective and measurable outcomes.",
    },
    {
      question: "What are your qualifications and professional affiliations?",
      answer:
        "I hold a Doctorate in Clinical Psychology (PsyD) and am a fully licensed practitioner registered with the Health and Care Professions Council (HCPC). As a Chartered Member of the British Psychological Society (BPS), I adhere to the highest ethical standards and engage in continuous professional development to stay current with the latest research and best practices in the field.",
    },
    {
      question: "What can I expect during the first consultation session?",
      answer:
        "The initial 50-minute consultation is a structured session where we will confidentially discuss your reasons for seeking therapy and conduct a comprehensive assessment of your needs. Together, we will collaboratively define clear, achievable goals for our work. Following this, I will outline a potential therapeutic approach tailored to you and answer any questions you have about the process moving forward.",
    },
    {
      question: "How is my privacy and confidentiality protected?",
      answer:
        "Client confidentiality is a cornerstone of my practice. All personal information and session content are strictly protected in full compliance with the ethical frameworks of the BACP/HCPC and GDPR regulations. No information is ever disclosed without your explicit consent, except under specific legal circumstances involving risk of harm, ensuring our work is conducted in a secure and private environment.",
    },
    {
      question:
        "What specific issues or conditions do you specialize in treating?",
      answer:
        "I have extensive clinical experience in treating a range of conditions, with a primary focus on anxiety and stress-related disorders, mood disorders such as depression, trauma (PTSD), and interpersonal difficulties. My expertise lies in providing targeted, evidence-based support for these specific challenges. If you are unsure whether your concerns align with these areas, I encourage you to book a consultation to discuss your needs.",
    },
  ];

  return (
    <div className="w-full   ">
      {items.map((item, index) => (
        <div key={index} className="border  border-black ">
          <button
            onClick={() => toggle(index)}
            className="flex justify-between items-center w-full text-left text-lg p-6 py-4 font-semibold    "
          >
            {item.question}
            <span className="ml-2">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className=" text-base p-6 text-white bg-primary-site2">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSent(true);
  };

  return (
    <>
      <section className="hero pt-40 pb-16  h-screen  text-black flex  items-start justify-between gap-8">
        <div className="flex flex-col justify-between h-full ">
          <div>
            {" "}
            <h1 className="text-4xl font-bold mb-4">
              Dr. Anna Harrison, <br /> MSc, MBACP
            </h1>
            <p className="text-xl mb-6 max-w-xl">
              Registered Psychotherapist Providing Evidence-Based Treatment for
              Anxiety and Mood Disorders. Specialising in Cognitive Behavioural
              Therapy (CBT).
            </p>
          </div>
          <div>
            <button className="bg-primary-site2 text-white px-6 py-3 shadow-md hover:bg-black transition duration-300 ease-in-out mb-10">
              Book an Appointment
            </button>
            <div className="flex gap-24 items-center">
              <Image src={cred3} width={100} height={40} alt="UKCP Logo" />
              <Image src={cred2} width={100} height={40} alt="BACP Logo" />
              <Image
                src={cred1}
                width={100}
                height={40}
                alt="Psychology Today Logo"
              />
            </div>
          </div>
        </div>
        <div className="relative w-2/4 h-full  ">
          <Image
            src={pfp}
            alt="Dr. Anna Harrison"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
      </section>

      <section id="about" className="pt-24  flex justify-between">
        <div className="flex flex-col  items-start  ">
          <h2 className="text-3xl font-bold mb-4">Therapeutic Methodology</h2>
          <p className="text-lg mb-6 max-w-3xl">
            This practice utilises evidence-based methodologies to ensure the
            highest standard of care. The primary modality is Cognitive
            Behavioural Therapy (CBT), a structured approach for treating a
            range of issues by changing patterns of thinking and behaviour. All
            treatment plans are developed in line with NICE guidelines and
            professional best practices.
          </p>
        </div>
        <div className="relative  w-96 h-64">
          <Image src={fee} alt="Fees illustration" layout="fill" objectFit="" />
        </div>
      </section>

      <section id="services" className="pt-24">
        <div className="flex flex-row  justify-between mb-8 gap-4">
          <h2 className="text-3xl font-bold ">Clinical Services Offered</h2>
          <button className="bg-primary-site2 text-white px-6 py-3 shadow-md hover:bg-black transition duration-300 ease-in-out mb-10">
            Find Out More
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8 pr-52">
          <div className="bg-primary-site2  text-white p-10  flex flex-col justify-between h-88">
            <h3 className="text-3xl  mb-2">
              Cognitive Behavioural Therapy (CBT)
            </h3>
            <p className="text-base ">
              For the treatment of Generalised Anxiety Disorder (GAD),
              depression, and panic attacks.
            </p>
          </div>

          <div className="bg-primary-site2  text-white p-10  flex flex-col justify-between h-88">
            <h3 className="text-3xl  mb-2">EMDR Therapy</h3>
            <p className="text-base ">
              A specialised treatment for Post-Traumatic Stress Disorder (PTSD)
              and trauma.
            </p>
          </div>

          <div className="bg-primary-site2  text-white p-10  flex flex-col justify-between h-88">
            <h3 className="text-3xl  mb-2">
              Interpersonal Psychotherapy (IPT)
            </h3>
            <p className="text-base ">
              A time-limited, focused approach for treating mood disorders,
              improving the quality of a client's interpersonal relationships
              and social functioning to help reduce their distress.
            </p>
          </div>
        </div>
      </section>

      <section className="my-16 p-12  text-white bg-primary-site2 text-whi  ">
        <div className="mb-8 text-left">
          <h2 className="text-3xl font-bold mb-4">Areas of Specialisation</h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto md:mx-0">
            The practice specialises in providing support for the following
            conditions:
          </p>
        </div>

        <div className=" p-6  grid grid-cols-2 gap-y-6">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-white flex-shrink-0"></div>
            <h4 className="text-lg font-medium">Work-Related Stress</h4>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-white flex-shrink-0"></div>
            <h4 className="text-lg font-medium">
              Generalised Anxiety Disorder (GAD)
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-white flex-shrink-0"></div>
            <h4 className="text-lg font-medium">Panic Disorders</h4>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-white flex-shrink-0"></div>
            <h4 className="text-lg font-medium">Low Self-Esteem</h4>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-white flex-shrink-0"></div>
            <h4 className="text-lg font-medium">Phobias</h4>
          </div>
        </div>
      </section>

      <section
        id="fees"
        className="py-16 flex  items-center justify-center gap-16"
      >
        <div className="flex flex-col justify-between w-full">
          <h2 className="text-3xl font-bold mb-4">Consultation Fees</h2>
          <p className="text-base md:text-lg mb-6 max-w-xl">
            The standard fee for a 50-minute clinical session is £95. A limited
            number of concessionary rates are available. Please inquire for
            details regarding private health insurance.
          </p>
          <button className="bg-primary-site2 text-white px-6 py-3 shadow-md hover:bg-black transition duration-300 ease-in-out mb-10 w-fit">
            Book an Appointment
          </button>
        </div>
        <div className="relative w-64 h-40 md:w-80 md:h-52 lg:w-96 lg:h-64">
          <Image
            src={fee}
            alt="Fees illustration"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </section>

      <section id="faq" className="py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 ">Frequently Asked Questions</h2>
        <div className="flex flex-row items-center justify-between gap-12">
          <div className="  w-2/4 ">
            <Accordion />
          </div>
          <div className="relative w-96 h-96">
            <Image
              src={office}
              alt="Office table"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Submit a Patient Inquiry
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              15-minute consultation to see if we're a good fit.
            </p>
            <form
              onSubmit={handleSubmit}
              method="POST"
              className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8"
            >
              <div>
                <label
                  htmlFor="full-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    placeholder="Jack..."
                    className="py-3 px-4 block w-full border text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 "
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Hello@Example.com"
                    className="py-3 px-4 block w-full border text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 "
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
                    className="py-3 px-4 block w-full border text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 "
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="reason"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Reason <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <select
                    id="reason"
                    name="reason"
                    className="py-3 px-4 block w-full border text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 "
                  >
                    <option>Not Selected</option>
                    <option>Therapy</option>
                    <option>Consultation</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Let Us Know How We Can Help!"
                    className="py-3 px-4 block w-full border text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 "
                  ></textarea>
                </div>
              </div>
              <div className="sm:col-span-2">
                <hr className="mt-4 border-t border-gray-300" />
              </div>
              <div className="sm:col-span-2 flex flex-col items-start">
                <button
                  type="submit"
                  disabled={isSent}
                  className="bg-primary-site2 text-white px-6 py-3 shadow-md hover:bg-black transition duration-300 ease-in-out mb-10 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSent ? "Sent" : "Send a Message"}
                </button>
                <p className="mt-4 text-xs text-gray-500">
                  Your information is confidential and will only be used to
                  contact you regarding your inquiry.
                </p>
              </div>
            </form>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Contact Info
                </h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <PhoneIcon className="h-6 w-6 text-gray-400" />
                    </div>
                    <p className="ml-3 text-base text-gray-500">
                      +44 3785 3434 333
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <EnvelopeIcon className="h-6 w-6 text-gray-400" />
                    </div>
                    <p className="ml-3 text-base text-gray-500">
                      AHarrison@therapy.co.uk
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPinIcon className="h-6 w-6 text-gray-400" />
                    </div>
                    <p className="ml-3 text-base text-gray-500">London, TW2</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Practice Hours
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  Mon-Fri, 9:00 AM – 17:00 PM
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Location</h3>
                <p className="mt-4 text-base text-gray-500">
                  123 Street Avenue
                  <br />
                  TW2 3AR
                  <br />
                  London
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
