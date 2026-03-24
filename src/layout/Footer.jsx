function Footer() {
  return (
    <footer className="bg-[#C8E6C9] pt-5 text-white">
      <div className="py-4 bg-green-900/10">
        <div className="container mx-auto flex justify-between items-center">
          <p>© {new Date().getFullYear()} Copyright Text</p>
          <a href="#!">Repo</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
