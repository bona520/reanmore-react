import React from "react";
import styles from "./courseCard.module.css";
import { Link } from "react-router-dom";
const CourseCard = (props) => {
  const { courseImg, courseHeading, courseDetails, href } = props;
  const { courseCard, img, courseDesc } = styles;
  return (
    <article className={courseCard}>
      {/* <span className={courseBadge}>{badgeCourse}</span> */}
      <Link to={href}>
        <div className={img}>
          <img src={courseImg} alt="course banner" />
        </div>
        <div className={courseDesc}>
          <h3>{courseHeading}</h3>
          <p>{courseDetails}</p>
        </div>
      </Link>
    </article>
  );
};

export default CourseCard;
