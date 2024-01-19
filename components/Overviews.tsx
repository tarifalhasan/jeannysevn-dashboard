import { FC } from "react";

interface Card {
  id: number;
  title: string;
  amount: string;
  gainLoss?: string;
  additionalClasses?: string;
}

interface OverviewProps {
  data: Card[];
}
const Overviews: FC<OverviewProps> = ({ data }) => {
  return (
    <div className="grid max-w-6xl mx-auto px-3 sm:px-6 grid-cols-1 md:grid-cols-3 gap-6 ">
      {data.map((card) => (
        <div
          key={card.id}
          className={`bg-blue-200 p-6 rounded-lg shadow ${card.additionalClasses}`}
        >
          <div className="text-gray-700 text-sm uppercase">{card.title}</div>
          <div className="text-3xl font-semibold">{card.amount}</div>
          {card.gainLoss && (
            <div className="text-green-500">{card.gainLoss}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Overviews;
