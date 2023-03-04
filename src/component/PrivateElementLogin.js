import React from "react";
import { Navigate } from "react-router-dom";

// props.children => mengakses komponen child
class PrivateElementLogin extends React.Component {
  render() {
    // conditional, jika true semua maka return kan komponen child
    // jika false, maka redirect
    // kondisi 1 = apakah sudah login
    const { allowedRoles = [], children } = this.props;
    const userInfo = JSON.parse(localStorage["userInfo"] || "{}");
    if (userInfo.token)
      return (
        <Navigate
          to="/"
          replace={true}
          state={{ msg: "Forbiden", isRedirected: true }}
        />
      );
    // kondisi 2 = apakah sesuai dengan role
    if (allowedRoles.length > 0)
      if (!allowedRoles.includes(userInfo.role))
        return (
          <Navigate
            to="/"
            replace={true}
            state={{
              msg: "Forbidden, Not Your Role",
              isRedirected: true,
            }}
          />
        );
    return children;
  }
}

export default PrivateElementLogin;