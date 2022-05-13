import './TableRow.css';
import Modal from 'react-modal';
import { useState } from 'react';
import { ReactComponent as XCircle } from '../images/xCircle.svg';
import { ReactComponent as CheckCircle } from '../images/checkCircle.svg';
import { ReactComponent as X } from '../images/x.svg';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '18px',
    border: '1px solid var(--border)',
    borderRadius: '6px',
  },
};

Modal.setAppElement('#root');

const TableRow = ({ title, value, issues }) => {
  const issuesExist = issues.length !== 0;
  const [modalIsOpen, setIsOpen] = useState(false);
  const dataValue = !value && value !== 0 ? 'null' : value;

  const openModal = () => {
    if (issuesExist) setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <tr className={issuesExist ? 'issue' : ''} onClick={openModal}>
        <td>{title}</td>
        <td>{Array.isArray(value) ? JSON.stringify(value) : dataValue}</td>
        <td>
          {issuesExist ? (
            <XCircle className="circleButton" />
          ) : (
            <CheckCircle className="circleButton" />
          )}
        </td>
      </tr>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Issues Modal"
      >
        <div className="modalHeader">
          <div className="modalTitle">{title} issues</div>
          <X className="closeButton" onClick={closeModal} />
        </div>
        <ul>
          {issues.filter(Boolean).map((ele, index) => (
            <li key={index}>{ele}</li>
          ))}
        </ul>
      </Modal>
    </>
  );
};

export default TableRow;
