import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { Alert } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react';
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungAction';
import { TYPE_USER, USER_LOGIN } from '../../util/settings/config';




export default function Login() {
    const dispatch = useDispatch();
    const {userLogin} = useSelector(state => state.QuanLyNguoiDungReducer)
    console.log(userLogin);
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống !').min(6,'Tài khoản tối thiếu 6 ký tự !'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống !').min(3,'Mật khẩu tối thiểu 3 ký tự !').max(32,'Mật khẩu tối đa 32 ký tự !')
        }),
        onSubmit: values => {
            const action = dangNhapAction(values);
            dispatch(action);
        },
    });







    
    return (
        <Fragment>
        {/* <Header/> */}
        <div className="login " >
            <div className="loginForm mt-10 mr-10 ml-10" >
                <h2 className="text-center text-2xl text-danger">Login</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group row mt-10 mr-10 ml-10">
                        <div className="col-sm-12">
                            <input type="username" className="form-control input__line" placeholder="Tài Khoản" name="taiKhoan" onChange={formik.handleChange} id="username" />
                            {formik.errors.taiKhoan? <Alert message={formik.errors.taiKhoan} type="error" showIcon /> : ''}
                        </div>
                    </div>
                    <div className="form-group row mr-10 ml-10 mb-5">
                        <div className="col-sm-12 mt-3">
                            <input type="password" className="form-control input__line" placeholder="Mật Khẩu" name="matKhau" onChange={formik.handleChange} id="password" />
                            {formik.errors.matKhau? <Alert message={formik.errors.matKhau} type="error" showIcon /> : ''}
                        </div>
                    </div>
                    <div className="form-group row" style={{alignItems:'center'}}>
                        <div className="text-center" >
                            <a className="forgotPassword " href="#">Forgot your password?</a>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-danger mt-3 text-xl ">Sign in</button>
                        </div>
                        <div className="col-sm-12 row mb-5 text-center" style={{alignItems:'center',justifyContent:'center', margin:'20px 0'}}>
                            <p >Don't have account?<NavLink to="/register" className="registerLink"> Sign up now!</NavLink></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </Fragment>
       

    )
}