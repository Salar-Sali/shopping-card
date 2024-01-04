import { Button, Stack } from "react-bootstrap";
import { useShoppingCartContext } from "../../../context/shopping-cart-context/shopping-cart-context";
import IRightSidebarCardProps from "./i-right-sidebar-card-props";
import storeItems from "../../../data/items.json";
import { formatCurrency } from "../../../utilities/format-currency";

const RightSidebarCard = (props: IRightSidebarCardProps) => {
  const { id, quantity } = props;
  const { resetCartQuantity } = useShoppingCartContext();
  const currentStoreItem =
    storeItems.find((storeItem) => storeItem.id === id) || null;

  if (!currentStoreItem) return null;

  return (
    <Stack direction="horizontal" gap={2}>
      <img
        src={`${import.meta.env.BASE_URL}${currentStoreItem.imgUrl}`}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      {/* name and price */}
      <div className="me-auto">
        {/* name */}
        <div>
          {currentStoreItem.name}{" "}
          {quantity > 0 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        {/* price */}
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(currentStoreItem.price)}
        </div>
      </div>

      {/* total price */}
      <div>{formatCurrency(quantity * currentStoreItem.price)}</div>
      {/* remove */}
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => resetCartQuantity(id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default RightSidebarCard;
