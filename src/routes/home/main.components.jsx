import "C:/Users/sayion debnath/Desktop/crown-clothing/src/routes/home/sign-in/css/main.css";
const Main = () => {
  return (
    <>
      <div style={{ margin: "10px 10px" }}>
        <h1
          className="tracking-in-expand"
          style={{
            marginTop: "6%",
            height: "6rem",
            borderBottom: "6px solid black",
            boxShadow: "-6px 6px 6px solid black",
            paddingBottom: "3px",
            fontSize: "60px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <center>Breathe Into The New Lifestyle</center>
        </h1>
        <h5 className="trelko text-focus-in ">
          "Crafted For Your Confidence : Your Fashion ,Your Rules "
        </h5>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <img
          className="slide-top"
          style={{ height: "70%", width: "100%" }}
          src="./images/sixx.png"
          alt="First Image"
        ></img>
      </div>
      <h5 className="trello focus-in-expand">
        "Elevate Your Wardrobe:Where Fashion Meets Passion"
      </h5>
      <div style={{ margin: "2px 10px" }}>
        <h1
          style={{
            marginBottom: "5%",
            borderBottom: "5px solid black",
            paddingBottom: "3px",
            fontSize: "75px",
            borderRadius: "10px",
            cursor: "pointer",
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
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <center>Explore Our Features</center>
        </h1>
      </div>
    </>
  );
};
export default Main;
