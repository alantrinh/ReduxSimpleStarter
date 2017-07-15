import _ from 'lodash';
import React, {Component} from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

export default class Chart extends Component {
    render() {
        return (
            <div>
                <Sparklines height={120} width={180} data={this.props.data}>
                    <SparklinesLine color={this.props.color} />
                </Sparklines>
                <div>{this.props.units}</div>
            </div>
        );
    }
}
