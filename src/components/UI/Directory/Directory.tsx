import classes from './directory.module.scss';

interface IDirectory {
  directoryName: string,
  children: React.ReactNode,
}

function Directory({ directoryName, children }: IDirectory) {
  return (
    <div className={classes.directory}>
      <div className={classes.name}>
        <h3>{directoryName}</h3>
      </div>
      <form
        className={classes.container}
      >
        {children}
      </form>
    </div>
  );
}

export default Directory;
