import { useState } from 'react';
import { HiOutlineBell } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const handleSearch = () => {
    if (!query) return;
    navigate(`/search-result/${query}`);
  };
  return (
    <header className="navbar bg-dark text-light ">
      <Link to="/" className="text-decoration-none text-light">
        <h1>
          <img
            src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"
            style={{ width: '100px' }}
          />
          FineTube
        </h1>
      </Link>

      <div className="d-flex position-relative">
        <input
          type="text"
          className=" form-control rounded-5 bg-transparent"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn position-absolute end-0 text-white" onClick={handleSearch}>
          <BsSearch  />
        </button>
      </div>

      <span className="pe-4 fs-3">
        <HiOutlineBell />
      </span>
    </header>
  );
};

export default Header;