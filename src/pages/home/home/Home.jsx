import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import useTask from '../../../components/Hooks/useTask';
import useCart from '../../../components/Hooks/useCart';
import { useNavigate } from 'react-router-dom';
import Form from '../../../components/form/form';
import FormInput from '../../../components/form/formInput';
import DatePickerField from '../../../components/form/DatePickerFied';
import { format } from 'date-fns';

const Home = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const date = format(startDate, 'PP');
  const [refetch] = useCart();
  const navigate = useNavigate();

  // console.log(startDate, 'hello2');

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const title = form.elements.web.value;

  //   const description = form.elements.description.value;

  //   const email = user?.email;

  //   const booking = {
  //     title,
  //     email,

  //     description,
  //   };

  //   fetch(`http://localhost:5000/api/v1/task/create`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(booking),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.success === true) {
  //         Swal.fire('Task Add successfully!');
  //         navigate('/save');
  //         // refetch();
  //       } else {
  //         Swal.fire('Already add the task!');
  //       }
  //       form.reset();
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // };

  // const onSubmit = async data => {
  //   console.log(data, date);
  // };
  const handleDateChange = newDate => {
    setStartDate(newDate);
    console.log(newDate, 'hello');
  };
  const onSubmit = async data => {
    const BookData = {
      email: user?.email,
      description: data.description,
      title: data.title,
      date: date,
    };
    fetch(`http://localhost:5000/api/v1/task/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(BookData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success === true) {
          Swal.fire('Task Add successfully!');
          navigate('/save');
          // refetch();
        } else {
          Swal.fire('Already add the task!');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="bg-white max-w-[1020px] mx-auto my-24">
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
              Task create Carefully
            </h2>
          </div>
        </div>
      </div>

      <Form submitHandler={onSubmit}>
        <div className="p-10 shadow-md ">
          <div className="flex gap-3 pt-5">
            <div className="w-full ">
              <FormInput
                name="title"
                label="Title"
                type="text"
                placeholder="Enter Title"
                id="title"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white read-only"
              />
            </div>
          </div>
          <div className="flex gap-3 pt-5">
            <div className="w-full ">
              <FormInput
                name="description"
                label="Description"
                type="text"
                placeholder="Enter your Description"
                id="description"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
          </div>
          <div className="flex gap-3 pt-5">
            <div className="w-full ">
              <label
                htmlFor="date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date
              </label>
              <DatePickerField
                className="appearance-none block cursor-pointer lg:w-[940px] bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                selectedDate={startDate}
                onChange={date => handleDateChange(date)}
              />
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <button type="submit" className="btn btn-outline w-60">
              submit
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Home;
