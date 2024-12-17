import React, { useEffect, useRef, useState } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';

// Set the worker path for pdf.js (required for the PDF rendering)
GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js`;

const PdfViewer = ({ fileUrl }) => {
  const [numPages, setNumPages] = useState(null); // Total number of pages
  const [pageNumber, setPageNumber] = useState(1); // Current page number
  const canvasRef = useRef(null); // Ref for the canvas element

  // Function to render a page
  const renderPage = (page) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Get viewport for the page (scale = 1.0)
    const viewport = page.getViewport({ scale: 1.0 });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Render the page on the canvas
    page.render({
      canvasContext: context,
      viewport: viewport,
    });
  };

  // Load the PDF document and render the first page
  const loadPdf = async () => {
    try {
      const loadingTask = getDocument(fileUrl); // Load PDF
      const pdfDoc = await loadingTask.promise;
      setNumPages(pdfDoc.numPages); // Set total pages
      renderPage(await pdfDoc.getPage(pageNumber)); // Render the current page
    } catch (error) {
      console.error('Error loading PDF: ', error);
    }
  };

  // Handle page navigation
  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const goToPrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  // Re-render the page whenever the page number changes
  useEffect(() => {
    loadPdf();
  }, [fileUrl, pageNumber]);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
      <div>
        <button onClick={goToPrevPage} disabled={pageNumber <= 1}>
          Previous
        </button>
        <span>
          Page {pageNumber} of {numPages}
        </span>
        <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;
