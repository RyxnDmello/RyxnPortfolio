export default function Statistic({ title, rating = 5 }: IStatistic) {
  const className = "about-statistic";

  return (
    <div className={className}>
      <p className={`${className}-title`}>{title}</p>

      <div className={`${className}-rating`}>
        {Array.from({ length: 5 }, (_, i) => {
          if (i < rating) {
            return <div className={`${className}-bullet marked`}></div>;
          }

          return <div className={`${className}-bullet`}></div>;
        })}
      </div>
    </div>
  );
}

interface IStatistic {
  title: string;
  rating?: number;
}
