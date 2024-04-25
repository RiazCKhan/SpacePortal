import ImageCard from "./ImageCard";
import spacePlaces from "../static/spacePlaces";
import useWindowPosition from "../hooks/useWindowPosition";

export default function Main() {
  const checkScrollVal = useWindowPosition("header");

  const spaceProps = spacePlaces.map((item) => {
    return (
      <ImageCard
        key={item.id}
        id={item.id}
        title={item.title}
        description={item.description}
        imageUrl={item.imageUrl}
        time={item.time}
        checkScrollVal={checkScrollVal}
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
