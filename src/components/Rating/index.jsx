import React from "react";

/** Icons */
import StarIcon from "icons/StarIcon";
import StarIconDisable from "icons/StarIconDisable";

import styles from "./index.module.scss";

export default function Rating() {
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);

  return (
    <div className={styles.starRating}>
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <div
            className={styles.star}
            key={index}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            onClick={() => setRating(index)}
          >
            {index <= (hover || rating) ? <StarIcon /> : <StarIconDisable />}
          </div>
        );
      })}
    </div>
  );
}
