import { Link, useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { MdVideoCameraBack } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();
  //Kullanıcıyı arama sonuçları sayfasına yönlendirir
  //url'e arama parametresi olarak aratılan terimi ekle
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    navigate(`/results?search_query=${text}`);
  };

  //Path params (Yol Parametreleri)
  //www.amazon.com/ürün/60

  //Query Params (Arama Parametreleri)
  //www.youtube.com/watch/asdasds

  return (
    <header className="flex justify-between items-center sticky p-4">
      <Link className="flex items-center gap-[10px] sticky">
        <img src="../logo.png" width={50} />
        <h1 className="text-2xl max-sm:hidden">Youtube</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex items-center border border-gray-400 rounded-[20px]"
      >
        <input
          placeholder="Search"
          className="bg-black outline-none rounded-[20px] px-3 py-1"
          type="text"
        />
        <button className="grid place-items-center border-1 px-2 text-xl">
          <IoSearchSharp />
        </button>
      </form>
      <div className="flex gap-3 text-xl cursor-pointer">
        <div className="p-2 transition duration-500 hover:bg-gray-700 rounded-full">
          <FaBell />
        </div>

        <div className="p-2 transition hover:bg-gray-700 rounded-full">
          <MdVideoCameraBack />
        </div>
      </div>
    </header>
  );
};

export default Header;
