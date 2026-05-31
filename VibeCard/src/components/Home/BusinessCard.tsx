import { ceo } from "../../assets";
import Magnetic from "../GsapMagnetic/Magnetic";

const BusinessCard = () => {
  return (
    <div className="lg:pt-20 pt-24 pb-10 rounded px-2 mt-14">
      <div className="lg:grid grid-cols-2">
        <Magnetic>
          <div className="content-center hover:z-40">
            <div className="bg-teal-950 rounded-md px-5 py-6 lg:w-[85%] text-sm relative shadow-lg shadow-black">
              <p className="lg:text-3xl text-xl text-teal-600 logo-font">
                vibecard
              </p>
              <div className="grid grid-cols-3">
                <div className="col-span-2 mt-4">
                  <div className="flex mb-3">
                    <img
                      src={ceo}
                      alt="user"
                      className="lg:w-20 lg:h-20 w-14 h-14 rounded-full object-cover"
                    />
                    <span className="ms-6 mt-3 lg:text-3xl text-lg chakra text-white">
                      Mr Omar
                    </span>
                  </div>
                  <p className="text-white le:text-xl text-lg mb-1 chakra">
                    CEO
                  </p>
                  <p className="text-gray-400 my-3">
                    <span className="bi-geo-alt-fill lg:text-md text-sm text-teal-200 font-poppins">
                      {" "}
                      At VibeCard
                    </span>
                  </p>
                  <div className="flex gap-x-10 text-white">
                    <p className="bi-envelope lg:text-2xl text-xl"></p>
                    <p className="bi-telephone lg:text-2xl text-xl"></p>
                    <p className="bi-instagram lg:text-2xl text-xl"></p>
                    <p className="bi-facebook lg:text-2xl text-xl"></p>
                  </div>
                </div>
                <div className="p-1 rounded mt-4 bi-qr-code text-white lg:text-[12em] text-[8.5em]"></div>
              </div>
            </div>
          </div>
        </Magnetic>
        <div className="lg:mt-0 mt-10">
          <h1 className="chakra font-poppins text-3xl mb-4">
            The Future of Networking
          </h1>
          <h1 className="font-extrabold ">
            Transform Your Connections with a Tap
          </h1>
          <p className="text-lg mt-4 text-gray-600">
            Discover VibeCard, your ultimate tool for seamless networking. Our
            innovative NFC business cards and RFID solutions revolutionize the
            way you share your professional and personal information. Say
            goodbye to traditional business cards and embrace a sustainable,
            smart networking experience that leaves a lasting impression.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
