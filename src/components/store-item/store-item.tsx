import { Button, Card } from "react-bootstrap";
import IStoreItemProps from "./i-store-item-props";
import { formatCurrency } from "../../utilities/format-currency";
import { useTranslation } from "react-i18next";
import langKey from "../../bootstrap/i18n/langKey";
import { useShoppingCartContext } from "../../context/shopping-cart-context/shopping-cart-context";
import { LANGS } from "../../bootstrap/i18n/init-i18n";

enum storeContents {
  Book = "Book",
  Computer = "Computer",
  Banana = "Banana",
  Car = "Car",
  Iphone = "Iphone",
  Mata = "Mata",
  Mouse = "Mouse",
  Watch = "Watch",
  Teapot = "Teapot",
  Tulip = "Tulip",

  Cap = "Cap",
  Coffee = "Coffee",
  Dates = "Dates",
  Glasses = "Glasses",
  Kiwi = "Kiwi",
  Plate = "Plate",
  Pomegranate = "Pomegranate",
  Rice = "Rice",
}

const getTranslatedStoreContent = {
  [storeContents.Book]: langKey.store.book,
  [storeContents.Computer]: langKey.store.computer,
  [storeContents.Banana]: langKey.store.banana,
  [storeContents.Car]: langKey.store.car,
  [storeContents.Iphone]: langKey.store.iphone,
  [storeContents.Mata]: langKey.store.mata,
  [storeContents.Mouse]: langKey.store.mouse,
  [storeContents.Teapot]: langKey.store.teapot,
  [storeContents.Tulip]: langKey.store.tulip,
  [storeContents.Watch]: langKey.store.watch,
  [storeContents.Cap]: langKey.store.cap,
  [storeContents.Coffee]: langKey.store.coffee,
  [storeContents.Dates]: langKey.store.dates,
  [storeContents.Glasses]: langKey.store.glasses,
  [storeContents.Kiwi]: langKey.store.kiwi,
  [storeContents.Plate]: langKey.store.plate,
  [storeContents.Pomegranate]: langKey.store.pomegranate,
  [storeContents.Rice]: langKey.store.rice,
};

const StoreItem = (props: IStoreItemProps) => {
  const { vm } = props;
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === LANGS.AR;

  const {
    getCartQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    resetCartQuantity,
  } = useShoppingCartContext();
  const quantity = getCartQuantity(vm.id);
  return (
    <Card className="h-100">
      <Card.Img
        src={`${import.meta.env.BASE_URL}${vm.imgUrl}`}
        variant="top"
        height="200px"
        alt={vm.name}
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title
          className="d-flex justify-content-between align-items-baseline mb-3"
          dir={isArabic ? "rtl" : ""}
        >
          <span className="fs-2">
            {t(getTranslatedStoreContent[vm.name as storeContents])}
          </span>
          <span className="ms-2 text-muted">{formatCurrency(vm.price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100"
              onClick={() => increaseCartQuantity(vm.id)}
            >
              {t(langKey.store.addToBasket)}
            </Button>
          ) : (
            // contains (+,-,and quatity)(remove)
            <div
              className="d-flex flex-column align-items-center"
              style={{ gap: "0.5rem" }}
            >
              {/* (+,-,and quatity) */}
              <div className="d-flex justify-content-center align-items-center">
                <Button onClick={() => decreaseCartQuantity(vm.id)}>-</Button>
                <div
                  className={`mx-2 d-flex align-items-center ${
                    isArabic ? "flex-row-reverse" : ""
                  }`}
                >
                  <span className="fs-4">{quantity}</span>
                  {t(langKey.store.itemsInTheBasket)}
                </div>
                <Button onClick={() => increaseCartQuantity(vm.id)}>+</Button>
              </div>
              {/* remove button */}
              <Button
                className="btn btn-danger"
                size="sm"
                onClick={() => resetCartQuantity(vm.id)}
              >
                {t(langKey.store.remove)}
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
