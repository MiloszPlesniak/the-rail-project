const Questions = ({ question, descryption }) => {
  return (
    <div>
      <h5>{question.name}</h5>
      <p>{question.descryption}</p>
    </div>
  );
};

export default Questions;
