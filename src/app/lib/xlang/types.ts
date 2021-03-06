export interface XlangJsonConfig {
  id: any;
  langs: string[];
  urlTemplate: string; // '/i18n/xlang.${ lang }.json'
}

export interface XlangResult {
  lang: string;
  json: any;
}
