import React from 'react';
import ReactDOm from 'react-dom';
import LikeButton from './LikeButton';

class Title extends React.PureComponent {

    handleClickOnTitle(word,e) {
        alert(word)
    }

    render() {
        return (
            <h1 onClick={this.handleClickOnTitle.bind(this,"hello")}>React World</h1>
        )
    }
}

class Header extends React.PureComponent {
    render() {
        return (
            <div>
                <Title />
                <h2>This is Header</h2>
            </div>
        )
    }
}

class Content extends React.PureComponent {
    render() {
        return (
            <div>
                <h2>This is content</h2>
            </div>
        )
    }
}

class Footer extends React.PureComponent {
    render() {
        return (
            <div>
                <h2>This is fotter</h2>
                <LikeButton />
            </div>
        )
    }
}

class HelloPage extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default HelloPage;