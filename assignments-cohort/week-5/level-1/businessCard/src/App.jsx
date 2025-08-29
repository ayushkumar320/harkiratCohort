import {BusinessCard} from "./components/BusinessCard";
function App() {
  return (
    <div>
      <BusinessCard
        name="John Doe"
        description="Web Developer"
        interests={["Coding", "Music", "Gaming"]}
        linkedin="https://www.linkedin.com/in/johndoe"
        twitter="https://twitter.com/johndoe"
        otherSocialMedia={{label: "GitHub", url: "https://github.com/johndoe"}}
      />
    </div>
  );
}

export default App;
