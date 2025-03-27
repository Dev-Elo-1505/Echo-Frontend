import { FaPlus } from "react-icons/fa";
import PetitionCard from "../components/PetitionCard";
import SideBar from "../components/SideBar";
import { Link } from "react-router";

const Feedpage = () => {
  return (
    <section className="p-3 md:p-5 font-poppins bg-secondary min-h-screen">
      <div className="flex justify-between items-center text-semibold">
        <p className="font-semibold">Petition Feed</p>
        <Link
          to="/create-petition"
          className="flex gap-2 items-center bg-primary rounded-full px-2 py-1"
        >
          <FaPlus />
          Create Petition
        </Link>
      </div>
      <div className="bg-transparent rounded-full px-3 py-1 border-2 border-black w-fit mt-2">
        Category: <span className="text-primary">ALL</span>
      </div>
      <div className="flex md:gap-10 mt-5">
        <div>
          <SideBar />
        </div>
        <div>
          <PetitionCard />
          <PetitionCard />
          <PetitionCard />
        </div>
      </div>
    </section>
  );
};

export default Feedpage;
