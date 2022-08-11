import styled from "styled-components"
import { ItemPtimaryPropsType } from "./item.type"
import {THEME_SIZE} from '../../theme'
import { spacing } from "../../theme";


export function ItemPrymary(props: ItemPtimaryPropsType) {
  const {title, description, img } = props;
  return (
    <Container>
      <Image src={img} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}
const Container = styled.div`
// 
`
const Title = styled.h1`
  font-size:  ${THEME_SIZE.FONT.MEDIUM};
  font-weight: bold;
  margin-bottom: ${spacing(1)};
  color: white;
  line-height: 30px;
`
const Description = styled.p`
font-size: ${THEME_SIZE.FONT.SMALL};
color: white;
line-height: 24px;
`
const Image = styled.img`
  width: 100%;
  height: 200px;
  margin-bottom: 16px;
  border-radius: 5px 5px 0 0 
`