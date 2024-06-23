export default function Cards() {
    const cardsData = [
      { 
        name: "Full Name 1", 
        work: "Desigmantion 1", 
        img: "https://watermark.lovepik.com/photo/50104/7878.jpg_wh1200.jpg" 
      },
      { 
        name: "Full Name 2", 
        work: "Desigmantion 2", 
        img: "https://www.novida.com.br/wp-content/uploads/2018/03/Trabalhadores-qualificados.jpg" 
      },
      { 
        name: "Full Name 3", 
        work: "Desigmantion 3", 
        img: "https://th.bing.com/th/id/R.b58aef3482debb1cd02388fda86ace59?rik=DzifNrpxXzNQNA&pid=ImgRaw&r=0" 
      },
      { 
        name: "Full Name 4", 
        work: "Desigmantion 4", 
        img: "https://www.criatives.com.br/wp-content/uploads/2015/01/trabalhador.png" 
      },
    ];
  
    return (
        <div>
            <p className="text-center text-orange-600 font-semibold mt-4 font-sans">DELIVERY TEAM</p>
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mt-3">Meet Our Delivery Team</h1>
      <div
        className="flex flex-wrap justify-center items-center w-full mt-8 space-y-4 md:space-y-0 md:space-x-4"
      >
        
        {cardsData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 w-auto md:w-1/5 p-4 space-y-4 shadow-lg relative"
          >
           
            <div className="flex flex-col justify-center items-center w-full">
              <img
                src={item.img}
                alt={`Profile ${index + 1}`}
                className="  object-cover mb-4"
              />
              <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold">
                {item.name}
              </h1>
            </div>
           
            <div className="text-center text-1xl md:text-2xl lg:text-2xl text-gray-500 p-4">
              <p>{item.work}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-600"></div>
          </div>
        ))}
      </div>
      </div>
    );
  }
  