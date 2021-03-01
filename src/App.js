import './app.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Mainboard from './components/Mainboard';
import unsplash from './api/unsplash';

function App() {
  const [pins, setPins] = useState([]);

  const getImages = (term) => {
    return unsplash.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
    });
  };

  const onSearchSubmit = (term) => {
    getImages(term).then((res) => {
      let results = res.data.results;
      let newPins = [...results, ...pins];

      newPins.sort((a, b) => {
        return 0.5 - Math.random();
      });
      setPins(newPins);
    });
  };

  const getNewPins = () => {
    let promises = [];
    let pinData = [];
    let pinTerms = ['dogs', 'cats', 'video game', 'cars', 'nike'];

    pinTerms.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          pinData = pinData.concat(res.data.results);
          pinData.sort((a, b) => {
            return 0.5 - Math.random();
          });
        }),
      );
    });

    Promise.all(promises).then(() => {
      setPins(pinData);
    });
  };

  useEffect(() => {
    getNewPins();
  }, []);

  return (
    <div className='app'>
      <Header onSubmit={onSearchSubmit} />
      <Mainboard pins={pins} />
    </div>
  );
}

export default App;
