import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
// import SimpleImage from "@editorjs/simple-image";
import Marker from "@editorjs/marker";
import ImageTool from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import Quote from "@editorjs/quote";
import server, { serverURL } from "../api/server";
import classnames from "classnames";
import { useRouter } from "next/router";

const create = ({ data, action }) => {
  const router = useRouter();
  const [state, setState] = useState({
    title: "",
    creator: "",
  });
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onClick = (e) => {
    // editor.current.readOnly.toggle();
    editor.current
      .save()
      .then((outputData) => {
        if (state.title.split("").length === 0) {
          return setErrors({ title: "title required" });
        } else if (state.creator.split("").length === 0) {
          return setErrors({ creator: "creator required" });
        } else if (outputData.blocks.length === 0) {
          return setErrors({ data: "data required" });
        } else {
          setErrors({});
        }

        const article = {
          title: state.title,
          creator: state.creator,
          data: outputData,
        };

        if (data) {
          article.urlId = data.urlId;
        }

        console.log("toEdit", article);

        action(article, router);
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  };

  const editor = useRef();
  useEffect(() => {
    let article = {};
    if (data) {
      article = data.data;
      setState({
        title: data.title,
        creator: data.creator,
      });
    }
    editor.current = new EditorJS({
      holder: "editorjs",
      minHeight: 10,
      placeholder: "Let`s write an awesome story!",
      data: article,
      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
          config: {
            placeholder: "Enter a header",
            levels: [1, 2, 3, 4],
          },
        },
        marker: {
          class: Marker,
          shortcut: "CMD+SHIFT+M",
        },
        // data: article,
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: `${process.env.NEXT_PUBLIC_HOST}/api/upload/byFile`, // Your backend file uploader endpoint
              byUrl: `${process.env.NEXT_PUBLIC_HOST}/api/upload/byUrl`, // Your endpoint that provides uploading by Url
            },
          },
        },

        inlineCode: {
          class: InlineCode,
          shortcut: "CMD+SHIFT+M",
        },

        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+O",
          config: {
            quotePlaceholder: "Enter a quote",
            captionPlaceholder: "Quote's author",
          },
        },
        // ...
      },
    });

    server.get("/").then((res) => console.log(res.data));
  }, []);
  return (
    <div className="container">
      <div className="editor-header">
        <input
          type="text"
          name="title"
          onChange={onChange}
          value={state.title}
          placeholder="Title"
          className={classnames("editor-title", {
            "is-invalid": errors.title,
          })}
        />
        <input
          type="text"
          name="creator"
          onChange={onChange}
          value={state.creator}
          placeholder="Your name"
          className={classnames("editor-creator", {
            "is-invalid": errors.creator,
          })}
        />
      </div>
      <div
        id="editorjs"
        className={classnames({
          "invalid-editor": errors.data,
        })}
      ></div>
      <button className="my-button" onClick={onClick}>
        Publish
      </button>
    </div>
  );
};

export default create;
