import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App(props) {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        imageUrl={item.imageUrl}
        location={item.location}
        link={item.link}
        title={item.title}
        dates={item.dates}
        description={item.description}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
