import classes from './search.module.scss';

function Search() {
  return (
    <div className={classes.search}>
      <input
        type='text'
        placeholder='Search entire store here...'
      />
    </div>
  );
}

export default Search;
