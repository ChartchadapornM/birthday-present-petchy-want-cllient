"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const [hotdeals, setHotdeals] = useState([]);
  const [clothes, setClothes] = useState([]);
  const [others, setOthers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchhotdeals();
    fetchclothes();
    fetchothers();
  }, []);

  const fetchhotdeals = async () => {
    const respones = await fetch("http://localhost:8002/product-hotdeals");
    const data = await respones.json();
    setHotdeals(data);
  };
  const fetchclothes = async () => {
    const respones = await fetch("http://localhost:8002/product-clothes");
    const data = await respones.json();
    setClothes(data);
  };
  const fetchothers = async () => {
    const respones = await fetch("http://localhost:8002/product-others");
    const data = await respones.json();
    setOthers(data);
  };
  const onAddButton = () => {
    router.push("/addpresent");
  };

  return (
    <main className={poppins.className}>
      <div className="container px-16">
        <p className="text-5xl font-extrabold text-gray-900 underline text-center my-4">
          birthday present petchy want
        </p>
        <div className="flex flex-col items-center">
          <button
            type="button"
            onClick={onAddButton}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800  "
          >
            Add new present
          </button>
        </div>
        <p className="font-bold text-2xl">HOT DEALS🔥</p>
        <div className="mt-4 grid grid-cols-4 gap-12">
          {hotdeals.map((value) => {
            return (
              <div
                className="max-w-sm rounded overflow-hidden shadow-lg border-4 rounded-lg border-red-500 bg-stone-200"
                key={value.id}
              >
                <img
                  className="w-full"
                  src={value.img}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{value.name}</div>
                  <p className="text-gray-700 text-base">{value.desc}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #{value.price} Baht
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="font-bold text-2xl mt-4">Clothes</p>
        <div className="mt-4 grid grid-cols-4 gap-12">
          {clothes.map((value) => {
            return (
              <div
                className="max-w-sm rounded overflow-hidden shadow-lg border-4 rounded-lg bg-stone-200"
                key={value.id}
              >
                <img
                  className="w-full"
                  src={value.img}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{value.name}</div>
                  <p className="text-gray-700 text-base">{value.desc}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #{value.price} Baht
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <p className="font-bold text-2xl mt-4">Others</p>
        <div className="mt-4 grid grid-cols-4 gap-12">
          {others.map((value) => {
            return (
              <div
                className="max-w-sm rounded overflow-hidden shadow-lg border-4 rounded-lg bg-stone-200"
                key={value.id}
              >
                <img
                  className="w-full"
                  src={value.img}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{value.name}</div>
                  <p className="text-gray-700 text-base">{value.desc}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #{value.price} Baht
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
