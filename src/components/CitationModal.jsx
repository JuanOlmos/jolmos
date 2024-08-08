import Button from "./Button";
import { FaCopy, FaDownload } from "react-icons/fa";
import "../styles/CitationModal.scss";

const CitationModal = ({ show, onClose, cite, downloadURL }) => {
  if (!show) return null;
  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      onClose();
    }
  };
  const copyButton = (
    <div className="button">
      <FaCopy size={18} /> Copy
    </div>
  );
  const downloadButton = (
    <div className="button">
      <FaDownload size={18} /> Download
    </div>
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(cite);
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container">
        <div className="modal-header">
          <h2>Cite</h2>
          <button onClick={onClose} className="close-button">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <code>{cite}</code>
        </div>
        <div className="modal-footer">
          <Button title={copyButton} onClick={handleCopy} />
          <Button title={downloadButton} url={downloadURL} />
        </div>
      </div>
    </div>
  );
};

export default CitationModal;
