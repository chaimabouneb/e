import Link from "next/link";
import { FC } from "react";
import gameCardClassNames from "./gameCardClassNames";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";

interface GameCardProps {
  gameName: string;
  imageUrl: string;
  slug: string;
  price: number;
}
const GameCard: FC<GameCardProps> = (props) => {
  const { gameName, imageUrl, slug, price } = props;

  return (
    <Link href={`/singleprod`}>
      <section className="relative flex-col bg-white rounded-2xl snap-start snap-always shrink-0 mr-5 last:mr-0">
        <Image
          className="scale-90 hover:scale-100 transition-transform duration-300 object-fill w-full"
          src={imageUrl}
          alt={gameName}
          width={100}
          height={100}
        />

        <div className="p-5 flex flex-col gap-3 ">
          <div className="flex items-center gap-2">
            <span className="badge">
              {" "}
              <span className="text-green-500">in stock</span>
            </span>
            <span className="badge">official store</span>
          </div>

          <h2 className="prodect-title" title="Best Headphones">
            {gameName}
          </h2>
          <div>
            <span className="text-xl font-bold">{price} $</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm line-through opacity-50">2000 $</span>
              <span className="discount-percentage">save 20%</span>
            </div>
          </div>
          <span className="flex items-center mt-1">
            <Image src="/4.png" alt="" width={20} height={20} />
            <Image src="/4.png" alt="" width={20} height={20} />
            <Image src="/4.png" alt="" width={20} height={20} />
            <Image src="/4.png" alt="" width={20} height={20} />
            <Image src="/4.png" alt="" width={20} height={20} />

            <span className="text-xs ml-2 text-gray-500">20K views</span>
          </span>

          <div className="flex flex-wrap gap-2 ">
            {/**<Link href="/" className="link2">
            Learn More
          </Link>*/}
            <button className="button-primary">add to cart</button>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default GameCard;
