import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";

export default function Examples() {
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
    return(
        <Section id="examples" title="More Concepts">
          <menu>
            <TabButton isSelected={selectedTab === "components"} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectedTab === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTab === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
            <TabButton isSelected={selectedTab === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
          </menu>
          {tabContent}
        </Section>
    );
}
