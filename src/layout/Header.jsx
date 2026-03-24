function Header() {
  return (
    <nav className="bg-[#43A047] text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.5)]">
      <div className="px-4 flex justify-between items-center">
        <a href="#" className="text-3xl">
          React Movies
        </a>
        <ul>
          <li>
            <a
              href="!#"
              className="py-5 px-4 block text-sm transition hover:bg-black/10"
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
