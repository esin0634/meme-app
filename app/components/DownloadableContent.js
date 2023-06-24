import React from 'react';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';

const DownloadableContent = ({ containerId, fileName, children }) => {
  const handleDownload = () => {
    const container = document.getElementById(containerId);
    if (container) {
      html2canvas(container).then(canvas => {
        canvas.toBlob(blob => {
          saveAs(blob, fileName);
        });
      });
    }
  };

  return (
    <>
      {children}
      <button onClick={handleDownload}>Download Image</button>
    </>
  );
};

export default DownloadableContent;
