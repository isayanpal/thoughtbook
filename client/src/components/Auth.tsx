import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupType } from "../types/zod";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [userInputs, setUserInputs] = useState<SignupType>({
    name: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        userInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
      console.log("sendRequest function failed");
    }
  }
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex flex-col justify-center gap-3 ">
        <div className="flex flex-col justify-center items-center px-6">
          <div className="text-4xl font-extrabold text-left mt-4">
            {type === "signup" ? "Create an Account" : "Welcome Back"}
          </div>
          <div className="text-xl text-slate-400">
            {type === "signup"
              ? "Already have an account?"
              : "Don't have an account?"}{" "}
            <Link
              className="underline pl-1"
              to={type === "signup" ? "/signin" : "/signup"}
            >
              {type === "signup" ? "Login" : "Register"}
            </Link>
          </div>
        </div>
        {type === "signup" ? (
          <LabelledInput
            label="Name"
            placeholder="your name"
            onChange={(e) => {
              setUserInputs((c) => ({
                ...c,
                name: e.target.value,
              }));
            }}
          />
        ) : null}
        <LabelledInput
          label="Username"
          placeholder="username"
          onChange={(e) => {
            setUserInputs((c) => ({
              ...c,
              username: e.target.value,
            }));
          }}
        />
        <LabelledInput
          type="password"
          label="Password"
          placeholder="password"
          onChange={(e) => {
            setUserInputs((c) => ({
              ...c,
              password: e.target.value,
            }));
          }}
        />
        <button
          onClick={sendRequest}
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full"
        >
          {type === "signup" ? "Sign up" : "Sign in"}
        </button>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
