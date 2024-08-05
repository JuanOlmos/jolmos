import React from "react";

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Publications = () => {
  const { data: countries } = useSWR(
    "http://universities.hipolabs.com/search?country=United+States",
    fetcher
  );

  const countriesFiltered = countries && countries.slice(0, 5);
  return (
    <div className="pub-container">
      <h2>Publications</h2>
      <p>
        I have published several articles on the topic of software engineering.
      </p>
      {countriesFiltered &&
        countriesFiltered.map((country, index) => (
          <p key={index}>{country.name}</p>
        ))}
    </div>
  );
};

export default Publications;
