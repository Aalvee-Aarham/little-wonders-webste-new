import Image from "next/image";

export const Banner = (prop: any) => {
    return (
      <div className="w-full h-60 bg-cover bg-bannertest bg-center" >
      <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-60">
          <div className="text-center">
              <h1 className="text-blue-700 text-4xl font-semibold uppercase md:text-5xl"> {prop.title}</h1>
          </div>
      </div>
  </div>
    );
  };