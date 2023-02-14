import styled from "styled-components"

export const TaskInputStyled = styled.input`
background: transparent;
height: 2.5rem;
border: 0;
border-bottom: 2px solid #7C7C8A;
font-weight: bold;
font-size: 1rem;
padding: 0.05rem;
color: #E1E1E6;
flex: 1;
outline: none;

&::-webkit-calendar-picker-indicator {
    display: none !important;
}

&:focus {
    box-shadow: none;
}

&::placeholder {
    color: ${props => props.theme["gray-500"]};
}
`