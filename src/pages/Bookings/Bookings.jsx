import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingsCard from "./BookingsCard";
import { Link } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  console.log(bookings);
  const url = `http://localhost:5000/bookings?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div className="mt-10">
      <p className="text-center text-2xl font-semibold">CART DETAILS </p>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <tbody>
            {
                bookings.map(booking=>(
                    <BookingsCard key={booking._id} booking={booking} bookings={bookings} setBookings={setBookings}></BookingsCard>
                ))
            }
            
            
            
          </tbody>

          
        </table>
      </div>
      <div className="flex justify-between my-10">
        <Link to="/"><button>Continue Shopping </button></Link>
        <button>Clear Shopping Cart </button>
      </div>
    </div>
  );
};

export default Bookings;
