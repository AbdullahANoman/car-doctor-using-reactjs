import Swal from "sweetalert2";

const BookingsCard = ({ booking,bookings,setBookings }) => {
  const { img, service, price, date, _id } = booking;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
                const remaining = bookings.filter(p=>p._id !== _id)
                setBookings(remaining)
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)}>X</button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service}</div>
          </div>
        </div>
      </td>
      <td>
        <p className="text-xl font-bold">${price}</p>
      </td>
      <td>
        <p className="font-semibold">{date}</p>
      </td>
      <th>
        <button className="btn bg-red-500 border-none btn-xs">Pending</button>
      </th>
    </tr>
  );
};

export default BookingsCard;
