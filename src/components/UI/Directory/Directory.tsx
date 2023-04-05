import { FormEvent } from 'react';
import classes from './directory.module.scss';

interface IDirectory {
  directory: string[],
  directoryName: string,
  setSelectedName: React.Dispatch<React.SetStateAction<string[]>>,
  onChange?(e?: FormEvent<HTMLFormElement>): void
}

function Directory({ directory, directoryName, setSelectedName }: IDirectory) {
  const getSelectedNames = (e: FormEvent<HTMLFormElement>) => {
    let slCategories = [...e.currentTarget.elements] as HTMLInputElement[];
    slCategories = slCategories.filter((input) => input.checked);

    setSelectedName((slCategories.map((input) => input.id)));
  };

  return (
    <div className={classes.directory}>
      <h3 className={classes.name}>{directoryName}</h3>
      <form
        className={classes.container}
        onChange={getSelectedNames}
        name={directoryName}
      >
        {[...directory].map((name:string) => {
          return (
            <div
              key={name}
              className={classes.link}
            >
              <input
                type='checkbox'
                id={name}
              />
              <label htmlFor={name}>{name}</label>
            </div>
          );
        })
        }
      </form>
    </div>
  );
}

export default Directory;
