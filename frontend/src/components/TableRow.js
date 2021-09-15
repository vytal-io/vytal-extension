/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
import parse from 'html-react-parser';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import {
  checkNavigatorProperties,
  checkWebWorker,
  checkScreenProperties,
} from './main';
import { ReactComponent as XCircle } from '../images/xCircle.svg';
import { ReactComponent as CheckCircle } from '../images/checkCircle.svg';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const TableRow = ({ item }) => {
  const [workerData, setWorkerData] = useState('');
  const [issues, setIssues] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    if (issues) setIsOpen(true);
  };

  const afterOpenModal = () => {};

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (item.issues.filter(Boolean).length !== 0) {
      setIssues(true);
    }
    checkWebWorker(item.key, setWorkerData);
  }, []);

  useEffect(() => {
    if (workerData !== '') {
      setIssues(true);
    }
  }, [workerData]);

  return (
    <>
      <tr className={issues ? 'issue' : ''} onClick={openModal}>
        <td>{item.key}</td>
        <td>{item.value}</td>
        <td>
          {issues ? (
            <>
              <XCircle className="circleButton" />
            </>
          ) : (
            <CheckCircle className="circleButton" />
          )}
        </td>
      </tr>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <>
          {item.issues.map((ele, index) => (
            <div className="newline" key={index}>
              {ele}
            </div>
          ))}
          <div className="newline">
            {workerData && <>{`Did not match web worker (${workerData})`}</>}
          </div>
        </>
      </Modal>
    </>
  );
};

export default TableRow;
