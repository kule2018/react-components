import React, { cloneElement, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { pick } from "lodash";
import { nfn } from "../../common";
import { useDropdownPosition } from "../../common/hooks";

/**
 * 基本的Dropdown组件，可在其上针对业务逻辑进行封装
 */
function Dropdown(props) {
  const {
    children,
    defaultOpen,
    disabled,
    trigger,
    className,
    style,
    overlay,
    visible,
    onVisibleChange
  } = props;
  const [show, setShow] = useState(defaultOpen);
  const changeVisible = show => {
    setShow(show);
    onVisibleChange(show);
  };
  const onMouseEnter = trigger === "hover" ? () => changeVisible(true) : null;
  const onMouseLeave = trigger === "hover" ? () => changeVisible(false) : null;
  const onWindowClick = trigger === "click" ? () => changeVisible(false) : null;

  useEffect(() => {
    window.addEventListener("click", onWindowClick);

    return () => window.removeEventListener("click", onWindowClick);
  });

  useEffect(() => {
    setShow(visible);
  }, [visible]);

  const [position, ref] = useDropdownPosition();

  const classes = classNames("dropdown", className, {
    open: show,
    disabled
  });

  const overlayCls = classNames("dropdown-overlay", {
    open: show
  });

  return (
    <div
      className={classes}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref}
      onClick={e => e.stopPropagation()}
    >
      {cloneElement(children, {
        onClick:
          trigger === "click" && !disabled
            ? e => {
                e.stopPropagation();
                changeVisible(!show);
              }
            : null
      })}
      {createPortal(
        <div className={overlayCls} style={pick(position, ["left", "top"])}>
          {overlay}
        </div>,
        document.body
      )}
    </div>
  );
}

Dropdown.defaultProps = {
  trigger: "click",
  onVisibleChange: nfn
};
Dropdown.propTypes = {
  /** dropdown展示的内容 */
  overlay: PropTypes.any,
  /** 触发展示的方式 */
  trigger: PropTypes.oneOf(["click", "hover"]),
  /** 是否默认展开 */
  defaultOpen: PropTypes.bool,
  /** 主动控制展开收起 */
  visible: PropTypes.bool,
  /** 展开收起的回调 */
  onVisibleChange: PropTypes.func
};

export default Dropdown;
