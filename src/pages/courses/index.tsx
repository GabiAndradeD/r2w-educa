import Common from "layouts/Common";
import { categories, categoriesWithCourses } from "./mock"
import * as S from './style'
import * as C from '../../components'
import { useRouter } from "next/router";

export default function Courses() {
    const router = useRouter()
    return (
        <S.Container>
            <C.SideBarLeft
                title="Categorias"
                blocks={categories}
            />
            <S.Content>
                <h1>Lista de Cursos</h1>
                {categoriesWithCourses.map(({ title, icon, coursesNumber, courses}) => (
                    <S.Category>
                        <S.CategoryHeader>
                            <section>
                                <div>
                                    <img src={icon}></img>
                                    <h1>{title}</h1>
                                </div>
                                <S.Line />
                            </section>
                            <S.CoursesNumber>
                                <div>
                                    <img src="https://img.icons8.com/ios/100/FFFFFF/courses.png"></img>
                                    <p>{coursesNumber} Cursos</p>
                                </div>
                            </S.CoursesNumber>
                        </S.CategoryHeader>
                        <S.CategoryBody>
                            {
                                courses.map(({id, hours, value}) => (
                                    <div onClick={() => router.push(`/${id}`)}>
                                        <h4>{value}</h4>
                                        <div>
                                            <p>{hours} horas</p>
                                            <img src="/imgs/categories/arrow.png"/>
                                        </div>
                                    </div>
                                ))
                            }
                        </S.CategoryBody>
                        <S.CategoryFooter>
                            <p onClick={() => router.push(`/`)}>Ver todos os cursos da categoria</p>
                            <img src="/imgs/categories/arrow.png" />
                        </S.CategoryFooter>
                    </S.Category>
                ))
                }
            </S.Content>
        </S.Container>
    )
}

Courses.Layout = Common