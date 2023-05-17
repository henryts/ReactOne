import React from 'react';
import './body.css';
import Tool from './filter';
import Content from './content';

let arr = [
  {
    title: "Functinal components",
    discr: "Main topic must read",
    isAvailable: true,
  },
  {
    title: "Class components",
    discr: "class is gonna outdated",
    isAvailable: false,
  },
  {
    title: "State Management",
    discr: "You learn State you learned React",
    isAvailable: true,
  },
];

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: arr,
    };
    this.onListChange = this.onListChange.bind(this);
  }

  onListChange(evt) {
    const value = evt.target.value;
    const newList = arr.filter((item) => {
      if (value === "All") {
        return true;
      }
      if (value === "Available") {
        return item.isAvailable === true;
      }
      if (value === "Unavailable") {
        return item.isAvailable === false;
      }
      return false;
    });

    this.setState({
      data: newList,
    });
  }

  render() {
    return (
      <Tool onAction={this.onListChange}>
        <div className="body">
          {this.state.data.map((data) => (
            <Content
              key={data.title}
              title={data.title}
              discr={data.discr}
              isAvailable={data.isAvailable}
            />
          ))}
        </div>
      </Tool>
    );
  }
}

export default Body;
