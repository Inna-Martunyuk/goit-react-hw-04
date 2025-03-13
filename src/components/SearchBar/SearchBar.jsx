import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css"

function SearchBar({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    if (value.trim() === "") {
      return toast.error("Please enter search term!");
    }
    onSubmit(value);
    e.target.reset();
  };
  return (
    <>
      <header>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            Search
          </button>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 2000,
              style: {
                background: "white",
                color: "red",
                fontSize: "16px",
                padding: "15px 20px",
                borderRadius: "10px",
              }
            }}
          />
        </form>
      </header>
    </>
  );
}

export default SearchBar;
