import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <ul className="flex space-x-5">
                <li>
                    <Link to="/" className="text-gray-700">Home</Link>
                </li>
                <li>
                    <Link to="/detail" className="text-gray-700">Detail</Link>
                </li>
               
            </ul>
        </div>
    )
}

export default Nav