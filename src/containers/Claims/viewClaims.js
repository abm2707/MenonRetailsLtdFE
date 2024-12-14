function ViewClaims() {
    return (
        <div className="border border-black border-2 ml-10 mr-10 mt-5 p-5 rounded-2xl">
      <div className="flex">
        <div className="rounded-3xl shadow-2xl ml-12 w-[20%] mr-5">
          <label htmlFor="financialYear" className="block text-gray-700 mb-2 mt-5 ml-4">
            Financial Year
          </label>
          <select
            id="financialYear"
            className="border border-green-500 ml-7 w-[75%] p-2 rounded-md"
          >
            <option value="" disabled selected>
              Select Financial Year
            </option>
            <option value="2021-2022">2021-2022</option>
            <option value="2022-2023">2022-2023</option>
            <option value="2023-2024">2023-2024</option>
          </select>
        </div>
        <div className="rounded-3xl shadow-2xl p-4 w-[20%]">
          <label htmlFor="financialYear" className="block text-gray-700 mb-2 mt-3 ml-4">
            Quarter
          </label>
          <select
            id="financialYear"
            className="border border-green-500 ml-7 w-[75%] p-2 rounded-md"
          >
            <option value="" disabled selected>
              Select Quarter
            </option>
            <option value="2021-2022">2122</option>
            <option value="2022-2023">2223</option>
            <option value="2023-2024">2324</option>
          </select>
        </div>
      </div>
        <button className="shadow-2xl rounded-2xl bg-green-500 w-[15%] h-12 m-10 ml-15">

      View Claims
        </button>
        </div>
    );
  }
  
  export default ViewClaims;
  