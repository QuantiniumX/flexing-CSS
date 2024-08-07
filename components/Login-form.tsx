"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSignIn } from "@clerk/nextjs";
import Loading from "./Loading";

type FormValues = {
  rollNumber: string;
  dob: string;
  name: string;
};

const LoginForm = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  if (!isLoaded) {
    return <Loading />;
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!isLoaded) return;

    setErrorMessage("");
    try {
      const result = await signIn.create({
        identifier: `${getValues("name")[0]}-${getValues("rollNumber")}`,
        password: getValues("dob"),
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
      } else {
        console.error("Sign-in result:", result);
        setErrorMessage("Sign-in failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 border-2 border-black px-9 rounded-xl py-12"
      >
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}

        <div>
          <label htmlFor="rollNumber" className="block mb-1">
            Roll Number
          </label>
          <input
            id="rollNumber"
            {...register("rollNumber", { required: "Roll number is required" })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.rollNumber && (
            <span className="text-red-500">{errors.rollNumber.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            id="name"
            {...register("name", { required: "First name is required" })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="dob" className="block mb-1">
            Date of Birth
          </label>
          <input
            id="dob"
            type="date"
            {...register("dob", {
              required: "Date of Birth is required",
              setValueAs: (value) => {
                if (value) {
                  const [year, month, day] = value.split("-");
                  return `${day}-${month}-${year}`;
                }
                return value;
              },
            })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.dob && (
            <span className="text-red-500">{errors.dob.message}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 px-4 bg-orange-500 text-white rounded hover:bg-orange-600 disabled:bg-orange-300"
        >
          {isSubmitting ? "Starting Test..." : "Start Test"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
