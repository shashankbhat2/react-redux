import ProfileCard from "./Components/ProfileCard";
import alexa from "../images/alexa.png";
import cortana from "../images/cortana.png";
import siri from "../images/siri.png";

const DATA = [
  {
    name: "Alexa",
    handle: `@alexa`,
    img: alexa,
    desc: "Alexa was created by Amazon and helps you buy things.",
  },
  {
    name: "Cortana",
    handle: `@cortana`,
    img: cortana,
    desc: "Cortana was made by Microsoft. Who knows what it does?",
  },
  {
    name: "Siri",
    handle: `@siri`,
    img: siri,
    desc: "Siri was made by Apple and is being phased out",
  },
];

const App = () => {
  return (
    <>
      <header>
        <div className="p-4 has-background-primary-light		">
          <h1 className="title is-5 has-text-weight-medium">
            Personal Digital Assistants
          </h1>
        </div>
      </header>
      <main className="container">
        <section className="section">
          <div className="columns">
              <div className="columns my-4 is-5 is-justify-content-space-between	">
                {DATA.map((item, i) => (
                  <ProfileCard key={i} profile={item} />
                ))}
              </div>
            </div>
        </section>
      </main>
    </>
  );
};

export default App;

{
  /* 
    const [text, setText] = useState("");
  <input
        autoFocus={true}
        spellCheck
        style={{border: "1px solid blue"}}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
      />
      <h1>{text}</h1> */
}
