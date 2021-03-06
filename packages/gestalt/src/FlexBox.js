// @flow strict
import React, { type Node } from 'react';
import PropTypes from 'prop-types';
import Box from './Box.js';
import {
  AlignContentPropType,
  AlignItemsPropType,
  AlignSelfPropType,
  DimensionPropType,
  DirectionPropType,
  FlexPropType,
  JustifyContentPropType,
  OverflowPropType,
  PaddingPropType,
  type AlignContent,
  type AlignItems,
  type AlignSelf,
  type Dimension,
  type Direction,
  type Flex,
  type JustifyContent,
  type Overflow,
  type Padding,
} from './boxTypes.js';

type Props = {|
  alignContent?: AlignContent,
  alignItems?: AlignItems,
  alignSelf?: AlignSelf,
  children?: Node,
  direction?: Direction,
  fit?: boolean,
  flex?: Flex,
  height?: Dimension,
  justifyContent?: JustifyContent,

  maxHeight?: Dimension,
  maxWidth?: Dimension,
  minHeight?: Dimension,
  minWidth?: Dimension,

  overflow?: Overflow,

  padding?: Padding,
  smPadding?: Padding,
  mdPadding?: Padding,
  lgPadding?: Padding,

  paddingX?: Padding,
  smPaddingX?: Padding,
  mdPaddingX?: Padding,
  lgPaddingX?: Padding,

  paddingY?: Padding,
  smPaddingY?: Padding,
  mdPaddingY?: Padding,
  lgPaddingY?: Padding,

  width?: Dimension,
  wrap?: boolean,
|};

export default function FlexBox(props: Props): Node {
  return <Box display="flex" {...props} />;
}

FlexBox.propTypes = {
  alignContent: AlignContentPropType,
  alignItems: AlignItemsPropType,
  alignSelf: AlignSelfPropType,
  children: PropTypes.node,
  direction: DirectionPropType,
  fit: PropTypes.bool,
  flex: FlexPropType,
  height: DimensionPropType,
  justifyContent: JustifyContentPropType,

  maxHeight: DimensionPropType,
  maxWidth: DimensionPropType,
  minHeight: DimensionPropType,
  minWidth: DimensionPropType,

  overflow: OverflowPropType,

  padding: PaddingPropType,
  paddingX: PaddingPropType,
  paddingY: PaddingPropType,

  smPadding: PaddingPropType,
  smPaddingX: PaddingPropType,
  smPaddingY: PaddingPropType,

  mdPadding: PaddingPropType,
  mdPaddingX: PaddingPropType,
  mdPaddingY: PaddingPropType,

  lgPadding: PaddingPropType,
  lgPaddingX: PaddingPropType,
  lgPaddingY: PaddingPropType,

  width: DimensionPropType,
  wrap: PropTypes.bool,
};
