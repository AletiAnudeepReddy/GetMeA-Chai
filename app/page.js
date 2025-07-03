import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col gap-4 px-5 md:px-0 items-center text-white h-[44vh]">
      <div className="font-bold flex justify-center items-center gap-1 text-3xl md:text-5xl">Buy Me a Chai<span className="mb-1">
        <img className='bg-slate-300 rounded-full w-15 mx-3' src="/tea.gif" width={88}/>
      </span></div>
      <p className="text-center md:text-left">
        A crowd funding platform for creators. Get funded by your fans and followers.
      </p>
      <p className="text-center md:text-left">
        A place where you fans can buy you a chai. Unleash the power of your fans and get your projects funded. 
      </p>
      <div className="flex gap-1">
      <Link href={"/login"}>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
      </Link>
      <Link href="/about">
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </Link>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10"></div>
    <div className="text-white container mx-auto mb-20 px-10">
      <h2 className="text-3xl font-bold text-center my-16">Your Fans can buy you a Chai</h2>
      <div className="flex gap-5 justify-around">
        <div className="item flex space-y-3 flex-col items-center justify-center">
          <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt=""/>
          <p className="font-bold">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help you.</p>
        </div>
        <div className="item flex space-y-3 flex-col items-center justify-center">
          <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt=""/>
          <p className="font-bold">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help you.</p>
        </div>
        <div className="item flex space-y-3 flex-col items-center justify-center">
          <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt=""/>
          <p className="font-bold">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help you.</p>
        </div>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10"></div>
    <div className="text-white container mx-auto pb-20 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center my-16">Learn more about us</h2>
      <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/nIiu4qqtJUk?si=9cxNGowx1d0QzRGL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </div>
  
    </div>
    </>
  );
}
