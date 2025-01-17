"use client";
import React, { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const endPoint = process.env.NEXT_PUBLIC_APIENDPOINT;

const AddPresentPage = () => {
  const [formProduct, setFormProduct] = useState({
    name: "",
    img: "",
    desc: "",
    price: "",
    type: "Hot Deals",
  });
  const router = useRouter();

  const onChangeProductData = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const productSubmitForm = async (e) => {
    e.preventDefault();
    await fetch(`${endPoint}/add-product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
      },
      body: JSON.stringify(formProduct),
    });
    router.push("/");
  };

  return (
    <main className={poppins.className}>
      <div className="container px-16">
        <p className="text-5xl font-extrabold text-gray-900 underline text-center my-4">
          birthday present petchy want
        </p>
        <p className="text-3xl mt-8">Add more</p>
        <div className="mb-6">
          <form onSubmit={productSubmitForm}>
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white mt-2">
              Product name.
            </label>
            <input
              onChange={onChangeProductData}
              name="name"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white mt-2">
              Image for the product.
            </label>
            <input
              onChange={onChangeProductData}
              name="img"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white mt-2">
              Description for the product.
            </label>
            <input
              onChange={onChangeProductData}
              name="desc"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white mt-2">
              Price of the product.
            </label>
            <input
              onChange={onChangeProductData}
              name="price"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white mt-2">
              Select an option.
            </label>

            <select
              onChange={onChangeProductData}
              name="type"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="Hot Deals">Hot deals</option>
              <option value="Clothes">Clothes</option>
              <option value="Others">Others</option>
            </select>
            <button
              type="Submit"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-6"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddPresentPage;
