import { userData } from "../../data";
import BarChart from "./BarChart";
function BarChartContainer() {
  return (
    <div className="flex gap-x-2.5 items-baseline justify-center p-3 md:pt-6">
      {userData.map((items) => (
        <BarChart key={items.day} items={items}></BarChart>
      ))}
    </div>
  );
}

export default BarChartContainer;
