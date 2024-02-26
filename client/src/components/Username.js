import React from "react";
import { Link } from "react-router-dom";
import avatar from '../assets/profile.png';
import styles from '../styles/Username.module.css';
import { Toaster} from 'react-hot-toast';
import { useFormik } from 'formik';


const Username = () => {

  const formik = useFormik({
    initialValues: {
      username: ''
    },
    
  })
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <div className="text-5xl font-bold"> Hello Again !</div>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore More by connecting with us.
            </span>
          </div>
          <form className="py-1">
            <div className="profile flex justify-center py-4">
              <img src={avatar} className={styles.profile_img} alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center">
              <input className={styles.textbox} type="text" placeholder="Username" />
              <button className={styles.btn} type="submit">Let's Go</button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Not a Member
                <Link className="text-red-500" to="/register">
                  Register Now
                </Link>
                
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Username;