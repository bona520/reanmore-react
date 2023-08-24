import React from "react";
import styles from "./heroSection.module.css";
const HeroSection = () => {
  const { heroSection, heroHeading } = styles;
  return (
    <section className={heroSection}>
      <h1 className={heroHeading}>សូមស្វាគមន៍មកកាន់ រៀនម័រ</h1>
      <p>នេះគឺជាគេហទំព័រដែលផ្ដល់ឱ្យអ្នកនូវវគ្គសិក្សាខ្លីៗ ដែលមានគុណភាពល្អ</p>
    </section>
  );
};

export default HeroSection;
