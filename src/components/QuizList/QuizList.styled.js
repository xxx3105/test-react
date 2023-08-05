import styled from 'styled-components';

export const List = styled.ul`
display:flex;
flex-wrap:wrap;
gap:16px;
list-style-type:none;
margin-left: 16px;
`;

const getBorderColor = ({theme, level}) => {
    //console.log(props);
    switch (level) {
        case 'beginner':
            return theme.colors.success;
            //return 'green'
        case "intermediate":
            return theme.colors.warning;
        case 'advanced':
            return theme.colors.error;
        default:
            return theme.colors.black;
    }
};

export const ListItem = styled.li`
/*color: tomato;*/
border: 10px solid ${getBorderColor};
border-radius:4px;

:hover{
background-color:red;
}
`;