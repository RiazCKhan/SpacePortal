import ImageCard from "./ImageCard";
import spacePlaces from "../static/spacePlaces";

export default function Main() {
  const spaceProps = spacePlaces.map((item) => {
    return (
      <ImageCard
        key={item.id}
        id={item.id}
        title={item.title}
        description={item.description}
        imageUrl={item.imageUrl}
        time={item.time}
      />
    );
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {spaceProps}
    </div>
  );
}
