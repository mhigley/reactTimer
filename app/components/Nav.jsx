var React = require('react');
var {Link, IndexLink} = require('react-router');
// ES6 Destructuring

var Nav = () => {
    return (
        <nav className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Timer App</li>
                    <li>
                        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
                    </li>
                    <li>
                        <Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        created by <a href="http://github.com/mhigley" target="_blank">Matthew Higley</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

module.exports = Nav;
