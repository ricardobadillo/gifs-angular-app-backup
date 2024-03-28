export interface SearchGifsResponse {
  data:       Gif[];
  meta:       Meta;
  pagination: Pagination;
}

export interface Gif {
  analytics_response_payload: string;
  analytics:                  Analytics;
  bitly_gif_url:              string;
  bitly_url:                  string;
  content_url:                string;
  embed_url:                  string;
  id:                         string;
  images:                     Images;
  import_datetime:            Date;
  is_sticker:                 number;
  rating:                     Rating;
  slug:                       string;
  source_post_url:            string;
  source_tld:                 string;
  source:                     string;
  title:                      string;
  trending_datetime:          Date;
  type:                       Type;
  url:                        string;
  username:                   string;
}

export interface Analytics {
  onclick: Onclick;
  onload:  Onclick;
  onsent:  Onclick;
}

export interface Onclick {
  url: string;
}

export interface Images {
  "480w_still":             The480_WStill;
  downsized_large:          The480_WStill;
  downsized_medium:         The480_WStill;
  downsized_small:          DownsizedSmall;
  downsized_still:          The480_WStill;
  downsized:                The480_WStill;
  fixed_height_downsampled: FixedHeight;
  fixed_height_small_still: The480_WStill;
  fixed_height_small:       FixedHeight;
  fixed_height_still:       The480_WStill;
  fixed_height:             FixedHeight;
  fixed_width_downsampled:  FixedHeight;
  fixed_width_small_still:  The480_WStill;
  fixed_width_small:        FixedHeight;
  fixed_width_still:        The480_WStill;
  fixed_width:              FixedHeight;
  looping:                  Looping;
  original_mp4:             DownsizedSmall;
  original_still:           The480_WStill;
  original:                 FixedHeight;
  preview_gif:              The480_WStill;
  preview_webp:             The480_WStill;
  preview:                  DownsizedSmall;
}

export interface The480_WStill {
  height: string;
  size:   string;
  url:    string;
  width:  string;
}

export interface DownsizedSmall {
  height:   string;
  mp4_size: string;
  mp4:      string;
  width:    string;
}

export interface FixedHeight {
  frames?:   string;
  hash?:     string;
  height:    string;
  mp4_size?: string;
  mp4?:      string;
  size:      string;
  url:       string;
  webp_size: string;
  webp:      string;
  width:     string;
}

export interface Looping {
  mp4_size: string;
  mp4:      string;
}

export enum Rating {
  G = "g",
  PG = "pg",
}

export enum Type {
  GIF = "gif",
}

export interface Meta {
  msg:         string;
  response_id: string;
  status:      number;
}

export interface Pagination {
  count:       number;
  offset:      number;
  total_count: number;
}
