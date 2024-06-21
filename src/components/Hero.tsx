

export default function Hero() {
  return (
    <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
      <img
        className="w-full h-full object-cover"
        src="https://img.ibxk.com.br/2013/5/materias/4426485393141937-o.jpg"
        alt="Banner Image"
      />
      
      {/* Overlay to darken the image */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-amber-600 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
          Safe & Faster
        </h2>
        <h1 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
          Logistics Services
        </h1>

        <div className="mt-4 flex w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <input
            type="text"
            placeholder="Tracking S2"
            className="w-full px-4 py-2 border border-r-0 focus:outline-none rounded-l-md"
          />
          <button className="px-4 py-2 bg-orange-500 text-white border border-l-0 rounded-r-md">
            Track
          </button>
        </div>
      </div>
    </div>
  );
}
