import {useContext} from 'react';
import {
  filterItems
} from '../lib/items';

import {ItemsContext} from '../context';
import ItemList from './item-list';
import Header from './header';

// useMemo => for values
// useCallback => for functions

const Application = () => {
  const { items } = useContext(ItemsContext);

  const unpackedItems = filterItems(items, { packed: false });
  const packedItems = filterItems(items, { packed: true });


  return (
    <main className="flex flex-col gap-8 p-8 mx-auto lg:max-w-4xl">
      <Header  items={items} />
      <section className="flex flex-col gap-8 md:flex-row">
        <ItemList title="Unpacked Items" items={unpackedItems} />
        <ItemList title="Packed Items" items={packedItems} />
      </section>
    </main>
  );
};

export default Application;
