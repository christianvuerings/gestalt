// @flow strict
import type { Node } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Box from './Box.js';
import Icon from './Icon.js';
import styles from './Spinner.css';

const SIZE_NAME_TO_PIXEL = {
  sm: 32,
  md: 40,
};

type Props = {|
  accessibilityLabel: string,
  delay?: boolean,
  show: boolean,
  size?: 'sm' | 'md',
|};

/**
 * https://gestalt.pinterest.systems/Spinner
 */
export default function Spinner({
  accessibilityLabel,
  delay = true,
  show,
  size = 'md',
}: Props): Node {
  return show ? (
    <Box display="flex" justifyContent="around" overflow="hidden">
      <div className={classnames(styles.icon, { [styles.delay]: delay })}>
        <Icon
          icon="knoop"
          accessibilityLabel={accessibilityLabel}
          size={SIZE_NAME_TO_PIXEL[size]}
        />
      </div>
    </Box>
  ) : (
    <div />
  );
}

Spinner.propTypes = {
  show: PropTypes.bool.isRequired,
  accessibilityLabel: PropTypes.string.isRequired,
  delay: PropTypes.bool,
  // $FlowFixMe[signature-verification-failure] flow 0.135.0 upgrade
  size: PropTypes.oneOf(['sm', 'md']),
};
