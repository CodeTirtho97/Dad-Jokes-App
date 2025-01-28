import React, { Component } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import Joke from "./Joke";
import "./JokeList.css";

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 4,
  };

  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      pinnedJoke: null,
      favorites: [],
      loading: false,
      adblockWarning: false,
    };
  }

  async componentDidMount() {
    // Detect AdBlock by checking if request fails
    try {
      const testRequest = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      if (!testRequest.data) throw new Error("Blocked by AdBlocker");
    } catch (error) {
      this.setState({ adblockWarning: true });
    }

    // Fetch jokes initially
    if (this.state.jokes.length === 0) {
      await this.getJokes();
    }
  }

  async getJokes() {
    try {
      this.setState({ loading: true });

      let jokes = [];
      for (let i = 0; i < this.props.numJokesToGet; i++) {
        const response = await axios.get("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json",
            "User-Agent": "MyDadJokesApp (https://dad-jokes-v2-tirth.vercel.app)",
          },
        });
        jokes.push({ id: uuid(), text: response.data.joke });
      }

      setTimeout(() => {
        this.setState({ jokes, loading: false });
      }, 1000);
    } catch (error) {
      console.error("Error fetching jokes:", error);
      this.setState({ loading: false });
    }
  }

  clearJokeList() {
    if (this.state.pinnedJoke) {
      alert("Unpin the joke before clearing the list.");
      return;
    }
    this.setState({ jokes: [] });
  }

  render() {
    const { jokes, pinnedJoke, loading, adblockWarning } = this.state;

    return (
      <div className="JokeList">
        {adblockWarning && (
          <div className="AdblockWarning">
            ⚠️ AdBlocker detected! Please disable AdBlocker for this app to work correctly.
          </div>
        )}

        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span> Jokes
          </h1>
          <button
            className="JokeList-getmore"
            onClick={() => this.getJokes()}
            disabled={loading}
          >
            {loading ? "Fetching..." : "Fetch Jokes"}
          </button>
          <button
            className="JokeList-clear"
            onClick={() => this.clearJokeList()}
            disabled={jokes.length === 0}
          >
            🧘‍♂️ Clear Mind!
          </button>
        </div>

        {loading && <div className="loading-bar"></div>}

        {pinnedJoke && (
          <div className="JokeList-pinned">
            <h2>📌 Pinned Joke</h2>
            <Joke
              key={pinnedJoke.id}
              text={pinnedJoke.text}
              unpin={() => this.setState({ pinnedJoke: null })}
            />
          </div>
        )}

        <div className="JokeList-jokes">
          {jokes.map((joke) => (
            <Joke
              key={joke.id}
              text={joke.text}
              remove={() =>
                this.setState((st) => ({
                  jokes: st.jokes.filter((j) => j.id !== joke.id),
                }))
              }
              pin={() => this.setState({ pinnedJoke: joke })}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
