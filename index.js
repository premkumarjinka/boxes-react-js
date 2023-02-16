const Box = (props) => {
  //  Write your code here.
  const { className, children, container } = props;
  return (
    <div className={container}>
      <p className={className}>{children}</p>
    </div>
  );
};

const element = (
  //  Write your code here.

  <div>
    <h1 className="heading">Boxes</h1>
    <div className="bg-container">
      <Box className="smallBox" container="small-container" children="Small" />
      <Box
        className="mediumBox"
        container="medium-container"
        children="Medium"
      />
      <Box className="largeBox" container="large-container" children="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
