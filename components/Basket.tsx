import { ShoppingBagIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

function Basket() {
  const { loading, cartItems } = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);

  {
    /**if (items.length === 0) return null;**/
  }

  return (
    <Link
      href={"/cart"}
      className="fixed bottom-10 right-10 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300"
    >
      {
        <span className="absolute -right-2 -top-2 z-50 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
          {loading ? "" : cartItems.reduce((a, c) => a + c.qty, 0)}
        </span>
      }
      <ShoppingBagIcon className="headerIcon h-8 w-8" />
    </Link>
  );
}

export default Basket;
