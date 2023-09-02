function ExpenseContainer({ children }) {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-cream">
      <div className="max-w-md md:w-full">{children}</div>
    </main>
  );
}

export default ExpenseContainer;
