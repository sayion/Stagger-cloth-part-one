import "C:/Users/sayion debnath/Desktop/crown-clothing/src/routes/home/sign-in/css/main.css";
const Main = () => {
  return (
    <>
      <div style={{ margin: "10px 10px" }}>
        <h1
          style={{
            marginTop: "6%",
            marginBottom: "4.5%",
            borderBottom: "6px solid black",
            paddingBottom: "3px",
            fontSize: "70px",
            borderRadius: "20px",
          }}
        >
          <center>Breathe Into The New Lifestyle</center>
        </h1>
        <img
          style={{ height: "70%", width: "100%" }}
          src="./images/sixx.png"
          alt="First Image"
        ></img>
      </div>
      <div style={{ margin: "8px 10px" }}>
        <h1
          style={{
            marginTop: "8%",
            marginBottom: "5%",
            borderBottom: "5px solid black",
            paddingBottom: "3px",
            fontSize: "75px",
            borderRadius: "20px",
          }}
        >
          <center>The Color Awaits For You</center>
        </h1>
        <img
          style={{ height: "100%", width: "100%" }}
          src="./images/five.png"
          alt="Second Image"
        ></img>
      </div>
      <div style={{ marginBottom: "10%" }}></div>
      <div>
        <h1
          style={{
            borderBottom: "5px solid black",
            paddinBottom: "20px",
            fontSize: "70px",
            marginBottom: "70px",
            borderRadius: "20px",
          }}
        >
          <center>Explore Our Features</center>
        </h1>
      </div>
    </>
  );
};
export default Main;
