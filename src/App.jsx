import ChartContainer from "./components/ChartContainer";
import ExpenseContainer from "./components/ExpenseContainer";
import MonthlyTotalPrice from "./components/MonthlyTotalPrice";
import ShowBalance from "./components/ShowBalance";
import BarChartContainer from "./components/BarChartContainer";
import BarChartTitle from "./components/BarChartTitle";

function App() {
  return (
    <ExpenseContainer>
      <ShowBalance />
      <ChartContainer>
        <BarChartTitle />
        <BarChartContainer />
        <MonthlyTotalPrice />
      </ChartContainer>
    </ExpenseContainer>
  );
}

export default App;
