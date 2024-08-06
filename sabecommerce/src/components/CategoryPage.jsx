import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import "./all.css";
import axios from "axios";

const Catagory = ({ category }) => {
  const params = useParams();
  const catagoryId = params.category;
  const { data, status } = useQuery({
    queryKey: ["products", catagoryId],
    queryFn: async () => {
      console.log(121212)
    return await axios.get(
        "http://localhost:5000/products?catagory=" + catagoryId,
      );
    },
  });

  return (
    <div className="item-list">
      {data &&
        data.data.products.map((item) => (
          <div key={item.id} className="item-card">
            <img
              src={"http://localhost:5000" + item.image}
              alt={item.name}
              className="item-image"
            />
            <h3>{item.name}</h3>
            <p>{item.location}</p>
            <p>ETB {item.price}</p>
          </div>
        ))}
    </div>
  );
};

export default Catagory;