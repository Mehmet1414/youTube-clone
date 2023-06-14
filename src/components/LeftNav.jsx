import categories from "../utils/constans";
import { useContext } from "react";
import { Context } from "../context/contextApi";
import "../App.css"

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory } = useContext(Context);
  

  return (
    <div className=" bg-dark text-light d-flex flex-column gap-3 fixed-top overflow-scroll " style={{width:"140px", height:"100vh", top:"70px"}} >
      {categories.map((item, index) => (
        <div key={index}>
          <div
            className={`d-flex justify-content-start gap-2 ps-2 pe-2 fs-6 ${selectedCategory=== item.name && " bg-danger"} left-nav-item`}
            
            onClick={() => setSelectedCategory(item.name)}
        
          >
            <span className=" d-flex align-items-center">{item.icon}</span>
            <span className="  text-start">{item.name}</span>
          </div>
          {item.divider && <hr />}
        </div>
      ))}
    </div>
  );
};

export default LeftNav;
