import React from "react";
import styled from "styled-components";


const AqiValueStyle = styled.div`
position: absolute;
  left: 36.59%;
  right: 36.99%;
  top: 50.93%;
  bottom: 0%;

  font-family: Exo, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 53px;
  /* identical to box height */
  display: flex;
  align-items: center;

  color: #636169;


`

const AqiStatusStyle = styled.div`
position: absolute;
  left: 69.11%;
  top: 66.67%;
  bottom: 13.89%;
  width: 120px;

  font-family: Exo, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;

  color: #fab03c;
`
export default class PollutionValue extends React.Component {
  state = {
    loading: true,
    status: null,
    pm: null,
    color: null,
  };

  async componentDidMount() {
    const url = "http://api.airvisual.com/v2/nearest_city?lat=13.7262&lon=100.5478&key=fd4c1aaf-3253-4323-84d6-944d4970a631";
    const response = await fetch(url);
    const result = await response.json();
    const aqiData = result.data.current;
    this.setState({ pm: aqiData.pollution.aqius, loading: false });
    this.checkAqiStatus()
  }

  checkAqiStatus(){
    let aqival = this.state.pm 
    if(aqival >= 0 && aqival <51 ) this.setState({status: 'Good', color: '#5ac251'});
    else if(aqival >=51 && aqival <101) this.setState({status: 'Moderate', color: '#fab03c'});
    else if(aqival >=101 && aqival <151) this.setState({status: 'Unhealthy for Sensitive Groups', color: '#f78800'});
    else if(aqival >=151 && aqival <201) this.setState({status: 'Unhealthy', color: '#e40101'});
    else if(aqival >=201 && aqival <301) this.setState({status: 'Very unhealthy', color: '#b1277d'});
    else if (aqival > 301) this.setState({status: 'Hazardous', color: '#933a40'});
  }
  
  render() {
    return (
      <div>
        <AqiValueStyle>{this.state.pm}</AqiValueStyle>
        <AqiStatusStyle style={{ color: this.state.color }}>{this.state.status}</AqiStatusStyle>
      </div>
    );
  }
}