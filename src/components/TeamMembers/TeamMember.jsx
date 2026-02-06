import "./TeamSection.css";
import villote from "../../assets/Villote.jpg"
import buela from "../../assets/buela.png"
import casaberde from "../../assets/casaberde.PNG"
import cervantes from "../../assets/cervantes.jpg"
import francisco from "../../assets/francisco.jpeg"
import guerrero from "../../assets/guerrero.jpeg"
import sarzosa from "../../assets/sarzosa.jpg"
import vargas from "../../assets/vargas.png"
import armea from "../../assets/armea.jpeg"
import enerio from "../../assets/enerio.jpeg"
import ella from "../../assets/ella.PNG"

const teamMembers = [
  {
    name: "Mariel Casaberde",
    title: "Founder & CEO",
    avatarUrl: casaberde,
  },
  {
    name: "John Vincent Armea",
    title: "Full-stack Developer",
    avatarUrl: armea,
  },
  {
    name: "Federico T. Enerio Jr.",
    title: "Full-stack Developer",
    avatarUrl: enerio,
  },
  {
    name: "Angel Vargas",
    title: "Full-stack Developer",
    avatarUrl: vargas,
  },
  {
    name: "Rowena Sarzosa",
    title: "Full-stack Developer",
    avatarUrl: sarzosa,
  },
  {
    name: "Zedrick Buela",
    title: "Database Manager",
    avatarUrl: buela,
  },
  {
    name: "Cristel Guerrero",
    title: "UI/UX Designer",
    avatarUrl: guerrero,
  },
  {
    name: "Ella Matriz",
    title: "UI/UX Designer",
    avatarUrl: ella,
  },
  {
    name: "Mariel Pamela Florano Cervantes",
    title: "Technical Writer",
    avatarUrl: cervantes,
  },
  {
    name: "Maricris Villote",
    title: "Technical Writer",
    avatarUrl: villote,
  },
  {
    name: "Regine Mariel Francisco",
    title: "Technical Writer",
    avatarUrl: francisco,
  },
];

function TeamSection() {
  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-header">
          <h2>Meet our team</h2>
          <p>
            Our philosophy is simple—hire a team of diverse, passionate people
            and foster a culture that empowers you to do your best work.
          </p>
        </div>

        <ul className="team-grid">
          {teamMembers.map((member) => (
            <li className="team-card" key={member.name}>
              <img
                src={member.avatarUrl}
                alt={member.name}
                className="team-avatar"
              />
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TeamSection;
