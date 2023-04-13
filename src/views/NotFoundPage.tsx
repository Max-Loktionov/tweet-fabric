import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <div>Page not found</div>

      <div>
        <NavLink to={"/"}>Home</NavLink>
      </div>
    </>
  );
}
