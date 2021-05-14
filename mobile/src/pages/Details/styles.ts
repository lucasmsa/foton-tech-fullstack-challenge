import styled from 'styled-components/native'
import HeaderMaskIcon from '../../assets/details/header-mask.svg'
import SquigglyOvalIcon from '../../assets/details/squiggly-oval.svg'
import PinkBallIcon from '../../assets/details/pink-circle.svg'
import DarkBlueBallIcon from '../../assets/details/darkBlue-circle.svg'
import CircleIcon from '../../assets/details/border-circle.svg'

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

export const HeaderMask = styled(HeaderMaskIcon)`
  position: absolute;
  z-index: -1;
`

export const HeaderContainer = styled.View`
  width: 396px;
  height: 298px;
  display: flex;
`

export const BallsContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-right: -23px;
  margin-top: 32px;
  align-self: flex-start;
`

export const SquigglyOvalTop = styled(SquigglyOvalIcon)`
  position: relative; 
  align-self: flex-end;
`

export const PinkBall = styled(PinkBallIcon)`
  position: relative;
  align-self: center;
  margin-right: 12px;
  margin-bottom: 12px;
`

export const DarkBlueBall = styled(DarkBlueBallIcon)`
  position: relative;
  align-self: center;
`

export const Circle = styled(CircleIcon)`
  position: relative;
  margin-left: -16px;
  z-index: -1;
`

export const SquigglyOvalBottom = styled(SquigglyOvalIcon)`
  position: relative;
  transform: rotate(210deg);
  align-self: flex-end;
  margin-bottom: 12px;
  margin-left: -16px;
  z-index: -1;
`

export const CoverImageContainer = styled.View`
  shadow-color: #000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.2;
  shadow-radius: 2px;
  align-self: center;
`

export const CoverImage = styled.Image`
  width: 151px;
  height: 233px;
  border-radius: 4px; 
`

export const DetailsContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-self: center;
`