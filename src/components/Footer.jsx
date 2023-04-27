import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <span>
        All right reserved by{" "}
        <Link to="/dev" className="link">
          Barshan
        </Link>{" "}
        || 2023
      </span>
    </div>
  );
}
