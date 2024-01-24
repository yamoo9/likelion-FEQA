import './22-edit-delete-buttons.css';

const IconEdit = ({ size = 16, yPosition = -2 }) => (
  <svg
    style={{
      inlineSize: size,
      translate: `0 ${yPosition}px`,
    }}
    fill="none"
    strokeWidth="1.5"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
    />
  </svg>
);

const IconTrash = ({ size = 16, stroke = 1.5, yPosition = -2 }) => (
  <svg
    style={{
      inlineSize: size,
      translate: `0 ${yPosition}px`,
    }}
    fill="none"
    strokeWidth={stroke}
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
    />
  </svg>
);

const Button = ({ color, backgroundColor, children }) => (
  <button
    type="button"
    style={{
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 4,
      border: '1px solid',
      borderColor: color,
      borderRadius: 4,
      padding: 8,
      color,
      backgroundColor,
    }}
  >
    {children}
  </button>
);

const EditButton = ({
  color = '#2b2828',
  backgroundColor = '#fff',
  icon = null,
  // <slot></slot>
  children,
}) => {
  return (
    <Button color={color} backgroundColor={backgroundColor}>
      {children}
      {/* <slot name="icon"></slot> */}
      {icon}
    </Button>
  );
};

const DeleteButton = ({
  color = '#f53535',
  backgroundColor = '#fff',
  icon = null,
  children,
}) => {
  return (
    <Button color={color} backgroundColor={backgroundColor}>
      {children}
      {icon}
    </Button>
  );
};

export default function Exercise() {
  return (
    <div role="group" className="exercise">
      <EditButton icon={<IconEdit />}>수정하기</EditButton>
      <DeleteButton icon={<IconTrash />}>삭제하기</DeleteButton>
    </div>
  );
}
