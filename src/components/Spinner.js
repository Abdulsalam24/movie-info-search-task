import { GridLoader } from "react-spinners";

function Spinner() {
  return (
    <div className="grid h-screen place-items-center">
      <GridLoader color="#ffffff" />
    </div>
  );
}

export default Spinner;
