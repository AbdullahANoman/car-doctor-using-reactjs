import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="bg-base-200 p-10 ">
      <div className="text-center space-y-4">
        <p className="font-bold text-xl  text-[#FF3811]">Service</p>
        <p className="text-4xl font-bold">Our Service Area</p>
        <p className="md:px-[300px] text-gray-500">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
        {
            services.map(service=>(
                <ServiceCard key={service._id} service={service}></ServiceCard>
            ))
        }
      </div>
    </div>
  );
};

export default Service;
