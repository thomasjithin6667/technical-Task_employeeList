import React, { useState } from 'react';
import { SquareUser } from 'lucide-react';
import './App.css'

function App() {
  const initialData = [
    { name: "Thomas Jithin", companyName: "Brototype", place: "Kochi" },
    { name: "Ram Dev", companyName: "Appsoft", place: "Kochi" },
    { name: "Harry Paul", companyName: "Teamstech", place: "Bangalore" },
    { name: "Gokul Kirshna", companyName: "MadBox", place: "Delhi" }
  ];

  const [search, setSearch] = useState("");
  const [data, setData] = useState([...initialData]);

  function handleChange(e) {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);
    const filteredData = initialData.filter((value) =>
      value.name.toLowerCase().includes(searchTerm) ||
      value.companyName.toLowerCase().includes(searchTerm) ||
      value.place.toLowerCase().includes(searchTerm)
    );
    setData(filteredData);
  }

  return (
    <>
         <div className='flex w-full justify-center my-10 items-center gap-1'>
        <h6 className='text-2xl font-bold'>Employee List</h6>
        <SquareUser />
      </div>
      <div className='flex w-full justify-end gap-2 px-20 mb-5'>
        <p className='font-medium'>Search</p>
        <input 
          className='border border-black rounded-md px-2 py-1 focus:outline-none focus:border-blue-500' 
          onChange={handleChange} 
        />
      </div>

      <div className='lg:flex lg:justify-center'>
        <div className='lg:flex lg:justify-center hidden w-full '>
          {data.length > 0 ? (
            <table className='w-full max-w-4xl mt-20 bg-slate-200 rounded-md shadow-lg'>
              <thead>
                <tr className='border-b border-black'>
                  <th className='text-center py-2'>Name</th>
                  <th className='text-center py-2'>Company Name</th>
                  <th className='text-center py-2'>Place</th>
                </tr>
              </thead>
              <tbody>
                {data.map((value, index) => (
                  <tr key={index} className='text-center border-b'>
                    <td className='py-2'>{value.name}</td>
                    <td className='py-2'>{value.companyName}</td>
                    <td className='py-2'>{value.place}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className='text-center mt-10'>No results found</p>
          )}
        </div>

        <div className='lg:hidden'>
          {data.map((value, index) => (
            <div key={index} className='card bg-slate-200 px-5 m-2 rounded-md py-4 shadow-md'>
              <div className='flex justify-center w-full font-bold mb-2  border-black '>Employee Details</div>
              <div className='flex justify-between'>
                <h6 className='font-semibold'>Name</h6>
                <p>{value.name}</p>
              </div>
              <div className='flex justify-between'>
                <h6 className='font-semibold'>Company Name</h6>
                <p>{value.companyName}</p>
              </div>
              <div className='flex justify-between'>
                <h6 className='font-semibold'>Place</h6>
                <p>{value.place}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
