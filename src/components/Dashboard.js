import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='bodyStyle'>
      <table className='UserTable'>

            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
            <tr >
                <td>1</td>
                <td>Micheal</td>
                <td>12-02-2002</td>
                <td>test@gmail.com</td>
                <td>*******</td>
            </tr>
      </table>
    </div>
  )
}

export default Dashboard
