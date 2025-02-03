// import React from 'react';

// const Profile = ({ user }) => {
//   return <div>Welcome, {user.name}!</div>;
// };

// const UserMenu = ({ user }) => {
//   return (
//     <div>
//       <h2>User Menu</h2>
//       <Profile user={user} />
//     </div>
//   );
// };

// const Navbar = ({ user }) => {
//   return (
//     <nav>
//       <h1>App Navbar</h1>
//       <UserMenu user={user} />
//     </nav>
//   );
// };

// const PropDrill = () => {
//   const user = { name: 'John Doe' };
//   return <Navbar user={user} />;
// };

// export default PropDrill;
import React,{createContext,useContext} from "react";
const UserContext =createContext();
const Profile = () => {
    // Consume the context using useContext hook
    const user = useContext(UserContext);
    return <div>Welcome, {user.name}!</div>;
  };
  
  const UserMenu = () => {
    return (
      <div>
        <h2>User Menu</h2>
        <Profile />
      </div>
    );
  };
  
  const Navbar = () => {
    return (
      <nav>
        <h1>App Navbar</h1>
        <UserMenu />
      </nav>
    );
  };
  
//   const PropDrill = () => {
//     const user = { name: 'Ajay Yadav' };
  
//     return (
//       // Provide the user data to the context
//       <UserContext.Provider value={user}>
//         <Navbar />
//       </UserContext.Provider>
//     );
//   };
  
//   export default PropDrill;

const PropDrill = ({ children }) => {
    const user = { name: 'Ajay Yadav' };
  
    return (
      // Provide the user data to the context
      <UserContext.Provider value={user}>
        {children}
      </UserContext.Provider>
    );
  };
  
  // Usage of PropDrill with children components
  const App = () => (
    <PropDrill>
      <Navbar />
    </PropDrill>
  );
  
  export default App;
