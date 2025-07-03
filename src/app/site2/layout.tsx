import "../globals.css";
import Image from "next/image";
import logo from "../../../public/logo1.png";
const cred1 = "/page-2/cred (1).png";
const cred2 = "/page-2/cred (2).png";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="w-full h-[80px] items-center fixed px-20  px-40 bg-primary-site2 flex justify-between text-black text-white z-10">
          <div>
            <Image
              src={logo}
              width={0}
              height={0}
              alt=""
              className="h-14 w-14"
            />
          </div>
          <div className=" flex gap-4  ">
            <p>
              {" "}
              <a href="/site2">Home</a>
            </p>
            <p>
              {" "}
              <a href="#about">About </a>
            </p>
            <p>
              {" "}
              <a href="#services">Services</a>
            </p>
            <p>
              {" "}
              <a href="#faq">FaQ</a>
            </p>
            <p>
              {" "}
              <a href="#contact">Contact</a>
            </p>
          </div>
        </nav>
        <main className="bg-white text-black px-40">{children}</main>
        <footer className="bg-primary-site2 text-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className=" p-1 rounded">
                  <Image
                    src={cred2}
                    alt="BACP Accredited Service"
                    width={100}
                    height={40}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src={logo}
                  alt="Therapist Services Logo"
                  width={48}
                  height={48}
                />
                <h3 className="text-2xl mt-2 text-center">
                  {" "}
                  Dr. Anna Harrison, <br /> MSc, MBACP
                </h3>
                <div className="flex space-x-4 mt-2 text-sm text-gray-300">
                  <p>
                    {" "}
                    <a href="/site2">Home</a>
                  </p>
                  <p>
                    {" "}
                    <a href="#about">About </a>
                  </p>
                  <p>
                    {" "}
                    <a href="#services">Services</a>
                  </p>
                  <p>
                    {" "}
                    <a href="#faq">FaQ</a>
                  </p>
                  <p>
                    {" "}
                    <a href="#contact">Contact</a>
                  </p>{" "}
                </div>
              </div>

              <div>
                <div className=" p-2 rounded flex items-center justify-center">
                  <Image
                    src={cred1}
                    alt="Psychology Today"
                    width={120}
                    height={32}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 text-center text-xs text-gray-400">
              <p>
                &copy; 2025 Therapy Services. All rights reserved. Privacy
                Policy
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
