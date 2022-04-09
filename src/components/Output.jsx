const Output = ({ calculation, fullSum }) => {
  return (
    <div className="output">
      <p>{fullSum}</p>
      <p>{calculation}</p>
    </div>
  );
};
export default Output;
