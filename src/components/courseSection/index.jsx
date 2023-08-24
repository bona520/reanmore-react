import styles from "./courseSection.module.css";
import htmlAndCss from "../../assets/images/htmlandcss.webp";
import javaScript from "../../assets/images/javascript.webp";
import javaScriptProjects from "../../assets/images/jsprojects.webp";
import CourseCard from "../courseCard";
const CourseSection = () => {
  const { heading, courseSection, grid } = styles;
  return (
    <section className={courseSection}>
      <header>
        <h2 className={heading}>All Courses</h2>
        <p>ជ្រើសរើសវគ្គសិក្សាដែលអ្នកពេញចិត្ត</p>
      </header>
      <div className={grid}>
        <CourseCard
          href={"/jsRealProjectPage"}
          badgeCourse="40$"
          courseImg={javaScriptProjects}
          courseHeading="JavaScript Projects"
          courseDetails="រៀនធ្វើនូវ Project ជាក់ស្ដែងជាមួយនឹង​ JavaScript ដែលពេញនិយមលើវេបសាយ"
        />
        <CourseCard
          href={"/JsAtoZDescPage"}
          badgeCourse="40$"
          courseImg={javaScript}
          courseHeading="JavaScript A => Z"
          courseDetails="ផ្ដើមពីចំណុចសូន្យនៃ JavaScritp បញ្ចប់ទៅវិញជាមួយនឹង DOM ES6 និងផ្សេងៗជាច្រើនទៀត"
        />
        <CourseCard
          href={"/htmlCssDescPage"}
          badgeCourse="40$"
          courseImg={htmlAndCss}
          courseHeading="The Ultimate HTML and CSS"
          courseDetails="រៀនពីចំណុចសូន្យរហូតដល់ការបង្កើតវេបសាយជាក់ស្ដែងទូទៅ..."
        />
      </div>
    </section>
  );
};
export default CourseSection;
