import React from 'react';

import { Cards, CountryPicker, Chart } from './components'; //named input of each file 
import { fetchData } from './api/';//fetch the data from api
import styles from './App.module.css';//global styles

import image from './images/image.png';//corona tracker image

//the only class state component to get the good holding in out function based component 
class App extends React.Component {
  state = {
    data: {},
    country: '',
  }
//async await it is use in case of .then 
  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }
//for each country change 
  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;//render each country data from an api 

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} /> {/*cards*/}
        <CountryPicker handleCountryChange={this.handleCountryChange} />  {/*countrypicker*/}
        <Chart data={data} country={country} /> {/*charts*/}
      </div>
    );
  }
}

export default App;