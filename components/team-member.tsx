import Image from "next/image"
export default function Member(props: any) {
    return (
        <div className="p-4 px-6 lg:w-1/2">
          <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <div className="flex-shrink-0 rounded-lg w-48 h-48 sm:mb-0 mb-4">

            <Image height={512} width={512} className="rounded-lg " layout="responsive" alt={props.name}  src={"/Team/"+props.staff_name+".webp"}/>
            </div>
            <div className="flex-grow sm:pl-8">
              <h2 className="title-font font-medium text-lg text-gray-900">{props.staff_name}</h2>
              <h3 className="text-gray-500 mb-3">{props.postition}</h3>
              <h3 className="text-gray-500 mb-3">{props.joining_date}</h3>
              <p className="mb-4">{props.view}</p>
            </div>
          </div>
        </div>
    )
  }
  