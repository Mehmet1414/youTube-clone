import { useContext } from 'react';
import categories from "../utils/constans"
import { Context } from '../context/contextApi';

const LeftNav = () => {
  // context yapısndan sağlanan state ve fonksiyonlara abone olma
  const { selectedCategory, setSelectedCategory } = useContext(Context);

  return (
    <div className="bg-dark text-light d-flex flex-column gap-1">
      {categories.map((item, index) => {
        return (
          <>
            <div
              key={index}
              className={`p-1 d-flex fs-6 fw-light  ${
                selectedCategory === item.name && 'bg-danger'
              }`}
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedCategory(item.name)}
            >
              <span className=' d-flex align-items-center '>{item.icon}</span>
              <span className="mx-2 ">{item.name}</span>
            </div>
            {item.divider && <hr className="my-4" />}
          </>
        );
      })}
    </div>
  );
};

export default LeftNav;