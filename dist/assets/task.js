'use strict';



;define("task/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("task/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "task/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class App extends _application.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("task/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("task/components/item", ["exports", "@ember/component", "@ember/template-factory", "@ember/service"], function (_exports, _component, _templateFactory, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <h2>Item Details</h2>
  {{#if this.details}}
    <div>
      <h3>{{this.details.name}}</h3>
      <p>{{this.details.description}}</p>
      <button type="button" {{action "deleteItem" this.details.id}}>Delete</button>
    </div>
  {{else}}
    <p>Item not found.</p>
  {{/if}}
  
  */
  {
    "id": "StsphodC",
    "block": "[[[10,\"h2\"],[12],[1,\"Item Details\"],[13],[1,\"\\n\"],[41,[30,0,[\"details\"]],[[[1,\"  \"],[10,0],[12],[1,\"\\n    \"],[10,\"h3\"],[12],[1,[30,0,[\"details\",\"name\"]]],[13],[1,\"\\n    \"],[10,2],[12],[1,[30,0,[\"details\",\"description\"]]],[13],[1,\"\\n    \"],[11,\"button\"],[24,4,\"button\"],[4,[38,1],[[30,0],\"deleteItem\",[30,0,[\"details\",\"id\"]]],null],[12],[1,\"Delete\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]],[[[1,\"  \"],[10,2],[12],[1,\"Item not found.\"],[13],[1,\"\\n\"]],[]]]],[],false,[\"if\",\"action\"]]",
    "moduleName": "task/components/item.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, _component.default.extend({
    data: (0, _service.inject)(),
    router: (0, _service.inject)(),
    actions: {
      deleteItem(id) {
        this.get('data').removeItem(id);
        this.get('router').transitionTo('items.index');
      }
    }
  }));
});
;define("task/components/items", ["exports", "@ember/component", "@ember/template-factory", "@ember/object", "@ember/service"], function (_exports, _component, _templateFactory, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <Input @type='text' id='new-item' @value={{this.newItem}} placeholder="Enter the item name"/>
  <button type='button' {{action 'addItem'}}>Add Item</button>
  
  <p>Length : {{this.data.length}}</p>
  
  <ul>
    {{#if this.data.length}}
      {{#each this.data.items as |item|}}
        <li>{{#link-to 'items.view' item.id}} {{item.name}} {{/link-to}}</li>
      {{/each}}
    {{else}}
      <p>Nothing to display!</p>
    {{/if}}
  </ul>
  */
  {
    "id": "7aoEmwsC",
    "block": "[[[8,[39,0],[[24,1,\"new-item\"],[24,\"placeholder\",\"Enter the item name\"]],[[\"@type\",\"@value\"],[\"text\",[30,0,[\"newItem\"]]]],null],[1,\"\\n\"],[11,\"button\"],[24,4,\"button\"],[4,[38,1],[[30,0],\"addItem\"],null],[12],[1,\"Add Item\"],[13],[1,\"\\n\\n\"],[10,2],[12],[1,\"Length : \"],[1,[30,0,[\"data\",\"length\"]]],[13],[1,\"\\n\\n\"],[10,\"ul\"],[12],[1,\"\\n\"],[41,[30,0,[\"data\",\"length\"]],[[[42,[28,[37,4],[[28,[37,4],[[30,0,[\"data\",\"items\"]]],null]],null],null,[[[1,\"      \"],[10,\"li\"],[12],[6,[39,5],null,[[\"route\",\"model\"],[\"items.view\",[30,1,[\"id\"]]]],[[\"default\"],[[[[1,\" \"],[1,[30,1,[\"name\"]]],[1,\" \"]],[]]]]],[13],[1,\"\\n\"]],[1]],null]],[]],[[[1,\"    \"],[10,2],[12],[1,\"Nothing to display!\"],[13],[1,\"\\n\"]],[]]],[13]],[\"item\"],false,[\"input\",\"action\",\"if\",\"each\",\"-track-array\",\"link-to\"]]",
    "moduleName": "task/components/items.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, _component.default.extend({
    data: (0, _service.inject)(),
    newItem: '',
    id: 4,
    actions: {
      addItem() {
        const item = {
          id: this.id++,
          name: this.newItem,
          description: 'This is a description'
        };
        this.data.addItem(item);
      }
    }
  }));
});
;define("task/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("task/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("task/helpers/app-version", ["exports", "@ember/component/helper", "task/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }
    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }
    return match ? match[0] : version;
  }
  var _default = _exports.default = (0, _helper.helper)(appVersion);
});
;define("task/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
});
;define("task/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _pageTitle.default;
});
;define("task/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _pluralize.default;
});
;define("task/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _singularize.default;
});
;define("task/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "task/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = _exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define("task/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = {
    name: 'container-debug-adapter',
    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }
  };
});
;define("task/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("task/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = _exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define("task/initializers/export-application-global", ["exports", "ember", "task/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }
      var value = _environment.default.exportApplicationGlobal;
      var globalName;
      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }
      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }
  var _default = _exports.default = {
    name: 'export-application-global',
    initialize: initialize
  };
});
;define("task/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  /* exists only for things that historically used "after" or "before" */
  var _default = _exports.default = {
    name: 'ember-data',
    initialize() {}
  };
});
;define("task/router", ["exports", "@ember/routing/router", "task/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class Router extends _router.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {
    this.route('items', {
      path: '/'
    }, function () {
      this.route('view', {
        path: '/view/:id'
      });
    });
  });
});
;define("task/routes/items", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  class ItemsRoute extends _route.default {}
  _exports.default = ItemsRoute;
});
;define("task/routes/items/index", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  class ItemsIndexRoute extends _route.default {}
  _exports.default = ItemsIndexRoute;
});
;define("task/routes/items/view", ["exports", "ember"], function (_exports, _ember) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _ember.default.Route.extend({
    data: _ember.default.inject.service(),
    model: function (params) {
      const itemId = parseInt(params.id, 10);
      const item = this.get('data.items').findBy('id', itemId);
      return item;
    }
  });
});
;define("task/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("task/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("task/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("task/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
});
;define("task/services/data", ["exports", "@ember/object", "@ember/array", "@ember/service"], function (_exports, _object, _array, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _service.default.extend({
    items: (0, _array.A)([
      // { id: 1, name: 'Item 1', description: 'Description for Item 1' },
      // { id: 2, name: 'Item 2', description: 'Description for Item 2' },
      // { id: 3, name: 'Item 3', description: 'Description for Item 3' },
    ]),
    length: (0, _object.computed)('items', function () {
      return this.items.length;
    }),
    addItem(item) {
      this.items.pushObject(item);
      console.log(this.items);
    },
    removeItem(itemId) {
      const itemToRemove = this.get('items').findBy('id', parseInt(itemId));
      if (itemToRemove) {
        this.get('items').removeObject(itemToRemove);
      }
    }
  });
});
;define("task/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("task/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("task/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("task/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "G/I+WrE0",
    "block": "[[[46,[28,[37,1],null,null],null,null,null]],[],false,[\"component\",\"-outlet\"]]",
    "moduleName": "task/templates/application.hbs",
    "isStrictMode": false
  });
});
;define("task/templates/items", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "m6qAu4hQ",
    "block": "[[[1,[28,[35,0],[\"Items\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n\\n\"]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "task/templates/items.hbs",
    "isStrictMode": false
  });
});
;define("task/templates/items/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "rRs9wmLp",
    "block": "[[[1,[28,[35,0],[\"Index\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n\"],[8,[39,3],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\",\"items\"]]",
    "moduleName": "task/templates/items/index.hbs",
    "isStrictMode": false
  });
});
;define("task/templates/items/view", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "YK72scCQ",
    "block": "[[[1,[28,[35,0],[\"View\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n\"],[8,[39,3],null,[[\"@details\"],[[30,0,[\"model\"]]]],null]],[],false,[\"page-title\",\"component\",\"-outlet\",\"item\"]]",
    "moduleName": "task/templates/items/view.hbs",
    "isStrictMode": false
  });
});
;define("task/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("task/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("task/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("task/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('task/config/environment', [], function() {
  var prefix = 'task';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("task/app")["default"].create({"name":"task","version":"0.0.0+2f643b3c"});
          }
        
//# sourceMappingURL=task.map
