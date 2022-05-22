/** 🌹oddFEELING */

import React, { useRef } from 'react';
import { visibleState } from '../global/state.global';
import styles from './Modal.module.css';

const ModalComponent = ({ ...props }) => {
  const { props: ver } = props;
  const { visible, setVisible } = visibleState();
  const { top_text, btn_click, btn_text } = ver;

  console.log(props);
  return (
    visible && (
      <div className={styles.container}>
        <h2>the text is: {top_text}</h2>

        <form>
          <input type='url' />
        </form>
        <button onClick={btn_click}>{btn_text}</button>
        <button onClick={() => setVisible()}>Cancel</button>
      </div>
    )
  );
};

export default React.memo(ModalComponent);
