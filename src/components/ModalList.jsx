export default function ModalList({ list }) {
  return (
    <ul>
      {list.map(({ id, name, description }) => (
        <li key={id}>
          <p>{name}</p>
          {description}
        </li>
      ))}
    </ul>
  );
}
