import "./App.css";
import Posts from "./Posts";

const ANAKIN_IMAGE =
  "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE =
  "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const OBI_IMAGE =
  "https://i0.wp.com/oquartonerd.com.br/wp-content/uploads/2019/10/Obi-Wan-S%C3%A9rie-1-800x445-1.jpg?resize=800%2C445&ssl=1";
const LUKE_IMAGE =
  "https://cdn.geekwire.com/wp-content/uploads/2017/10/171009-lastjedi-100x100.jpg";

const postsData = [
  {
    name: "Anakin Skywalker",
    photo: ANAKIN_IMAGE,
    nickname: "@dart_vader",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: RAY_IMAGE,
    date: "26 февр.",
  },
  {
    name: "Luke Skywalker",
    photo: LUKE_IMAGE,
    nickname: "@luke_skywalker",
    content: "Obi, Why you did not tell me, that Yoda had a grandson?",
    image: OBI_IMAGE,
    date: "30 мая",
  },
];

function App() {
  return (
    <div className="posts-container">
      {postsData.map((post, i) => (
        <Posts {...post} key={i} />
      ))}
    </div>
  );
}

export default App;
