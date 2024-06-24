

export default function About() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full bg-gray-200">
      
      
      <div className="bg-gray-200 w-full md:w-1/3 p-6 sm:p-4 space-y-4 md:space-y-6 max-w-xl shadow-lg">
        <div className="text-orange-600 text-lg font-bold">
          <p>GET A QUOTE</p>
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">Request A Free Quote</h1>
        </div>
        <div className="text-center text-gray-400">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil
            distinctio esse in sunt consequuntur, porro ducimus! Nobis magni magnam
            non saepe, nemo quasi laboriosam, hic blanditiis qui iure quis.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <h1 className="text-3xl font-bold text-orange-600">225</h1>
            <p className="text-gray-600">Skilled Experts</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-orange-600">1050</h1>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-orange-600">2500</h1>
            <p className="text-gray-600">Complete Projects</p>
          </div>
        </div>
      </div>

     
      <div className="bg-orange-500 w-full md:w-1/3 p-6 sm:p-14 mt-6 md:mt-0 max-w-md  shadow-lg">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <select className="w-full p-2 border border-gray-300 rounded">
            <option>Select a service</option>
            <option>Service 1</option>
            <option>Service 2</option>
            <option>Service 3</option>
          </select>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white p-2 rounded"
          >
            Get A Quote
          </button>
        </form>
      </div>
    </div>
  );
}
