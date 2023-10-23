import { css } from "../../../styled-system/css";
import { stack } from "../../../styled-system/patterns";
import { Avatar } from "./Avatar";

export type ContactCardProps = {
  name: string;
  phoneNumber: string;
  location: string;
  isSelected?: boolean;
  onClick?: () => void;
};

export const ContactCard = (props: ContactCardProps) => {
  return (
    <div
      className={css({
        p: "1rem",
        bg: {
          base: props.isSelected ? "gray.100" : "white",
          _hover: "gray.100",
        },
        display: "flex",
        justifyContent: "space-between",
        cursor: "pointer",
        borderBottom: "1px solid",
        borderBottomColor: "gray.200",
        borderLeft: props.isSelected ? "4px solid" : "none",
        borderLeftColor: "red.500",
        alignItems: "center",
      })}
      onClick={props.onClick}
    >
      <div className={stack({ direction: "row", alignItems: "center" })}>
        <Avatar />

        <div className={stack({ direction: "column", gap: "0rem" })}>
          <span className={css({ fontWeight: "semibold" })}>{props.name}</span>
          <span className={css({ fontStyle: "italic", color: "gray.400" })}>
            {props.location}
          </span>
        </div>
      </div>

      <span className={css({ color: "gray.500" })}>{props.phoneNumber}</span>
    </div>
  );
};
