import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNewJoke } from './../../store/actions/actions';

const Joke = ({ joke }) => (
    <div
        onClick={() => {
            console.log('hey');
        }}
        className="App"
    >
        {joke}
    </div>
);

class App extends Component {
    componentWillMount() {
        this.props.fetchNewJoke();
    }

    render() {
        debugger;
        return (
            <div>
                <button onClick={this.props.fetchNewJoke}>fetch joke</button>
                <Joke joke={this.props.joke} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    thing: state.joke.joke
});

const mapDispatchToProps = {
    fetchNewJoke
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
