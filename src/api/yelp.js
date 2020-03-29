import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer teZYDzPXYJu9ic7X__wLsqzk-ghM4B1uH6sObf7cqOoNB9FQ8JdZuxz3XMeRbA6bj9x1oNlyIV54nPYsIIgFY6pLCJQFANXGQ8YmfqwezHBNF-mv5oG8mfDVRLmAXnYx'
  }
})