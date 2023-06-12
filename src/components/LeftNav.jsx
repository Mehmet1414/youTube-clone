import categories from "../utils/constans";
import { useContext } from "react";
import { Context } from "../context/contextApi";

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory } = useContext(Context);
  

  return (
    <div className=" bg-dark text-light d-flex flex-column gap-3 ">
      {categories.map((item, index) => (
        <>
          <div
            className={`d-flex gap-2 ps-2 pe-2 fs-5 ${selectedCategory=== item.name && " bg-danger"}`}
            key={index}
            onClick={() => setSelectedCategory(item.name)}
          >
            <span className=" d-flex align-items-center">{item.icon}</span>
            <span role={"button"}>{item.name}</span>
          </div>
          {item.divider && <hr />}
        </>
      ))}
    </div>
  );
};

export default LeftNav;
