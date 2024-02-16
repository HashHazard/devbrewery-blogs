import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row sm:justify-between items-center bg-gray-900 text-white p-4">
      <div className="flex items-center mb-4 sm:mb-0">
        <img
          src="https://file.rendit.io/n/eFb8m8su0FFnwH7K1M40.png"
          alt="Airbnb Logo"
          className="w-8 h-8"
        />
        <nav className="ml-8">
          <ul className="flex space-x-4">
            <li className="hover:text-gray-500 cursor-pointer">Blogs</li>
            <li className="hover:text-gray-500 cursor-pointer">Write</li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-[#FF5A5F] text-white px-4 py-2 rounded-md shadow hover:bg-[#e65054] transition-colors">
          Sign in
        </button>
        <div className="flex items-center border-b border-gray-500">
          <input
            type="text"
            placeholder="Search articles..."
            className="bg-transparent placeholder-gray-400 text-white py-2 pl-2 pr-10 focus:outline-none"
          />
          <SearchIcon className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </header>
  );
}
