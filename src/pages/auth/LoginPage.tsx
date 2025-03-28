import bg from "../../assets/picbg.jpg";
const LoginPage = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center
                  "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="text-white text-4xl font-bold text-center md:text-left">Echo</h1>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white w-auto p-5 rounded-xl flex justify-between items-center">
          <div className="hidden md:block bg-primary w-1/2 rounded-xl p-2">
            <h2 className="font-semibold">Bridging the gap between Students and Management</h2>
          </div>
          <div>hello</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
