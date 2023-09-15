const Footer = () => {
  return (
    <div>
      <center>
        <h1 style={{ borderBottom: "3px solid black" }}>Further Queries</h1>
      </center>

      <div
        style={{
          display: "flex",
          overflow: "hidden",
          width: "100%",
          background: "#9e9b99",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ opacity: "1", color: "#9e3203" }}>
          sgrjdkgasnnjrnfnwarnf<br></br>jrsnjngljbregnljkaesrgvjkesbg<br></br>
          vjaksbvgjbvjsbvgasjb
        </h2>
        <h2 style={{ opacity: "1", color: "#9e3203" }}>
          sgrjdkgasnnjrnfnwarnfjrsnjngl<br></br>jbregnljkaesrgvjkesbg<br></br>
          vjaksbvgjbvjsbvgasjb
        </h2>
        <h2 style={{ opacity: "1", color: "#9e3203" }}>
          sgrjdkgasnnjrnfnwarnf<br></br>jrsnjngljbregnljkaesrgvjke<br></br>
          sbgvjaksbvgjbvjsbvgasjb
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          overflow: "hidden",
          width: "100%",
          background: "#9e9b99",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ opacity: "1", color: "#9e3203" }}>
          sgrjdkgasnnjrnfnwarnf<br></br>jrsnjngljbregnljkaesrgvjkesbg<br></br>
          vjaksbvgjbvjsbvgasjb
        </h2>
        <h2 style={{ opacity: "1", color: "#9e3203" }}>
          sgrjdkgasnnjrnfnwarnfjrsnjngl<br></br>jbregnljkaesrgvjkesbg<br></br>
          vjaksbvgjbvjsbvgasjb
        </h2>
        <h2 style={{ opacity: "1", color: "#9e3203" }}>
          sgrjdkgasnnjrnfnwarnf<br></br>jrsnjngljbregnljkaesrgvjke<br></br>
          sbgvjaksbvgjbvjsbvgasjb
        </h2>
      </div>
      <div style={{ width: "100%" }}>
        <form action="https://formspree.io/f/xjvqowzp" method="POST">
          <center>
            <input
              type="text"
              name="Name"
              placeholder="FullName"
              required
            ></input>
            <input
              type="email"
              name="Email"
              placeholder="Email"
              required
            ></input>
            <textarea name="Message" placeholder="Query" required></textarea>
            <button type="submit">Send</button>
          </center>
        </form>
      </div>
    </div>
  );
};
export default Footer;
