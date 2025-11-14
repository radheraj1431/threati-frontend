import React, {StrictMode} from "react";
import { Provider } from "react-redux";
import { store, history } from "./core/redux/store";
import Boot from "./core/redux/boot";
import AppRouter from "./appRouter";

const App = () => {
  return (
      <div style={{height:'100%'}}>
                <StrictMode>
        </StrictMode>
        <Provider store={store}>
          <AppRouter history={history} />
        </Provider>
      </div>
  );
}

Boot()
  .then(() => App())
  .catch(error => console.error(error));

export default App;
