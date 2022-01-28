import { useEffect, useState } from 'react';
import * as C from './App.style';
import { Categoria } from './types/Categoria';
import { Item } from './types/Item';
import { categorias } from './data/categorias';
import { itens } from './data/itens';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';

const App = () => {

  const [list, setList] = useState(itens);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }
  
  return (
    <C.Container>
      <C.Header>

        <C.HeaderText>Sistema de Gestão Financeira</C.HeaderText>

      </C.Header>

      <C.Body>

        <InfoArea onMonthChange={handleMonthChange} currentMonth={currentMonth}></InfoArea>

        <TableArea list={filteredList} />

      </C.Body>
    </C.Container>
  );
}

export default App;