const Button = ({ text, color, children }) => {
  // 이벤트 객체
  // 합성 이벤트 객체 - 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태
  // 크로스 브라우징 이슈에서 자유롭다 
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };
  return (
    <button
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color?.toUpperCase() || "black"}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};
export default Button;
