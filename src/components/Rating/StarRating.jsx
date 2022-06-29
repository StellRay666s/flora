import React from "react";
import StarIcons from "../../icons/StarIcons";
import StarIconsDisable from "icons/StarIconsDisable";

import styles from "./starRating.module.scss";
const StarRating = () => {
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);

  return (
    <div className={styles.starRating}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <div
            key={index}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            onClick={() => setRating(index)}
          >
            {index <= (hover || rating) ? <StarIcons /> : <StarIconsDisable />}
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
