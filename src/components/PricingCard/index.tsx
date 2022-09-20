import * as S from './style'
import Button from '../Button'
import CaracteristicsItem from './CaracteristicsItem'

type PricingCardProps = {
    title: string,
    description: string,
    color: string,
    price: string,
    route: string,
    caracteristics?: {
        lifetimeAccess: boolean,
        premiumSupport: boolean,
        corrections: boolean,
        instructorAccess: boolean,
        badges: boolean,
        certificate: boolean
    },
    buttonText: string,
    click: () => void
}

const PricingCard = ({
    title,
    description,
    color,
    price,
    route,
    caracteristics,
    buttonText,
    click
}: PricingCardProps) => {

    return (
        <S.Card color={color}>
            <S.CardContent>
                <h4>{title}</h4>
                <p>{description}</p>
                {caracteristics && (
                    <S.Caracteristics>
                        <CaracteristicsItem title='Acesso Vitalício' value={caracteristics.lifetimeAccess} />
                        <CaracteristicsItem title='Suporte Premium' value={caracteristics.premiumSupport} />
                        <CaracteristicsItem title='Correção Detalhada das Atividades' value={caracteristics.corrections} />
                        <CaracteristicsItem title='Acesso ao Instrutor:' value={caracteristics.instructorAccess} />
                        <CaracteristicsItem title='Badges' value={caracteristics.badges} />
                        <CaracteristicsItem title='Certificado de conclusão' value={caracteristics.certificate} />
                    </S.Caracteristics>
                )}
                <S.Price>{price}</S.Price>
                <Button
                    text={buttonText}
                    color={color}
                    size='small'
                    onClick={(e) => { 
                        e.preventDefault()
                        click();
                    }}
                />
            </S.CardContent>
        </S.Card>
    )
}

export default PricingCard