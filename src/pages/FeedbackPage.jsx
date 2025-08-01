import React, { useState } from "react";

const FeedbackPage = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");

  const getStarWidth = (index) => {
    const rating = hoverRating || selectedRating;
    const value = index + 1;
    if (rating >= value) return "100%";
    else if (rating + 0.5 >= value) return "50%";
    return "0%";
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>고객 평가</h2>
      <div style={styles.stars}>
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            style={styles.starWrapper}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const offsetX = e.clientX - rect.left;
              const half = offsetX < rect.width / 2 ? 0.5 : 1;
              setHoverRating(i + half);
            }}
            onMouseLeave={() => setHoverRating(0)}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const offsetX = e.clientX - rect.left;
              const half = offsetX < rect.width / 2 ? 0.5 : 1;
              setSelectedRating(i + half);
            }}
          >
            <span style={styles.starBg}>★</span>
            <span
              style={{
                ...styles.starFg,
                width: getStarWidth(i),
              }}
            >
              ★
            </span>
          </div>
        ))}
      </div>
      <div style={styles.ratingText}>
        {selectedRating ? `현재 평점: ${selectedRating}점` : "평점을 선택해주세요"}
      </div>
      <textarea
        style={styles.commentBox}
        placeholder="코멘트를 작성해주세요."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button style={styles.submitBtn} onClick={() => alert(`평점: ${selectedRating}, 코멘트: ${comment}`)}>
        제출
      </button>
    </div>
  );
};

const styles = {
  container: {
    width: "400px",
    background: "#fff",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    margin: "100px auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    transition: "transform 0.3s ease",
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  stars: {
    display: "flex",
    gap: "6px",
    justifyContent: "center",
    marginBottom: "20px",
    position: "relative",
  },
  starWrapper: {
    position: "relative",
    width: "36px",
    height: "36px",
    cursor: "pointer",
  },
  starBg: {
    fontSize: "36px",
    color: "#ddd",
    position: "absolute",
    top: 0,
    left: 0,
  },
  starFg: {
    fontSize: "36px",
    color: "#FFD700",
    position: "absolute",
    top: 0,
    left: 0,
    overflow: "hidden",
    whiteSpace: "nowrap",
    transition: "width 0.2s",
  },
  ratingText: {
    textAlign: "center",
    fontSize: "16px",
    color: "#666",
    marginBottom: "20px",
  },
  commentBox: {
    width: "100%",
    height: "100px",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    marginBottom: "20px",
    resize: "none",
    fontSize: "15px",
  },
  submitBtn: {
    width: "100%",
    padding: "14px",
    background: "linear-gradient(135deg, #aec4d8, #5a38d1)",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default FeedbackPage;
