import React, { useState,useEffect } from 'react';
import './App.css';
import { userService } from './API/api';
function App() {
  const [cust, setCust]=useState({name:"",email:""})
  function call() {
    userService
      .data()
      .then(response => {
        var data=response.data.data;
        console.log('data response======> ', data);
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  useEffect(() => call(), []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>

        <tbody>
        {cust.length && cust[0].data ?
 
 cust.map((item, index) =>
 
 <tr>
  {console.log("-----",item)}
   {/* {console.log(data)} */}
  <td></td>
  </tr>
     
  )
  :
   "hello"?
  <tr> <td colSpan={8}><p>No data found</p></td></tr>
      : null}
        </tbody>
      </table>
    </div>
  );
}

export default App;
