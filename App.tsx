import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import "react-native-gesture-handler";
import { Colors } from "./src/colors/Colors";
import MainStack from "./src/stacks/mainStack";
import { store, persistor } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { connect, Provider } from "react-redux";
import { createStructuredSelector } from "reselect";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer
          theme={{
            dark: false,
            colors: {
              background: Colors.bgOne,
              primary: Colors.primary,
              border: Colors.bgOne,
              text: "#fff",
              card: Colors.primary,
              notification: Colors.primary,
            },
          }}
        >
          <MainStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
