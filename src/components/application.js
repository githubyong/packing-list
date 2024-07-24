import { useReducer, useState } from 'react';
import {
  createItem,
  filterItems,
  getInitialItems,
  removeItem,
  updateItem,
} from '../lib/items';
import { reducer } from '../lib/reducer';
import ItemList from './item-list';
import NewItem from './new-item';
import Header from './header';
import MarkAllAsUnpacked from './mark-all-as-unpacked';

// useMemo => for values
// useCallback => for functions

const Application = () => {
  const [items, dispatch] = useReducer(reducer,  getInitialItems());

  const unpackedItems = filterItems(items, { packed: false });
  const packedItems = filterItems(items, { packed: true });


  return (
    <main className="flex flex-col gap-8 p-8 mx-auto lg:max-w-4xl">
      <Header  items={items} />
      <NewItem setItems={dispatch} />
      <section className="flex flex-col gap-8 md:flex-row">
        <ItemList
          title="Unpacked Items"
          items={unpackedItems}
          dispatch={dispatch}
        />
        <ItemList
          title="Packed Items"
          items={packedItems}
          dispatch={dispatch}
        />
      </section>
      <MarkAllAsUnpacked  setItems={dispatch} />
    </main>
  );
};

export default Application;
