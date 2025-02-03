import React, { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import ReactPageFlip from "react-pageflip";

// Set the worker source for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Flipbook = ({ pdfUrl }) => {
    const [numPages, setNumPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const pageFlipRef = useRef(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const goToPreviousPage = () => {
        if (pageFlipRef.current) {
            pageFlipRef.current.pageFlip().flipPrev(); // Use pageFlip() to access the API
        }
    };

    const goToNextPage = () => {
        if (pageFlipRef.current) {
            pageFlipRef.current.pageFlip().flipNext(); // Use pageFlip() to access the API
        }
    };

    const onFlip = (e) => {
        setCurrentPage(e.data + 1); // `e.data` is 0-based
    };

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                textAlign: "center",
            }}
        >
            <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess} onLoadError={(error) => console.error("Failed to load PDF:", error)}>
                {numPages && (
                    <div>
                        <ReactPageFlip
                            ref={pageFlipRef}
                            width={800}
                            height={600}
                            onFlip={onFlip}
                            size="fixed" // Use "fixed" for fixed dimensions
                            minWidth={320}
                            maxWidth={800}
                            minHeight={480}
                            maxHeight={600}
                        >
                            {Array.from({ length: numPages }, (_, index) => (
                                <div key={index}>
                                    <Page
                                        pageNumber={index + 1}
                                        width={800} // Set a fixed width for each page
                                        renderMode="svg" // Use SVG rendering for better text clarity
                                    />
                                </div>
                            ))}
                        </ReactPageFlip>

                        <div style={{ marginTop: 20 }}>
                            <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                                Previous
                            </button>
                            <span>
                                Page {currentPage} of {numPages}
                            </span>
                            <button onClick={goToNextPage} disabled={currentPage === numPages}>
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </Document>
        </div>
    );
};

export default Flipbook;
