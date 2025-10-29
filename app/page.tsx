import Image from "next/image";
import Shape from '../public/Shape.png'
import Button from "./components/UI/Button.jsx";

export default function Home() {
  return (
    <>

      <div className="main-hero w-full h-screen relative overflow-hidden">

        <div className="content flex pt-52 flex-col h-full relative pl-20">

          <div className="absolute left-[-200px] top-16 pointer-events-none opacity-70 z-0">
            <Image src={Shape} alt="shape" width={670} />
          </div>

          <div className="titles text-[60px] text-white font-bold z-10">
            <h1>Meaningful investments in <br/> Main Street businesses</h1>
          </div>

          <div className=" text-white text-[24px] font-medium my-[40px] ">
            <p>Browse vetted investment offerings in <br/> communities all over the US.</p>
          </div>

          <div className="button z-10 ">
            <Button path={"/"} title={"Get Started"} variant="Page" />
          </div>
        </div>
        
      </div>
      
    </>
  );
}
