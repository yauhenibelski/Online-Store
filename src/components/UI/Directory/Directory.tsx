import { FormEvent } from 'react';
import classes from './directory.module.scss';
import { IDirectoryBlock } from '../../DirectoryBlock';

interface IDirectory extends IDirectoryBlock {
  directory: string[];
  directoryName: string;
  onChange?(e: FormEvent<HTMLFormElement>): void,
}

function Directory({
  directory, directoryName, directoryFilter, setDirectoryFilter,
}: IDirectory) {
  const getSelectedNames = (e: FormEvent<HTMLFormElement>) => {
    let slCategories = [...e.currentTarget.elements] as HTMLInputElement[];
    slCategories = slCategories.filter((input) => input.checked);

    return directoryName === 'Category'
      ? setDirectoryFilter({
        categories: slCategories.map((input) => input.id),
        brand: directoryFilter.brand,
      })
      : setDirectoryFilter({
        brand: slCategories.map((input) => input.id),
        categories: directoryFilter.categories,
      });
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
