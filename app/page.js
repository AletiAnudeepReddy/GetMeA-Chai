import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh]">
      <div className="font-bold flex justify-center items-center gap-1 text-5xl">Buy Me a Chai<span className="mb-1">
        <img src="/tea.gif" width={88}/>
      </span></div>
      <p>
        A crowd funding platform for creators. Get funded by your fans and followers.
      </p>
      <p>
        A place where you fans can buy you a chai. Unleash the power of your fans and get your projects funded. 
      </p>
      <div className="flex gap-1">
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10"></div>
    <div className="text-white container mx-auto mb-20">
      <h1 className="text-3xl font-bold text-center my-16">Your Fans can buy you a Chai</h1>
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
      <h1 className="text-3xl font-bold text-center my-16">Your Fans can buy you a Chai</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/nIiu4qqtJUk?si=9cxNGowx1d0QzRGL" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </>
  );
}
