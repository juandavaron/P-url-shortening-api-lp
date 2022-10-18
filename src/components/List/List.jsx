import React from "react";
import { Button } from "../Button/Button";
import CopyToClipboard from "react-copy-to-clipboard";

function List({
  originalLink,
  shortenLink
}) {
  return (
    <li>
      <div className="hero__item">
        <span>{originalLink}</span>
        <span>{shortenLink}</span>
        {/* <CopyToClipboard value={shortenLink}> */}
          {/* <Button>Copy</Button> */}
        {/* </CopyToClipboard> */}
      </div>
    </li>
  )
};

export { List }