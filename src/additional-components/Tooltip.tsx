import { Children, useState } from "react";

export function Tooltip({ children, content }: any) {
  const [hover, setHover] = useState(false);

  return (
    <>
      <div
        style={{ position: "relative", display: "inline-block" }}
        className="bg-success"
        onMouseEnter={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        {" "}
        <div style={{ display: "inline-block" }}>{children}</div>
        {hover && (
          <div
            style={{
              position: "absolute",
              bottom: "50%",
              left: "50%",
              transform: "translateX(-50%)",
              background: "black",
              color: "white",
              padding: "6px 10px",
              borderRadius: "4px",
              fontSize: "12px",
              whiteSpace: "nowrap",
              marginBottom: "6px",
              zIndex: 10,
            }}
          >
            {content}
          </div>
        )}
      </div>
    </>
  );
}
