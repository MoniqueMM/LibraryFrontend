import { useState } from "react";

interface AddReviewProps {
  userName: string;
  title: string;
}

export const AddReview = (props: AddReviewProps) => {
  const [content, setContent] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [isError, setIsError] = useState<boolean>(true);
  const [wasEdited, setWasEdited] = useState<boolean>(false);

  const addReview = () => {
    // uznajmy że console.log = axios.post
    console.log({
      content: content,
      rating: rating,
      userName: props.userName,
      title: props.title,
    });
  };

  const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setWasEdited(true);
    setIsError(e.target.value.length <= 0);
  };

  return (
    <div>
      {/* UserName - z zalogowanego użytkownika */}
      <textarea
        value={content}
        placeholder={"Twoje trzy słowa..."}
        onChange={onContentChanged}
      ></textarea>
      {isError && wasEdited && (
        <p style={{ color: "red" }}>Recenzja musi zawierać zawartość</p>
      )}
      <div
        style={{
          display: "flex",
          margin: "16px 0",
          flexDirection: "row",
          justifyContent: "center",
          gap: "24px",
          cursor: "pointer",
        }}
      >
        {Array.from({ length: 5 }, (_, i) => (
          <div
            className="star"
            onClick={() => setRating(i + 1)}
            style={{ color: rating >= i + 1 ? "yellow" : "black" }}
          >
            ★
          </div>
        ))}
      </div>
      <button disabled={isError} onClick={addReview}>
        Dodaj
      </button>
    </div>
  );
};
