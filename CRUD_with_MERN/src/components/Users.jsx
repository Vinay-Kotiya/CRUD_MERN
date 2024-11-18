import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:5555")
      .then((result) => setUsers(result.data))
      .catch((error) => console.log(error));
  }, []);
  const deleteHandler = (id) => {
    axios
      .delete("http://localhost:5555/deleteUser/" + id)
      .then((result) => {
        setUsers(result.data);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-emerald-200 min-h-screen w-full flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-7xl p-4 md:p-6 lg:p-8">
        <Link
          to="/create"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white transition-colors duration-200 rounded-lg font-bold px-4 py-2 mb-4 text-sm md:text-base"
        >
          Add +
        </Link>
        <div className="overflow-x-auto">
          <table className="w-full min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-2 md:p-3 lg:p-4 text-xs md:text-sm lg:text-base font-semibold text-gray-700">
                  Name
                </th>
                <th className="p-2 md:p-3 lg:p-4 text-xs md:text-sm lg:text-base font-semibold text-gray-700">
                  Email
                </th>
                <th className="p-2 md:p-3 lg:p-4 text-xs md:text-sm lg:text-base font-semibold text-gray-700">
                  Age
                </th>
                <th className="p-2 md:p-3 lg:p-4 text-xs md:text-sm lg:text-base font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user, idx) => {
                return (
                  <tr key={idx}>
                    <td className="p-2 md:p-3 lg:p-4 text-xs md:text-sm lg:text-base bg-gray-50 rounded-lg m-1">
                      {user.name}
                    </td>
                    <td className="p-2 md:p-3 lg:p-4 text-xs md:text-sm lg:text-base bg-gray-50 rounded-lg m-1">
                      {user.email}
                    </td>
                    <td className="p-2 md:p-3 lg:p-4 text-xs md:text-sm lg:text-base bg-gray-50 rounded-lg m-1">
                      {user.age}
                    </td>
                    <td className="p-2 md:p-3 lg:p-4">
                      <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                        <Link
                          to={`/update/${user._id}`}
                          className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white transition-colors duration-200 rounded-lg font-bold px-3 py-2 text-xs md:text-sm text-center"
                        >
                          Update
                        </Link>
                        <button
                          className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white transition-colors duration-200 rounded-lg font-bold px-3 py-2 text-xs md:text-sm"
                          onClick={(e) => deleteHandler(user._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    // <div className="bg-emerald-200 h-[100vh] w-[100vw] flex justify-center items-center">
    //   <div className=" bg-white  rounded p-3  ">
    //     <Link
    //       to="/create"
    //       className="bg-emerald-500 mt-2 mb-3 rounded font-bold p-2"
    //     >
    //       Add +
    //     </Link>
    //     <table className="table mt-2 ">
    //       <thead>
    //         <tr>
    //           <th className="p-[2%] text-sm">Name</th>
    //           <th className="p-[2%] text-sm">Email</th>
    //           <th className="p-[2%] text-sm">Age</th>
    //           <th className="p-[2%] text-sm">Action</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {users.map((user, idx) => {
    //           return (
    //             <tr key={idx} className="border-b-2 border-gray-500 ">
    //               <td className="p-[2%] text-sm  bg-gray-100 rounded">
    //                 {user.name}
    //               </td>
    //               <td className="p-[2%] text-sm flex-col  bg-gray-100 rounded">
    //                 {user.email}
    //               </td>
    //               <td className="p-[2%] text-sm  bg-gray-100 rounded">
    //                 {user.age}
    //               </td>
    //               <td className="p-[2%] text-sm  bg-gray-100 rounded justify-center items-center flex">
    //                 <button className="bg-emerald-500 rounded font-bold p-[2%] text-sm w-16 m-1 py-3">
    //                   <Link to={`/update/${user._id}`}>Update</Link>
    //                 </button>
    //                 <button
    //                   className="bg-red-500 rounded font-bold p-[2%] m-1 text-sm py-3 w-16"
    //                   onClick={(e) => deleteHandler(user._id)}
    //                 >
    //                   Delete
    //                 </button>
    //               </td>
    //             </tr>
    //           );
    //         })}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  );
};

export default Users;
