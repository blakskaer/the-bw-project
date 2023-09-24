import { useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export interface MenuItem {
  text: string;
  url: string;
}

interface SelectableListResult {
  listItems: JSX.Element[];
}

const validateMenuItem = (item: MenuItem): Boolean => {
  return item.text.trim() !== "" && item.url.trim() !== "";
};

export const useSelectableList = (
  items: MenuItem[],
  selectedItem: MenuItem | null,
  setSelectedItem: (item: MenuItem | null) => void,
  onNavItemClick: (item: MenuItem | null) => void
): SelectableListResult => {
  if (!items.every(validateMenuItem)) {
    throw new Error("Invalid menu item");
  }
  // const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const handleClick = useCallback(
    (item: MenuItem) => {
      setSelectedItem(item);
      onNavItemClick(item);
    },
    [setSelectedItem, onNavItemClick]
  );

  const listItems = items.map((item) => (
    <StyledLink to={item.url} key={item.text}>
      <li
        onClick={() => handleClick(item)}
        className={`navbar-item ${item === selectedItem ? "selected" : ""}`}
      >
        {item.text}
      </li>
    </StyledLink>
  ));

  return { listItems };
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;
