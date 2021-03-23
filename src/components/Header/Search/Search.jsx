import classes from "./Search.module.css";

const Search = () => {
    return (
        <div className={classes.search}>
            <form action="#" method="post">
                <input type="search" placeholder="Search..."/>
                <button type="button">
                    <img src="https://www.flaticon.com/svg/vstatic/svg/483/483356.svg?token=exp=1615923664~hmac=1a4fffc4d9651e1d046efd188e769b45" alt="search icon"/>
                </button>
            </form>
        </div>
    );
};

export default Search;