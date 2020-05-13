import React from 'react';

class AddNumber extends React.Component {

    render() {
        return(
            <div className="container" style={{ marginTop: 40, marginBottom: 40 }}>
                <button className="btn btn-primary btn-lg btn-block" onClick={this.props.onAddRandomClick}>Add Random Number to Table</button>
            </div>
        );
    };
}

export default AddNumber;