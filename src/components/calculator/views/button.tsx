import React from "react";
import "../../scss/button.scss";

interface Props {
  id: string;
  label: string;
  onClick: (value: string) => void;
  onMouseDown: (value: string) => void;
  className: string;
  ref: string;
}

export class Button extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
  }

  shouldComponentUpdate(prevProps: Props) {
    return prevProps.className !== this.props.className;
  }

  isActive() {
    const regex = new RegExp(/active/, "gi");

    return this.props.className.match(regex) !== null;
  }
  onClick(evt: any) {
    evt.preventDefault();
    (evt.currentTarget as HTMLButtonElement)?.blur();

    this.props.onClick(this.props.id);
  }
  onMouseDown(evt: any) {
    evt.preventDefault();

    this.props.onMouseDown(this.props.id);
  }
  render() {
    return (
      <button
        ref={this.props.ref}
        type={"button"}
        onTouchStart={this.onMouseDown}
        onTouchEnd={this.onClick}
        onMouseDown={this.onMouseDown}
        onClick={this.onClick}
        className={this.props.className}
      >
        {this.props.label}
      </button>
    );
  }
}
