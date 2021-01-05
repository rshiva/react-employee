import React, { useState, useEffect } from 'react'
import "../App.css"

function UserDetails(match) {
  useEffect(() =>{
    fetchUsers()
  },[]);

  const [item, setItem] = useState({});

  const fetchUsers = async () => {
    const id = match.match.params.id
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user =  await data.json()
    setItem(user)
  }

  return (
       <div class="flex items-center h-auto py-3 justify-center">
        <div class="max-w-xs">
          <div class="bg-white shadow-xl rounded-lg py-3">
            <div class="p-2">
              <h3 class="text-center text-xl text-gray-900 font-medium leading-8"></h3>
              <div class="text-center text-gray-400 text-xs font-semibold">
                  {item.name}
              </div>
              <table class="text-xs my-3">
                <tbody><tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                  
                  <td class="px-2 py-2">{console.log(item.address.street)}</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                  <td class="px-2 py-2">{item.phone}</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                  <td class="px-2 py-2">{item.email}</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Company</td>
                  {/* <td class="px-2 py-2">{item.company}</td> */}
                </tr>
              </tbody></table>

            </div>
          </div>
        </div>

      </div>
  )
}

export default UserDetails;