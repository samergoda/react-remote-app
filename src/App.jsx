import React, { useEffect } from "react";
// import { globalStore } from "host/store";

export default function App() {
  // Initialize local state with the store value
  // const [user, setUser] = useState(globalStore.user);

  // Subscribe to changes in the store
  useEffect(() => {
    // Update local state when store changes
    // setUser(globalStore.user);
  }, []);

  return (
    <div>
      <h2>Hello from React Remote</h2>

      <h1>samemerrrr</h1>
      {/* Display user data safely with optional chaining */}
      {/* <p>Welcome {user?.name}</p> */}
      {/* You can access other user properties as needed */}
      {/* {user && (
        <div>
          <p>User details:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      )} */}
    </div>
  );
}
