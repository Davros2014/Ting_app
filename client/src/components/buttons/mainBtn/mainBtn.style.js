import styled from "styled-components";
import Button from "./mainBtn";

export const MainBtn = styled(Button)`
  display: block;
  outline: 0;
  border: 0;
  border: 1px solid ${props => props.backgroundColor};
  line-height: 1.2rem;
  text-transform: uppercase;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 0.375rem 0.75rem;
  background-color: ${props => props.backgroundColor};
  border-radius: 50%;
  font-size: 0.8rem;
  font-weight: 700;
  text-align: center;
  &:hover {
	transition: 0.15s all linear;
	color: ${props => props.backgroundColor};
    background: ${props => props.backgroundColor};
    cursor: pointer;
  }
  &:active {
	transition: 0.15s all linear;
	background: green;
	color: white;
  }
  &.iconButton {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  width: 1.6rem;
	  height: 1.6rem;
	  border-radius: 100%;
	  background: none;
	  color: ${props => props.backgroundColor};
	  border: 1px solid ${props => props.backgroundColor};
	  &:hover {
	    background: ${props => props.backgroundColor};
	  }
	  & svg {
	    max-width: 1rem;
	  }
	}
  }
}
`;
