import { useState } from 'react';
import CustomFormField from '../components/customFormField';
import '../styles/register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState(' ');

  const handleSumbit = (event) => {
    event.preventDefault();
    if (email.length === 0) {
      alert('Enter email');
      return;
    }
    if (username.length === 0) {
      alert('Enter username');
      return;
    }
    if (name.length === 0) {
      alert('Enter name');
      return;
    }
    if (phoneNumber.length < 10) {
      alert('Enter valid phone number');
      return;
    }
    if (password.length < 0) {
      alert('Enter valid password');
      return;
    }
    if (confirmPassword !== password) {
      alert('Enter same password');
      return;
    }
    console.log(name, username, phoneNumber, email, password, confirmPassword, gender);
  };

  return (
    <>
      <div className="register-container">
        <form onSubmit={handleSumbit}>
          <div id="register-box">
            <h1 id="register-title">Register</h1>
            <div className="reg-row-field">
              <CustomFormField
                label="Full Name"
                cName="name"
                placeholder="Enter your name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <CustomFormField
                label="Username"
                cName="name"
                placeholder="Enter your username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="reg-row-field">
              <CustomFormField
                label="Email"
                cName="email"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <CustomFormField
                label="Phone Number"
                cName="phonenumber"
                placeholder="Enter your phone number"
                type="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="reg-row-field">
              <CustomFormField
                label="Password"
                cName="password"
                placeholder="Enter your password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <CustomFormField
                label="Confirm your password"
                cName="cpassword"
                placeholder="Confirm your password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="gender-field">
              <h3>Gender</h3>
              <div className="gender-options">
                <div className="gender">
                  <input type="radio" value="Male" name="gender" onChange={(e) => setGender(e.target.value)} />{' '}
                  <p>Male</p>
                </div>
                <div className="gender">
                  <input type="radio" value="Female" name="gender" onChange={(e) => setGender(e.target.value)} />
                  <p>Female</p>
                </div>
                <div className="gender">
                  <input
                    type="radio"
                    value="PreferNottosay"
                    name="gender"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <p>Prefer not to say</p>
                </div>
              </div>
            </div>
            <div id="register-button">
              <input value="Register" type="submit" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Register;
