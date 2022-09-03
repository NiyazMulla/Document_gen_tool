import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
function TinyMCEEditor(props) {
  const [initialValue, setInitialValue] = useState(props.initialValue);
  const editorRef = useRef(null);

  useEffect(() => {}, []);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      exportDoc(editorRef.current.getContent());
    }
  };

  const preview = () => {
    if (editorRef.current) {
      let content = editorRef.current.getContent();
      // window.open();
      var preHtml =
        "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
      var postHtml = "</body></html>";
      var html = preHtml + content + postHtml;

      document.body.innerHTML = content;
    }
  };

  const exportDocWithLib = async () => {};

  /**
   * Plain js html to docx
   * @param {htmlstring} content
   * @param {string} filename
   */
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
    <div>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={initialValue}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            // "a11ychecker",
            "advlist",
            // "advcode",
            // "advtable",
            "autolink",
            // "checklist",
            "export",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            // "powerpaste",
            "fullscreen",
            // "formatpainter",
            "insertdatetime",
            "media",
            "table",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | casechange blocks | bold italic backcolor | " +
            "alignleft aligncenter alignright alignjustify | " +
            "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",

          /* enable title field in the Image dialog*/
          image_title: true,
          /* enable automatic uploads of images represented by blob or data URIs*/
          automatic_uploads: true,
          /*
    URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
    images_upload_url: 'postAcceptor.php',
    here we add custom filepicker only to Image dialog
  */
          file_picker_types: "image",
          /* and here's our custom image picker*/
          file_picker_callback: function (cb, value, meta) {
            var input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.onchange = function () {
              var file = this.files[0];

              var reader = new FileReader();
              reader.onload = function (e) {
                console.log("name", e.target.result);
                let localUrl = window.URL.createObjectURL(
                  new Blob([e.target.result], { type: "application/pdf" })
                );
                console.log(localUrl);
                cb(e.target.result, {
                  alt: file.name,
                });
              };
              reader.readAsDataURL(file);
            };

            input.click();
          },
          // content_style:
          //   "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        apiKey="6br163bmon5fj1gbnipibr8hgkh3rm6ul23niibyfljfql4k"
      />

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
        onClick={log}
      >
        Create Template
      </button>
      <button
        style={{
          marginTop: "10px",
          height: "30px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
        onClick={preview}
      >
        Preview
      </button>
    </div>
  );
}

export default TinyMCEEditor;
