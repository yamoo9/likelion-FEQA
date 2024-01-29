import './Button.css';

// props: { loading, disable, disabled, mode, type, state, ... }

function Button(props) {
  let buttonLabel = props.children; // *

  if (props.loading /* undefined ? */) {
    buttonLabel = '⏳ 로딩 중...';
  }

  return (
    <button
      type={props.type ?? 'button'}
      className="Button"
      disabled={props.disable}
    >
      {buttonLabel}
    </button>
  );
}

export default Button;
