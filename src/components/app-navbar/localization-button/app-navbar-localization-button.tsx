import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LANGS } from "../../../bootstrap/i18n/init-i18n";

const AppNavbarLocalizationButton = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<LANGS>(i18n.language as LANGS);
  const handleSetLanguage = (language: LANGS) => {
    setLang(language);
    i18n.changeLanguage(language);
  };

  const langs = [LANGS.EN, LANGS.RU, LANGS.AR];

  return (
    <div className="dropdown">
      <button
        className="btn btn-danger dropdown-toggle"
        data-bs-toggle="dropdown"
      >
        {lang}
      </button>
      <ul className="dropdown-menu" style={{ minWidth: "20px" }}>
        {langs.map((lang) => {
          return (
            <li>
              <button
                className="dropdown-item btn-xs"
                onClick={() => handleSetLanguage(lang)}
              >
                {lang}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AppNavbarLocalizationButton;
