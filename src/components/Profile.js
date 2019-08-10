import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Profile extends Component {
  state = {
    loading: false,
    error: "",
    profile: {}
  };
  static getDerivedStateFromProps() {
    document.body.className = "body-bg-no-image";
    return null;
  }
  async componentDidMount() {
    this.setState({ loading: true });

    const { gamertag, platform } = this.props.match.params;

    try {
      const response = await axios.get(
        `/api/v1/profile/${platform}/${gamertag}`
      );

      const data = response.data.data;
      this.setState({ profile: data });
      console.log(this.state);
      this.setState({ loading: false });
    } catch (e) {
      this.setState({ loading: false });
      this.setState({ error: e.response.data.message });
    }
  }
  render() {
    const { profile } = this.state;
    return (
      <section>
        {this.state.loading && <h3>Loading...</h3>}
        {this.state.error && <h3>{this.state.error}</h3>}
        {Object.values(profile).length > 0 && (
          <div className="container">
            <h1 className="gamertag">
              <img
                className="platform-avatar"
                src={profile.platformInfo.avatarUrl}
                alt="platform-avatar"
              />
              {profile.platformInfo.platformUserId}
            </h1>
            <div className="grid">
              <div>
                <img src={profile.segments[1].metadata.imageUrl} alt="" />
              </div>
              <div>
                <ul>
                  <li>
                    <h4>Selected Legend</h4>
                    <p>{profile.metadata.activeLegendName}</p>
                  </li>
                  {profile.segments[0].stats.seasonWins && (
                    <li>
                      <h4>Season wins</h4>
                      <p>{profile.segments[0].stats.seasonWins.displayValue}</p>
                      <h4>Percentile Wins</h4>
                      <span>
                        {profile.segments[0].stats.seasonWins.percentile}%
                      </span>
                    </li>
                  )}
                  {profile.segments[0].stats.level && (
                    <li>
                      <h4>Apex Level</h4>
                      <p>{profile.segments[0].stats.level.displayValue}</p>
                      <h4>Top of levels</h4>
                      <span>{profile.segments[0].stats.level.percentile}%</span>
                    </li>
                  )}
                  {profile.segments[0].stats.kills && (
                    <li>
                      <h4>Lifetime Kills</h4>
                      <p>{profile.segments[0].stats.kills.displayValue}</p>
                      <h4>Top of kills</h4>
                      <span>{profile.segments[0].stats.kills.percentile}%</span>
                    </li>
                  )}
                  {profile.segments[0].stats.damage && (
                    <li>
                      <h4>Total damage</h4>
                      <p>{profile.segments[0].stats.damage.displayValue}</p>
                      <h4>Top of damage</h4>
                      <span>
                        {profile.segments[0].stats.damage.percentile}%
                      </span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}
        <br />
        <Link to="/">Go Back</Link>
      </section>
    );
  }
}

export default Profile;
