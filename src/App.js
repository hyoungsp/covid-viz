import React from "react";
import { Cards, Chart, CountrySelector } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import covidImage from "./images/covid-19-1.png";

class App extends React.Component {
  state = {
    data: {},
    country: ""
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleSelectCountry = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} alt='Covid-19-imag' src={covidImage} />
        <Cards data={data} />
        <CountrySelector handleSelectCountry={this.handleSelectCountry} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
