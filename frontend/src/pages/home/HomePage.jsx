import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";
import { useAuthStore } from "../../store/authUser.js";

const HomePage = () => {
  const { user } = useAuthStore();
  return <>{!user ? <AuthScreen /> : <HomeScreen />}</>;
};

export default HomePage;
