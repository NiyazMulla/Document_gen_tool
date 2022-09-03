import RichTextEditor from "./components/RichTextEditor";
import React, { useEffect, useState } from "react";

import "./App.css";
import TinyMCEEditor from "./components/TinyMCEEditor";
import SharePoint from "./assets/sharpoint";
import TemplateData from "./assets/template";
export default function App() {
  const [value, setValue] = useState();
  const getValue = (value) => {
    setValue(value);
  };

  useEffect(() => {
    let newString = TemplateData.replace("{{methodology}}", SharePoint);
    setValue(newString);
  }, []);

  const createTemplate = () => {
    exportDoc(value);
  };
  const exportDoc = (content, filename = "NewWord") => {
    var headerFooter = `<table style='margin-left:50in;'><tr style='height:1pt;mso-height-rule:exactly'>
    <td>
      <div style='mso-element:header' id=h1>
        <p class=headerFooter>
            Header content goes here
         </p>
      </div>
      &nbsp;
    </td>

    <td>
      <div style='mso-element:footer' id=f1>
        <p class=headerFooter>
        Page
        <span style='mso-field-code:PAGE'></span>
        of
        <span style='mso-field-code:NUMPAGES'></span>
      </p>
      </div>
      &nbsp;
</td></tr></table>`;

    var pageBreaker = `<br clear=all style='mso-special-character:line-break; page-break-before:always'>`;
    var preHtml = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title>
    <style type="text/css">
    @page Section1 {
        margin:0.75in 0.75in 0.75in 0.75in;
        size:841.7pt 595.45pt;
        mso-page-orientation:landscape;
        mso-header-margin:0.5in;
        mso-header: h1;
        mso-footer-margin:0.5in;
        mso-footer: f1;
    }

    div.Section1 {page:Section1;}

    p.headerFooter { margin:0in; text-align: center; }
    </style>

    </head><body>`;
    var postHtml = "</body></html>";
    var html =
      preHtml +
      '<div class="Section1">' +
      headerFooter +
      content +
      pageBreaker +
      "</div>" +
      "<br />" +
      // headerFooter +
      postHtml;

    var blob = new Blob(["\ufeff", html], {
      type: "application/msword",
    });

    // Specify link url
    var url =
      "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(html);

    // Specify file name
    filename = filename ? filename + ".doc" : "document.doc";

    // Create download link element
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      // Create a link to the file
      downloadLink.href = url;

      // Setting the file name
      downloadLink.download = filename;

      //triggering the function
      downloadLink.click();
    }

    document.body.removeChild(downloadLink);
  };
  return (
    <>
      <div
        style={{
          height: "80px",
          backgroundColor: "black",
          marginBottom: "10px",
          color: "white",
          textAlign: "center",
          fontSize: "32px",
        }}
      >
        Document Generate
      </div>

      {/* <div> */}
      {/* <RichTextEditor initialValue={value} getValue={getValue} /> */}
      <TinyMCEEditor initialValue={value} />
      {/* </div> */}
      {/* <div
        style={{
          height: "500px",
          border: "2px solid red",
          overflowY: "scroll",
        }}
        dangerouslySetInnerHTML={{ __html: value }}
        contentEditable
      ></div> */}
      <button
        style={{
          marginTop: "10px",
          marginRight: "10px",
          height: "30px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
        onClick={createTemplate}
      >
        Create Template
      </button>
    </>
  );
}
