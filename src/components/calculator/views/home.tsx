import React from 'react';
import {Calculator} from './';
import Styles from '../styles/home.scss';

interface Props {
  keyDownAction: (e: any) => void
  keyDown:(e: any, props: Props) => void
  keyUpAction: (e: any, props: Props) => void
 };

export class Home extends React.Component<Props> {
  componentDidMount() {
    this.onClick = this.onButtonClick.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);

    document.body.onkeydown = this.onKeyDown.bind(this);
    document.body.onkeyup = this.onKeyUp.bind(this);

    document.addEventListener('touchstart', (evt) => { evt.preventDefault() }, { passive: true });


    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementsByClassName(`${Styles.home}`)[0].classList.add('fadeIn');
      });
    });
  }

  onKeyDown(evt: any) {
    let button = this.calculator.refs[evt.key];

    if (button && !button.isActive()) {
      this.props.keyDownAction(evt.key);
    }
  }

  onKeyUp(evt: any) {
    let button = this.calculator.refs[evt.key];
    this.props.keyDownAction('');
    this.props.keyUpAction(evt.key, this.props);
  }

  onButtonClick(key: any) {
    this.props.keyDownAction('');
    this.props.keyUpAction(key, this.props);
  }

  onMouseDown(key: any) {
    this.props.keyDownAction(key);
  }

  onClick(key: any) {
    this.props.keyDownAction(key);
  }

  render() {
    return (
      <div className={Styles.home}>
        <div className={Styles.home__content}>
          <Calculator
            {...this.props}
            onMouseDown={this.onMouseDown.bind(this)}
            buttonClick={this.onButtonClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}