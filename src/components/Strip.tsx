export default function Strip({ groups = 2 }: { groups?: number }) {
  return (
    <div className="strip">
      {Array.from({ length: groups }, (_, i) => {
        return (
          <div key={i} className="strip-label-group">
            <h4 className="strip-label">Web Developer</h4>
            <h4 className="strip-label">Mobile Developer</h4>
            <h4 className="strip-label">Game Developer</h4>
          </div>
        );
      })}
    </div>
  );
}
