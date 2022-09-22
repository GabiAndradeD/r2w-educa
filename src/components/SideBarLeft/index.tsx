import * as S from './styles'

type SideBarLeftProps = {
  title: string,
  blocks: {
    title: string,
    items: {
      id: string,
      value: string
      route: string
    }[]
    route?: string
  }[]
}

const SideBarLeft = (
  {
    blocks,
    title
  } : SideBarLeftProps
) => {
  return (
    <S.Container>
      <h2>{title}</h2>
      {
        blocks.map(({items, title, route}) => (
          <S.Block>
            <h4>{title}</h4>
            {
              items.map(({id, value, route}) => (
                <S.Link><a>{value}</a></S.Link>
              ))
            }
          </S.Block>
        ))
      }
    </S.Container>
  )
}

export default SideBarLeft