import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { openModalAlert } from '../../store/actionSlice/actionSlice'
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx'
import { Formik } from 'formik';
import * as Yup from "yup"
import { errorToast, succsessToast } from '../../services/toastService';
import axios from 'axios';

const SignUp = () => {
    const dispatch = useDispatch()
    const [passType, setPasstype] = useState("password")
    const validationSchema = Yup.object({
        userName: Yup.string()
            .required("Name is required")
            .min(3, "Name must be at least 3 characters")
            .max(20, "Name cannot exceed 20 characters"),

        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required")
            .max(35, "Email cannot exceed 35 characters"),

        password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .max(20, "Password cannot exceed 20 characters")
    });
    return (
        <div>
            <Formik
                initialValues={{ userName: "", email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting, resetForm}) => {
                    const baseURL = process.env.VITE_BASE_URL
                    try {
                        setSubmitting(true)
                        const res = await axios.post(`${baseURL}/users/register`, values)
                        setSubmitting(false)
                        resetForm()
                        dispatch(openModalAlert("login"))
                        succsessToast("You have successfully registered.")
                    } catch (error) {
                        console.log(error)
                        setSubmitting(false)
                        errorToast(error.response.data.message)
                    }
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit} className='flex flex-col gap-[5px] text-gray-800'>
                        <div className='flex flex-col'>
                            <label className='text-[14px] font-medium' htmlFor="userName">Your name</label>
                            <input
                                name="userName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.userName}
                                className='outline-none border-[2px] text-[14px] font-medium duration-100 placeholder:text-[14px] hover:border-indigo-100 focus:border-indigo-500 rounded-sm px-[7px] py-[3px]'
                                type="text"
                                id='userName'
                                placeholder='Enter the name'
                                autoComplete="username" />
                            <div className='min-h-[10px] leading-[12px]'>
                                {errors.userName && touched.userName && <span className="text-[12px] text-red-500 font-medium">{errors.userName}</span>}
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[14px] font-medium' htmlFor="email">Email</label>
                            <input
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                className='outline-none border-[2px] text-[14px] font-medium duration-100 placeholder:text-[14px] hover:border-indigo-100 focus:border-indigo-500 rounded-sm px-[7px] py-[3px]'
                                type="text"
                                id='email'
                                placeholder='Enter the email'
                                autoComplete="email" />
                            <div className='min-h-[10px] leading-[12px]'>
                                {errors.email && touched.email && <span className="text-[12px] text-red-500 font-medium">{errors.email}</span>}
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[14px] font-medium' htmlFor="password">Password</label>
                            <div className="relative">
                                <input
                                    type={passType}
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className='outline-none w-full text-[14px] font-medium border-[2px] duration-100 placeholder:text-[14px] hover:border-indigo-100 focus:border-indigo-500 rounded-sm px-[7px] py-[3px]'
                                    id='password'
                                    placeholder='Enter the password'
                                    autoComplete="current-password" />

                                <button onClick={() => setPasstype(prev => prev === "text" ? "password" : "text")}
                                    type="button"
                                    className="absolute top-0 right-2 bottom-0 text-gray-600"
                                >
                                    {passType === "text" ? <RxEyeOpen /> : <RxEyeClosed />}
                                </button>
                            </div>
                            <div className='min-h-[10px] leading-[12px]'>
                                {errors.password && touched.password && <span className="text-[12px] text-red-500 font-medium">{errors.password}</span>}
                            </div>
                        </div>
                        <hr />
                        <button type='submit' disabled={isSubmitting} className={`${isSubmitting ? "cursor-wait" : "cursor-pointer"} flex justify-center items-center gap-1 bg-indigo-600 w-full hover:bg-indigo-700 active:scale-95 duration-150 text-white font-medium px-[10px] py-[5px] rounded-sm`}>
                            <span>
                                {isSubmitting ? "Creating..." : "Create account"}
                            </span>
                        </button>
                        <div className='flex justify-center gap-1 text-[14px]'>
                            <span>Have an account? </span> <span onClick={() => dispatch(openModalAlert("login"))} className='font-medium cursor-pointer hover:text-indigo-600 hover:underline text-indigo-500'>Login now!</span>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default SignUp
