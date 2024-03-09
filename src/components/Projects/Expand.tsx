import { MouseEventHandler } from "react";

export default function Expand({ onClick }: { onClick: MouseEventHandler }) {
  const className = "projects-explore-button";

  return (
    <div className={`${className} scroll`} onClick={onClick}>
      <p className={`${className}-text`}>View More</p>
    </div>
  );
}
