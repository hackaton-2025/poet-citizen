import { Redirect, Route } from "react-router-dom"

const ProtectedRoute = ({ component: Component, path, ...props }) => {
  return (
    <Route path={path}>
      {
        () => props.loggedIn ? <Component {...props} /> : <Redirect to={path} />
      }
    </Route>
  )
};

export default ProtectedRoute;
