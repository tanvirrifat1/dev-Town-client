import React from 'react';
import useTask from '../Hooks/useTask';
import { FaRegEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

const SaveTask = () => {
  const [task, refetch] = useTask();
  console.log(task);
  const handleDelete = async id => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then(result => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/api/v1/task/${id}`, {
            method: 'DELETE',
          })
            .then(response => response.json())
            .then(data => {
              console.log(data);
              refetch();
            })
            .catch(error => {
              console.error('Error:', error);
            });
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          );
        }
      });
  };

  return (
    <div>
      {task?.data.length > 0 ? (
        <>
          <div className="container mx-auto min-h-[50vh]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 m-10">
              {task?.data.map(service => (
                <div key={service.id} className="card  bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title ">
                      {service.title.slice(0, 30)}
                    </h2>
                    <p>{service.description}</p>
                    <p> {service?.date}</p>

                    <div className="flex justify-center items-center gap-6">
                      <Link to={`/task/${service.id}`}>
                        <button className="btn btn-square btn-outline">
                          <FaRegEdit className="text-xl" />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(service?.id)}
                        className="btn btn-square btn-outline"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="min-h-[50vh] flex justify-center items-center text-3xl font-semibold text-red-300">
            no task added
          </p>
        </>
      )}
    </div>
  );
};

export default SaveTask;
