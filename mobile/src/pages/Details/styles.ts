import styled from 'styled-components/native'
import HeaderMaskIcon from '../../assets/details/header-mask.svg'
import SquigglyOvalIcon from '../../assets/details/squiggly-oval.svg'
import PinkBallIcon from '../../assets/details/pink-circle.svg'
import DarkBlueBallIcon from '../../assets/details/darkBlue-circle.svg'
import CircleIcon from '../../assets/details/border-circle.svg'
import LeftArrowIcon from '../../assets/details/back-arrow.svg'
import ShareIcon from '../../assets/details/share.svg'
import BookOpenIcon from '../../assets/details/book-open.svg'
import HeadphonesIcon from '../../assets/details/headphones.svg'
import VerticalLineIcon from '../../assets/details/line-division.svg'
import { TouchableOpacity } from 'react-native'

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

export const TopContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const LeftArrow = styled(LeftArrowIcon)`
`

export const LeftArrowContainer = styled(TouchableOpacity)`
  align-self: flex-end;
  margin-bottom: 18px;
  margin-left: 36px;
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
  margin-right: 24px;
`

export const BookContentsContainer = styled.View`
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  width: 84%;
`

export const BookTitleText = styled.Text`
  max-width: 280px;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 1.5px;
  color: #36383A;
  margin-bottom: 8px;
`

export const BookAuthorText = styled.Text`
  max-width: 300px;
  font-family: SF Pro Display;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.670588px;
  color: #FF6978;
  margin-bottom: 10px;
`

export const BookDescriptionContainer = styled.ScrollView`
  max-width: 320px;
  max-height: 260px;
`

export const BookDescriptionText = styled.Text`
  font-family: SF Pro Text;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.2px;
  color: rgba(49, 49, 49, 0.6);
`

export const ReadingOptionsContainer = styled.View`
  margin-top: auto;
  margin-bottom: 42px;
  width: 335px;
  height: 56px;
  background: white;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
  border-radius: 2px;
  align-self:center;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`

export const ReadingOptionsBlock = styled.View`
  flex-direction: row;
`

export const ReadingOptionsText = styled.Text`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 1px;
  color: #3F4043;
  margin-left: 10px;
`

export const BookOpen = styled(BookOpenIcon)`
`

export const Headphones = styled(HeadphonesIcon)`
`

export const Share = styled(ShareIcon)`
`

export const VerticalLine = styled(VerticalLineIcon)`
`