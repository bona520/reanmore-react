import styles from "./courseDetail.module.css";
const CourseDetail = (props) => {
  const {
    cdHeading,
    cdHeader,
    cdText,
    willLearn,
    courseDescription,
    cdPublish,
    enroll,
    cdPrice,
    payingMethod,
    btnChart,
    btnChartTelegram,
    popup,
  } = styles;
  const {
    courseName,
    courseDescriptionPoint,
    learnPointOne,
    learnPointTwo,
    learnPointThree,
    learnPointFour,
    learnPointFive,
    learnPointSix,
    pricing,
    courseLastUpdate,
  } = props;
  return (
    <>
      <section className={courseDescription}></section>
      <header className={cdHeader}>
        <h3 className={cdHeading}>
          វគ្គសិក្សា
          <span>
            <br />
            {courseName}
          </span>
        </h3>
        <span className={cdText}>
          <p>{courseDescriptionPoint}</p>
        </span>
        <div className={cdPublish}>
          <span>🟢 បង្រៀនដោយ : ហេង ម៉េងហ៊ុយ</span>
          <span>⏱ Last update : {courseLastUpdate}</span>
        </div>
      </header>
      <section className={willLearn}>
        <h3>✍🏻 អ្នកនឹងរៀននូវ</h3>
        <ul>
          <li>{learnPointOne}</li>
          <li>{learnPointTwo}</li>
          <li>{learnPointThree}</li>
          <li>{learnPointFour}</li>
          <li>{learnPointFive}</li>
          <li>{learnPointSix}</li>
        </ul>
      </section>
      <section className={enroll}>
        <h3>របៀបចូលរៀន</h3>

        <p className={payingMethod}>
          អ្នកតម្រូវឱ្យបង់ប្រាក់ជាមុនតាម <span>ABA វីង ទាន់ចិត្ត...</span>
          <br />
          លេខគណនេយ្យ​ <span>012 220 499</span> <br /> គណនេយ្យឈ្មោះ Heng Menghoy
        </p>
        <div className={cdPrice}>
          វគ្គសិក្សានេះតម្លៃ {pricing}
          <p>មានសុពលភាពសិក្សារយៈពេល២ឆ្នាំ</p>
        </div>
        <div className={btnChartTelegram}>
          <span>👇 ជួបផ្ទាល់ជាមួយ Admin 👇</span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://t.me/hengmenghoy"
            className={btnChart}
          >
            Telegram
            <div className={popup}></div>
          </a>
        </div>
      </section>
    </>
  );
};
export default CourseDetail;
