import image from '../assets/math.png';

export default function Home() {
  return (
    <div className="home">
      <h2>Welcome to our page!</h2>
      <div className="main-structure">
        <img src={image} alt="math" />
        <p>
          Mathematics is a subject that deals with numbers, quantities, and
          shapes. It is a fundamental part of our daily lives and is used in
          various fields such as science, engineering, and finance. Mathematics
          helps us understand the world around us and provides us with tools to
          solve problems. It is a subject that requires logical thinking and
          problem-solving skills. Mathematics is also used to develop new
          technologies and solve complex problems in various fields. It is a
          subject that has been studied for thousands of years and has led to
          many discoveries and advancements in science and technology. The study
          of mathematics has helped us understand the universe we live in and
          has provided us with the tools to explore it further.
        </p>
      </div>
    </div>
  );
}
