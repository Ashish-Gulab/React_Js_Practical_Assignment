import React, { useEffect, useState } from 'react';
import '../pagesStyle/formTable.css';

// Creating a Table Component
const FormTable = () => {

    const [users, setUsers] = useState([]);

    // Getting all the Employees and storing into the employees state 
    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);
      }, []);

    return (
        <>
            {/* Basic Table  */}
            <div className='first-table-main'>
                <h2 className='table-heading'>Basic Format</h2>
                <table className='first-table' border={2}>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Gender</th>
                        <th>Hobbies</th>
                        <th>Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                        <tr key={index}>
                            <td data-label="Name">{user.name}</td>
                            <td data-label="Email">{user.email}</td>
                            <td data-label="Phone Number">{user.phone}</td>
                            <td data-label="Gender">{user.gender}</td>
                            <td data-label="Hobbies">{user.hobbies}</td>
                            <td data-label="Date of Birth">{user.dateOfBirth}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {/* Advance Table f */}
            <div className="second-table-main">
                <h2 className='table-heading'>Advance Format</h2>
                <table border={2}>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        {users.map((user, index) => (
                        <td key={index}>{user.name}</td>
                        ))}
                    </tr>
                    <tr>
                        <th>Email</th>
                        {users.map((user, index) => (
                        <td key={index}>{user.email}</td>
                        ))}
                    </tr>
                    <tr>
                        <th>Phone Number</th>
                        {users.map((user, index) => (
                        <td key={index}>{user.phone}</td>
                        ))}
                    </tr>
                    <tr>
                        <th>Gender</th>
                        {users.map((user, index) => (
                        <td key={index}>{user.gender}</td>
                        ))}
                    </tr>
                    <tr>
                        <th>Hobbies</th>
                        {users.map((user, index) => (
                        <td key={index}>{user.hobbies}</td>
                        ))}
                    </tr>
                    <tr>
                        <th>Date of Birth</th>
                        {users.map((user, index) => (
                        <td key={index}>{user.dateOfBirth}</td>
                        ))}
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default FormTable;
