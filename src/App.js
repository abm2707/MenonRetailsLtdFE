import { useState, useEffect } from "react";
import "./App.css";
import SideBar from "./containers/SideBar"; 
import Login from "./containers/Login";
import axios from "axios";
import Header from "./containers/header";
import HeaderV002 from "./containers/HeaderV002";
import AccountSettings from "./containers/userprofile";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import LoginNew from "./containers/LoginNewV002";
import SignUp from "./containers/SignUp";
import HomeScreen from "./containers/homeScreen";
import SellerManagement from "./Screens/SellerManagementScreens";
import SellerRegPortal from "./Screens/SellerRegPortal";
import SellerRegTabs from "./containers/SellerRegistration/SellerRegComponents";
import SellerRegistrationScreen from "./containers/SellerRegistration/SellerRegistrationTab";
import SellerAccounts from "./containers/SellerRegistration/SellerAccounts";
import SellerValidations from "./containers/SellerRegistration/SellerValidations";
import SellerUploads from "./containers/SellerRegistration/SellerUploads";
import ViewClaims from "./containers/Claims/viewClaims";

function App() {

  const router1 = createBrowserRouter([
    {
      path:'/SellerRegistrationScreen',
      element:(
      <>
      <HeaderV002 />,
      <SellerRegTabs />,
      </>
      )
    },
    {
      path:'/userProfile',
      element:<AccountSettings />
    },
    {
      path:'/signUp',
      element:<SignUp />
    },
    {
      path:'/Home',
      element:<HomeScreen />
    },
    {
      path:'/SellerRegPortal',
      element:<SellerRegPortal />
    },
    {
      path:'/SellerAccounts',
      element:(
        <>
        <HeaderV002 />,
        <SellerRegTabs />
        <SellerAccounts />
        </>
        )
    },
    {
      path:'/SellerValidations',
      element:(
        <>
        <HeaderV002 />,
        <SellerRegTabs />
        <SellerValidations />
        </>
        )
    },
    {
      path:'/SellerUploads',
      element:(
        <>
        <HeaderV002 />,
        <SellerRegTabs />
        <SellerUploads />
        </>
        )
    },
    {
      path:'/',
      element:<LoginNew />
    },
    {
      path:'/SellerManagementPortal',
      element:<SellerManagement />
    },
    {
      path:'/viewClaims',
      element:(
        <>
        <HeaderV002 />,
        <ViewClaims />
        </>
        )
    }
  ]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginPayload, setLoginPayload] = useState(null); 
  const [userRole, setUserRole] = useState(null); 
  const [accessId, setAccessId] = useState("");
  var token;

  return (
    <div className="App">
      {/* {!isLoggedIn ? (
        // JSX comments must be standalone in this context
        // Uncomment below if you want to use the old Login component
        // <Login
        //   setIsLoggedIn={setIsLoggedIn}
        //   setLoginPayload={handleSuccessLogin} 
        // />
        <LoginNew />
      ) : (
        <div>
          <Header isLoggedIn={setIsLoggedIn} />
          <AccountSettings userName={loginPayload} />
          <SideBar userRole={userRole} />
        </div>
      )} */}
      <RouterProvider router={router1} />
    </div>
  );
}
  
//   function handleSuccessLogin(loginPayload) {
//     setIsLoggedIn(true);
//     setLoginPayload(loginPayload); 
//     handleRoleCheck(loginPayload); 
//     console.log("Login Payload", loginPayload);
//   }

//   async function checkSessionStatus(){
//     token = localStorage.getItem("jwtToken");

//     if (!token) {
//       alert("Kindly Login to Proceed !!");
//       return false;
//     }
//   }

//   async function handleRoleCheck(loginPayload) {
//     try {      
//       checkSessionStatus();
//       const response = await axios.get(
//         "http://127.0.0.1:8085/user/roleByUser",
//         {
//           headers: {
//            Authorization: `Bearer ${token}`
            
//           }
//         }
//       );

//       console.log("ReponseData", response.data);
//       setUserRole(response.data);
//     } catch (error) {
//       console.error("Error fetching user role:", error);
//       alert("Kindly login again to continue.");
//       setIsLoggedIn(false);
//       localStorage.removeItem("jwtToken"); 
//     }
//   }
// }

export default App;
