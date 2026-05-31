import "./loading.css";

const Loading = () => {
  return (
    <div className="loader-container">
      <svg viewBox="0 0 400 160">
        <text
          x="50%"
          y="50%"
          dy=".32rem"
          textAnchor="middle"
          className="text-body"
        >
          vibecard
        </text>
      </svg>
    </div>
  );
};

export default Loading;
