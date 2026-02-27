
import ConceptCard from "./ConceptCard.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
  return (
    <>
        <h2>Core Concepts</h2>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((coreConcept) => <ConceptCard key={coreConcept.title} {...coreConcept} />)}
          </ul>
        </section>
    </>
  );
}   