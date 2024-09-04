import CustomFormField from '../components/customFormField';
import '../styles/register.css';

const Register = () => {
  return (
    <>
      <div id="register-box">
        <h1 id="register-title">Register</h1>
        <div className="reg-row-field">
          <CustomFormField label="Full Name" cName="name" placeholder="Enter your name" type="text" />
          <CustomFormField label="Username" cName="name" placeholder="Enter your username" type="text" />
        </div>
        <div className="reg-row-field">
          <CustomFormField label="email" cName="email" placeholder="Enter your email" type="email" />
          <CustomFormField
            label="Phone Number"
            cName="phonenumber"
            placeholder="Enter your phone number"
            type="number"
          />
        </div>
        <div className="reg-row-field">
          <CustomFormField label="Password" cName="password" placeholder="Enter your password" type="password" />
          <CustomFormField
            label="Confirm your password"
            cName="cpassword"
            placeholder="Confirm your password"
            type="password"
          />
        </div>
        <h1>Gender</h1>
        <div className="gender-field">
          <CustomFormField cname="gender" type="radio" value="male"/>
          Male
          <CustomFormField cname="gender" type="radio" value="female" />
          Female
          <CustomFormField cname="gender" type="radio" value="others" />
          Prefer not to say
        </div>
      </div>
    </>
  );
};
export default Register;
