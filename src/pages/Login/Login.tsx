import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginActionApi } from "../../redux/reducers/userReducer";
import { DispatchType, RootState } from "../../redux/store";

type Props = {};

const Login = (props: Props) => {

  const {email,password} = useSelector((state: RootState) => state.userReducer);


  const dispatch: DispatchType = useDispatch();


  const frm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("value", values);

      const actionAsync = loginActionApi(values);
      dispatch(actionAsync);
    },
    validationSchema: yup.object().shape({
      email: yup.string().required("Email cannot be blank !").email('email is not valid !'),
      password: yup.string().required("Password cannot be blank!")
    }),
  });

  return (
    <form onSubmit={frm.handleSubmit} className="container">
      <h3>Login</h3>
      <div className="form-group">
        <p>Email</p>
        <input
          className="form-control"
          name="email"
          id="email"
          onChange={frm.handleChange}  onBlur={frm.handleBlur}
        />
        {/* {frm.errors.email ? <p className="text-danger">{frm.errors.email}</p> : ''} */}
        {/* && có nghĩa là đúng thì làm tiếp mà tới chỗ sai thì dừng lại */}
        {frm.errors.email && <p className="text-danger">{frm.errors.email}</p>}
      </div>
      <div className="form-group">
        <p>Password</p>
        <input
          className="form-control"
          name="password"
          id="password"
          onChange={frm.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Email</p>
        <button className="btn btn-success" type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
