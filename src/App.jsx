import "./index.css";
import { Viewer, Camera } from "resium";
import ArgentinaPolygon from "./components/argentina-polygon";
import SideBar from "./layouts/side-bar";
import { QueryClient, QueryClientProvider } from "react-query";
import { useElectionInfoStore } from "./store/useElectionInfoStore";

const dummyCredit = document.createElement("div");

function App() {
  const queryClient = new QueryClient();

  const setIdDistrito = useElectionInfoStore((state) => state.setIdDistrito);
  const idEleccion = useElectionInfoStore((state) => state.idEleccion);

  const paramsString = window.location.search;
  const searchParams = new URLSearchParams(paramsString);

  const handleOnSelectedEntityChange = (entity) => {
    if (!entity) {
      setIdDistrito("0");
      searchParams.set("idDistrito", "0");
      window.history.pushState({}, "", "?" + searchParams.toString());
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <SideBar />
      <Viewer
        full
        creditContainer={dummyCredit}
        animation={false}
        timeline={false}
        infoBox={false}
        baseLayerPicker={false}
        geocoder={false}
        homeButton={false}
        sceneModePicker={false}
        onSelectedEntityChange={handleOnSelectedEntityChange}
      >
        <ArgentinaPolygon />
      </Viewer>
      <p className="fixed bottom-1 right-10 z-50">
        Desarrollado por{" "}
        <a
          className="bg-gradient-to-r from-sky-400 to-sky-200 text-transparent bg-clip-text hover:border-b border-blue-500 "
          target="_blank"
          href="https://www.linkedin.com/in/carlos-eduardo-botero/"
        >
          Carlos Botero
        </a>
      </p>
    </QueryClientProvider>
  );
}

export default App;
