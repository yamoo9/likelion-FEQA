import './Avatar.css';

function Avatar({ photo, name = '', isOnline = false }) {
  return (
    <figure className="Avatar">
      <img src={photo} alt={name} />
      <figcaption>{isOnline ? '온라인' : '오프라인'}</figcaption>
    </figure>
  );
}

// HTML -> JSX -> DATA
// Markup -> Component Design (props)

export default Avatar;
