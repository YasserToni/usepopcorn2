import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./StarRating";
import './index.css';
import App from './App';

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetingRating={setMovieRating} />
//       <p>This is movie was rating {movieRating} Stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      className="test"
      message={["Terrible", "Bad", "Okey", "Good", "Amazing"]}
      defaultRating={3}
    /> */}
    {/* <StarRating maxRating={10} size={30} color="red" /> */}
    {/* <StarRating maxRating={20} size={10} color="blue" />
    <StarRating maxRating={15} size={40} color="green" />
    <StarRating maxRating={20} size={80} color="orange" /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
