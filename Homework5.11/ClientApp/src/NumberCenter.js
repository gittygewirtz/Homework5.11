import React from 'react';
import AddNumber from './AddNumber';
import NumberRow from './NumberRow';


class NumberCenter extends React.Component {

    state = {
        numbers: [],
        selectedNumbers: []
    }

    onAddRandomClick = () => {
        let rdmNumber = Math.floor(Math.random() * 10000) + 1;
        let numbersCopy = [...this.state.numbers];
        numbersCopy.push(rdmNumber)
        this.setState({ numbers: numbersCopy });
    }

    onSelectClick = number => {
        if (this.addOrRemove(number) === 'Add') {
            let selectedNumbersCopy = [...this.state.selectedNumbers];
            selectedNumbersCopy.push(number);
            this.setState({ selectedNumbers: selectedNumbersCopy });
        }
        else {
            let selectedNumbersCopy = [...this.state.selectedNumbers];
            const index = selectedNumbersCopy.indexOf(number);
            if (index > -1) {
                selectedNumbersCopy.splice(index, 1);
            }
            this.setState({ selectedNumbers: selectedNumbersCopy });
        }
    }

    addOrRemove = number => {
        if (this.state.selectedNumbers.includes(number)){
            return 'Remove';
        }
        else {
            return 'Add';
        }
    }

    render() {
        return (
            <div className="container">

                <AddNumber onAddRandomClick={this.onAddRandomClick} />

                {!!this.state.numbers.length && <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.numbers.map((number, i) =>
                            <NumberRow
                                number={number}
                                key={i}
                                onSelectClick={() => this.onSelectClick(number)}
                                addOrRemove={() => this.addOrRemove(number)}
                            />
                        )}
                    </tbody>
                </table>}

                <ul>
                    {!!this.state.selectedNumbers.length && <h2>Added Numbers:</h2>}
                    {this.state.selectedNumbers.map((number, i) => <li key={i}>{number}</li>)}
                </ul>
            </div>
        );
    };
}

export default NumberCenter;