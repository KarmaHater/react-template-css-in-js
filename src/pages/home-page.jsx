import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import DummyActions from './../store/actions/dummy-actions.js';
import Counter from './../components/test/Test';

const HomePage = () => <Counter />;

function mapStateToProps(state) {
    return {
        state: state
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dummyActions: bindActionCreators(DummyActions, dispatch)
    };
}
export default HomePage;
