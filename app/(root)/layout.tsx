import Image from "next/image";
import SideBar from "@/components/SideBar";
import MobileNavBar from "@/components/MobileNavBar";

export default function RootLayout({
  children,         
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {firstName:"Ditoma", lastName:"Kegdigoma"}
  return (
   <main className="flex h-screen w-full font-inter">
   < SideBar user= {loggedIn} />
   <div className="flex size-full flex-col">
    <div className="root-layout ">
    <Image
            alt="hamburger_menu"
            src="/icons/logo.svg"
            width={34}
            height={34}
            className=" size-[24px] max-xl:size-14"
          />
    <div >
      <MobileNavBar user={loggedIn} />
    </div>

    </div>
    {children}
   </div>
   
   </main>
  );
}