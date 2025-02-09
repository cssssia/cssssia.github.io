import "./AboutMe.css";

function AboutMe() {

  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  let age;

  if (month > 5)
    age = year - 2000;
  else if (month < 5)
    age = year - 2001;
  else
    if (day >= 22)
      age = year - 2000;
    else
      age = year - 2001;

  return (
    <div id="content">
      <div className="parent">
        <div className="aboutMe">
          <div style={{marginTop: '10em'}}>
            <h1 className="font-weight">hey! my name is <strong className="blue">cássia toscani</strong> and i am <span>{age}</span> years old.</h1>
            <h2 className="font-weight">
              i am a software developer and game student, passionate about the
              geek world and learning new things.
              i believe that games can reach people in ways other medias cannot, and i want to be a part of it.
            </h2>
            <p className="alignRight">you can reach out to me via <strong className="blue">cassia.toscani@gmail.com</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
