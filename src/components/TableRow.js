/** @jsxImportSource theme-ui */

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
    borderRadius: '4px',
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
      <tr
        sx={
          issuesExist
            ? {
                cursor: 'pointer',
                ':hover': {
                  backgroundColor: 'var(--issueBackground)',
                  color: 'var(--issueText)',
                },
              }
            : null
        }
        onClick={openModal}
      >
        <td>{title}</td>
        {value ? (
          <>
            <td>{Array.isArray(value) ? JSON.stringify(value) : dataValue}</td>
            <td>
              {issuesExist ? (
                <XCircle sx={{ display: 'flex', width: '20px' }} />
              ) : (
                <CheckCircle sx={{ display: 'flex', width: '20px' }} />
              )}
            </td>
          </>
        ) : null}
      </tr>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Issues Modal"
      >
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0 0 6px 0',
            height: '20px',
          }}
        >
          <div sx={{ fontWeight: '600' }}>{title} issues</div>
          <X
            sx={{
              fill: 'var(--border)',
              display: 'flex',
              width: '12px',
              cursor: 'pointer',
              margin: '0 0 0 12px',
              ':hover': {
                fill: 'var(--grey)',
              },
            }}
            onClick={closeModal}
          />
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
