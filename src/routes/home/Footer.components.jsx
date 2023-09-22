import "C:/Users/sayion debnath/Desktop/crown-clothing/src/routes/home/sign-in/css/form.css";
const Footer = () => {
  return (
    <div>
      <center>
        <h1 style={{ borderBottom: "3px solid black", borderRadius: "20px" }}>
          Further Queries
        </h1>
      </center>
      <div className="footer" style={{ borderRadius: "20px" }}>
        <div
          className="divone"
          style={{
            display: "flex",
            overflow: "hidden",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <center>
            <h4 style={{ opacity: "1" }}>
              The <span>Brand</span> That <br></br>
              Everybody Indeed Wants to<br></br>
              Own
            </h4>
          </center>
          <h3 style={{ opacity: "1" }}>
            <span>India</span>
            <br></br>Pitchfork schlitz tonx, <br></br>coloring book celiac
            tousled succulents ascot affogato<br></br>#89890/HG
          </h3>
          <h3 style={{ opacity: "1" }}>
            <span>France</span>
            <br></br>Pitchfork schlitz tonx, <br></br>coloring book celiac
            tousled succulents ascot affogato<br></br>#89890/HG
          </h3>
        </div>
        <div
          className="divone"
          style={{
            display: "flex",
            overflow: "hidden",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <center>
            <h4 style={{ opacity: "1" }}>
              <span>One</span> Believable<br></br>
              Trust Indeed Wants to<br></br>
              Own and Embrace The <br></br>
              The Beauty of Every Amenties<br></br>
              Worn Around
            </h4>
          </center>
          <h3 style={{ opacity: "1" }}>
            <span>London</span>
            <br></br>Pitchfork schlitz tonx, <br></br>coloring book celiac
            tousled succulents ascot affogato<br></br>#89890/HG
          </h3>
          <h3 style={{ opacity: "1" }}>
            <span>Australia</span>
            <br></br>Pitchfork schlitz tonx, <br></br>coloring book celiac
            tousled succulents ascot affogato<br></br>#89890/HG
          </h3>
        </div>
        <div
          className="divone"
          style={{
            display: "flex",
            overflow: "hidden",
            width: "100%",
            borderBottom: "10px solid black",

            justifyContent: "space-between",
          }}
        >
          <h1></h1>
          <h1></h1>
          <br></br>
          <br></br>
        </div>
      </div>
      <div className="form">
        <center>
          <form action="https://formspree.io/f/xjvqowzp" method="POST">
            <center>
              <span style={{ marginBottom: "30px" }}>
                Email Us Through Your query
              </span>
            </center>
            <input
              className="input"
              type="text"
              name="Name"
              placeholder="FullName"
              required
            ></input>
            <input
              className="input"
              type="email"
              name="Email"
              placeholder="Email"
              required
            ></input>
            <textarea
              className="textareaa"
              name="Message"
              placeholder="Query...."
              required
            ></textarea>
            <button className="btn" type="submit">
              Send
            </button>
          </form>
        </center>
      </div>
    </div>
  );
};
export default Footer;
