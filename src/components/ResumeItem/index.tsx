import * as C from './style';

type Props = {
    titulo: string;
    value: number;
    color?: string;
}

export const ResumeItem = ( { titulo, value, color } : Props) => {
    return (
        <C.Container>
            <C.Title>{titulo}</C.Title>
            <C.Info color={color}>R$ {value}</C.Info>
        </C.Container>
    );
}