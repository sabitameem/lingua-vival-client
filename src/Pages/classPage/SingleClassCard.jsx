import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useClasses from '../../hooks/useClasses';


const SingleClassCard = ({classCard}) => {
    const cardClasses = classCard.available_seats === 0 ? 'card card-compact lg:w-96 w-full bg-color-two mb-5 shadow-xl bg-red-500' : 'card card-compact lg:w-96 w-full bg-color-two mb-5 shadow-xl';
    const { name, image, available_seats, instructor_name,_id,price } = classCard;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location =useLocation();
    const [, refetch] = useClasses();


    const handleAddToCart = classCard => {
      console.log(classCard)
      if(user && user.email){
        const selectedClass = {classId: _id, name, image, available_seats, price, email: user.email}
        fetch('https://lingua-viva-server-sabitameem.vercel.app/classes',{
          method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
        })
        .then(res => res.json())
        .then(data=>{
          if(data.insertedId){
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Class Added Successfully.',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
      else{
        Swal.fire({
          title: 'Please login to select the class',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login now!'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}})
          }
        })
      }

    }



    return (
        <div className={cardClasses}>
      <figure>
        <img
          className="h-[250px] w-full"
          src={classCard.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto text-xl lg:text-3xl text-teal-900 font-bold">{name}</h2>
        <div className="divider  mt-0 mb-0"></div>
        <h4 className='text-color-three lg:text-xl text-lg font-medium '>Instructor Name : <span className='font-semibold text-color-four'>{instructor_name}</span> </h4>
        <p className='text-color-three lg:text-xl text-lg font-medium'>Available Seat : {available_seats}</p>
        <p className='text-color-three lg:text-xl text-lg font-medium'>Course fee : ${price}</p>
        <button onClick={() => handleAddToCart(classCard)} className='mt-6 btn btn-sm w-[150px] mx-auto bg-color-three text-color-two hover:bg-color-two hover:text-color-three hover:border-color-three' disabled={available_seats === 0}>Select</button>
        
        
      </div>
    </div>
    );
};

export default SingleClassCard;