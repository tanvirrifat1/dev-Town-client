import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { AiFillDelete } from "react-icons/ai";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import { TOKEN } from "../../Shared/token/token";
import { getUserInfo } from "../../Shared/auth/auth.service";

const AllUser = () => {
  const token = localStorage.getItem(TOKEN);
  const { data, refetch, isLoading } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(
        "https://watch-shop-mongoose.vercel.app/api/v1/user",
        {
          headers: {
            authorization: token,
          },
        }
      );
      return res.json();
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleUpdate = (id) => {
    fetch(`https://watch-shop-mongoose.vercel.app/api/v1/user/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ role: "admin" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (id) => {
    fetch(`https://watch-shop-mongoose.vercel.app/api/v1/user/${id}`, {
      method: "DELETE",
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
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
            if (data?.data) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          }
        });
      });
  };

  const { role } = getUserInfo();

  return (
    <div>
      <Helmet>
        <title>All Users</title>
      </Helmet>
      <h3 className="text-3xl font-semibold">
        Total User {data?.data?.length}
      </h3>
      <div className="pr-20 pl-5 py-10">
        <div className="overflow-x-auto ">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Image
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Email
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Role
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Update here
                </th>

                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {data?.data?.map((user, index) => (
                <tr key={user?.id}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    <div className="avatar">
                      <div className="w-12 h-12 rounded">
                        <img alt={user?.title} src={user?.image} />
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user?.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user?.email}
                  </td>
                  <th>
                    {user?.role === "admin" ? (
                      "admin"
                    ) : (
                      <button className="whitespace-nowrap ml-2 btn py-2 bg-blue-gray-900 text-white">
                        <FaUserShield
                          onClick={() => handleUpdate(user?.id)}
                          className="text-3xl text-white hover:text-black "
                        />
                      </button>
                    )}
                  </th>

                  <th>
                    {user.role !== "admin" && (
                      <button className="whitespace-nowrap ml-2 btn py-2 bg-red-500 text-white">
                        <AiFillDelete
                          onClick={() => handleDelete(user?.id)}
                          className="text-3xl text-white hover:text-black "
                        />
                      </button>
                    )}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
