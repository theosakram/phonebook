import { useContactStore } from "@/modules/contacts/contactStore";
import { ContactCard } from "../components/ContactCard";
import { css } from "../../../styled-system/css";
import { useState } from "react";
import { stack } from "../../../styled-system/patterns";
import { useRouter } from "next/router";
import { FavoriteListContainer } from "./FavoriteListContainer";

export const ContactListContainer = () => {
  const {
    response: { data },
  } = useContactStore();
  const [selected, setSelected] = useState<number | null>();
  const router = useRouter();

  return (
    <div
      className={css({ display: "flex", flexDirection: "column", w: "100%" })}
    >
      <div className={css({ py: "1rem", px: "3rem" })}>
        <span
          className={css({
            color: "red.500",
            fontSize: "2rem",
            textTransform: "capitalize",
          })}
        >
          {router.query.type || "All"}
        </span>
      </div>

      <FavoriteListContainer />

      <div
        className={stack({
          direction: "column",
          gap: "0rem",
          h: "calc(100vh - 5rem)",
          overflow: "auto",
        })}
      >
        {data?.contact.map((cont) => (
          <ContactCard
            key={cont.id}
            name={cont.id.toString()}
            phoneNumber={cont.phones[0].number || "-"}
            isSelected={cont.id === selected}
            onClick={() => setSelected(cont.id === selected ? null : cont.id)}
            location="Someplace, Indonesia"
          />
        ))}
        F
      </div>
    </div>
  );
};
