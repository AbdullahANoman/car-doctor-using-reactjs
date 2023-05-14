import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
    const {user} = useContext(AuthContext)
  const service = useLoaderData();
  const { title,img, price } = service;
  const handleConfirm = event =>{
    event.preventDefault();
    const form = event.target ;
    const name = form.name.value;
    const date = form.date.value ;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const book = {
        name,date,email,phone,message,service:title,price,img
    }
    console.log(book)
    console.log(name,date,phone,email,message)
    fetch(`http://localhost:5000/bookings`,{
        method :'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(book)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
            form.reset()
            Swal.fire({
                title: 'Success!',
                text: 'Your Booking Completed',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
  }
  return (
    <div>
      <p className="text-center text-2xl">This service name : {title}</p>
      <div className="card flex-shrink-0 w-full mt-[100px]  shadow-2xl bg-base-100">
        <form onSubmit={handleConfirm}>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="form-control">
              <input
                type="text"
                placeholder=" Name"
                name="name"
                defaultValue={user?.displayName}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="date"
                
                name="date"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Your phone"
                name="phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Your email"
                defaultValue={user?.email}
                name="email"
                className="input input-bordered"
              />
            </div>
          </div>
          <div>
          <textarea placeholder="Your Message" name="message" className="textarea textarea-bordered textarea-lg w-full mt-10" ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Order Confirm "
            />
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
