import logo from "../images/logo.svg";
function ShowBalance() {
  return (
    <section className="bg-softRed flex w-full p-5 rounded-lg justify-between my-4">
      <div>
        <h1 className="text-veryPaleOrange font-dmSans">My balance</h1>
        <p className="text-veryPaleOrange font-dmSans text-2xl font-bold">
          $921.48
        </p>
      </div>
      <img src={logo} alt="white and black circle mixing together" />
    </section>
  );
}

export default ShowBalance;
