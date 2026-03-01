
import ConceptCard from "./ConceptCard.jsx";
import Section from "./Section.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
        <ul>
            {CORE_CONCEPTS.map((coreConcept) => <ConceptCard key={coreConcept.title} {...coreConcept} />)}
        </ul>
    </Section>
  );
}   