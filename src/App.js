import { Provider } from "react-redux";
import MainContainer from "./components/MainContainer";
import appStore from "./components/utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <MainContainer />
    </Provider>
  );
}

export default App;
