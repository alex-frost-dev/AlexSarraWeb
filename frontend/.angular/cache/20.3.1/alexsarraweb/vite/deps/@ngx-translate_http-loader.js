import {
  TranslateLoader
} from "./chunk-DRZMNJP2.js";
import {
  HttpBackend,
  HttpClient
} from "./chunk-LVK4XGR6.js";
import "./chunk-MNDS4BZZ.js";
import {
  Injectable,
  InjectionToken,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-QUKQKOAK.js";
import {
  __name,
  __publicField,
  __spreadValues
} from "./chunk-TJFVSI2U.js";

// node_modules/@ngx-translate/http-loader/fesm2022/ngx-translate-http-loader.mjs
var TRANSLATE_HTTP_LOADER_CONFIG = new InjectionToken("TRANSLATE_HTTP_LOADER_CONFIG");
var _TranslateHttpLoader = class _TranslateHttpLoader {
  http;
  config;
  constructor() {
    this.config = __spreadValues({
      prefix: "/assets/i18n/",
      suffix: ".json",
      enforceLoading: false,
      useHttpBackend: false
    }, inject(TRANSLATE_HTTP_LOADER_CONFIG));
    this.http = this.config.useHttpBackend ? new HttpClient(inject(HttpBackend)) : inject(HttpClient);
  }
  /**
   * Gets the translations from the server
   */
  getTranslation(lang) {
    const cacheBuster = this.config.enforceLoading ? `?enforceLoading=${Date.now()}` : "";
    return this.http.get(`${this.config.prefix}${lang}${this.config.suffix}${cacheBuster}`);
  }
};
__name(_TranslateHttpLoader, "TranslateHttpLoader");
__publicField(_TranslateHttpLoader, "ɵfac", /* @__PURE__ */ __name(function TranslateHttpLoader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TranslateHttpLoader)();
}, "TranslateHttpLoader_Factory"));
__publicField(_TranslateHttpLoader, "ɵprov", ɵɵdefineInjectable({
  token: _TranslateHttpLoader,
  factory: _TranslateHttpLoader.ɵfac
}));
var TranslateHttpLoader = _TranslateHttpLoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateHttpLoader, [{
    type: Injectable
  }], () => [], null);
})();
function provideTranslateHttpLoader(config = {}) {
  const useBackend = config.useHttpBackend ?? false;
  return [{
    provide: TRANSLATE_HTTP_LOADER_CONFIG,
    useValue: config
  }, {
    provide: TranslateLoader,
    useClass: TranslateHttpLoader,
    deps: [useBackend ? HttpBackend : HttpClient, TRANSLATE_HTTP_LOADER_CONFIG]
  }];
}
__name(provideTranslateHttpLoader, "provideTranslateHttpLoader");
export {
  TRANSLATE_HTTP_LOADER_CONFIG,
  TranslateHttpLoader,
  provideTranslateHttpLoader
};
//# sourceMappingURL=@ngx-translate_http-loader.js.map
