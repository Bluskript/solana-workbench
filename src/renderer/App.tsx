/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  MemoryRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {
  faRunning,
  faCoins,
  faGripHorizontal,
} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const renderTooltip = (id: string, title: string) => {
    return (props: any) => {
      return (
        <Tooltip id={id} {...props}>
          {title}
        </Tooltip>
      );
    };
  };
  return (
    <div>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 0 }}
        overlay={renderTooltip('run', 'Run Deps')}
      >
        <NavLink
          className="nav-link nav-icon"
          activeClassName="selected-nav-icon"
          exact
          to="/"
        >
          <div style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon size="3x" icon={faRunning} />
          </div>
        </NavLink>
      </OverlayTrigger>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 0 }}
        overlay={renderTooltip('airdrop', 'Airdrop')}
      >
        <NavLink
          className="nav-link nav-icon"
          activeClassName="selected-nav-icon"
          to="/airdrop"
        >
          <div className="p-2" style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon className="nav-icon" size="3x" icon={faCoins} />
          </div>
        </NavLink>
      </OverlayTrigger>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 0 }}
        overlay={renderTooltip('accounts', 'Inspect Accounts')}
      >
        <NavLink
          className="nav-link nav-icon"
          activeClassName="selected-nav-icon"
          to="/accounts"
        >
          <div className="p-2" style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon
              className="nav-icon"
              size="3x"
              icon={faGripHorizontal}
            />
          </div>
        </NavLink>
      </OverlayTrigger>
    </div>
  );
};

const Run = () => {
  return (
    <div>
      <h2>Run Deps</h2>
      <div className="row">
        <div className="mt-3 col">
          <Button>Run Validator</Button>
        </div>
      </div>
    </div>
  );
};

const Airdrop = () => {
  return (
    <div className="row">
      <p>Manage tokens here</p>
    </div>
  );
};

const Accounts = () => {
  return (
    <div className="row">
      <p>Inspect accounts here</p>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <div className="row">
        <div className="col-md-auto">
          <Nav />
        </div>
        <div className="col-11">
          <Switch>
            <Route exact path="/" component={Run} />
            <Route path="/airdrop">
              <Airdrop />
            </Route>
            <Route path="/accounts">
              <Accounts />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
