import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

class Search extends Component {
  state = {
    gamertag: "",
    platform: "psn"
  };
  static getDerivedStateFromProps() {
    document.body.className = "body-bg-image";
    return null;
  }
  render() {
    return (
      <section className="search">
        <ToastContainer />
        <h1>Track Player Stats</h1>

        <form
          onSubmit={e => {
            e.preventDefault();
            if (!this.state.gamertag) {
              toast.info("Please enter a game tag", { autoClose: 3000 });
              return;
            }
            this.props.history.push(
              `/profile/${this.state.platform}/${this.state.gamertag}`
            );
          }}
        >
          <div className="form-group">
            <label htmlFor="platform">Platform</label>
            <select
              name="platform"
              id="platform"
              onChange={e => {
                this.setState({ platform: e.target.value });
              }}
            >
              <option value="psn">Playstation</option>
              <option value="xbl">Xbox</option>
              <option value="Origin">Origin</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="gamertag">Gamertag</label>
            <input
              type="text"
              name="text"
              id="gamertag"
              placeholder="Origin ID, Xbox Live gamertag, PSN ID"
              onChange={e => {
                this.setState({ gamertag: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="submit" className="btn" />
          </div>
        </form>
      </section>
    );
  }
}

export default Search;
