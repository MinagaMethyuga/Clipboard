function App() {
  return (
    <div className="App">
      <div className="w-screen h-screen overflow-hidden">
        <div className="backgroundimages">
          <img src="https://ui2nsvmsttnxr3j5.public.blob.vercel-storage.com/images/bg-header-mobile-WvTahZLxf64kePSl0L4UVMi4OvDhEH.png" alt="background" className="w-full md:hidden lg:hidden"/>
          <img src="https://ui2nsvmsttnxr3j5.public.blob.vercel-storage.com/images/bg-header-desktop-be58Q4feBKBnziuopFY3nbwtP2QjuD.png" alt="background" className=" hidden w-full md:block lg:block"/>
        </div>
        <div className=" w-[90%]  absolute top-[15%] left-[5%] lg:absolute lg:top-[20%]">
          <div className=" flex justify-center">
            <svg width="125" height="125" xmlns="http://www.w3.org/2000/svg"><g stroke="#26BBA4" strokeWidth="10" fill="none" fillRule="evenodd"><circle cx="62.5" cy="62.5" r="57.5"/><path d="M85.481 85.481c-12.692 12.692-33.27 12.692-45.962 0s-12.692-33.27 0-45.962 33.27-12.692 45.962 0" strokeLinecap="round"/></g></svg>
          </div>
          <div className=" text-center mt-[10%]">
            <h1 className=" text-3xl font-semibold md:absolute top-[60%] w-full md:text-3xl lg:text-5xl">A history of everything you copy</h1>
            <p className=" text-md mt-3 md:w-[80%] md:relative left-[10%] md:text-md lg:text-xl lg:mt-13">Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>
          </div>
          <div className=" absolute top-[115%] w-full overflow-hidden md:absolute md:top-[125%] md:h-[25%] lg:h-[20%] lg:w-[60%] lg:left-[20%]">
            <div className=" bg-cyan-600 p-2.5 rounded-full text-center cursor-pointer text-[#ffff] font-semibold w-full h-[%5] md:w-[40%] md:h-[80%] md:absolute top-[10%] left-[8%]">Download for IOS</div>
            <div className=" bg-blue-900 p-2.5 rounded-full mt-3 text-center cursor-pointer text-[#ffff] w-full h-[%5] md:w-[40%] md:h-[80%] md:absolute md:top-[-10%] md:right-[8%]">Download for Mac</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
