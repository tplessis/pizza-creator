import { Point } from 'geojson';

export interface IGeocoderContext {
  id: string;
  wikidata: string;
  text: string;
}

export interface IGeocoderFeature {
  id: string;
  type: 'Feature';
  place_type: Array<string>;
  relevance: number;
  properties: any;
  address: string;
  text: string;
  place_name: string;
  bbox: [number, number, number, number];
  center: [number, number];
  geometry: Point;
  context: Array<IGeocoderContext>;
}

export interface IGeocoderResult {
  type: 'FeatureCollection';
  query: Array<string | number>;
  features: Array<IGeocoderFeature>;
  attribution: string;
}
