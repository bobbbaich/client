import React, {Component} from 'react';

export default class Instructions extends Component {
    componentDidMount() {
        fetch("/api/reward/gifts")
            .then(res => res.json())
            .then(
                (result) => {
                    console.result(result);
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.error(error);
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (
            <p>Custom component</p>
        )
    }

}