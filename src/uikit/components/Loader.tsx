import { center } from "../../../styled-system/patterns";

export type LoaderProps = {
  message?: string;
};

export const Loader = (props: LoaderProps) => {
  return (
    <div className={center({ w: "100%", h: "30rem" })}>
      <h1>{props.message || "LOADING"}</h1>
    </div>
  );
};
