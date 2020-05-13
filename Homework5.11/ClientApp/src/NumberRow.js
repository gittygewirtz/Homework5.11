import React from 'react';

class NumberRow extends React.Component {

    render() {
        return (
            <tr key="{this.props.i}">
                <td>{this.props.number}</td>
                <td><button className="btn btn-info btn-block" onClick={this.props.onSelectClick}>{this.props.addOrRemove()}</button></td>              
            </tr>
            )
    }

}

export default NumberRow;