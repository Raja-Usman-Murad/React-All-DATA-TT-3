import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
    number: "",
    qualification: "",
    skills: "",
  });

  const inputEvent = (e) => {
    const { value, name } = e.target;
    setFullName((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };

  return (
    <>
      <form onSubmit={onSubmit} className="formF">
        <h1 className="headingF">
          Hello {fullName.fName} {fullName.lName}
        </h1>
        <h5 className="headingE">{fullName.email}</h5>
        <input
          className="inputF"
          type="text"
          placeholder="enter your First name"
          onChange={inputEvent}
          value={fullName.fName}
          name="fName"
        ></input>
        <input
          className="inputF"
          type="text"
          placeholder="enter your Last name"
          onChange={inputEvent}
          value={fullName.lName}
          name="lName"
        ></input>
        <input
          className="inputF"
          type="email"
          placeholder="enter your Email"
          onChange={inputEvent}
          value={fullName.email}
          name="email"
        ></input>
        <input
          className="inputF"
          type="text"
          placeholder="enter your Phone Number"
          onChange={inputEvent}
          value={fullName.number}
          name="number"
        ></input>
        <input
          className="inputF"
          type="text"
          placeholder="enter your Qualification"
          onChange={inputEvent}
          value={fullName.qualification}
          name="qualification"
        ></input>
        <input
          className="inputF"
          type="text"
          placeholder="enter your Skills"
          onChange={inputEvent}
          value={fullName.skills}
          name="skills"
        ></input>
        <div className='btnFF'>
        <input className="btnS" type="submit"></input>
        <input className="btnR" type="reset"></input>
        </div>
      </form>
    </>
  );
};
export default App;

// use state return simple object

// SPREAD OPERATOR
// METHOD 1:
console.log("METHOD 1");

const name = ["raja", "usman"];
const bioData = [21, ...name];
console.log(name, bioData);

// Method 2:
console.log("METHOD 2");
const shooterGames = ["call of duty", "pubg"];
const RacingGames = ["Need for speed", "GTAV"];
const games = [...RacingGames, ...shooterGames];
console.log(games);

// Method 3:
console.log("METHOD 3");
const SHOOTERGAMES = ["Need for speed", "GTAV", "call of duty", "pubg"];
const [first, ...remaining] = SHOOTERGAMES;
console.log("first");
console.log(first);
console.log("remaining");
console.log(...remaining);

// Method 4:
console.log("METHOD 4 OBJECTS");
const FULLNAME = {
  fname: "RAJA",
  lname: "USMAN",
};
const bioDATA = {
  id: 52349,
  age: 21,
  ...FULLNAME,
  gender: "MALE",
};
console.log(bioDATA);
