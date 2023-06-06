import React, { FormEvent, useRef } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { categories } from "./App";

interface FormData {
  description: string;
  amount: number;
}
const Form = () => {
  // const nameRef = useRef<HTMLInputElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description", { required: true, minLength: 3 })}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description?.type === "required" && (
            <p className="text-danger">The description field is required</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...(register("amount"), { required: true })}
            id="amount"
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select name="" id="category" className="form-select">
            <option value=""></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
