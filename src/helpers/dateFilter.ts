import { Item } from "../types/Item";

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

export const filterListByMonth = (list: Item[], data: string): Item[] => {
    let newList: Item[] = [];

    let [year, month] = data.split('-');

    for (let i in list) {

        if (list[i].data.getFullYear() === parseInt(year) &&
            (list[i].data.getMonth() + 1) === parseInt(month)) {
            newList.push(list[i]);
        }
    }

    return newList;
}