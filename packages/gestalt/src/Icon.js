// @flow strict
import type { Node } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Icon.css';
import icons from './icons/index.js';
import colors from './Colors.css';

export type IconColor =
  | 'blue'
  | 'darkGray'
  | 'eggplant'
  | 'gray'
  | 'green'
  | 'lightGray'
  | 'maroon'
  | 'midnight'
  | 'navy'
  | 'olive'
  | 'orange'
  | 'orchid'
  | 'pine'
  | 'purple'
  | 'red'
  | 'watermelon'
  | 'white';

type Props = {|
  /**
   * Label for the component used for screen readers.
   *
   * See the [Accessibility guidelines](https://gestalt.pinterest.systems/Icon#Accessibility) for details on proper usage.
   */
  accessibilityLabel: string,
  /**
   * Colors to apply to the Icon. We advise to only use primary colors.
   *
   * See the [primary-color combinations](https://gestalt.pinterest.systems/Icon#Primary-color-combinations) variant to learn more.
   */
  color?: IconColor,
  /**
   * SVG icon from the Gestalt icon library to use within Icon.
   *
   * See the [icon combinations](https://gestalt.pinterest.systems/Icon#Icon-combinations) variant to learn more.
   */
  icon?: $Keys<typeof icons>,
  /**
   * Defines a new icon different from the built-in Gestalt icons.
   *
   * See the [icon and SVG](https://gestalt.pinterest.systems/Icon#Size-and-Color-combinations) guidelines to explore the Gestalt icon library.
   */
  dangerouslySetSvgPath?: {| __path: string |},
  /**
   * Properly positions Icon relative to an inline element, such as Text using the inline property.
   *
   * See the [inline](https://gestalt.pinterest.systems/Icon#Accessibility) for details on proper usage.
   */
  inline?: boolean,
  /**
   * Use a number for pixel sizes or a string for percentage based sizes.
   */
  size?: number | string,
|};

// $FlowFixMe[signature-verification-failure] flow 0.135.0 upgrade
const IconNames = Object.keys(icons);

const flipOnRtlIconNames = [
  'ads-stats',
  'ads-overview',
  'arrow-back',
  'arrow-circle-forward',
  'arrow-end',
  'arrow-forward',
  'arrow-start',
  'arrow-up-right',
  'compose',
  'directional-arrow-left',
  'directional-arrow-right',
  'flipVertical',
  'hand-pointing',
  'link',
  'reorder-images',
  'send',
  'sound',
  'speech',
  'speech-ellipsis',
  'switch-account',
  'text-size',
];

/**
 * https://gestalt.pinterest.systems/Icon
 */
export default function Icon({
  accessibilityLabel,
  color = 'gray',
  dangerouslySetSvgPath,
  icon,
  inline = false,
  size = 16,
}: Props): Node {
  const cs = classnames(
    flipOnRtlIconNames.includes(icon) && styles.rtlSupport,
    styles.icon,
    colors[color],
    { [styles.iconBlock]: !inline },
  );

  const path =
    (icon && icons[icon]) ||
    /* eslint-disable-next-line no-underscore-dangle */
    (dangerouslySetSvgPath && dangerouslySetSvgPath.__path) ||
    undefined;

  const ariaHidden = accessibilityLabel === '' ? true : null;

  return (
    <svg
      className={cs}
      height={size}
      width={size}
      viewBox="0 0 24 24"
      aria-hidden={ariaHidden}
      aria-label={accessibilityLabel}
      role="img"
    >
      <path d={path} />
    </svg>
  );
}

Icon.icons = IconNames;

Icon.propTypes = {
  accessibilityLabel: PropTypes.string.isRequired,
  // $FlowFixMe[signature-verification-failure] flow 0.135.0 upgrade
  color: PropTypes.oneOf([
    'blue',
    'darkGray',
    'eggplant',
    'gray',
    'green',
    'lightGray',
    'maroon',
    'midnight',
    'navy',
    'olive',
    'orange',
    'orchid',
    'pine',
    'purple',
    'red',
    'watermelon',
    'white',
  ]),
  // $FlowFixMe[signature-verification-failure] flow 0.135.0 upgrade
  dangerouslySetSvgPath: PropTypes.shape({
    __path: PropTypes.string,
  }),
  // $FlowFixMe[signature-verification-failure] flow 0.135.0 upgrade
  icon: PropTypes.oneOf(IconNames),
  inline: PropTypes.bool,
  // $FlowFixMe[signature-verification-failure] flow 0.135.0 upgrade
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
