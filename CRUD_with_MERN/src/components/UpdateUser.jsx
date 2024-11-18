import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5555/getUser/" + id)
      .then((result) => {
        setName(result.data.name);
        setAge(result.data.age);
        setEmail(result.data.email);
      })
      .catch((error) => console.log(error));
  }, []);
  const updateHandler = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5555/updateUser/" + id, { name, email, age })
      .then((result) => {
        // console.log(result);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-emerald-200 min-h-screen w-full flex justify-center items-center p-4">
      <form
        className="bg-white rounded-lg shadow-lg w-full lg:w-[60%] p-4 md:p-6 lg:p-8"
        onSubmit={updateHandler}
      >
        {/* <div className="bg-blue-500 h-[100vh] w-[100vw] flex justify-center items-center"> */}
        {/* <form className="bg-white w-[50vw] p-5 rounded" onSubmit={updateHandler}> */}
        <h1 className="text-3xl font-bold">Update User</h1>
        <p className="text-sm text-gray-500">Name</p>
        <input
          type="text"
          className="w-[100%] border-2 border-gray-300 rounded p-1"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <p className="text-sm text-gray-500">Email</p>
        <input
          type="email"
          className="w-[100%] border-2 border-gray-300 rounded p-1"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <p className="text-sm text-gray-500">Age</p>
        <input
          type="number"
          className="w-[100%] border-2 border-gray-300 rounded p-1"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        ></input>
        <button className="bg-emerald-600 mt-2 text-white rounded-lg  font-bold p-2">
          Update
        </button>
        <button className="bg-gray-400 rounded-lg font-bold m-1 p-2 w-16 ">
          <Link to={"/"}>Back</Link>
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
