import { AiFillYoutube, AiOutlineBell, AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <header className="navbar bg-dark text-light p-3">
      <div className=" d-flex align-items-center gap-3">
        <AiFillYoutube className=" fs-1 text-danger" role={"button"} />
        <h2 role={"button"}>YouTube</h2>
      </div>
      <div className=" d-flex position-relative">
        <input className=" form-control" type="text" />
        <button className=" btn position-absolute end-0 ">
          <AiOutlineSearch className=" fs-3 text-black" />
        </button>
      </div>
      <span role={"button"} className=" fs-3">
        <AiOutlineBell  />
      </span>
    </header>
  );
};

export default Header;
