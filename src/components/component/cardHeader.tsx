import Image from "next/image";

interface Image {
  image: string | undefined;
  reff?: boolean;
  index: number;
  peerMatched?: boolean;
}

const CardHeader = ({ image, reff, index, peerMatched }: Image) => {
  return (
    <div className="flex justify-between">
      <Image
        src={image || ""}
        width={32}
        height={32}
        alt="candidate-img"
        className="rounded-full"
      />
      {peerMatched !== true && (
        <div className="flex gap-2">
          {reff && (
            <span className="flex text-gray-500 text-[10px] gap-1">
              Ref by{" "}
              <Image
                src={"/aksh.png"}
                width={16}
                height={16}
                alt="Refferer"
                className="rounded-full h-4"
              />{" "}
              <span className="text-gray-500 font-semibold">Akash</span>
            </span>
          )}

          {reff && index === 1 ? (
            <></>
          ) : (
            <span className="text-[10px] text-gray-500">Applied 1d ago</span>
          )}
        </div>
      )}

      {peerMatched && (
        <div className="bg-green-100 flex gap-2 p-[2px] pr-2 h-[20px] items-center rounded-3xl">
          <Image
            src={"/peerlist.jpg"}
            alt="matched"
            height={16}
            width={16}
            className="rounded-full h-4"
          />
          <span className="text-green-400 font-semibold text-[10px]">
            Matched
          </span>
        </div>
      )}
    </div>
  );
};

export default CardHeader;
