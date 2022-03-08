import * as React from "react";
import classNames from "classnames";

export default function Button(props) {
  return (
    <button
      // onClick={pr}
      className={classNames("button", props.className, {
        "button--outline": props.outline,
      })}
    >
      {props.children}
    </button>
    // <a href="/cart.html" className="button button--cart"></a>
  );
}
