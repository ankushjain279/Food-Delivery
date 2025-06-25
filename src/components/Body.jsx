import React, { useState, useContext } from "react";
import Restrocard, { withRestrocardOpen } from "./Restrocard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import { Body_Api } from '../utils/constant'
import useOnlineStatus from "../utils/useOnlineStatus";
import useBodyfetch from "../utils/useBodyfetch";
import UserContext from "../utils/UserContext";

const RestroOpen = withRestrocardOpen(Restrocard);

function Body() {
  const [search, setsearch] = useState("");
  const onlinestatus = useOnlineStatus();
  const { loggedUser, setuserName } = useContext(UserContext);
  const [letgetrestro, filterrestro, setfilterrestro] = useBodyfetch();

  // console.log(letgetrestro);

  if (onlinestatus === false)
    return <h1 className="text-center text-2xl mt-4 text-red-600 font-semibold">Net band hai Bhai</h1>;

  return letgetrestro?.length === 0 ? (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      <Shimmer />
      <Shimmer />
      <Shimmer />
    </div>
  ) : (
    <>
      <div className="ml-15 my-2 flex flex-wrap gap-4 items-center bg-gray-100 p-4 rounded-lg shadow-sm">
        <div className="flex gap-2 items-center">
          <input
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
            type="text"
            placeholder="search restro"
            className="border border-gray-400 p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={() => {
              const filterlist = letgetrestro.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(search.toLowerCase());
              });

              setfilterrestro(filterlist);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            search
          </button>
        </div>
        <button
          onClick={() => {
            let filterlist = letgetrestro.filter((restro) => {
              return restro.info.avgRatingString >= 4.0;
            });
            setfilterrestro(filterlist);
          }}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Top Rated Restaurants
        </button>

        <label className="pt-2 font-medium text-gray-700">UserName : </label>
        <input
          type="text"
          className="border border-gray-400 px-2 py-1 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          value={loggedUser}
          onChange={(e) => setuserName(e.target.value)}
        />
      </div>

      <div className="p-4 mx-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterrestro?.map((restro) => (
          <Link key={restro.info.id} to={"restaurants/" + restro.info.id}>
            {restro.info.isOpen ? (
              <RestroOpen resdata={restro} />
            ) : (
              <Restrocard resdata={restro} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Body;
