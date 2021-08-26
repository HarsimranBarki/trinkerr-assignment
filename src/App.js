import { useMemo, useState } from "react";
import { UserContext } from "./libs/userContext";

const App = () => {
  const [user, setUser] = useState({});
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={providerValue}>
      <div className=""></div>
    </UserContext.Provider>
  );
};

export default App;
