import toast from "react-hot-toast";
import { IoIosSearch } from "react-icons/io";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.target.elements.query.value.trim() === "") {
      toast.error("Please enter a search query");
      return;
    }

    onSubmit(event.target.elements.query.value);
    event.target.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          <IoIosSearch className={css.svg}/>
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
