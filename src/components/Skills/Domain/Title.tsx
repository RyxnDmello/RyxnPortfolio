export default function Header({ title }: { title: string }) {
  return (
    <div className="skills-domain-header">
      <h2 className="skills-domain-header-title">{title}</h2>
    </div>
  );
}
