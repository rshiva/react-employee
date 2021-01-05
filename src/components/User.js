import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

function User() {

  useEffect(() =>{
    fetchUsers()
  },[]);

  const [items, setItems] = useState([]);

  const fetchUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    const users =  await data.json()
    console.log("i",users)
    setItems(users)
  }
  return (
  //   <div>
  //     {items.map(item => (
  //       <h2 key={item.id}>
  //       <Link to={`/user/${item.id}`}>{item.name}</Link>
  //       </h2>
  //     ))}
  //   </div>
  <div>
    {items.map(item => (
      <div class="flex items-center h-auto py-3 justify-center">

      <div class="max-w-xs">
        <div class="bg-white shadow-xl rounded-lg py-3">
          <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8"></h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
                <p>{item["company"].name}</p>
            </div>
            <table class="text-xs my-3">
              <tbody><tr>
                <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                <td class="px-2 py-2">{item["address"].street}, {item["address"].city}</td>
              </tr>
              <tr>
                <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                <td class="px-2 py-2">{item.phone}</td>
              </tr>
              <tr>
                <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                <td class="px-2 py-2">{item.email}</td>
              </tr>
            </tbody></table>

              <div class="text-center my-3">
                <Link to={`/user/${item.id}`} className="text-xs text-indigo-500 
                  italic hover:underline hover:text-indigo-600 font-medium">
                  View Profile 
                </Link>
              </div>
          </div>
        </div>
      </div>

      </div>
     ))}
    </div>
    )
}

export default User;