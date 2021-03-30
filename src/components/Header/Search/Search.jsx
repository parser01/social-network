import classes from "./Search.module.css";

const Search = () => {
    return (
        <div className={classes.search}>
            <form action="#" method="post">
                <input type="search" placeholder="Search..."/>
                <button type="button">
                    <img src="https://cdn0.iconfinder.com/data/icons/zondicons/20/search-512.png" alt="search icon"/>
                </button>
            </form>
        </div>
    );
};

export default Search;