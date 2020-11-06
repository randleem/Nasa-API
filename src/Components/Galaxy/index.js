import React, { useEffect, useState } from "react";

function GalaxyViewer({ date }) {
  const [picture, setPicture] = useState({});
  const [testPicture, setTestPicture] = useState({});

  // useEffect(() => {
  //   if (picture) {
  //     async function getPicture() {
  //       const res = await fetch(
  //         `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`,
  //         {
  //           headers: { accept: "application/json" },
  //         }
  //       );
  //       const data = await res.json();
  //       console.log(data);
  //       setPicture(data);
  //     }
  //     getPicture();
  //   }
  // }, []);

  useEffect(() => {
    if (testPicture) {
      async function getPicture() {
        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?date=${date}&api_key=mHHWfgZhaNvfiWbpDDUF5lVaogp6EaVT24quDRgu`,
          {
            headers: { accept: "application/json" },
          }
        );
        const data = await res.json();
        console.log(data);
        setTestPicture(data);
      }
      getPicture();
    }
  }, [date]);

  return (
    <div>
      {/* <img src={picture?.url} width={`auto`} height={`500px`}></img> */}
      {/* <p>{picture?.explanation}</p> */}
      <h1 className="imageTitle">{testPicture?.title}</h1>
      <img src={testPicture?.url} width={"auto"} height={"500px"}></img>
      <p className="imageTitle">{testPicture?.explanation}</p>
    </div>
  );
}

export default GalaxyViewer;
