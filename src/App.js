import { Helmet } from "react-helmet";
import Content from "./components/Content";
import Header from "./components/Header";

const App = () => {
  const title = "Monpla";
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header title={title} />
      <Content />
    </div>
  );
};

export default App;
