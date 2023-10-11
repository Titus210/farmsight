import UserRoutes from "./routes";

/**
 * App Component:
 *
 * The App component is the main entry point of the application. It renders user-specific routes
 * defined in the UserRoutes component.
 *
 * Key Points:
 * - It renders the UserRoutes component, which handles user-specific navigation.
 * - The application's name "Farmsight" is commented out but can be used for branding in the future.
 *
 * Suggestions:
 * - When ready, uncomment the branding section to display the application's name.
 * - Make sure that UserRoutes contains all the necessary routes for user navigation.

 * Overall, the App component sets up the application structure and routing.
 */

const App = () => {
  return (
    <>
      {/* Uncomment the following section for branding */}
      {/* <div className="bg-white">
        <h1 className="text-6xl font-mono font-bold text-green">Farm<span className="text-brown">sight.</span> </h1>
        <Routes />
      </div> */}
      <UserRoutes />
    </>
  );
}

export default App;
