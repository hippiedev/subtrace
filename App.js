import {useFonts} from "expo-font";
import OnBoarding from "./screens/OnBoarding";


export default function App() {
  // const [dataLoaded, setDataLoaded] = useState(false);
  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setDataLoaded(true)}
  //       onError={(err) => console.log(err)}
  //     />
  //   );
  // }
  const [loaded] = useFonts({
    Inter: require("./assets/fonts/Inter-Regular.otf"),
    InterBold: require("./assets/fonts/Inter-Bold.otf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.otf"),
    GTAmerica: require("./assets/fonts/GT-America-Regular.otf"),
    GTAmericaBold: require("./assets/fonts/GT-America-Bold.otf"),
  });
  
  if (!loaded) {
    return null;
  }
  return (
   <OnBoarding />
  );
}

