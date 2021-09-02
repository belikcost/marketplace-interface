import { useState } from "react";
import { useTranslation } from "react-i18next";

import { setReverseValue } from "../../utils";


const Select = ({currentOption, handleChange, options}) => {
    const {t} = useTranslation();
    const [showOptions, setShowOptions] = useState(false);

    return (
      <div>
          <span onClick={() => setReverseValue(showOptions, setShowOptions)}>{currentOption}</span>
          {showOptions && (
              <div>
                  {options.map((option, i) => (
                      <span onClick={() => handleChange(option)} key={i}>{option}</span>
                  ))}
              </div>
          )}
      </div>
    );
}

export default Select;