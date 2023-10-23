import { useContactStore } from "@/modules/contacts/contactStore";

export const ContactListContainer = () => {
  const {
    response: { data },
  } = useContactStore();

  return (
    <div>
      {data?.contact.map((cont) => (
        <h1 key={cont.id}>
          {cont.first_name} {cont.last_name}
        </h1>
      ))}
    </div>
  );
};
