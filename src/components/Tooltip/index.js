import React from "react";
import PropTypes from "prop-types";
import BaseTooltip from "rc-tooltip";

/**
 * 气泡展示
 */
function Tooltip(props) {
  const { content, target, children, trigger, position, ...others } = props;
  return (
    <BaseTooltip
      prefixCls="rcc-tooltip"
      animation="zoom"
      trigger={trigger}
      overlay={content}
      arrowContent={<div className="popover-arrow-inner" />}
      placement={position}
      {...others}
    >
      {target || children}
    </BaseTooltip>
  );
}
Tooltip.defaultProps = {
  trigger: "hover",
  position: "right"
};
Tooltip.propTypes = {
  /** 气泡内容 */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** 触发气泡的元素，默认为children */
  target: PropTypes.element,
  /** 触发方式 */
  trigger: PropTypes.oneOf(["hover", "click"]),
  /** 内容的位置 */
  position: PropTypes.oneOf(["top", "right", "bottom", "left"])
};
export default Tooltip;
