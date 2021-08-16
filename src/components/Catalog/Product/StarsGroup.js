import starFillIcon from "../../../img/star_fill.svg";
import starNotFillIcon from "../../../img/star_not_fill.svg";

export const StarsGroup = ({stars, fill, setCount}) => {

    const handleSetCount = (starIndex) => setCount(+starIndex + 1);

    return (
        <div>
            {stars.map((starIndex, i) => +starIndex + 1 <= fill ? (
                    <img src={starFillIcon} key={i} onClick={() => handleSetCount(starIndex)} alt="star"/>
                ) : (
                    <img src={starNotFillIcon} key={i} onClick={() => handleSetCount(starIndex)} alt="star"/>
                )
            )}
        </div>
    );
};