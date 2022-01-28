import { Item } from '../types/Item';

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

export const filterListByMonth = (list: Item[], data: string): Item[] => {
    let newList: Item[] = [];
    let [year, month] = data.split('-');

    for (let i in list) {
        if (
            list[i].data.getFullYear() === parseInt(year) &&
            (list[i].data.getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[i]);
        }
    }

    return newList;
}

export const formatDate = (data: Date): string => {
    let day = data.getDay();
    let month = data.getMonth();
    let year = data.getFullYear();

    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
}

/* const addZero = (n: number) : string => {
    if(n < 10) {
        return `0${n}`
    } else {
        return `${n}`;
    }
} */

export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-');

    let months = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro',
        'Novembro', 'Dezembro'
    ];

    return `${months[parseInt(month) - 1]} de ${year}`;
}