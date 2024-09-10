import { useState } from "react";
import { storage } from "../firebase.js";

function Fileupload() {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  console.log(url);

  const upload = () => {
    if (image == null) return;
    storage
      .ref(`/${image.name}`)
      .put(image)
      .on("state_changed", alert("success"), alert, () => {
        // Getting Download Link
        storage
          .ref(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      });
  };

  return (
    <div>
      <center>
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <button onClick={upload}>Upload</button>
      </center>
    </div>
  );
}

export default Fileupload;
