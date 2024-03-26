import { IStatistic } from "../../interfaces/About";

export default function Statistic({ title, rating = 5 }: IStatistic) {
  const className = "about-statistic";

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
