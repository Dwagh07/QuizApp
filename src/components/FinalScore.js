import React from "react";

function QuizResult(props) {
  const handleClick = () => {
    props.setModal(true);
  };
  return (
    <>
      {props.modal === false && (
        <>
          <div className="show-score">
            Total Question:{props.total}
            <br />
            Your Score:{props.score}
          </div>
          <button onClick={handleClick} className="thanks">
            End Test
          </button>
        </>
      )}
      {props.modal === true && (
        <h3 className="thanksSubmit">Thankyou for Attending the Test!!!</h3>
      )}
    </>
  );
}

export default QuizResult;
