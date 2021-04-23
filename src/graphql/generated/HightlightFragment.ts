/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL fragment: HightlightFragment
// ====================================================

export interface HightlightFragment_background {
  __typename: "UploadFile";
  url: string;
}

export interface HightlightFragment_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface HightlightFragment {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: HightlightFragment_background | null;
  floatImage: HightlightFragment_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}
