import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

function Card(props: Props) {
  const { children } = props;
  return (
    <div
      className="card"
      style={{
        width: "360px",
      }}
    >
      <div className="card-header">Titulo xd</div>
      <div className="card-body"> {children}
      </div>
    </div>
  );
}
interface CardBodyProps {
  title: string,
  text?: string
}

export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href="#" className="btn btn-primary">
        Ir
      </a>
    </>
  );
}

export default Card;