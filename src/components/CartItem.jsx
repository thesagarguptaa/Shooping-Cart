import { FcDeleteColumn } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  console.log("i am in cart item ");

  const removefromcart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="  mt-10 ml-10 border-b-2 ">
      <div className="flex flex-row  justify-between ">
        <div className=" p-10 ">
          <img src={item.image} className=" w-60 h-60 " />
        </div>

        <div>
          <h1> {item.title} </h1>

          <h1>
            {" "}
            {item.description.split(" ").slice(0, 10).join(" ") + "..."}{" "}
          </h1>

          <div>
            <p>{item.price}</p>

            <div onClick={removefromcart}>
              <FcDeleteColumn />
              <h1>here is my button removefromcart</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
