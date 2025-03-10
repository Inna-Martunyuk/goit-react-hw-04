
import ClipLoader from "react-spinners/ClipLoader";

function Loader(loader) {

  return (
    <div className="sweet-loading">

      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
