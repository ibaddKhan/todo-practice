import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubStats = ({ username }) => {
  const [userData, setUserData] = useState("null");

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchGitHubData();
  }, [username]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{userData.login}'s GitHub Stats</h2>
      <p>Public Repositories: {userData.public_repos}</p>
      <p>Followers: {userData.followers}</p>
      <p>Following: {userData.following}</p>
      {/* Add more GitHub stats as needed */}
    </div>
  );
};

export default GitHubStats;
