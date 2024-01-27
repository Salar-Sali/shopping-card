import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons/faMobileAlt";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons/faShoppingBag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import langKey from "../../../bootstrap/i18n/langKey";
import { LANGS } from "../../../bootstrap/i18n/init-i18n";

export interface IDescriptionItemProps {
  icon: IconDefinition;
  description: string;
}

export const DescriptionItem = (props: IDescriptionItemProps) => {
  const { description, icon } = props;
  const { i18n } = useTranslation();
  const isArabic = i18n.language === LANGS.AR;

  return (
    <p className="d-flex align-items-center">
      <FontAwesomeIcon
        icon={icon}
        className={`${isArabic ? "ps-2" : "pe-2"} text-danger fs-4 `}
      />
      {description}
    </p>
  );
};

const HomePageDescription = () => {
  const { t } = useTranslation();
  return (
    <div>
      <DescriptionItem
        description={t(langKey.homePage.descriptionFirstItem)}
        icon={faShoppingBag}
      />
      <DescriptionItem
        description={t(langKey.homePage.descriptionSecondItem)}
        icon={faMobileAlt}
      />
      <DescriptionItem
        description={t(langKey.homePage.descriptionThirdItem)}
        icon={faHome}
      />
    </div>
  );
};

export default HomePageDescription;
