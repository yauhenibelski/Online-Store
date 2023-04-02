import classes from './directory.module.scss';

interface IDirectory {
  directory: string[],
  directoryName?: string,
}
function Directory({ directory, directoryName }: IDirectory) {
  return (
    <div className={classes.directory}>
      <h3 className={classes.name}>{directoryName}</h3>
      <div className={classes.container}>
        {[...directory].map((e:string, i) => {
          return (
            <div className={classes.link} key={i}>
              <span>{e}</span>
            </div>
          );
        })
        }
      </div>
    </div>
  );
}

export default Directory;
