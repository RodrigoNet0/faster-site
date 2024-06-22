export default function Price() {
    const pricingData = [
      { plan: "Basic", price: "49", features: ["HTML & CSS", "Bootstrap 4", "Responsive Layout", "Compatible With Browsers"] },
      { plan: "Premium", price: "99", features: ["HTML & CSS", "Bootstrap 5", "Responsive Layout", "Advanced Browsers Compatibility"] },
      { plan: "Business", price: "149", features: ["HTML & CSS", "Tailwind CSS", "Responsive Layout", "All Features Included"] },
    ];
  
    return (
      <div className="flex flex-col justify-center items-center w-full">
        <div>
          <p className="text-center text-orange-600 mt-10">PRICING PLAN</p>
          <h1 className="text-5xl md:text-3xl lg:text-4xl font-extrabold text-center">
            Affordable Pricing Packages
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center w-full mt-8 space-y-4 md:space-y-0 md:space-x-4">
          {pricingData.map((item, index) => (
            <div key={index} className="bg-gray-100 w-full md:w-1/3 p-6 sm:p-4 space-y-4 max-w-md shadow-lg">
              <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold">
                  <span className="text-lg md:text-xl lg:text-2xl align-top">$</span>
                  {item.price}
                  <span className="text-lg md:text-xl lg:text-2xl align-top">/mo</span>
                </h1>
              </div>
              <div className="text-center text-2xl md:text-2xl lg:text-3xl font-bold bg-orange-600 p-4">
                <p>{item.plan}</p>
              </div>
              <div>
                <ul className="list-none list-inside text-gray-400 text-center">
                  {item.features.map((feature, i) => (
                    <li key={i} className="mt-3">{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-center items-center w-full">
                <button className="bg-orange-600 p-3 text-white mt-4">Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  