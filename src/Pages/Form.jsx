import React, { useEffect, useState } from 'react';
import '../pagesStyle/inputForm.css';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [phone, setPhone]= useState("");
    const [gender, setGender]= useState("Male");
    const [dateOfBirth, setDateOfBirth]= useState("");
    const [hobbies, setHobbies]= useState("");
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name, email, phone, gender, dateOfBirth);
        const newUsers = [...users, {name, email, phone, gender, dateOfBirth, hobbies}];
        setUsers(newUsers);
        localStorage.setItem('users', JSON.stringify(newUsers));
        navigate('/user-details');
    }

    useEffect(() => {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      setUsers(storedUsers);
    }, []);

    // User cannot select the future dates.
    const today = new Date().toISOString().split('T')[0];
  
    return (
      <>
        <div className='input-form-main'>
          <form onSubmit={handleSubmit}>
            <div className='input-form'>
              <h1>Enter Your Details</h1>
              <div className='input-form-inputs'>
                <input type="text" name='name' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Your Name' required/>
                <select value={gender} onChange={(e)=>{setGender(e.target.value)}} required>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <input type="date" name='dateOfBirth' value={dateOfBirth} max={today} onChange={(e)=>{setDateOfBirth(e.target.value)}} required/>
                <input type="email" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Your Email' required/>
                <input type="text" name='phone' value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder='Enter Your Phone Number' required/>
                <textarea name="hobbies" value={hobbies} onChange={(e)=>{setHobbies(e.target.value)}} placeholder='Enter Your Hobbies'></textarea>
                <input type="submit" name='submit' className='submit-button' value="Submit" required/>
              </div>
            </div>
          </form>
        </div>
      </>
    )
}

export default Form;
