import bg from "../assets/picbg.jpg";
import logo from "../assets/logo.png";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="flex items-center text-primary font-bold text-center lg:text-left">
        <img width={50} src={logo} alt="Echo's Logo" />
        Echo
      </h1>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white w-auto rounded-xl p-5 text-center flex items-center gap-5">
          <div className="hidden lg:block bg-primary rounded-xl text-center p-5 w-1/2">
            <h2 className="font-semibold text-2xl">
              Bridge Gap Between <br /> Students and
              <br /> Management
            </h2>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold">Echo: Your Voice at CU</h2>
            <p className="text-sm text-gray-500">
              Create petitions, rally support, track changes
            </p>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
