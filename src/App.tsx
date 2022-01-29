import { useEffect, useState } from 'react';
import * as C from './App.style';
import { Categoria } from './types/Categoria';
import { Item } from './types/Item';
import { categorias } from './data/categorias';
import { itens } from './data/itens';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';

const App = () => {

  const [list, setList] = useState(itens);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i = 0; i < filteredList.length; i++) {
      if (categorias[filteredList[i].categoria].despesa) {
        expenseCount += filteredList[i].valor;
      } else {
        incomeCount += filteredList[i].valor;
      }
    }

    setExpense(expenseCount);
    setIncome(incomeCount);

  }, [filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <C.Container>
      <C.Header>

        <C.HeaderText>Sistema de Gestão Financeira</C.HeaderText>

      </C.Header>

      <C.Body>

        <InfoArea
          onMonthChange={handleMonthChange}
          currentMonth={currentMonth}
          income={income}
          expense={expense} />

        <InputArea onAdd={handleAddItem} />

        <TableArea list={filteredList} />

      </C.Body>
    </C.Container>
  );
}

export default App;