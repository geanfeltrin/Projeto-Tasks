import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="#pablo">Home</a>
              </li>
                 <li>
                <a href="http://blog.residenciaeducacao.com.br">Blog</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="http://www.residenciaeducacao.com.br">Residência Educação</a>          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
