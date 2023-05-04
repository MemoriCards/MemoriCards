import { RoutesMain } from "./Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <RoutesMain /> 
    </>
  );
}

export default App;
