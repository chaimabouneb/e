import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="foot">
      <ul className="col-5 ">
        <li className="col">
          <h3>column label</h3>
          <Link className="footerLink" href="#">
            link1
          </Link>
        </li>{" "}
        <li className="col">
          <h3>column label</h3>
          <Link className="footerLink" href="#">
            link1
          </Link>
        </li>{" "}
        <li className="col">
          <h3>column label</h3>
          <Link className="footerLink" href="#">
            link1
          </Link>
        </li>{" "}
        <li className="col">
          <h3>column label</h3>
          <Link className="footerLink" href="#">
            link1
          </Link>
        </li>
      </ul>
      <ul className="col-5 screen clear">
        <li className="col">
          <h3>column label</h3>
          <Link className="footerLink" href="#">
            link1
          </Link>
        </li>{" "}
        <li className="col">
          <h3>column label</h3>
          <Link className="footerLink" href="#">
            link1
          </Link>
        </li>{" "}
        <li className="col">
          <h3>column label</h3>
          <Link className="footerLink" href="#">
            link1
          </Link>
        </li>{" "}
        <li className="col">
          <h3>column label</h3>
          <Link className="footerLink" href="#">
            link1
          </Link>
        </li>
      </ul>{" "}
      <ul className="col-5 screen clear">
        <li className="col">
          <h3>column label</h3>
          <Link className="footerLink" href="#">
            link1
          </Link>
        </li>{" "}
        <li className="col">
          <h3>column label</h3>
          <Link className="footerLink" href="#">
            link1
          </Link>
        </li>{" "}
        <li className="col">
          <h3>column label</h3>
          <Link className="footerLink" href="#">
            link1
          </Link>
        </li>{" "}
        <li className="col">
          <h3>column label</h3>
          <Link className="footerLink" href="#">
            link1
          </Link>
        </li>
      </ul>{" "}
      <ul className="col-5 screen clear">
        <li className="col">
          <h3>column label</h3>
          <Link className="footerLink" href="#">
            link1
          </Link>
        </li>{" "}
        <li className="col">
          <h3>column label</h3>
          <Link className="footerLink" href="#">
            link1
          </Link>
        </li>{" "}
        <li className="col">
          <h3>column label</h3>
          <Link className="footerLink" href="#">
            link1
          </Link>
        </li>{" "}
        <li className="col">
          <h3>column label</h3>
          <Link className="footerLink" href="#">
            link1
          </Link>
        </li>
      </ul>{" "}
      <ul className="col-5 screen clear">
        <li className="col">
          <h3>column label</h3>
          <Link className="footerLink" href="#">
            link1
          </Link>
        </li>{" "}
        <li className="col">
          <h3>column label</h3>
          <Link className="footerLink" href="#">
            link1
          </Link>
        </li>{" "}
        <li className="col">
          <h3>column label</h3>
          <Link className="footerLink" href="#">
            link1
          </Link>
        </li>{" "}
        <li className="col">
          <h3>column label</h3>
          <Link className="footerLink" href="#">
            link1
          </Link>
        </li>
      </ul>
      <div className="moreWays screen">
        <p>
          More Ways To Shop:Visit an <Link href="#">Apple Store</Link>, Call
          0807
        </p>
      </div>
      <div className="screen clear">
        <p className="copy">
          Copyright &copy; 2023 Apple Inc. All Rights Reserved.
          <Link href="#">Privacy</Link>|<Link href="#">Privacy</Link>|
          <Link href="#">Privacy</Link>{" "}
        </p>
        <Link href="#" class="country"></Link>
      </div>
    </footer>
  );
};

export default Footer;
