function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const percengate = (points / maxPoints) * 100;

  let emoji;

  if (percengate === 100) emoji = "🎉";
  if (percengate >= 80 && percengate < 100) emoji = "👍";
  if (percengate >= 60 && percengate < 80) emoji = "🙂";
  if (percengate >= 40 && percengate < 60) emoji = "😬";
  if (percengate >= 20 && percengate < 40) emoji = "😟";
  if (percengate >= 0 && percengate < 20) emoji = "😭";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You Scored <strong>{points}</strong> out of{" "}
        {maxPoints} points! {Math.ceil(percengate)}%
      </p>
      <p className="highscore">(highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
