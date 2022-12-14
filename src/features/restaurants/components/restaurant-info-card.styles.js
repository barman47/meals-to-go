import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { Text } from '../../../components/typography/text.component';

export const Address = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Icon = styled.Image`
    width: 15px;
    height: 15px;
`;

export const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

export const RestaurantCard = styled(Card)`
    background-color: white;
    border-radius: 5px;
    margin-bottom: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
    flex-direction: row;
    padding-bottom: ${(props) => props.theme.space[2]};
    padding-top: ${(props) => props.theme.space[2]};
`;

export const RatingContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
    background-color: white;
    padding: ${(props) => props.theme.space[3]};
`;