import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import DataError from "./DataError";

const jokeUrl =
  "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10";

const JokeTable = () => {
  const navigate = useNavigate();
  const [jokeList, setJokeList] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const isValidUser = localStorage.getItem("isValidUser");

  const getJokes = async () => {
    const response = await fetch(jokeUrl);
    const data = await response.json();
    if (!response.ok) {
      setApiError(true);
      setLoading(false);
    } else {
      const jokeData = data.jokes.map((eachJoke) => {
        const jokeObj = {
          category: eachJoke.category,
          joke: eachJoke.joke,
          id: eachJoke.id,
        };
        return jokeObj;
      });
      setJokeList(jokeData);
      setApiError(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isValidUser) {
      navigate("/login", { replace: true });
    } else {
      getJokes();
    }
  }, []);

  return (
    <div className="min-vh-100 p-3">
      <h1 className="text-center text-decoration-underline">Top Jokes</h1>
      {isLoading && (
        <div className="text-center">
          <Spinner animation="grow" />
        </div>
      )}
      {!isLoading && !apiError && (
        <Table bordered hover>
          <thead>
            <tr className="table-warning">
              <th>S.No</th>
              <th>Category</th>
              <th>Joke</th>
            </tr>
          </thead>
          <tbody>
            {jokeList.map((eachJoke, index) => (
              <tr key={eachJoke.id} className="table-light">
                <td>{index + 1}</td>
                <td>{eachJoke.category}</td>
                <td>{eachJoke.joke}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {apiError && <DataError />}
    </div>
  );
};

export default JokeTable;
