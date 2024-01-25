import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from '../form/form';
import FormInput from '../form/formInput';
import DatePickerField from '../form/DatePickerFied';
import { format } from 'date-fns';
import axios from 'axios';
import Swal from 'sweetalert2';
import SelectFormField from '../form/seleteFormFiled';

const TaskUpdated = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dev-town-server-2.vercel.app/api/v1/task/${id}`
        );
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [id]);

  const Values = {
    title: userData?.data.title,
    description: userData?.data.description,
    date: userData?.data.userData,
  };

  const [startDate, setStartDate] = useState(new Date());
  const date = format(startDate, 'PP');

  const navigate = useNavigate();

  const handleDateChange = newDate => {
    setStartDate(newDate);
  };

  const onSubmit = async data => {
    try {
      const response = await axios.patch(
        `https://dev-town-server-2.vercel.app/api/v1/task/${id}`,
        {
          description: data.description,
          title: data.title,
          date: date,
        }
      );

      if (response.data.success === true) {
        Swal.fire('Updated successfully!');
        navigate('/save');
        // refetch();
      } else {
        Swal.fire('Failed to update the task!');
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire('Error updating the task!');
    }
  };

  const option = [
    {
      label: 'Web Development',
      value: 'Web Development',
    },
    {
      label: 'Web Designer',
      value: 'Web Designer',
    },
    {
      label: 'Graphic Designer',
      value: 'Graphic Designer',
    },
    {
      label: 'Digital Marketing',
      value: 'Digital Marketing',
    },
  ];

  return (
    <div>
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

        <Form submitHandler={onSubmit} defaultValues={Values}>
          <div className="p-10 shadow-md ">
            <div className="flex gap-3 pt-5">
              <div className="w-full ">
                <SelectFormField
                  name="title"
                  label="Title"
                  options={option}
                  type="text"
                  // placeholder="Enter Title"
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
    </div>
  );
};

export default TaskUpdated;
