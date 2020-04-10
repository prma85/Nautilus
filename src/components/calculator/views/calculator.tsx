import React from "react";
import PropTypes from "prop-types";
import Button from "../components/button.js";
import Display from "../components/display";
import Styles from "../../scss/calculator.scss";
import StylesButton from "../../scss/button.scss";

interface Props {
  buttonClick: (e: any) => void;
  onMouseDown: (e: any) => void;
  displayValue: string;
  historyDisplay: string;
  muted: boolean;
  getButtonClass: (elmt: any, Styles: any) => string;
  isActiveCSS: (css: any, key: any, keyDown: any, Styles: any) => string;
  keys: any[];
  keyDownAction: (e: any) => void
  keyDown:(e: any, props: Props) => void
  keyUpAction: (e: any, props: Props) => void
}

export class Calculator extends React.Component<Props> {
  render() {
    return (
      <div className={Styles.calculator}>
        <div className={Styles.calculator__header}>
          <Display className={Styles.calculator__history} value={this.props.historyDisplay} />
          <Display className={Styles.calculator__result} value={this.props.displayValue} />
        </div>
        <div className={Styles.calculator__body}>
          {" "}
          {this.props.keys.map((elmt, index) => {
            var css = this.props.getButtonClass(elmt, StylesButton);
            return (
              <Button
                key={index}
                ref={elmt.key}
                label={elmt.label}
                id={elmt.key}
                onMouseDown={this.props.onMouseDown}
                onClick={this.props.buttonClick}
                className={this.props.isActiveCSS(css, elmt.key, this.props.keyDown, StylesButton)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
