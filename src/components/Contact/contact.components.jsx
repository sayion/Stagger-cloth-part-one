import "./contacts.css";

import React from "react";
import Footer from "../../routes/home/Footer.components";

const Contact = () => {
  return (
    <>
      <div className="about-container scale-in-top">
        <div className="img1">
          <img src=" https://img.freepik.com/free-vector/flat-illustrated-csr-concept_23-2148935229.jpg?w=900&t=st=1696654773~exp=1696655373~hmac=26ea3fcff882fdb1819b23605fb519aea80369b71f84ea7abce81db926b49d1a"></img>
        </div>
        <div className="content1">
          <h5>
            <center>
              <h2 className="h2"> Our Philosophy</h2>
              <p className="p1">
                We are committed to curating collections that go beyond trends,
                focusing on timeless pieces that stand the test of time. Each
                design is carefully crafted with attention to detail, ensuring
                that every Kandid piece feels like a work of art.
              </p>
              <p className="p1">
                At the heart of Kandid is a vibrant and diverse community of
                fashion enthusiasts who share our passion for self-expression
                through clothing. We celebrate uniqueness and inclusivity,
                believing that everyone deserves to look and feel their best, no
                matter their style or size.
              </p>
            </center>
          </h5>
        </div>
      </div>
      <div className="about-container scale-in-top">
        <div className="content1">
          <h5>
            <center>
              <h2 className="h2"> Our Commitment</h2>
              <p className="p1">
                Kandid is dedicated to sustainability and ethical practices. We
                take pride in sourcing materials responsibly and ensuring fair
                treatment of workers throughout our supply chain. We're on a
                continuous journey to minimize our environmental footprint and
                contribute positively to the world. Join us in celebrating the
                beauty of individuality through fashion. Explore our collections
                and be part of the Kandid family.
              </p>
              <p className="p1">
                At Kandid, we believe that fashion is not just about clothing;
                it's a form of self-expression, a canvas for individuality, and
                a way to tell your unique story. At the heart of Kandid is a
                vibrant and diverse community of fashion enthusiasts who share
                our passion for self-expression through clothing. We celebrate
                uniqueness and inclusivity, believing that everyone deserves to
                look and feel their best, no matter their style or size.
              </p>
              <p className="p1">
                At the heart of Kandid is a vibrant and diverse community of
                fashion enthusiasts who share our passion for self-expression
                through clothing. We celebrate uniqueness and inclusivity,
                believing that everyone deserves to look and feel their best, no
                matter their style or size.
              </p>
            </center>
          </h5>
        </div>
        <div className="img2">
          <img src=" https://img.freepik.com/free-vector/design-process-concept-illustration_114360-5836.jpg?t=st=1696655825~exp=1696656425~hmac=f6d019d5a8ab05136b44feb35487ce64d78143f3bb973b652fcaa6a35217c39d"></img>
          <div className="img2">
            <img src=" https://img.freepik.com/free-vector/business-solution-concept-illustration_114360-8751.jpg?t=st=1696655818~exp=1696656418~hmac=b375109593b6d3caae562eb261804d7e696bb473e81989adbcad7a624bdfd64a"></img>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Contact;
