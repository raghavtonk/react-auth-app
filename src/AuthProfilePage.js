import { Link, Outlet } from "react-router-dom";

export default function AuthProfilePage() {
  const isLoggedIn = Boolean(localStorage.getItem("token"))
  if (!isLoggedIn) {
    return <Link to='/'>not login</Link>
  }
  else
  return   <Outlet />
}
