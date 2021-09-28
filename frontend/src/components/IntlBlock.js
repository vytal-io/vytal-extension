/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Block from './Block';
import Table from './Table';
import { getIntl } from './main';
import { ReactComponent as CheckCircle } from '../images/checkCircle.svg';

const DateBlock = () => (
  <Block>
    <h1>Intl</h1>
    <Table type="navigator" data={getIntl()} />

    {/* <div className="tableWrap">
      <table>
        {Object.entries(Intl.DateTimeFormat().resolvedOptions()).map((item) => (
          <tbody key={item[0]}>
            <tr>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>
                <CheckCircle className="circleButton" />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div> */}
    <p>
      <b>Explanation:</b> JavaScript can be used to find information about your
      hardware. This information can be used to create a fingerprint.
    </p>
  </Block>
);

export default DateBlock;
