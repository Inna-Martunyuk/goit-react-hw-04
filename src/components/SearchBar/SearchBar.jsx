import toast, { Toaster } from "react-hot-toast";
function SearchBar({ onSearch }) {
  return (
    <>
      <header>
        <form>
          toast('Please enter search term!');
          <input
            type="text"
            autocomplete="off"
            autofocus
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
