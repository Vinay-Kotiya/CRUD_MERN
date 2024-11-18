import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
// require("dotenv").config();
const CreateUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5555/createUser", { name, email, age })
      .then((result) => {
        // console.log(result);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      {/* <Header /> */}
      <div className="bg-emerald-200 min-h-screen w-full flex justify-center items-center p-4">
        <form
          className="bg-white rounded-lg shadow-lg w-full lg:w-[60%] p-4 md:p-6 lg:p-8"
          onSubmit={submitHandler}
        >
          {/* <div className="bg-blue-500 h-[100vh] w-[100vw] flex justify-center items-center">
        <form
          className="bg-white w-[50vw] p-5 rounded"
          onSubmit={submitHandler}
        > */}
          <h1 className="text-3xl font-bold">Add User</h1>
          <p className="text-sm text-gray-500">Name</p>
          <input
            type="text"
            className="w-[100%] border-2 border-gray-300 rounded p-1"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <p className="text-sm text-gray-500">Email</p>
          <input
            type="email"
            className="w-[100%] border-2 border-gray-300 rounded p-1"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <p className="text-sm text-gray-500">Age</p>
          <input
            type="number"
            className="w-[100%] border-2 border-gray-300 rounded p-1"
            placeholder="Enter Age"
            onChange={(e) => setAge(e.target.value)}
          ></input>
          <button className="bg-emerald-600 mt-2 text-white rounded-lg  font-bold p-2">
            Submit
          </button>
          <button className="bg-gray-400 rounded-lg font-bold m-1 p-2 w-16 ">
            <Link to={"/"}>Back</Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
