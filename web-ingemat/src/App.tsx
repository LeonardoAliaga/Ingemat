import Card, { CardBody } from "./components/Card";
import List from "./components/List";
function App() {
  const list = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];
  return (
    <Card>
      <CardBody
        title={"Titulo de la tarjeta"}
        text={"Esta es la descripcion de la tarjeta"}
      />
      <List data={list} />
    </Card>
  );
}

export default App;
