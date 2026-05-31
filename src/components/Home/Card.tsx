interface Props {
  bg: string;
  textColor: string;
}

const Card = ({ textColor, bg }: Props) => {
  return (
    <div className="relative px-8 py-5 bg-white rounded">
      <p className="absolute top-2 left-2 bg-indigo-900 text-white text-sm py-1 px-10 rounded shadow shadow-zinc-900">
        Best Seller
      </p>
      <div
        className={`rounded-md w-full h-[200px] ${bg} flex justify-center items-center mb-5 shadow-lg shadow-zinc-900`}
      >
        <p className={`${textColor} logo-font text-center text-4xl`}>
          vibecard
        </p>
      </div>

      {/* Qr code */}
      <div
        className={`rounded-md w-full h-[200px] ${bg} flex justify-center items-center shadow-lg shadow-zinc-900`}
      >
        <p className={`${textColor} bi-qr-code text-8xl`}></p>
      </div>
    </div>
  );
};

export default Card;
