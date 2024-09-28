export default function Landing() {
  return (
    <>
      {/* Background container */}
      <div className="bg-[#F7F4ED] h-screen w-screen flex flex-col justify-between">
        {/* Header Section */}
        <div className="grid grid-cols-2 p-6 border-b border-black">
          <div>
            <h1 className="text-3xl font-bold text-black font-serif pl-8">Medium</h1>
          </div>
          <div className=" flex justify-end">
            <nav className="flex space-x-6 items-center font-semibold">
              <a href="#" className="text-black hover:text-gray-700">
                Our story
              </a>
              <a href="#" className="text-black hover:text-gray-700">
                Membership
              </a>
              <a href="#" className="text-black hover:text-gray-700">
                Write
              </a>
              <a href="#" className="text-black hover:text-gray-700">
                Sign in
              </a>
              <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800">
                Get started
              </button>
            </nav>
          </div>
        </div>

        {/* <header className="flex items-center justify-between p-4"></header> */}

        {/* Main Content Section */}
        <main className="flex flex-col items-center text-center justify-center space-y-4 px-8">
          <h2 className="text-6xl font-bold text-black leading-tight">
            Human stories & ideas
          </h2>
          <p className="text-lg text-gray-700">
            A place to read, write, and deepen your understanding.
          </p>
          <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800">
            Start reading
          </button>
        </main>

        {/* Footer or bottom spacing */}
        <footer className="py-4"></footer>
      </div>
    </>
  );
}
