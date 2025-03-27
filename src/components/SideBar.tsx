const SideBar = () => {
  return (
    <div className="hidden md:flex bg-primary rounded-xl md:flex-col p-5 w-3xs h-80">
      <h2>Category</h2>
      <ul>
        <li>General</li>
        <li>Academics</li>
        <li>Chapel</li>
        <li>College</li>
        <li>Hall</li>
      </ul>
    </div>
  );
};

export default SideBar;
