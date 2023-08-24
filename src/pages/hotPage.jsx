import React from "react";
// import htmlAndCss from "../src/images/htmlandcss.webp";
import jsRealProject from "../assets/images/jsprojects.webp";
import CourseCard from "../components/courseCard";
const HotPage = () => {
  return (
    <>
      <section className="hotPage">
        <h2 className="hotPageHeading">Course ថ្មីៗក្ដៅៗ🔥</h2>
        <CourseCard
          href={"/jsRealProjectPage"}
          badgeCourse="Hot 🔥 "
          courseImg={jsRealProject}
          courseHeading="JavaScript Real Projects"
          courseDetails="ចាប់ផ្ដើមបង្កើតនូវ Project ជាក់ស្ដែងជាមួយ JavaScript"
        />
      </section>
    </>
  );
};
export default HotPage;
