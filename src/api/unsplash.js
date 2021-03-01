import axios from 'axios';

export default axios.create({
  baseUrl: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID uVQKLywhUp63aAmcNOUeEBHZ01dnGJbRTV6i4C-PEJw',
  },
});
