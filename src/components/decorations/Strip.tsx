import { IDecoration } from "../../interfaces/Decoration";

export default function Strip({ count = 2 }: IDecoration) {
  return (
    <div className="strip">
      {Array.from({ length: count }, (_, i) => {
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
