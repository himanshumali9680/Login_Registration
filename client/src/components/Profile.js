import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { profileValidation } from "../helper/validate";
import convertToBase64 from "../helper/convert";
import extend from '../styles/Profile.module.css'

const Profile = () => {

  const [file, setFile] = useState()
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: 'doyol56239@congs.com',
      mmobile: '',
      address: ''
    },
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, {profile : file || ''})
      console.log(values);
    },
  });

  /**formil doesnt support file upload so we need to create this handler */
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={`${styles.glass} ${extend.glass}`} style={{ width: "45%", paddingTop: '3em'}}>
          <div className="title flex flex-col items-center">
            <div className="text-5xl font-bold"> Profile</div>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              You can update the details.
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
              <img src={file || avatar} className={`${styles.profile_img} ${extend.profile_img}`} alt="avatar" />

              </label>
              <input onChange={onUpload} type="file" id="profile" name="profile" />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <div className="name flex w-3/4 gap-10">
              <input
                {...formik.getFieldProps("firstName")}
                className={`${styles.textbox} ${extend.textbox}`}
                type="text"
                placeholder="First Name"
              />
              <input
                {...formik.getFieldProps("lastName")}
                className={`${styles.textbox} ${extend.textbox}`}
                type="text"
                placeholder="Last Name"
              />
              </div>
              <div className="name flex w-3/4 gap-10">
              <input
                {...formik.getFieldProps("mobile")}
                className={`${styles.textbox} ${extend.textbox}`}
                type="text"
                placeholder="mobile no."
              />
              <input
                {...formik.getFieldProps("email")}
                className={`${styles.textbox} ${extend.textbox}`}
                type="text"
                placeholder="email"
              />
              </div>
              <input
                {...formik.getFieldProps("address")}
                className={styles.textbox}
                type="text"
                placeholder="address"
              />
              <button className={styles.btn} type="submit">
                Update
              </button>
              
              
              
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                come back later?
                <Link className="text-red-500" to="/">
                  Login Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
