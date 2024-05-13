import { ISkill } from "../../interfaces/About";

export default function Skill({ title, rating = 5 }: ISkill) {
  const className = "about-skill";

  return (
    <div className={`${className} scroll`}>
      <p className={`${className}-title`}>{title}</p>

      <div className={`${className}-rating`}>
        {Array.from({ length: 5 }, (_, i) => {
          return (
            <div
              key={i}
              className={`${className}-bullet ${i < rating && "marked"}`}
            />
          );
        })}
      </div>
    </div>
  );
}
