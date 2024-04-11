import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <blogData.posts />
      <blogData.name />
    </div>
  );
}

export default App;
