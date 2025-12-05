
export default function Glasscard(props: any) {
    return (
        <div className="xl:w-1/4 w-full md:w-1/2 p-4">
      <div className="w-full flex justify-center">
      <div className="p-6 shadow-2xl w-full h-full bg-white rounded-3xl bg-opacity-40 backdrop-filter backdrop-blur-3xl max-w-sm">
    <h5 className="text-gray-900 text-xl leading-relaxed font-medium mb-2">{props.title}</h5>
    <p className="text-gray-700 leading-relaxed tracking-wider text-base mb-4">
      Session : {props.months} months
    </p>
    <p className="text-gray-700 leading-relaxed tracking-wider text-base mb-4">
      Duration : {props.hours} hours
    </p>
  </div>
</div>
      </div>
        
    )
  }
  