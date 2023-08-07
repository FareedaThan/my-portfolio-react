interface ITag {
  name: string;
}

const TechStackTag = (props: ITag) => {
  return (
    <>
      <p className="btn-tech-stack">{props.name}</p>
    </>
  );
};

export default TechStackTag;
