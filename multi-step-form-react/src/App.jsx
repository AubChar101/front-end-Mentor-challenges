import "./App.css";
import Track_Bar from "./Components/Track Bar/index";
import Personal_Info from "./Components/Forms/Personal Info/index";
import Select_your_plan from "./Components/Forms/Select your plan/index";
import Add_Ons from "./Components/Forms/Add-Ons/index";
import Summary from "./Components/Forms/Summary/index";
import Thank_You from "./Components/Forms/Thank You/index";
import { createContext, useState } from "react";

export const formData = createContext();

function App() {
  const Steps = [
    <Personal_Info key={1} />,
    <Select_your_plan key={2} />,
    <Add_Ons key={3} />,
    <Summary key={4} />,
    <Thank_You key={5} />,
  ];
  const [formObject, SetFormObject] = useState({
    current_step: 1,
    personal_info: {
      name: "",
      email: "",
      phone_number: "",
    },
    plan_selected: {
      type: 1,
      plan_name: "Arcade",
      price_monthly: 9,
    },
    Add_Ons: [],
  });
  return (
    <body>
      <main>
        <formData.Provider value={[formObject, SetFormObject]}>
          <Track_Bar />
          {Steps[formObject.current_step - 1]}
        </formData.Provider>
      </main>
    </body>
  );
}
export default App;
