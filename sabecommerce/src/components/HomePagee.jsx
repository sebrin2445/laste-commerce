// src/components/HomePage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const HomePagee = () => {
  const [input, setInput] = useState("");
  const [keyword, setKeyWord] = useState("");
  const { data: catagories } = useQuery({
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/catagories");
      return res.data.catagories;
    },
  });

  const { data } = useQuery({
    queryKey: ["search", keyword],
    queryFn: async () =>
      axios.get("http://localhost:5000/search?keyword=" + keyword),
    enabled: !!keyword,
  });

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setKeyWord(input.trim());
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [input]);

  return (
    <div className="home-page">
      <main>
        <section className="hero-section">
          <div className="hero-text">
            <h1>
              Find anything in <br /> <span>All Ethiopia</span>
            </h1>
          </div>
          <div className="search-bar">
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              placeholder="I am looking for..."
            />
          </div>
          {data &&
            data.data.products.map((item) => (
              <Link key={item.id}>{item.name}</Link>
            ))}
        </section>
        <section className="ad-section">
          <div className="ad-banner">
            <h2>How to buy on Sabstore?</h2>
            <p>Check out the step-by-step guide</p>
          </div>
          <div className="sell-banner">
            <h2>Got something to sell?</h2>
            <p>Post an advert for free!</p>
          </div>
        </section>
        <section className="categories">
          {catagories &&
            catagories.map((catagory) => (
              <Link
                to={`/catagory/${catagory.id}`}
                className="category vehicles"
              >
                <div id="cat">
                  <h3>{catagory.name}</h3>
                  <p>{catagory._count.ProductCatagory} ads</p>
                </div>
              </Link>
            ))}
        </section>
      </main>
    </div>
  );
};

export default HomePagee;
