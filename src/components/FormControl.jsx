const FormControl = () => (
  <div className="formControl">
    <label>
      사용자 이름 <input type="text" name="username" />
    </label>
  </div>
);

// 리액트 + JSX 코드를 해석하면 다음과 같습니다.
// const FormControl = () => (
//   React.createElement('div', { className: 'formControl'}, 
//     React.createElement('label', {},
//       '사용자 이름 ',
//       React.createElement('input', { type: 'text', name: 'username' }),
//     )
//   )
// )

export default FormControl;