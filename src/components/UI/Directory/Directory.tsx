import { FormEvent, useState } from 'react';
import classes from './directory.module.scss';
import { IDirectoryBlock } from '../../DirectoryBlock';

interface IDirectory extends IDirectoryBlock {
  directory: string[];
  directoryName: string;
  onChange?(e: FormEvent<HTMLFormElement>): void,
  directoryType: 'radio' | 'checkbox';
}

function Directory({
  directory,
  directoryName,
  directoryFilter,
  setDirectoryFilter,
  directoryType,
}: IDirectory) {
  const [checkedInput, setFormValue] = useState<HTMLInputElement[]>([]);

  const getSelectedNames = (e: FormEvent<HTMLFormElement>) => {
    let slCategories = [...e.currentTarget.elements] as HTMLInputElement[];
    slCategories = slCategories.filter((input) => input.checked);

    setFormValue(slCategories);

    return directoryName === 'Category'
      ? setDirectoryFilter({
        categories: slCategories.map((input) => input.id),
        brand: [],
      })
      : setDirectoryFilter({
        brand: slCategories.map((input) => input.id),
        categories: directoryFilter.categories,
      });
  };

  return (
    <div className={classes.directory}>
      <div className={classes.name}>
        <h3>{directoryName}</h3>
        {
          directoryName !== 'Brand'
          && <button
            onClick={() => {
              setDirectoryFilter(
                {
                  categories: [],
                  brand: [],
                },
              );
              checkedInput.forEach((i) => {
                // eslint-disable-next-line no-param-reassign
                i.checked = false;
              });
            }}
          >
            See all products
          </button>
        }
      </div>
      <form
        className={classes.container}
        onChange={getSelectedNames}
        name={directoryName}
      >
        {[...directory].map((name: string) => {
          return (
            <div
              key={name}
              className={classes.link}
            >
              <input
                type={directoryType}
                name={directoryName}
                id={name}
              />
              <label htmlFor={name}>
                {name}
              </label>
            </div>
          );
        })
        }
      </form>
    </div>
  );
}

export default Directory;
