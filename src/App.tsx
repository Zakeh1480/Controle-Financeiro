import { useEffect, useState } from 'react';
import * as c from './App.style';
import { Categoria } from './types/Categoria';
import { Item } from './types/Item';
import { categorias } from './data/categorias';
import { itens } from './data/itens';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';

function App() {

  const [list, setList] = useState(itens);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);
  
  return (
    <c.Container>
      <c.Header>

        <c.HeaderText>Sistema de Gestão Financeira</c.HeaderText>

      </c.Header>

      <c.Body>

        <TableArea list={filteredList} />

      </c.Body>
    </c.Container>
  );
}

export default App;