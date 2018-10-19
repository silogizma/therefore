import React from "react";
import classNames from "classcat";

import styles from "./styles.css";

export function Tab({ children }) {
  return children;
}

export class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: props.current
    };
  }

  handleTabSwitch = newTabIndex => event => {
    event.preventDefault();

    this.setState({
      current: newTabIndex
    });
  };

  render() {
    const { children } = this.props;
    const { current } = this.state;

    return (
      <div className={styles.Container}>
        <header className={styles.Header}>
          {children.map((child, index) => (
            <a
              key={child.key}
              href={"#"}
              onClick={this.handleTabSwitch(index)}
              className={classNames({
                [styles.TabHeaderItem]: true,
                [styles.TabHeaderItemCurrent]: current === index
              })}
            >
              {child.props.title}
            </a>
          ))}
        </header>
        <div className={styles.Content}>{children[current]}</div>
      </div>
    );
  }
}

Tabs.defaultProps = {
  current: 0
};
