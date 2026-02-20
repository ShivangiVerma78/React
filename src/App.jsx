import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import ConceptCard from "./components/ConceptCard.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTab, setSelectedTab] = useState(null);
  function handleSelect(tabName) {
    setSelectedTab(tabName);
  }

  let tabContent = <p>Please select a tab to see the content.</p>;
  if(selectedTab){ 
      tabContent = (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTab].title}</h3>
          <p>{EXAMPLES[selectedTab].description}</p>
          <pre>{EXAMPLES[selectedTab].code}</pre>
        </div>
      )}
  return (
    <div>
      <Header />
      <main>
        <h2>Core Concepts</h2>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((coreConcept) => <ConceptCard key={coreConcept.title} {...coreConcept} />)}
          </ul>
        </section>
      
        <section id="examples">
          <h2>More Concepts</h2>
          <menu>
            <TabButton isSelected={selectedTab === "components"} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectedTab === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTab === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
            <TabButton isSelected={selectedTab === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
