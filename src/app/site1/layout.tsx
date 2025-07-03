import "../globals.css";
import Image from "next/image";
import logo from "../../../public/logo1.png";
const cred1 = "/page-2/cred (1).png";
const cred2 = "/page-2/cred (2).png";
const cred3 = "/page-2/cred (3).png";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="fixed flex justify-between bg-site1-white w-screen h-[80px] px-44 py-2 text-site1-text border-b-2 border-gray-200">
          <div className="flex items-center font-semibold text-xl ">
            {" "}
            <Image src={logo} width={0} height={0} alt="BACP Logo" />{" "}
            <h4>Dr. Elena Lee</h4>
          </div>

          <div className="flex items-center gap-4 ">
            {" "}
            <a href="">Services</a>
            <a href="">About</a> <a href="">My Approch</a>{" "}
            <button className="bg-site1-cta px-4 py-2 rounded-full w-fit  ">
              Contact Me
            </button>
          </div>
        </nav>
        <main className="text-site1-text  font-site1-sec bg-site1-white">
          {children}
        </main>
        <footer className="py-24 flex justify-between bg-site1-white text-site1-text">
          <div className="flex items-center font-semibold text-xl w-1/3 justify-center ">
            {" "}
            <Image src={logo} width={0} height={0} alt="BACP Logo" />{" "}
            <h4>Dr. Elena Lee</h4>
          </div>
          <div className=" w-1/3 flex flex-col items-center">
            <div className="flex items-center justify-center gap-4 mb-4  ">
              {" "}
              <a href="">Services</a>
              <a href="">About</a> <a href="">My Approch</a>{" "}
            </div>
            <p>
              © 2025 Dr. Elena V. Lee, Psychologist. All rights reserved.
              Privacy Policy
            </p>
          </div>
          <div className="flex gap-4  w-1/3 justify-center ">
            {" "}
            <Image src={cred1} width={100} height={100} alt="BACP Logo" />{" "}
            <Image src={cred2} width={100} height={100} alt="BACP Logo" />{" "}
            <Image src={cred3} width={100} height={100} alt="BACP Logo" />{" "}
          </div>
        </footer>
      </body>
    </html>
  );
}
