import { useEffect, useState } from 'react'
import * as S from 'components/WarnPortrait/styles'

const WarnPortrait = () => {
  const [isRenderComponent, setIsRenderComponent] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(max-width:600px)').matches) {
      screen.orientation.addEventListener('change', () => {
        setIsRenderComponent(prevState => !prevState)
      })
    }
  }, [])

  if (process.env.NODE_ENV === 'development') return null

  return (
    <>
      {isRenderComponent && (
        <S.Container>
          <S.IconScreenRotation
            width="100"
            height="100"
            fill="#fff"
            aria-label="Rotacione seu dispositivo"
          />
          <S.Msg>
            Mude o seu dispositivo para o modo vertical para uma melhor
            experiência de uso.
          </S.Msg>
        </S.Container>
      )}
    </>
  )
}

export default WarnPortrait
