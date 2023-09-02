function MonthlyTotalPrice() {
  return (
    <section className="font-dmSans px-5 pb-5">
      <hr className="border-t-4 border-cream my-4 border-solid" />
      <div className="flex justify-between items-center">
        <div className="space-y-">
          <h1 className="text-mediumBrown text-[0.938rem] pb-1">
            Total this month
          </h1>
          <p className="text-darkBrown font-semibold text-3xl md:text-4xl">
            $478.33
          </p>
        </div>
        <div className="p-3">
          <h1 className="text-right text-darkBrown font-bold text-base">
            +2.4%
          </h1>
          <p className="text-mediumBrown">from last month</p>
        </div>
      </div>
    </section>
  );
}

export default MonthlyTotalPrice;
