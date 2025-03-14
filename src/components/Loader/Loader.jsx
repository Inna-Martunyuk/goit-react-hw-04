import css from "./Loader.module.css"
import ClipLoader from "react-spinners/ClipLoader";

function Loader({ isLoading }) {
  return (
    <div className={css.loader}>
      <ClipLoader
        loading={isLoading} 
        size={100} 
        color="black" 
        speedMultiplier={1} 
        aria-label="Loading Spinner"
      />
    </div>
  );
}

export default Loader;
