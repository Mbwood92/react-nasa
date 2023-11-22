import React from "react";

function Results({ infoData }) {
  const mydata = infoData.collection.items;

//rendering using map function 
  return (
    <div>
      {mydata.map((item, index) => (
        <div key={index} className="card">
          {item.links &&
            item.links //renders images 
              .filter((r) => r.render === "image")
              .map((p, imageIndex) => (
                <img className="card-image"
                  src={p.href}
                  key={imageIndex}
                  alt={`Image ${imageIndex + 1}`}
                  
                />
                //renders the title, data, and keywords 
              ))} 
          {item.data.map((t, dataIndex) => (
            <div key={dataIndex} className= 'font'>
              <h2>Title: {t.title}</h2>
              <h3>Data: {t.data}</h3>
              <p>Keywords: {t.keywords}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Results;

