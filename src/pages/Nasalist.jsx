import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Results from "../components/Results";

function Nasalist() {
    const [formData, setFormData] = useState({
        searchterm: "",
      });
      const [infoData, setInfoData] = useState(null);
    
      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        getSreach(formData.searchterm);
      };
    
      const getSreach = async (keyword) => {
        const url = `https://images-api.nasa.gov/search?q=${keyword}`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          setInfoData(data);
        } catch (e) {
          console.error(e);
        }
      };
    
      useEffect(() => {
        getSreach();
      }, []);
    
      return (
        <>
          <div>Search here</div>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="searchterm"
                onChange={handleChange}
                value={formData.searchterm}
              />
              <input type="submit" value="submit" />
            </form>
          </div>
          {infoData ? <Results infoData={infoData} /> : "loading...."}
        </>
      );
    }
export default Nasalist