export default function ModalIcons({ list }) {
  return (
    <div>
      {list.map(({ id, name, img }) => (
        <div key={id}>
          <img src={img} alt={`${name} 아이콘`} />
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
}
