const PetitionCard = () => {
  return (
    <div className="bg-[#fefefe] rounded-2xl p-5 flex flex-col gap-5 shadow-md mb-5 w-full max-w-sm md:max-w-md lg:max-w-[1000px] text-[12px] lg:text-[16px]">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="rounded-full w-8 h-8 md:w-10 md:h-10 bg-primary flex-shrink-0"></div>
          <div>
            <h2 className="font-semibold">Fadahunsi Pelumi</h2>
            <p className="text-[9px] text-gray-500 lg:text-[12px]">Feb 29, 09:30pm</p>
          </div>
        </div>
        <div className="bg-transparent rounded-full px-3 py-1 border-2 border-black w-fit mt-2">
          <span className="text-primary w-5 h-5"></span>
          Top 3
        </div>
      </div>
      <div>College</div>
      <div>
        <h3 className="font-semibold">Enhance the Microphone System in EIE large classroom</h3>
       <p className="text-[13px] lg:text-[16px]">The current microphone system in the EIE large classroom is unreliable and frequently malfunctions.
          This issue significantly affects the students seated at the back of the room, as they struggle
          to hear the lecturer's voice clearly. As a result, there's a noticeable divide in the class:
          students at the front can follow the lecture without difficulty, while those at the back are left behind...</p>
      </div>
      <div className="h-[1px] bg-[#d3cece]"></div>
      <p className="text-right font-semibold">192 Upvote</p>
    </div>
  );
};

export default PetitionCard;
