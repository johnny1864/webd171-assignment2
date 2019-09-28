import React from 'react';

class Navbar extends React.Component {
  render() {
    console.log(this.props);
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              {this.props.siteName}
            </a>
          </div>
          <ul className="nav navbar-nav">
            {this.props.pages.map((page, index) => {
              return (
                <li key={`${page} ${index}`}>
                  {' '}
                  <a href="/"> {page['page']}</a>{' '}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
