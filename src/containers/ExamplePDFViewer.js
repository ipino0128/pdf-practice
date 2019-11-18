import React from "react";
import PDFViewer from "pdf-viewer-reactjs";

class ExamplePDFViewer extends React.Component {
  render() {
    return (
      <div className="Viewer">
        viewer
        <PDFViewer

          document={{
            url: "https://arxiv.org/pdf/quant-ph/0410100.pdf"
          }}
          page={1}
          scale={1.5}


        />
      </div>
    );
  }
}

export default ExamplePDFViewer;
