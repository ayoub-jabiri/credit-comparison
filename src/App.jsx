import "./App.css";
import AppHeader from "./components/layout/AppHeader";

import { data } from "./assets/data/data";

function App() {
    console.log(data);

    return (
        <>
            <AppHeader />
        </>
    );
}

export default App;
