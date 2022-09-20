import Common from 'layouts/Common'
import Head from "next/head";
import * as S from './style'
import * as C from '../../components'

import { useRouter } from 'next/router'

export default function Pricing() {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Pricing</title>
            </Head>
            <S.Container>
                <h1>Escolha seu tipo de assinatura e comece sua jornada!</h1>
                <S.FlexTitle>
                    <img src='/imgs/perfilTestIcon.svg'></img>
                    <h3>Faça um teste de perfil para receber uma recomendação de curso.</h3>
                </S.FlexTitle>
                <S.PricingContainer>
                    <C.PricingCard 
                        title='Individual'
                        description='Compre um curso individualmente'
                        price='Preço variável por curso'
                        buttonText='Ver Cursos'
                        route=''
                        color='#6E757A'
                        caracteristics={{
                            lifetimeAccess: true,
                            premiumSupport: false,
                            corrections: false,
                            instructorAccess: true,
                            badges: true,
                            certificate: true
                        }}
                        click={() => router.push('/courses')}
                    />
                    <C.PricingCard 
                        title='Categoria Completa'
                        description='Assine todos os cursos de uma categoria'
                        price='R$80,00/mês por categoria'
                        buttonText='Ver categorias'
                        route=''
                        color='#2CF3AB'
                        caracteristics={{
                            lifetimeAccess: false,
                            premiumSupport: true,
                            corrections: true,
                            instructorAccess: true,
                            badges: true,
                            certificate: true
                        }}
                        click={() => router.push('/categories')}
                    />
                    <C.PricingCard 
                        title='Todos os Cursos'
                        description='Assine todos os cursos da plataforma'
                        price='R$400,00/mês'
                        buttonText='Assinar'
                        route=''
                        color='#002E74'
                        caracteristics={{
                            lifetimeAccess: false,
                            premiumSupport: true,
                            corrections: true,
                            instructorAccess: true,
                            badges: true,
                            certificate: true
                        }}
                        click={() => window.open(`https://wa.me/5511973362408?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20adquirir%20o%20plano%20mensal%20de%20todos%20os%20cursos!`, "_blank")}
                    />
                    <C.PricingCard 
                        title='Empresarial'
                        description='Montaremos um plano personalizado para a sua empresa e seus funcionários'
                        price='Preços personalizados'
                        buttonText='Entre em contato'
                        route=''
                        color='#FFE600'
                        click={() => window.open(`https://wa.me/5511973362408?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20adquirir%20o%20plano%20empresarial!`, "_blank")}
                    />
                </S.PricingContainer>
            </S.Container>
        </>
    );
}

Pricing.Layout = Common