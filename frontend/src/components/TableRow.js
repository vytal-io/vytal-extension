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

const TableRow = ({ item }) => {
  const issues = item.issues.filter(Boolean).length !== 0;
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    if (issues) setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <tr>
      <td>{item.key}</td>
      <td>{item.value}</td>
      <td>
        {issues ? (
          <XCircle className="circleButton issueButton" onClick={openModal} />
        ) : (
          <CheckCircle className="circleButton" />
        )}
      </td>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Issues Modal"
      >
        <div className="modalHeader">
          <div className="modalTitle">{item.key} issues</div>
          <X className="closeButton" onClick={closeModal} />
        </div>
        <ul>
          {item.issues.filter(Boolean).map((ele, index) => (
            <li key={index}>{ele}</li>
          ))}
        </ul>
      </Modal>
    </tr>
  );
};

export default TableRow;
