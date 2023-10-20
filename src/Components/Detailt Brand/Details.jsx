import { useLoaderData } from "react-router-dom";
import Detail from "./Detail";
import SliderHero from "./SliderHero";
const Details = () => {
  const data = useLoaderData();
  return (
    <div>
      <SliderHero data={data}></SliderHero>
     <div className="grid lg:grid-cols-3 grid-cols-1 md:ml-0 ml-32 md:grid-cols-2 mt-32 gap-16">
     {
     data.map(data  => <Detail key={data._id} data={data}></Detail>)
    }
     </div>
    </div>
  );
};

export default Details;
