import * as S from './style'

type CaracteristicsItemProps = {
    title: string,
    value: boolean
}

const CaracteristicsItem = ({
    title,
    value
}: CaracteristicsItemProps) => {
    return (
        <S.Item>
            <p>{title}</p>
            <img src={`/imgs/caracteristics/${value.toString()}.svg`}/>
        </S.Item>
    )
}

export default CaracteristicsItem