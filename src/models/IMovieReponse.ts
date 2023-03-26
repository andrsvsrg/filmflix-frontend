export interface MovieResponse {
  result:         boolean;
  php:            number;
  data:           Datum[];
  current_page:   number;
  from:           number;
  to:             number;
  per_page:       number;
  last_page:      number;
  first_page_url: string;
  last_page_url:  string;
  next_page_url:  string;
  prev_page_url:  string;
  path:           string;
  total:          number;
  total_count:    number;
}

export interface Datum {
  id:               number;
  ru_title:         string;
  orig_title:       string;
  imdb_id:          string;
  kinopoisk_id:     number;
  created:          Date;
  released:         null;
  updated:          Date;
  iframe_src:       string;
  iframe:           string;
  year:             Date;
  content_type:     ContentType;
  media:            Media[];
  translations:     Translation[];
  default_media_id: number;
}

export enum ContentType {
  Movie = "movie",
}

export interface Media {
  id:             number;
  translation_id: number;
  content_id:     number;
  content_type:   ContentType;
  source_quality: SourceQuality;
  max_quality:    number;
  path:           string;
  duration:       number;
  created:        Date;
  accepted:       null;
  deleted_at:     null;
  blocked:        null;
  qualities:      Quality[];
  translation:    Translation;
}

export interface Quality {
  url:        string;
  resolution: number;
  media_id:   number;
}

export enum SourceQuality {
  Bd = "bd",
  Dvdrip = "dvdrip",
  Ts = "ts",
  Webdl = "webdl",
}

export interface Translation {
  id:            number;
  title:         string;
  priority:      number;
  iframe_src:    string;
  iframe:        string;
  short_title:   string;
  smart_title:   string;
  shorter_title: string;
}
