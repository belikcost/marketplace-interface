import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Range } from "../../../base/FilterItems/Range";
import { Checkboxes } from "../../../base/FilterItems/Checkboxes";


const Filter = ({filter, handleFilters, icons}) => {
    const {t} = useTranslation();
    const isSmall = document.documentElement.scrollWidth < 700;


    const [isShow, setIsShow] = useState(false);

    return (
        <div className="category__filter-container">
            <h5
                className={isShow ? 'active' : ''}
                onClick={() => setIsShow(!isShow)}
            >
                {t(filter.name)}
            </h5>
            {(!isSmall || isShow) && (
                <>
                    {(filter.type === "range" && (
                        <Range
                            value={filter.value}
                            maxValue={filter.maxValue}
                            startValue={filter.startValue}
                            changeValue={(value) => handleFilters(filter.name, value)}
                        />
                    )) || (filter.type === "checkbox" && (
                        <Checkboxes
                            checked={filter.value}
                            values={filter.values}
                            changeValue={(value) => handleFilters(filter.name, value)}
                            icons={filter.useIcons && icons}
                        />
                    ))}
                </>
            )}
        </div>
    );
};

export default Filter;