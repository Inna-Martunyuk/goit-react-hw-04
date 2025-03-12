import toast, { Toaster } from "react-hot-toast";

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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
          <Toaster />
        </form>
      </header>
    </>
  );
}

export default SearchBar;
