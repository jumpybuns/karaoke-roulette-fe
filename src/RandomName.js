import React, { Component } from 'react'
import nameData from './RandomName.js';
function getRandom(items) {
    return items[Math.floor(Math.random() * items.length)];
}

class ClipboardCopier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false
        }
    }

    componentDidMount() {
        const clipboard = new ClipboardCopier('.btn-copy', {
            text: function () {
                return document.querySelector('#name').value;
            }
        });

        clipboard.on('success', (e) => {
            this.setState({
                copied: true
            })

            setTimeout(() => this.setState({ copied: false }), 1000);
        });
    }

    render() {
        const { value } = this.props;
        const { copied } = this.state;

        return (
            <div>
                <input type="hidden" id="name" value={value} />
                <button disabled={copied} className="btn btn-copy">{copied ? 'Copied!' : 'Copy to clipboard'}</button>
            </div>
        )
    }
}
const Button = ({ name, onClick, children }) => {
    return (
        <input className="btn btn-randomize-namepart" type="submit" name={name} onClick={onClick} value={children} />
    )
}
export default class RandomName extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastNamePrefix: '',
            lastNameSuffix: '',
        };
    }

    componentWillMount() {
        this._randomAll()
    }

    _randomAll() {
        Object.keys(this.state).forEach(name => {
            this.setState({
                [name]: getRandom(nameData[name])
            })
        })
    };
    handleGetNameClick = (e) => {
        this.setState({
            [e.target.name]: getRandom(nameData[e.target.name])
        })
    };
    render() {
        const { firstName, lastNamePrefix, lastNameSuffix } = this.state;
        return (
            <div className="container">
                <div className="name">
                    <div>
                        <span className="firstname">{firstName}</span>
                        <br />
                        {lastNamePrefix}{lastNameSuffix}
                    </div>
                </div>
                <ClipboardCopier value={firstName + ' ' + lastNamePrefix + lastNameSuffix} />
                <div className="m-y">
                    <button className="btn btn-random" onClick={this._randomAll.bind(this)}>BRING THE WRATH</button>
                </div>
                <small className="randomize-note">Randomize a value</small>
                <Button name="firstName" onClick={this.handleGetNameClick}>First name</Button>
                <Button name="lastNamePrefix" onClick={this.handleGetNameClick}>Last name prefix</Button>
                <Button name="lastNameSuffix" onClick={this.handleGetNameClick}>Last name suffix</Button>
            </div>
        )
    }
}


