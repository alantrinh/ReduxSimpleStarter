import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import Slider from '../components/slider';
import {fetchRainfall} from '../actions/index';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pressure: 1000,
            temperature: 23
        };

        this.chanceOfRain = this.chanceOfRain.bind(this);
    }

    componentDidMount() {
        this.setState({rainfall: this.props.fetchRainfall ? this.props.fetchRainfall.days.map(rainfall => rainfall.amount) : [] });
    }

    chanceOfRain(pressure, temperature, amount) {
        var score = Math.log(amount + 1) * Math.log(pressure - 929) * Math.log(temperature - 9);
        var mean = Math.min(Math.max(score, 0), 100);
        var upper_bound = Math.min(1.5 * mean, 100);
        var lower_bound = Math.max(0.5 * mean, 0);
        return [lower_bound, mean, upper_bound];
    }

    render() {
        const chancesOfRain = [];
        chancesOfRain.push(this.chanceOfRain(this.state.pressure,this.state.temperature,50)[1]);
        chancesOfRain.push(this.chanceOfRain(this.state.pressure,this.state.temperature,10)[1]);
        chancesOfRain.push(this.chanceOfRain(this.state.pressure,this.state.temperature,10)[1]);
        chancesOfRain.push(this.chanceOfRain(this.state.pressure,this.state.temperature,150)[1]);
        chancesOfRain.push(this.chanceOfRain(this.state.pressure,this.state.temperature,130)[1]);
        chancesOfRain.push(this.chanceOfRain(this.state.pressure,this.state.temperature,45)[1]);
        chancesOfRain.push(this.chanceOfRain(this.state.pressure,this.state.temperature,10)[1]);

        return (
            <table className= "table table-hover">
                <tbody>
                    <tr>
                        <td><Slider onChange={pressure => this.setState({pressure})}/></td>
                        <td><Chart data={chancesOfRain} color="black" units="%" /></td>
                    </tr>
                    <tr>
                        <td><Slider onChange={temperature => this.setState({temperature})}/></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({rainfall}) { // == const rainfall = state.rainfall
    return {rainfall}; // == {rainfall: rainfall}
}

export default connect(mapStateToProps)(Dashboard);
