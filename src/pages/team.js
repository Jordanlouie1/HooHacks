import React, { useState, useEffect } from "react";
function Team() {
  const [team, setTeam] = useState(null);
  useEffect(() => {
    fetch("https://us-east-1.aws.data.mongodb-api.com/app/data-txhel/endpoint/data/v1/", {
      method: "POST",
      headers: {
        "api-key":{APIKEY},
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*' 
      },
      data: {
      "dataSource": "Cluster0",
      "database": "HooHacks",
      "collection": "Employees",
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setPeople(data[0].people);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h2>People of the day:</h2>
      {people && <p>{people}</p>}
    </div>
  );
}
export default Team;
