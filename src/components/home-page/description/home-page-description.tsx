import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons/faMobileAlt";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons/faShoppingBag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface IDescriptionItemProps {
  icon: IconDefinition;
  description: string;
}

export const DescriptionItem = (props: IDescriptionItemProps) => {
  const { description, icon } = props;
  return (
    <p className="d-flex align-items-center">
      <FontAwesomeIcon
        icon={icon}
        style={{ fontSize: "23px", paddingRight: "10px" }}
        className="text-danger"
      />
      {description}
    </p>
  );
};

const HomePageDescription = () => {
  return (
    <div>
      <DescriptionItem
        description="Affordable trends for a stylish look."
        icon={faShoppingBag}
      />
      <DescriptionItem
        description="Innovative gadgets for a trendsetting lifestyle."
        icon={faMobileAlt}
      />
      <DescriptionItem
        description="Quality, unique essentials to elevate daily life."
        icon={faHome}
      />
    </div>
  );
};

export default HomePageDescription;
