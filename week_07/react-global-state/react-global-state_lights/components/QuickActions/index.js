import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ onSwitchAllOn, onSwitchAllOff }) {
  console.log(onSwitchAllOn);
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          onSwitchAllOff();
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          onSwitchAllOn();
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
