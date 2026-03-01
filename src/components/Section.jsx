export default function Section({ title, children, ...prop }) {
  return (
    <section {...prop}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}