import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCartContext } from "../../context/shopping-cart-context/shopping-cart-context";
import { useTranslation } from "react-i18next";
import langKey from "../../bootstrap/i18n/langKey";
import RightSidebarCard from "./card/right-sidebar-card";
import storeItems from "../../data/items.json";
import { formatCurrency } from "../../utilities/format-currency";

const RightSidebar = () => {
  const { t } = useTranslation();
  const { isRightSidebarOpen, closeCart, cartItems, cartQuantity } =
    useShoppingCartContext();

  const totalPrice = cartItems.reduce((total, cartItem) => {
    const currentStoreItem =
      storeItems.find((storeItem) => storeItem.id === cartItem.id) || null;
    if (!currentStoreItem) return total;
    return total + cartItem.quantity * currentStoreItem.price;
  }, 0);

  return (
    <Offcanvas show={isRightSidebarOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{t(langKey.rightSidebar.cart)}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartQuantity === 0 ? (
          <div className="d-flex justify-content-center">
            {t(langKey.rightSidebar.cartIsEmpty)}
          </div>
        ) : (
          // items info and total amount
          <Stack direction="vertical" gap={3}>
            {/* items info */}
            {cartItems.map((cartItem) => {
              if (cartItem.quantity < 1) return;
              return (
                <RightSidebarCard
                  id={cartItem.id}
                  quantity={cartItem.quantity}
                />
              );
            })}
            {/* total price */}
            <div className="ms-auto fw-bold fs-5">
              {t(langKey.rightSidebar.total)} {formatCurrency(totalPrice)}
            </div>
          </Stack>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default RightSidebar;
