import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Grid, Text } from "@mantine/core";

function Home() {
  return (
    <>
      <Navbar />
      <div class="container mx-auto pt-10 text-base">
        Welcome to my personal website! I'm a software developer with a passion
        for creating high-quality software solutions that solve complex
        problems.
        <br />
        <br />
        As a developer, I have experience working with a wide range of
        programming languages and technologies, including JavaScript, React, and
        many more. I am constantly learning and exploring new technologies to
        expand my skillset and stay up-to-date with the latest industry trends.
        <br />
        <br />
        Throughout my career, I have worked on a variety of projects, ranging
        from small web applications to large-scale enterprise software systems.
        I pride myself on my attention to detail and my ability to deliver
        high-quality code on time and within budget.
        <br />
        <br />
        In addition to my technical skills, I am a strong communicator and a
        team player. I enjoy working collaboratively with other developers,
        designers, and stakeholders to ensure that everyone's voices are heard
        and that we are all working towards a common goal.
        <br />
        <br />
        On this website, you will find examples of my work, my resume, and my
        blog, where I share my thoughts and insights on software development and
        technology. If you are interested in working with me or have any
        questions, please don't hesitate to get in touch!
      </div>

      <Footer />
    </>
  );
}

export default Home;
