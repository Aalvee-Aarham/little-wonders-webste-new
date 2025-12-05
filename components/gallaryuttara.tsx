import Image from "next/image";


export default function Galleryuttara(props: any) {


    return (
      <>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full p-1 md:p-2">
        <Image loading="lazy" height="100%" width="100%" layout="responsive" alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
          src={"/ALBUM/Uttara/Uttara ("+props.number+").jpeg"}/>
      </div>
    </div>
        
          </>
    )
  }
  