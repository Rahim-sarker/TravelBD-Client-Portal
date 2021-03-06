import React, { useEffect, useState } from "react";
import axios from "axios";
import Events from "./event/Events";
import Footer from "../../Footer/Footer";
import image from  "../../image/istockphoto-155439315-170667a.jpg";

const Home = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get("https://blooming-citadel-86534.herokuapp.com/events")
      .then((res) => setEvents(res.data));
  }, []);
  return (
    <div className=" ">
      {/* Banner  */}
      <section>

        <div>
          <img className="w-100 h-30" src={image} alt="" />
        </div>
      </section>





      <h1 className="text-4xl text-center my-10 font-bold">
        Countrys You Can Enjoy With US
      </h1>

      <section className="container mb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-auto">
        {events.map((event) => (
          <Events
            key={event._id}
            id={event._id}
            img={event.img}
            name={event.name}
            price={event.price}
            description={event.description}
          />
        ))}
      </section>

              <Footer></Footer>
    </div>
  );
};

export default Home;
