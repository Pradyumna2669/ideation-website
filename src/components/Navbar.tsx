import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <Link
            to="/"
            className="text-2xl font-bold text-blue-900"
          >
            Ideation Welfare Society
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm font-medium">

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/institutions/tutorial">
            Tutorial
          </Link>

          <Link to="/institutions/integrated-learning">
            Integrated Learning
          </Link>

          <Link to="/institutions/abhyasika">
            Abhyasika
          </Link>

          <Link to="/institutions/test-series">
            Test Series
          </Link>

          <Link to="/institutions/journal">
            Journal
          </Link>

          <Link to="/contact">Contact</Link>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;