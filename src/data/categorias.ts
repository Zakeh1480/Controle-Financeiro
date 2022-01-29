import { Categoria } from '../types/Categoria';

export const categorias: Categoria = {
    comida: { titulo: 'Alimentação', color: 'blue', despesa: true },
    renda: { titulo: 'Aluguel', color: 'brown', despesa: true },
    salario: { titulo: 'Salário', color: 'green', despesa: false },
    roupa: { titulo: 'Roupas', color: 'blue', despesa: true },
    saude: { titulo: 'Saúde', color: 'brown', despesa: true },
    outros: { titulo: 'Outros', color: 'green', despesa: true }
}