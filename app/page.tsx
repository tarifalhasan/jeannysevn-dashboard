import FinancialDashboardTable from "@/components/FinancialDashboardTable";
import Navbar from "@/components/Navbar";
import Overviews from "@/components/Overviews";
const dummyData = {
  overview: {
    title: "Overview",
  },
  table: {
    columns: [
      { id: 1, label: "NAME", key: "name" },
      { id: 2, label: "QUANTITY", key: "quantity" },
      { id: 3, label: "PRICE", key: "price" },
      { id: 4, label: "AVG COST", key: "avgCost" },
      { id: 5, label: "MKT VALUE", key: "mktValue" },
      { id: 6, label: "GAIN/LOSS", key: "gainLoss" },
      { id: 7, label: "% OF PORTFOLIO", key: "portfolioPercentage" },
      { id: 8, label: "BUY/SELL", key: "buySell" },
    ],
    rows: [
      {
        id: 1,
        name: "TDB900",
        quantity: "140.143",
        price: "$25.70",
        avgCost: "$24.49",
        mktValue: "$3,601.68",
        gainLoss: "+$170.00",
        portfolioPercentage: "10.10%",
      },
      {
        id: 2,
        name: "TDB902",
        quantity: "65.218",
        price: "$54.86",
        avgCost: "$51.95",
        mktValue: "$3,577.86",
        gainLoss: "+$189.70",
        portfolioPercentage: "12.90%",
      },
      {
        id: 3,
        name: "TDB909",
        quantity: "415.872",
        price: "$11.64",
        avgCost: "$11.63",
        mktValue: "$4,840.75",
        gainLoss: "-$6.01",
        portfolioPercentage: "8.00%",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Navbar
        userInfo={{
          avatar: "/alex-suprun-ZHvM3XIOHoE-unsplash.jpg",
        }}
        navLinks={[
          { id: 1, label: "Dashboard", href: "#" },
          { id: 2, label: "Quote", href: "#" },
          { id: 3, label: "Buy/Sell", href: "#" },
          { id: 4, label: "Orders", href: "#" },
          { id: 5, label: "Transfers", href: "#" },
          { id: 6, label: "Watchlists", href: "#" },
        ]}
      />
      <Overviews
        data={[
          {
            id: 1,
            title: "Total Balance",
            amount: "$16,412.92",
            gainLoss: "+$648.83",
          },
          {
            id: 2,
            title: "Investments",
            amount: "$15,606.14",
            gainLoss: "+$648.83",
          },
          { id: 3, title: "Cash", amount: "$806.78" },
        ]}
      />
      <FinancialDashboardTable
        tabs={[
          { id: 1, label: "Holdings", active: true },
          { id: 2, label: "Activity", active: false },
          { id: 3, label: "Performance", active: false },
          { id: 4, label: "Gain & Loss", active: false },
        ]}
        title="Overview"
        columns={[
          "NAME",
          "QUANTITY",
          "PRICE",
          "AVG COST	",
          "MKT VALUE",
          "GAIN/LOSE",
          "% OF PORTFOLIO	",
          "BUY/SELL ",
        ]}
        rows={[
          {
            id: 1,
            name: "TDB900",
            quantity: 140.143,
            price: "$25.70	",
            avg_cost: "$24.49",
            mkt_value: "$3,601.68",
            gain_or_lose: "+$170.00",
            percentage_of_portfolio: "10.10%	",
          },
        ]}
      />
    </>
  );
}
