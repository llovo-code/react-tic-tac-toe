import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  isSelected?: boolean;
  updateBoard?: (index: number) => void;
  index?: number;
}

export const Square = ({
  children,
  isSelected,
  updateBoard,
  index = 0,
}: Props) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    if (updateBoard !== undefined && updateBoard !== null) {
      updateBoard(index);
    }

    //updateBoard?.(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
