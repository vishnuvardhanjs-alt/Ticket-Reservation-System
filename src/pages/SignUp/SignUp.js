import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './SignUp.css'
import Logo from '../../assets/Logo.png'
import swal from 'sweetalert';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase/firebase';
import { setDoc, doc, collection } from 'firebase/firestore';


function SignUp() {
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [password, setPassword] = useState('');
  const [conf, setConf] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== conf) {
      swal({
        text: "Password Doesn't Match!...",
      });
    } else if (password.length < 6) {
      swal({
        text: "Password Should be atlease 6 Characters Long!...",
      });
    } else {
      try {
        await createUserWithEmailAndPassword(auth, email, password)
        const user = auth.currentUser;
        console.log(user)
        if (user) {
          const addCollection = collection(db, 'Users')
          const myDocRef = doc(addCollection, `${user.uid}`);
          await setDoc(myDocRef, {
            email: user.email,
            firstname: fname,
            lastname: lname
          });
           navigate("/");
        }
      } catch (e) {
        swal({
          text: e.message,
        });
      }
    }
  };

  return (
    <div className='signup-cont'>
      <img src={Logo} className='signup-img' alt='LogoImage'></img>
      <div className="signup-box">
        <form onSubmit={handleSubmit} className='signup-form'>
          <div className="form-group">
            <input
              type="text"
              id="fname"
              onChange={(e) => setFname(e.target.value)}
              placeholder='First Name'
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="lname"
              onChange={(e) => setLname(e.target.value)}
              placeholder='Last Name'
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="con_password"
              placeholder='Confirm Password'
              onChange={(e) => setConf(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-button">
            Login
          </button>

        </form>

      </div>
      <p>Have an Account? <a href="/">SignIn!</a></p>

    </div>
  );
}

export default SignUp