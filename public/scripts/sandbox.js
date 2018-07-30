(function () {
	'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (true) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	var invariant_1 = invariant;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	var emptyObject = {};

	if (true) {
	  Object.freeze(emptyObject);
	}

	var emptyObject_1 = emptyObject;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	var emptyFunction_1 = emptyFunction;

	var r="function"===typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,u=r?Symbol.for("react.portal"):60106,v=r?Symbol.for("react.fragment"):60107,w=r?Symbol.for("react.strict_mode"):60108,x=r?Symbol.for("react.profiler"):60114,y=r?Symbol.for("react.provider"):60109,z=r?Symbol.for("react.context"):60110,A=r?Symbol.for("react.async_mode"):60111,B=
	r?Symbol.for("react.forward_ref"):60112;var C="function"===typeof Symbol&&Symbol.iterator;function D(a){for(var b=arguments.length-1,e="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)e+="&args[]="+encodeURIComponent(arguments[c+1]);invariant_1(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e);}
	var E={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function F(a,b,e){this.props=a;this.context=b;this.refs=emptyObject_1;this.updater=e||E;}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?D("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState");};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function G(){}
	G.prototype=F.prototype;function H(a,b,e){this.props=a;this.context=b;this.refs=emptyObject_1;this.updater=e||E;}var I=H.prototype=new G;I.constructor=H;objectAssign(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
	function M(a,b,e){var c=void 0,d={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];d.children=l;}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return {$$typeof:t,type:a,key:g,ref:h,props:d,_owner:J.current}}
	function N(a){return "object"===typeof a&&null!==a&&a.$$typeof===t}function escape(a){var b={"=":"=0",":":"=2"};return "$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,e,c){if(P.length){var d=P.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return {result:a,keyPrefix:b,func:e,context:c,count:0}}function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a);}
	function S(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case t:case u:g=!0;}}if(g)return e(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){d=a[h];var f=b+T(d,h);g+=S(d,f,e,c);}else if(null===a||"undefined"===typeof a?f=null:(f=C&&a[C]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),
	h=0;!(d=a.next()).done;)d=d.value,f=b+T(d,h++),g+=S(d,f,e,c);else"object"===d&&(e=""+a,D("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function T(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function U(a,b){a.func.call(a.context,b,a.count++);}
	function V(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,e,emptyFunction_1.thatReturnsArgument):null!=a&&(N(a)&&(b=d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e,a={$$typeof:t,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}),c.push(a));}function W(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(O,"$&/")+"/");b=Q(b,g,c,d);null==a||S(a,"",V,b);R(b);}
	var X={Children:{map:function(a,b,e){if(null==a)return a;var c=[];W(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=Q(null,null,b,e);null==a||S(a,"",U,b);R(b);},count:function(a){return null==a?0:S(a,"",emptyFunction_1.thatReturnsNull,null)},toArray:function(a){var b=[];W(a,b,null,emptyFunction_1.thatReturnsArgument);return b},only:function(a){N(a)?void 0:D("143");return a}},createRef:function(){return {current:null}},Component:F,PureComponent:H,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:z,
	_calculateChangedBits:b,_defaultValue:a,_currentValue:a,_currentValue2:a,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null};a.Provider={$$typeof:y,_context:a};return a.Consumer=a},forwardRef:function(a){return {$$typeof:B,render:a}},Fragment:v,StrictMode:w,unstable_AsyncMode:A,unstable_Profiler:x,createElement:M,cloneElement:function(a,b,e){null===a||void 0===a?D("267",a):void 0;var c=void 0,d=objectAssign({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=J.current);void 0!==
	b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==l?l[c]:b[c]);}c=arguments.length-2;if(1===c)d.children=e;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];d.children=l;}return {$$typeof:t,type:a.type,key:g,ref:h,props:d,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.4.1",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:J,
	assign:objectAssign}},Y={default:X},Z=Y&&X||Y;var react_production_min=Z.default?Z.default:Z;

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction_1;

	if (true) {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	var warning_1 = warning;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var printWarning$1 = function() {};

	if (true) {
	  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
	  var loggedTypeFailures = {};

	  printWarning$1 = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (true) {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning$1(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );

	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning$1(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	var checkPropTypes_1 = checkPropTypes;

	var react_development = createCommonjsModule(function (module) {



	if (true) {
	  (function() {

	var _assign = objectAssign;
	var invariant = invariant_1;
	var emptyObject = emptyObject_1;
	var warning = warning_1;
	var emptyFunction = emptyFunction_1;
	var checkPropTypes = checkPropTypes_1;

	// TODO: this is special because it gets imported during build.

	var ReactVersion = '16.4.1';

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;

	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_TIMEOUT_TYPE = hasSymbol ? Symbol.for('react.timeout') : 0xead1;

	var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';

	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable === 'undefined') {
	    return null;
	  }
	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }
	  return null;
	}
	// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


	// In some cases, StrictMode should also double-render lifecycles.
	// This can be confusing for tests though,
	// And it can be bad for performance in production.
	// This feature flag can be used to control the behavior:


	// To preserve the "Pause on caught exceptions" behavior of the debugger, we
	// replay the begin phase of a failed component inside invokeGuardedCallback.


	// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:


	// Warn about legacy context API


	// Gather advanced timing metrics for Profiler subtrees.


	// Only used in www builds.

	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var lowPriorityWarning = function () {};

	{
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  lowPriorityWarning = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	var lowPriorityWarning$1 = lowPriorityWarning;

	var didWarnStateUpdateForUnmountedComponent = {};

	function warnNoop(publicInstance, callerName) {
	  {
	    var _constructor = publicInstance.constructor;
	    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
	    var warningKey = componentName + '.' + callerName;
	    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
	      return;
	    }
	    warning(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
	    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
	  }
	}

	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} callerName name of the calling function in the public API.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance, callback, callerName) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} callerName name of the calling function in the public API.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
	    warnNoop(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} Name of the calling function in the public API.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
	    warnNoop(publicInstance, 'setState');
	  }
	};

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function Component(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	Component.prototype.isReactComponent = {};

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	Component.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
	  this.updater.enqueueSetState(this, partialState, callback, 'setState');
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	Component.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	{
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    Object.defineProperty(Component.prototype, methodName, {
	      get: function () {
	        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
	        return undefined;
	      }
	    });
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;

	/**
	 * Convenience component with default shallow equality check for sCU.
	 */
	function PureComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
	pureComponentPrototype.constructor = PureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = true;

	// an immutable object with a single mutable value
	function createRef() {
	  var refObject = {
	    current: null
	  };
	  {
	    Object.seal(refObject);
	  }
	  return refObject;
	}

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	};

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};

	var specialPropKeyWarningShown = void 0;
	var specialPropRefWarningShown = void 0;

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	      warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}

	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	      warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}

	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,

	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,

	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    });
	    // self and source are DEV only properties.
	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    });
	    // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.
	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};

	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://reactjs.org/docs/react-api.html#createelement
	 */
	function createElement(type, config, children) {
	  var propName = void 0;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    {
	      if (Object.freeze) {
	        Object.freeze(childArray);
	      }
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  {
	    if (key || ref) {
	      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	        if (key) {
	          defineKeyPropWarningGetter(props, displayName);
	        }
	        if (ref) {
	          defineRefPropWarningGetter(props, displayName);
	        }
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	}

	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://reactjs.org/docs/react-api.html#createfactory
	 */


	function cloneAndReplaceKey(oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

	  return newElement;
	}

	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://reactjs.org/docs/react-api.html#cloneelement
	 */
	function cloneElement(element, config, children) {
	  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;

	  var propName = void 0;

	  // Original props are copied
	  var props = _assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    // Remaining properties override existing props
	    var defaultProps = void 0;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	}

	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	function isValidElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}

	var ReactDebugCurrentFrame = {};

	{
	  // Component that is being worked on
	  ReactDebugCurrentFrame.getCurrentStack = null;

	  ReactDebugCurrentFrame.getStackAddendum = function () {
	    var impl = ReactDebugCurrentFrame.getCurrentStack;
	    if (impl) {
	      return impl();
	    }
	    return null;
	  };
	}

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';

	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */
	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });

	  return '$' + escapedString;
	}

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var didWarnAboutMaps = false;

	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}

	var POOL_SIZE = 10;
	var traverseContextPool = [];
	function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
	  if (traverseContextPool.length) {
	    var traverseContext = traverseContextPool.pop();
	    traverseContext.result = mapResult;
	    traverseContext.keyPrefix = keyPrefix;
	    traverseContext.func = mapFunction;
	    traverseContext.context = mapContext;
	    traverseContext.count = 0;
	    return traverseContext;
	  } else {
	    return {
	      result: mapResult,
	      keyPrefix: keyPrefix,
	      func: mapFunction,
	      context: mapContext,
	      count: 0
	    };
	  }
	}

	function releaseTraverseContext(traverseContext) {
	  traverseContext.result = null;
	  traverseContext.keyPrefix = null;
	  traverseContext.func = null;
	  traverseContext.context = null;
	  traverseContext.count = 0;
	  if (traverseContextPool.length < POOL_SIZE) {
	    traverseContextPool.push(traverseContext);
	  }
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  var invokeCallback = false;

	  if (children === null) {
	    invokeCallback = true;
	  } else {
	    switch (type) {
	      case 'string':
	      case 'number':
	        invokeCallback = true;
	        break;
	      case 'object':
	        switch (children.$$typeof) {
	          case REACT_ELEMENT_TYPE:
	          case REACT_PORTAL_TYPE:
	            invokeCallback = true;
	        }
	    }
	  }

	  if (invokeCallback) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child = void 0;
	  var nextName = void 0;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (typeof iteratorFn === 'function') {
	      {
	        // Warn about using Maps as children
	        if (iteratorFn === children.entries) {
	          !didWarnAboutMaps ? warning(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', ReactDebugCurrentFrame.getStackAddendum()) : void 0;
	          didWarnAboutMaps = true;
	        }
	      }

	      var iterator = iteratorFn.call(children);
	      var step = void 0;
	      var ii = 0;
	      while (!(step = iterator.next()).done) {
	        child = step.value;
	        nextName = nextNamePrefix + getComponentKey(child, ii++);
	        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
	      }
	      var childrenString = '' + children;
	      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (typeof component === 'object' && component !== null && component.key != null) {
	    // Explicit key
	    return escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func,
	      context = bookKeeping.context;

	  func.call(context, child, bookKeeping.count++);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  releaseTraverseContext(traverseContext);
	}

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result,
	      keyPrefix = bookKeeping.keyPrefix,
	      func = bookKeeping.func,
	      context = bookKeeping.context;


	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (isValidElement(mappedChild)) {
	      mappedChild = cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  releaseTraverseContext(traverseContext);
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrencount
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children) {
	  return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
	}

	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
	  return children;
	}

	function createContext(defaultValue, calculateChangedBits) {
	  if (calculateChangedBits === undefined) {
	    calculateChangedBits = null;
	  } else {
	    {
	      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warning(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
	    }
	  }

	  var context = {
	    $$typeof: REACT_CONTEXT_TYPE,
	    _calculateChangedBits: calculateChangedBits,
	    _defaultValue: defaultValue,
	    _currentValue: defaultValue,
	    // As a workaround to support multiple concurrent renderers, we categorize
	    // some renderers as primary and others as secondary. We only expect
	    // there to be two concurrent renderers at most: React Native (primary) and
	    // Fabric (secondary); React DOM (primary) and React ART (secondary).
	    // Secondary renderers store their context values on separate fields.
	    _currentValue2: defaultValue,
	    _changedBits: 0,
	    _changedBits2: 0,
	    // These are circular
	    Provider: null,
	    Consumer: null
	  };

	  context.Provider = {
	    $$typeof: REACT_PROVIDER_TYPE,
	    _context: context
	  };
	  context.Consumer = context;

	  {
	    context._currentRenderer = null;
	    context._currentRenderer2 = null;
	  }

	  return context;
	}

	function forwardRef(render) {
	  {
	    !(typeof render === 'function') ? warning(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render) : void 0;

	    if (render != null) {
	      !(render.defaultProps == null && render.propTypes == null) ? warning(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
	    }
	  }

	  return {
	    $$typeof: REACT_FORWARD_REF_TYPE,
	    render: render
	  };
	}

	var describeComponentFrame = function (name, source, ownerName) {
	  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	};

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' ||
	  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_ASYNC_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_TIMEOUT_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
	}

	function getComponentName(fiber) {
	  var type = fiber.type;

	  if (typeof type === 'function') {
	    return type.displayName || type.name;
	  }
	  if (typeof type === 'string') {
	    return type;
	  }
	  switch (type) {
	    case REACT_ASYNC_MODE_TYPE:
	      return 'AsyncMode';
	    case REACT_CONTEXT_TYPE:
	      return 'Context.Consumer';
	    case REACT_FRAGMENT_TYPE:
	      return 'ReactFragment';
	    case REACT_PORTAL_TYPE:
	      return 'ReactPortal';
	    case REACT_PROFILER_TYPE:
	      return 'Profiler(' + fiber.pendingProps.id + ')';
	    case REACT_PROVIDER_TYPE:
	      return 'Context.Provider';
	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';
	    case REACT_TIMEOUT_TYPE:
	      return 'Timeout';
	  }
	  if (typeof type === 'object' && type !== null) {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        var functionName = type.render.displayName || type.render.name || '';
	        return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
	    }
	  }
	  return null;
	}

	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */

	var currentlyValidatingElement = void 0;
	var propTypesMisspellWarningShown = void 0;

	var getDisplayName = function () {};
	var getStackAddendum = function () {};

	{
	  currentlyValidatingElement = null;

	  propTypesMisspellWarningShown = false;

	  getDisplayName = function (element) {
	    if (element == null) {
	      return '#empty';
	    } else if (typeof element === 'string' || typeof element === 'number') {
	      return '#text';
	    } else if (typeof element.type === 'string') {
	      return element.type;
	    }

	    var type = element.type;
	    if (type === REACT_FRAGMENT_TYPE) {
	      return 'React.Fragment';
	    } else if (typeof type === 'object' && type !== null && type.$$typeof === REACT_FORWARD_REF_TYPE) {
	      var functionName = type.render.displayName || type.render.name || '';
	      return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
	    } else {
	      return type.displayName || type.name || 'Unknown';
	    }
	  };

	  getStackAddendum = function () {
	    var stack = '';
	    if (currentlyValidatingElement) {
	      var name = getDisplayName(currentlyValidatingElement);
	      var owner = currentlyValidatingElement._owner;
	      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
	    }
	    stack += ReactDebugCurrentFrame.getStackAddendum() || '';
	    return stack;
	  };
	}

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = getComponentName(ReactCurrentOwner.current);
	    if (name) {
	      return '\n\nCheck the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	function getSourceInfoErrorAddendum(elementProps) {
	  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
	    var source = elementProps.__source;
	    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	    var lineNumber = source.lineNumber;
	    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();

	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
	    }
	  }
	  return info;
	}

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	    return;
	  }
	  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwner = '';
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
	  }

	  currentlyValidatingElement = element;
	  {
	    warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum());
	  }
	  currentlyValidatingElement = null;
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    if (typeof iteratorFn === 'function') {
	      // Entry iterators used to provide implicit keys,
	      // but now we print a separate warning for them later.
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step = void 0;
	        while (!(step = iterator.next()).done) {
	          if (isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var type = element.type;
	  var name = void 0,
	      propTypes = void 0;
	  if (typeof type === 'function') {
	    // Class or functional component
	    name = type.displayName || type.name;
	    propTypes = type.propTypes;
	  } else if (typeof type === 'object' && type !== null && type.$$typeof === REACT_FORWARD_REF_TYPE) {
	    // ForwardRef
	    var functionName = type.render.displayName || type.render.name || '';
	    name = functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
	    propTypes = type.propTypes;
	  } else {
	    return;
	  }
	  if (propTypes) {
	    currentlyValidatingElement = element;
	    checkPropTypes(propTypes, element.props, 'prop', name, getStackAddendum);
	    currentlyValidatingElement = null;
	  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	    propTypesMisspellWarningShown = true;
	    warning(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
	  }
	  if (typeof type.getDefaultProps === 'function') {
	    !type.getDefaultProps.isReactClassApproved ? warning(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}

	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */
	function validateFragmentProps(fragment) {
	  currentlyValidatingElement = fragment;

	  var keys = Object.keys(fragment.props);
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (key !== 'children' && key !== 'key') {
	      warning(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.%s', key, getStackAddendum());
	      break;
	    }
	  }

	  if (fragment.ref !== null) {
	    warning(false, 'Invalid attribute `ref` supplied to `React.Fragment`.%s', getStackAddendum());
	  }

	  currentlyValidatingElement = null;
	}

	function createElementWithValidation(type, props, children) {
	  var validType = isValidElementType(type);

	  // We warn in this case but don't throw. We expect the element creation to
	  // succeed and there will likely be errors in render.
	  if (!validType) {
	    var info = '';
	    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	    }

	    var sourceInfo = getSourceInfoErrorAddendum(props);
	    if (sourceInfo) {
	      info += sourceInfo;
	    } else {
	      info += getDeclarationErrorAddendum();
	    }

	    info += getStackAddendum() || '';

	    var typeString = void 0;
	    if (type === null) {
	      typeString = 'null';
	    } else if (Array.isArray(type)) {
	      typeString = 'array';
	    } else {
	      typeString = typeof type;
	    }

	    warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	  }

	  var element = createElement.apply(this, arguments);

	  // The result can be nullish if a mock or a custom function is used.
	  // TODO: Drop this when these are no longer allowed as the type argument.
	  if (element == null) {
	    return element;
	  }

	  // Skip key warning if the type isn't valid since our key validation logic
	  // doesn't expect a non-string/function type and can throw confusing errors.
	  // We don't want exception behavior to differ between dev and prod.
	  // (Rendering will throw with a helpful message and as soon as the type is
	  // fixed, the key warnings will appear.)
	  if (validType) {
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], type);
	    }
	  }

	  if (type === REACT_FRAGMENT_TYPE) {
	    validateFragmentProps(element);
	  } else {
	    validatePropTypes(element);
	  }

	  return element;
	}

	function createFactoryWithValidation(type) {
	  var validatedFactory = createElementWithValidation.bind(null, type);
	  validatedFactory.type = type;
	  // Legacy hook: remove it
	  {
	    Object.defineProperty(validatedFactory, 'type', {
	      enumerable: false,
	      get: function () {
	        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
	        Object.defineProperty(this, 'type', {
	          value: type
	        });
	        return type;
	      }
	    });
	  }

	  return validatedFactory;
	}

	function cloneElementWithValidation(element, props, children) {
	  var newElement = cloneElement.apply(this, arguments);
	  for (var i = 2; i < arguments.length; i++) {
	    validateChildKeys(arguments[i], newElement.type);
	  }
	  validatePropTypes(newElement);
	  return newElement;
	}

	var React = {
	  Children: {
	    map: mapChildren,
	    forEach: forEachChildren,
	    count: countChildren,
	    toArray: toArray,
	    only: onlyChild
	  },

	  createRef: createRef,
	  Component: Component,
	  PureComponent: PureComponent,

	  createContext: createContext,
	  forwardRef: forwardRef,

	  Fragment: REACT_FRAGMENT_TYPE,
	  StrictMode: REACT_STRICT_MODE_TYPE,
	  unstable_AsyncMode: REACT_ASYNC_MODE_TYPE,
	  unstable_Profiler: REACT_PROFILER_TYPE,

	  createElement: createElementWithValidation,
	  cloneElement: cloneElementWithValidation,
	  createFactory: createFactoryWithValidation,
	  isValidElement: isValidElement,

	  version: ReactVersion,

	  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
	    ReactCurrentOwner: ReactCurrentOwner,
	    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
	    assign: _assign
	  }
	};

	{
	  _assign(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
	    // These should not be included in production.
	    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
	    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
	    // TODO: remove in React 17.0.
	    ReactComponentTreeHook: {}
	  });
	}



	var React$2 = Object.freeze({
		default: React
	});

	var React$3 = ( React$2 && React ) || React$2;

	// TODO: decide on the top-level export form.
	// This is hacky but makes it work with both Rollup and Jest.
	var react = React$3.default ? React$3.default : React$3;

	module.exports = react;
	  })();
	}
	});

	var react = createCommonjsModule(function (module) {

	if (false) {
	  module.exports = react_production_min;
	} else {
	  module.exports = react_development;
	}
	});
	var react_1 = react.Children;
	var react_2 = react.Component;
	var react_3 = react.createElement;

	var printWarning$2 = function() {};

	if (true) {
	  printWarning$2 = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (true) {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret_1) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (true && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning$2(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      true ? printWarning$2('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      true ? printWarning$2('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning$2(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = objectAssign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes_1;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	function emptyFunction$1() {}

	var factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret_1) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction$1;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (true) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = factoryWithThrowingShims();
	}
	});

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    getDerivedStateFromProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    callee: true,
	    arguments: true,
	    arity: true
	};

	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

	        if (objectPrototype) {
	            var inheritedComponent = getPrototypeOf(sourceComponent);
	            if (inheritedComponent && inheritedComponent !== objectPrototype) {
	                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	            }
	        }

	        var keys = getOwnPropertyNames(sourceComponent);

	        if (getOwnPropertySymbols$1) {
	            keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
	                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	                try { // Avoid failures from read-only properties
	                    defineProperty(targetComponent, key, descriptor);
	                } catch (e) {}
	            }
	        }

	        return targetComponent;
	    }

	    return targetComponent;
	}

	var hoistNonReactStatics_cjs = hoistNonReactStatics;

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	// https://github.com/styled-components/styled-components/blob/e05b3fe247e9d956bcde786cec376e32afb85bca/src/utils/create-broadcast.js
	var createBroadcast = function createBroadcast(initialState) {
	  var listeners = {};
	  var id = 0;
	  var state = initialState;

	  function publish(nextState) {
	    state = nextState;

	    for (var key in listeners) {
	      // $FlowFixMe
	      var listener = listeners[key];

	      if (listener === undefined) {
	        continue;
	      }

	      listener(state);
	    }
	  }

	  function subscribe(listener) {
	    var currentId = id;
	    listeners[currentId] = listener;
	    id += 1;
	    listener(state);
	    return currentId;
	  }

	  function unsubscribe(unsubID) {
	    listeners[unsubID] = undefined;
	  }

	  return {
	    publish: publish,
	    subscribe: subscribe,
	    unsubscribe: unsubscribe
	  };
	};

	var channel = '__EMOTION_THEMING__';

	var _contextTypes;
	var contextTypes = (_contextTypes = {}, _contextTypes[channel] = propTypes.object, _contextTypes);

	var isPlainObject = function isPlainObject(test) {
	  return Object.prototype.toString.call(test) === '[object Object]';
	};

	// Get the theme from the props, supporting both (outerTheme) => {} as well as object notation
	function getTheme(theme, outerTheme) {
	  if (typeof theme === 'function') {
	    var mergedTheme = theme(outerTheme);

	    if (!isPlainObject(mergedTheme)) {
	      throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
	    }

	    return mergedTheme;
	  }

	  if (!isPlainObject(theme)) {
	    throw new Error('[ThemeProvider] Please make your theme prop a plain object');
	  }

	  if (outerTheme === undefined) {
	    return theme;
	  }

	  return _extends({}, outerTheme, theme);
	}

	var ThemeProvider =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose(ThemeProvider, _Component);

	  function ThemeProvider() {
	    return _Component.apply(this, arguments) || this;
	  }

	  var _proto = ThemeProvider.prototype;

	  _proto.componentWillMount = function componentWillMount() {
	    var _this = this;

	    // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
	    // with the outer theme
	    if (this.context[channel] !== undefined) {
	      this.unsubscribeToOuterId = this.context[channel].subscribe(function (theme) {
	        _this.outerTheme = theme;

	        if (_this.broadcast !== undefined) {
	          _this.publish(_this.props.theme);
	        }
	      });
	    }

	    this.broadcast = createBroadcast(getTheme(this.props.theme, this.outerTheme));
	  };

	  _proto.getChildContext = function getChildContext() {
	    var _ref;

	    return _ref = {}, _ref[channel] = {
	      subscribe: this.broadcast.subscribe,
	      unsubscribe: this.broadcast.unsubscribe
	    }, _ref;
	  };

	  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (this.props.theme !== nextProps.theme) {
	      this.publish(nextProps.theme);
	    }
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    var themeContext = this.context[channel];

	    if (themeContext !== undefined) {
	      themeContext.unsubscribe(this.unsubscribeToOuterId);
	    }
	  };

	  _proto.publish = function publish(theme) {
	    this.broadcast.publish(getTheme(theme, this.outerTheme));
	  };

	  _proto.render = function render() {
	    if (!this.props.children) {
	      return null;
	    }

	    return react_1.only(this.props.children);
	  };

	  ThemeProvider.childContextTypes = contextTypes;
	  ThemeProvider.contextTypes = contextTypes;
	  return ThemeProvider;
	}(react_2);

	var withTheme = function withTheme(Component$$1) {
	  var componentName = Component$$1.displayName || Component$$1.name || 'Component';

	  var WithTheme =
	  /*#__PURE__*/
	  function (_React$Component) {
	    _inheritsLoose(WithTheme, _React$Component);

	    function WithTheme(props) {
	      return _React$Component.call(this, props) || this;
	    }

	    var _proto = WithTheme.prototype;

	    _proto.componentWillMount = function componentWillMount() {
	      var _this = this;

	      var themeContext = this.context[channel];

	      if (themeContext === undefined) {
	        // eslint-disable-next-line no-console
	        console.error('[withTheme] Please use ThemeProvider to be able to use withTheme');
	        return;
	      }

	      this.unsubscribeId = themeContext.subscribe(function (theme) {
	        _this.setState({
	          theme: theme
	        });
	      });
	    };

	    _proto.componentWillUnmount = function componentWillUnmount() {
	      if (this.unsubscribeId !== -1) {
	        this.context[channel].unsubscribe(this.unsubscribeId);
	      }
	    };

	    _proto.render = function render() {
	      return react_3(Component$$1, _extends({
	        theme: this.state.theme
	      }, this.props));
	    };

	    return WithTheme;
	  }(react_2);

	  WithTheme.displayName = "WithTheme(" + componentName + ")";
	  WithTheme.contextTypes = contextTypes;
	  return hoistNonReactStatics_cjs(WithTheme, Component$$1);
	};

	var index_esm = /*#__PURE__*/Object.freeze({
		ThemeProvider: ThemeProvider,
		withTheme: withTheme,
		channel: channel,
		contextTypes: contextTypes,
		createBroadcast: createBroadcast
	});

	var _global = createCommonjsModule(function (module) {
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
	});

	var _core = createCommonjsModule(function (module) {
	var core = module.exports = { version: '2.5.7' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
	});
	var _core_1 = _core.version;

	var _aFunction = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

	// optional / simple context binding

	var _ctx = function (fn, that, length) {
	  _aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var _isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var _anObject = function (it) {
	  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

	var _fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var _descriptors = !_fails(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});

	var document$1 = _global.document;
	// typeof document.createElement is 'object' in old IE
	var is = _isObject(document$1) && _isObject(document$1.createElement);
	var _domCreate = function (it) {
	  return is ? document$1.createElement(it) : {};
	};

	var _ie8DomDefine = !_descriptors && !_fails(function () {
	  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
	});

	// 7.1.1 ToPrimitive(input [, PreferredType])

	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var _toPrimitive = function (it, S) {
	  if (!_isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var dP = Object.defineProperty;

	var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  _anObject(O);
	  P = _toPrimitive(P, true);
	  _anObject(Attributes);
	  if (_ie8DomDefine) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var _objectDp = {
		f: f
	};

	var _propertyDesc = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var _hide = _descriptors ? function (object, key, value) {
	  return _objectDp.f(object, key, _propertyDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var hasOwnProperty$1 = {}.hasOwnProperty;
	var _has = function (it, key) {
	  return hasOwnProperty$1.call(it, key);
	};

	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && _has(exports, key)) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? _ctx(out, _global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	var _export = $export;

	var toString = {}.toString;

	var _cof = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	// fallback for non-array-like ES3 and non-enumerable old V8 strings

	// eslint-disable-next-line no-prototype-builtins
	var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return _cof(it) == 'String' ? it.split('') : Object(it);
	};

	// 7.2.1 RequireObjectCoercible(argument)
	var _defined = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

	// to indexed object, toObject with fallback for non-array-like ES3 strings


	var _toIobject = function (it) {
	  return _iobject(_defined(it));
	};

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	var _toInteger = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

	// 7.1.15 ToLength

	var min = Math.min;
	var _toLength = function (it) {
	  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

	var max = Math.max;
	var min$1 = Math.min;
	var _toAbsoluteIndex = function (index, length) {
	  index = _toInteger(index);
	  return index < 0 ? max(index + length, 0) : min$1(index, length);
	};

	// false -> Array#indexOf
	// true  -> Array#includes



	var _arrayIncludes = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = _toIobject($this);
	    var length = _toLength(O.length);
	    var index = _toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var _library = true;

	var _shared = createCommonjsModule(function (module) {
	var SHARED = '__core-js_shared__';
	var store = _global[SHARED] || (_global[SHARED] = {});

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: _core.version,
	  mode: _library ? 'pure' : 'global',
	  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
	});
	});

	var id = 0;
	var px = Math.random();
	var _uid = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

	var shared = _shared('keys');

	var _sharedKey = function (key) {
	  return shared[key] || (shared[key] = _uid(key));
	};

	var arrayIndexOf = _arrayIncludes(false);
	var IE_PROTO = _sharedKey('IE_PROTO');

	var _objectKeysInternal = function (object, names) {
	  var O = _toIobject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (_has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE 8- don't enum bug keys
	var _enumBugKeys = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)



	var _objectKeys = Object.keys || function keys(O) {
	  return _objectKeysInternal(O, _enumBugKeys);
	};

	var f$1 = Object.getOwnPropertySymbols;

	var _objectGops = {
		f: f$1
	};

	var f$2 = {}.propertyIsEnumerable;

	var _objectPie = {
		f: f$2
	};

	// 7.1.13 ToObject(argument)

	var _toObject = function (it) {
	  return Object(_defined(it));
	};

	// 19.1.2.1 Object.assign(target, source, ...)





	var $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	var _objectAssign = !$assign || _fails(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = _toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = _objectGops.f;
	  var isEnum = _objectPie.f;
	  while (aLen > index) {
	    var S = _iobject(arguments[index++]);
	    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;

	// 19.1.3.1 Object.assign(target, source)


	_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

	var assign = _core.Object.assign;

	var assign$1 = createCommonjsModule(function (module) {
	module.exports = { "default": assign, __esModule: true };
	});

	unwrapExports(assign$1);

	var _extends$1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _assign2 = _interopRequireDefault(assign$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};
	});

	unwrapExports(_extends$1);

	var objectWithoutProperties = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;

	exports.default = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};
	});

	unwrapExports(objectWithoutProperties);

	var chromeDark = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var theme = {
	  BASE_FONT_FAMILY: 'Menlo, monospace',
	  BASE_FONT_SIZE: '11px',
	  BASE_LINE_HEIGHT: '14px',

	  BASE_BACKGROUND_COLOR: 'rgb(36, 36, 36)',
	  BASE_COLOR: 'rgb(213, 213, 213)',

	  OBJECT_NAME_COLOR: 'rgb(227, 110, 236)',
	  OBJECT_VALUE_NULL_COLOR: 'rgb(127, 127, 127)',
	  OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(127, 127, 127)',
	  OBJECT_VALUE_REGEXP_COLOR: 'rgb(233, 63, 59)',
	  OBJECT_VALUE_STRING_COLOR: 'rgb(233, 63, 59)',
	  OBJECT_VALUE_SYMBOL_COLOR: 'rgb(233, 63, 59)',
	  OBJECT_VALUE_NUMBER_COLOR: 'hsl(252, 100%, 75%)',
	  OBJECT_VALUE_BOOLEAN_COLOR: 'hsl(252, 100%, 75%)',
	  OBJECT_VALUE_FUNCTION_KEYWORD_COLOR: 'rgb(242, 85, 217)',

	  HTML_TAG_COLOR: 'rgb(93, 176, 215)',
	  HTML_TAGNAME_COLOR: 'rgb(93, 176, 215)',
	  HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
	  HTML_ATTRIBUTE_NAME_COLOR: 'rgb(155, 187, 220)',
	  HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(242, 151, 102)',
	  HTML_COMMENT_COLOR: 'rgb(137, 137, 137)',
	  HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',

	  ARROW_COLOR: 'rgb(145, 145, 145)',
	  ARROW_MARGIN_RIGHT: 3,
	  ARROW_FONT_SIZE: 12,

	  TREENODE_FONT_FAMILY: 'Menlo, monospace',
	  TREENODE_FONT_SIZE: '11px',
	  TREENODE_LINE_HEIGHT: '14px',
	  TREENODE_PADDING_LEFT: 12,

	  TABLE_BORDER_COLOR: 'rgb(85, 85, 85)',
	  TABLE_TH_BACKGROUND_COLOR: 'rgb(44, 44, 44)',
	  TABLE_TH_HOVER_COLOR: 'rgb(48, 48, 48)',
	  TABLE_SORT_ICON_COLOR: 'black', //'rgb(48, 57, 66)',
	  TABLE_DATA_BACKGROUND_IMAGE: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))',
	  TABLE_DATA_BACKGROUND_SIZE: '128px 32px'
	};

	exports.default = theme;
	});

	unwrapExports(chromeDark);

	var chromeLight = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var theme = {
	  BASE_FONT_FAMILY: 'Menlo, monospace',
	  BASE_FONT_SIZE: '11px',
	  BASE_LINE_HEIGHT: '14px',

	  BASE_BACKGROUND_COLOR: 'white',
	  BASE_COLOR: 'black',

	  OBJECT_NAME_COLOR: 'rgb(136, 19, 145)',
	  OBJECT_VALUE_NULL_COLOR: 'rgb(128, 128, 128)',
	  OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(128, 128, 128)',
	  OBJECT_VALUE_REGEXP_COLOR: 'rgb(196, 26, 22)',
	  OBJECT_VALUE_STRING_COLOR: 'rgb(196, 26, 22)',
	  OBJECT_VALUE_SYMBOL_COLOR: 'rgb(196, 26, 22)',
	  OBJECT_VALUE_NUMBER_COLOR: 'rgb(28, 0, 207)',
	  OBJECT_VALUE_BOOLEAN_COLOR: 'rgb(28, 0, 207)',
	  OBJECT_VALUE_FUNCTION_KEYWORD_COLOR: 'rgb(170, 13, 145)',

	  HTML_TAG_COLOR: 'rgb(168, 148, 166)',
	  HTML_TAGNAME_COLOR: 'rgb(136, 18, 128)',
	  HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
	  HTML_ATTRIBUTE_NAME_COLOR: 'rgb(153, 69, 0)',
	  HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(26, 26, 166)',
	  HTML_COMMENT_COLOR: 'rgb(35, 110, 37)',
	  HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',

	  ARROW_COLOR: '#6e6e6e',
	  ARROW_MARGIN_RIGHT: 3,
	  ARROW_FONT_SIZE: 12,

	  TREENODE_FONT_FAMILY: 'Menlo, monospace',
	  TREENODE_FONT_SIZE: '11px',
	  TREENODE_LINE_HEIGHT: '14px',
	  TREENODE_PADDING_LEFT: 12,

	  TABLE_BORDER_COLOR: '#aaa',
	  TABLE_TH_BACKGROUND_COLOR: '#eee',
	  TABLE_TH_HOVER_COLOR: 'hsla(0, 0%, 90%, 1)',
	  TABLE_SORT_ICON_COLOR: '#6e6e6e',
	  TABLE_DATA_BACKGROUND_IMAGE: 'linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))',
	  TABLE_DATA_BACKGROUND_SIZE: '128px 32px'
	};

	exports.default = theme;
	});

	unwrapExports(chromeLight);

	var themes = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.chromeLight = exports.chromeDark = undefined;



	var _chromeDark3 = _interopRequireDefault(chromeDark);



	var _chromeLight3 = _interopRequireDefault(chromeLight);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.chromeDark = _chromeDark3.default;
	exports.chromeLight = _chromeLight3.default;
	});

	unwrapExports(themes);
	var themes_1 = themes.chromeLight;
	var themes_2 = themes.chromeDark;

	var classCallCheck = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	});

	unwrapExports(classCallCheck);

	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

	var $Object = _core.Object;
	var defineProperty$1 = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};

	var defineProperty$2 = createCommonjsModule(function (module) {
	module.exports = { "default": defineProperty$1, __esModule: true };
	});

	unwrapExports(defineProperty$2);

	var createClass = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _defineProperty2 = _interopRequireDefault(defineProperty$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();
	});

	unwrapExports(createClass);

	// true  -> String#at
	// false -> String#codePointAt
	var _stringAt = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(_defined(that));
	    var i = _toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

	var _redefine = _hide;

	var _iterators = {};

	var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	  _anObject(O);
	  var keys = _objectKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

	var document$2 = _global.document;
	var _html = document$2 && document$2.documentElement;

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



	var IE_PROTO$1 = _sharedKey('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE$1 = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = _domCreate('iframe');
	  var i = _enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  _html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
	  return createDict();
	};

	var _objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE$1] = _anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE$1] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : _objectDps(result, Properties);
	};

	var _wks = createCommonjsModule(function (module) {
	var store = _shared('wks');

	var Symbol = _global.Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
	};

	$exports.store = store;
	});

	var def = _objectDp.f;

	var TAG = _wks('toStringTag');

	var _setToStringTag = function (it, tag, stat) {
	  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

	var _iterCreate = function (Constructor, NAME, next) {
	  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
	  _setToStringTag(Constructor, NAME + ' Iterator');
	};

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


	var IE_PROTO$2 = _sharedKey('IE_PROTO');
	var ObjectProto = Object.prototype;

	var _objectGpo = Object.getPrototypeOf || function (O) {
	  O = _toObject(O);
	  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

	var ITERATOR = _wks('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  _iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      _setToStringTag(IteratorPrototype, TAG, true);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    _hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  _iterators[NAME] = $default;
	  _iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) _redefine(proto, key, methods[key]);
	    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

	var $at = _stringAt(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	_iterDefine(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

	var _iterStep = function (done, value) {
	  return { value: value, done: !!done };
	};

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
	  this._t = _toIobject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return _iterStep(1);
	  }
	  if (kind == 'keys') return _iterStep(0, index);
	  if (kind == 'values') return _iterStep(0, O[index]);
	  return _iterStep(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	_iterators.Arguments = _iterators.Array;

	var TO_STRING_TAG = _wks('toStringTag');

	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');

	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = _global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
	  _iterators[NAME] = _iterators.Array;
	}

	var f$3 = _wks;

	var _wksExt = {
		f: f$3
	};

	var iterator = _wksExt.f('iterator');

	var iterator$1 = createCommonjsModule(function (module) {
	module.exports = { "default": iterator, __esModule: true };
	});

	unwrapExports(iterator$1);

	var _meta = createCommonjsModule(function (module) {
	var META = _uid('meta');


	var setDesc = _objectDp.f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !_fails(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!_has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!_has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};
	});
	var _meta_1 = _meta.KEY;
	var _meta_2 = _meta.NEED;
	var _meta_3 = _meta.fastKey;
	var _meta_4 = _meta.getWeak;
	var _meta_5 = _meta.onFreeze;

	var defineProperty$4 = _objectDp.f;
	var _wksDefine = function (name) {
	  var $Symbol = _core.Symbol || (_core.Symbol = {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$4($Symbol, name, { value: _wksExt.f(name) });
	};

	// all enumerable object keys, includes symbols



	var _enumKeys = function (it) {
	  var result = _objectKeys(it);
	  var getSymbols = _objectGops.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = _objectPie.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};

	// 7.2.2 IsArray(argument)

	var _isArray = Array.isArray || function isArray(arg) {
	  return _cof(arg) == 'Array';
	};

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

	var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

	var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return _objectKeysInternal(O, hiddenKeys);
	};

	var _objectGopn = {
		f: f$4
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

	var gOPN = _objectGopn.f;
	var toString$1 = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	var f$5 = function getOwnPropertyNames(it) {
	  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(_toIobject(it));
	};

	var _objectGopnExt = {
		f: f$5
	};

	var gOPD = Object.getOwnPropertyDescriptor;

	var f$6 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = _toIobject(O);
	  P = _toPrimitive(P, true);
	  if (_ie8DomDefine) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
	};

	var _objectGopd = {
		f: f$6
	};

	// ECMAScript 6 symbols shim





	var META = _meta.KEY;



















	var gOPD$1 = _objectGopd.f;
	var dP$1 = _objectDp.f;
	var gOPN$1 = _objectGopnExt.f;
	var $Symbol = _global.Symbol;
	var $JSON = _global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE$2 = 'prototype';
	var HIDDEN = _wks('_hidden');
	var TO_PRIMITIVE = _wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = _shared('symbol-registry');
	var AllSymbols = _shared('symbols');
	var OPSymbols = _shared('op-symbols');
	var ObjectProto$1 = Object[PROTOTYPE$2];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = _global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = _descriptors && _fails(function () {
	  return _objectCreate(dP$1({}, 'a', {
	    get: function () { return dP$1(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD$1(ObjectProto$1, key);
	  if (protoDesc) delete ObjectProto$1[key];
	  dP$1(it, key, D);
	  if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
	} : dP$1;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
	  _anObject(it);
	  key = _toPrimitive(key, true);
	  _anObject(D);
	  if (_has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP$1(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  _anObject(it);
	  var keys = _enumKeys(P = _toIobject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = _toPrimitive(key, true));
	  if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
	  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = _toIobject(it);
	  key = _toPrimitive(key, true);
	  if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
	  var D = gOPD$1(it, key);
	  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN$1(_toIobject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto$1;
	  var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto$1) $set.call(OPSymbols, value);
	      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, _propertyDesc(1, value));
	    };
	    if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
	    return this._k;
	  });

	  _objectGopd.f = $getOwnPropertyDescriptor;
	  _objectDp.f = $defineProperty;
	  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
	  _objectPie.f = $propertyIsEnumerable;
	  _objectGops.f = $getOwnPropertySymbols;

	  if (_descriptors && !_library) {
	    _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  _wksExt.f = function (name) {
	    return wrap(_wks(name));
	  };
	}

	_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

	for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

	_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return _has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!_isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	_setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	_setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	_setToStringTag(_global.JSON, 'JSON', true);

	_wksDefine('asyncIterator');

	_wksDefine('observable');

	var symbol = _core.Symbol;

	var symbol$1 = createCommonjsModule(function (module) {
	module.exports = { "default": symbol, __esModule: true };
	});

	unwrapExports(symbol$1);

	var _typeof_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _iterator2 = _interopRequireDefault(iterator$1);



	var _symbol2 = _interopRequireDefault(symbol$1);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};
	});

	unwrapExports(_typeof_1);

	var possibleConstructorReturn = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _typeof3 = _interopRequireDefault(_typeof_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};
	});

	unwrapExports(possibleConstructorReturn);

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */


	var check = function (O, proto) {
	  _anObject(O);
	  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	var _setProto = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

	// 19.1.3.19 Object.setPrototypeOf(O, proto)

	_export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

	var setPrototypeOf = _core.Object.setPrototypeOf;

	var setPrototypeOf$1 = createCommonjsModule(function (module) {
	module.exports = { "default": setPrototypeOf, __esModule: true };
	});

	unwrapExports(setPrototypeOf$1);

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	_export(_export.S, 'Object', { create: _objectCreate });

	var $Object$1 = _core.Object;
	var create = function create(P, D) {
	  return $Object$1.create(P, D);
	};

	var create$1 = createCommonjsModule(function (module) {
	module.exports = { "default": create, __esModule: true };
	});

	unwrapExports(create$1);

	var inherits = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _setPrototypeOf2 = _interopRequireDefault(setPrototypeOf$1);



	var _create2 = _interopRequireDefault(create$1);



	var _typeof3 = _interopRequireDefault(_typeof_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};
	});

	unwrapExports(inherits);

	var runtime = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	!(function(global) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = module.exports;

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = "Generator";

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }

	      return ContinueSentinel;
	    }
	  };
	})(
	  // In sloppy mode, unbound `this` refers to the global object, fallback to
	  // Function constructor if we're in global strict mode. That is sadly a form
	  // of indirect eval which violates Content Security Policy.
	  (function() { return this })() || Function("return this")()
	);
	});

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g = (function() { return this })() || Function("return this")();

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	var runtimeModule = runtime;

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}

	var regenerator = runtimeModule;

	// getting tag from 19.1.3.6 Object.prototype.toString()

	var TAG$1 = _wks('toStringTag');
	// ES3 wrong here
	var ARG = _cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	var _classof = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
	    // builtinTag case
	    : ARG ? _cof(O)
	    // ES3 arguments fallback
	    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

	var ITERATOR$1 = _wks('iterator');

	var core_isIterable = _core.isIterable = function (it) {
	  var O = Object(it);
	  return O[ITERATOR$1] !== undefined
	    || '@@iterator' in O
	    // eslint-disable-next-line no-prototype-builtins
	    || _iterators.hasOwnProperty(_classof(O));
	};

	var isIterable = core_isIterable;

	var isIterable$1 = createCommonjsModule(function (module) {
	module.exports = { "default": isIterable, __esModule: true };
	});

	unwrapExports(isIterable$1);

	var ITERATOR$2 = _wks('iterator');

	var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR$2]
	    || it['@@iterator']
	    || _iterators[_classof(it)];
	};

	var core_getIterator = _core.getIterator = function (it) {
	  var iterFn = core_getIteratorMethod(it);
	  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
	  return _anObject(iterFn.call(it));
	};

	var getIterator = core_getIterator;

	var getIterator$1 = createCommonjsModule(function (module) {
	module.exports = { "default": getIterator, __esModule: true };
	});

	unwrapExports(getIterator$1);

	var slicedToArray = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _isIterable3 = _interopRequireDefault(isIterable$1);



	var _getIterator3 = _interopRequireDefault(getIterator$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();
	});

	unwrapExports(slicedToArray);

	var defineProperty$5 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _defineProperty2 = _interopRequireDefault(defineProperty$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};
	});

	unwrapExports(defineProperty$5);

	var unselectable = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  WebkitTouchCallout: 'none',
	  WebkitUserSelect: 'none',
	  KhtmlUserSelect: 'none',
	  MozUserSelect: 'none',
	  msUserSelect: 'none',
	  OUserSelect: 'none',
	  userSelect: 'none'
	};
	});

	unwrapExports(unselectable);

	var base = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _extends3 = _interopRequireDefault(_extends$1);



	var _unselectable2 = _interopRequireDefault(unselectable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (theme) {
	  return {
	    DOMNodePreview: {
	      htmlOpenTag: {
	        base: {
	          color: theme.HTML_TAG_COLOR
	        },
	        tagName: {
	          color: theme.HTML_TAGNAME_COLOR,
	          textTransform: theme.HTML_TAGNAME_TEXT_TRANSFORM
	        },
	        htmlAttributeName: {
	          color: theme.HTML_ATTRIBUTE_NAME_COLOR
	        },
	        htmlAttributeValue: {
	          color: theme.HTML_ATTRIBUTE_VALUE_COLOR
	        }
	      },
	      htmlCloseTag: {
	        base: {
	          color: theme.HTML_TAG_COLOR
	        },
	        offsetLeft: {
	          /* hack: offset placeholder */
	          marginLeft: -theme.TREENODE_PADDING_LEFT
	        },
	        tagName: {
	          color: theme.HTML_TAGNAME_COLOR,
	          textTransform: theme.HTML_TAGNAME_TEXT_TRANSFORM
	        }
	      },
	      htmlComment: {
	        color: theme.HTML_COMMENT_COLOR
	      },
	      htmlDoctype: {
	        color: theme.HTML_DOCTYPE_COLOR
	      }
	    },

	    ObjectName: {
	      base: {
	        color: theme.OBJECT_NAME_COLOR
	      },
	      dimmed: {
	        opacity: 0.6
	      }
	    },

	    ObjectValue: {
	      objectValueNull: {
	        color: theme.OBJECT_VALUE_NULL_COLOR
	      },
	      objectValueUndefined: {
	        color: theme.OBJECT_VALUE_UNDEFINED_COLOR
	      },
	      objectValueRegExp: {
	        color: theme.OBJECT_VALUE_REGEXP_COLOR
	      },
	      objectValueString: {
	        color: theme.OBJECT_VALUE_STRING_COLOR
	      },
	      objectValueSymbol: {
	        color: theme.OBJECT_VALUE_SYMBOL_COLOR
	      },
	      objectValueNumber: {
	        color: theme.OBJECT_VALUE_NUMBER_COLOR
	      },
	      objectValueBoolean: {
	        color: theme.OBJECT_VALUE_BOOLEAN_COLOR
	      },
	      objectValueFunctionKeyword: {
	        color: theme.OBJECT_VALUE_FUNCTION_KEYWORD_COLOR,
	        fontStyle: 'italic'
	      },
	      objectValueFunctionName: {
	        fontStyle: 'italic'
	      }
	    },

	    TreeNode: {
	      treeNodeBase: {
	        color: theme.BASE_COLOR,
	        backgroundColor: theme.BASE_BACKGROUND_COLOR,

	        lineHeight: theme.TREENODE_LINE_HEIGHT,
	        cursor: 'default',

	        boxSizing: 'border-box',
	        listStyle: 'none',

	        fontFamily: theme.TREENODE_FONT_FAMILY,
	        fontSize: theme.TREENODE_FONT_SIZE
	      },
	      treeNodePreviewContainer: {},
	      treeNodePlaceholder: (0, _extends3.default)({
	        whiteSpace: 'pre',

	        fontSize: theme.ARROW_FONT_SIZE,
	        marginRight: theme.ARROW_MARGIN_RIGHT
	      }, _unselectable2.default),
	      treeNodeArrow: {
	        base: (0, _extends3.default)({
	          color: theme.ARROW_COLOR,
	          display: 'inline-block',
	          // lineHeight: '14px',
	          fontSize: theme.ARROW_FONT_SIZE,
	          marginRight: theme.ARROW_MARGIN_RIGHT
	        }, _unselectable2.default),
	        expanded: {
	          WebkitTransform: 'rotateZ(90deg)',
	          MozTransform: 'rotateZ(90deg)',
	          transform: 'rotateZ(90deg)'
	        },
	        collapsed: {
	          WebkitTransform: 'rotateZ(0deg)',
	          MozTransform: 'rotateZ(0deg)',
	          transform: 'rotateZ(0deg)'
	        }
	      },
	      treeNodeChildNodesContainer: {
	        margin: 0, // reset user-agent style
	        paddingLeft: theme.TREENODE_PADDING_LEFT
	      }
	    },

	    TableInspector: {
	      base: {
	        color: theme.BASE_COLOR,

	        position: 'relative',
	        border: '1px solid ' + theme.TABLE_BORDER_COLOR,
	        fontFamily: theme.BASE_FONT_FAMILY,
	        fontSize: theme.BASE_FONT_SIZE,
	        lineHeight: '120%',
	        boxSizing: 'border-box',
	        cursor: 'default'
	      }
	    },

	    TableInspectorHeaderContainer: {
	      base: {
	        top: 0,
	        height: '17px',
	        left: 0,
	        right: 0,
	        overflowX: 'hidden'
	      },
	      table: {
	        tableLayout: 'fixed',
	        borderSpacing: 0,
	        borderCollapse: 'separate',
	        height: '100%',
	        width: '100%',
	        margin: 0
	      }
	    },

	    TableInspectorDataContainer: {
	      tr: {
	        display: 'table-row'
	      },
	      td: {
	        boxSizing: 'border-box',
	        border: 'none', // prevent overrides
	        height: '16px', // /* 0.5 * table.background-size height */
	        verticalAlign: 'top',
	        padding: '1px 4px',
	        WebkitUserSelect: 'text',

	        whiteSpace: 'nowrap',
	        textOverflow: 'ellipsis',
	        overflow: 'hidden',
	        lineHeight: '14px'
	      },
	      div: {
	        position: 'static',
	        top: '17px',
	        bottom: 0,
	        overflowY: 'overlay',
	        transform: 'translateZ(0)',

	        left: 0,
	        right: 0,
	        overflowX: 'hidden'
	      },
	      table: {
	        positon: 'static',
	        left: 0,
	        top: 0,
	        right: 0,
	        bottom: 0,
	        borderTop: '0 none transparent',
	        margin: 0, // prevent user agent stylesheet overrides

	        backgroundImage: theme.TABLE_DATA_BACKGROUND_IMAGE,
	        backgroundSize: theme.TABLE_DATA_BACKGROUND_SIZE,
	        tableLayout: 'fixed',

	        // table
	        borderSpacing: 0,
	        borderCollapse: 'separate',
	        // height: '100%',
	        width: '100%',

	        fontSize: theme.BASE_FONT_SIZE,
	        lineHeight: '120%'
	      }
	    },

	    TableInspectorTH: {
	      base: {
	        position: 'relative', // anchor for sort icon container
	        height: 'auto',
	        textAlign: 'left',
	        backgroundColor: theme.TABLE_TH_BACKGROUND_COLOR,
	        borderBottom: '1px solid ' + theme.TABLE_BORDER_COLOR,
	        fontWeight: 'normal',
	        verticalAlign: 'middle',
	        padding: '0 4px',

	        whiteSpace: 'nowrap',
	        textOverflow: 'ellipsis',
	        overflow: 'hidden',
	        lineHeight: '14px',

	        ':hover': {
	          backgroundColor: theme.TABLE_TH_HOVER_COLOR
	        }
	      },
	      div: {
	        whiteSpace: 'nowrap',
	        textOverflow: 'ellipsis',
	        overflow: 'hidden',

	        // prevent user agent stylesheet overrides
	        fontSize: theme.BASE_FONT_SIZE,
	        lineHeight: '120%'
	      }
	    },

	    TableInspectorLeftBorder: {
	      none: {
	        borderLeft: 'none'
	      },
	      solid: {
	        borderLeft: '1px solid ' + theme.TABLE_BORDER_COLOR
	      }
	    },

	    TableInspectorSortIcon: (0, _extends3.default)({
	      display: 'block',
	      marginRight: 3, // 4,
	      width: 8,
	      height: 7,

	      marginTop: -7,
	      color: theme.TABLE_SORT_ICON_COLOR,
	      fontSize: 12
	    }, _unselectable2.default)
	  };
	};
	});

	unwrapExports(base);

	var createStyles_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _typeof3 = _interopRequireDefault(_typeof_1);



	var themes$$1 = _interopRequireWildcard(themes);



	var _base2 = _interopRequireDefault(base);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var styles = Object.keys(themes$$1).reduce(function (styles, themeName) {
	  styles[themeName] = (0, _base2.default)(themes$$1[themeName]);
	  return styles;
	}, {});

	var createStyles = function createStyles(key, theme) {
	  // console.debug(styles, theme, styles[theme])
	  if (typeof theme === 'string') {
	    return styles[theme][key];
	  } else if ((typeof theme === 'undefined' ? 'undefined' : (0, _typeof3.default)(theme)) === 'object') {
	    return (0, _base2.default)(theme)[key];
	  }
	  // Default styles
	  return styles['chromeLight'][key];
	};

	exports.default = createStyles;
	});

	unwrapExports(createStyles_1);

	var TreeNode_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _classCallCheck3 = _interopRequireDefault(classCallCheck);



	var _createClass3 = _interopRequireDefault(createClass);



	var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



	var _inherits3 = _interopRequireDefault(inherits);



	var _extends3 = _interopRequireDefault(_extends$1);



	var _react2 = _interopRequireDefault(react);



	var _propTypes2 = _interopRequireDefault(propTypes);



	var _createStyles2 = _interopRequireDefault(createStyles_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Arrow = function Arrow(_ref) {
	  var expanded = _ref.expanded,
	      styles = _ref.styles;
	  return _react2.default.createElement(
	    'span',
	    { style: (0, _extends3.default)({}, styles.base, expanded ? styles.expanded : styles.collapsed) },
	    '\u25B6'
	  );
	};

	var TreeNode = function (_Component) {
	  (0, _inherits3.default)(TreeNode, _Component);

	  function TreeNode() {
	    (0, _classCallCheck3.default)(this, TreeNode);
	    return (0, _possibleConstructorReturn3.default)(this, (TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(TreeNode, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          expanded = _props.expanded,
	          onClick = _props.onClick,
	          children = _props.children,
	          nodeRenderer = _props.nodeRenderer,
	          title = _props.title,
	          shouldShowArrow = _props.shouldShowArrow,
	          shouldShowPlaceholder = _props.shouldShowPlaceholder;
	      var theme = this.context.theme;

	      var styles = (0, _createStyles2.default)('TreeNode', theme);

	      var renderedNode = (0, react.createElement)(nodeRenderer, this.props);
	      var childNodes = expanded ? children : undefined;

	      return _react2.default.createElement(
	        'li',
	        { 'aria-expanded': expanded, role: 'treeitem', style: styles.treeNodeBase, title: title },
	        _react2.default.createElement(
	          'div',
	          { style: styles.treeNodePreviewContainer, onClick: onClick },
	          shouldShowArrow || react.Children.count(children) > 0 ? _react2.default.createElement(Arrow, { expanded: expanded, styles: styles.treeNodeArrow }) : shouldShowPlaceholder && _react2.default.createElement(
	            'span',
	            { style: styles.treeNodePlaceholder },
	            '\xA0'
	          ),
	          renderedNode
	        ),
	        _react2.default.createElement(
	          'ol',
	          { role: 'group', style: styles.treeNodeChildNodesContainer },
	          childNodes
	        )
	      );
	    }
	  }]);
	  return TreeNode;
	}(react.Component);

	TreeNode.propTypes = {
	  name: _propTypes2.default.string,
	  data: _propTypes2.default.any,

	  expanded: _propTypes2.default.bool,
	  shouldShowArrow: _propTypes2.default.bool,
	  shouldShowPlaceholder: _propTypes2.default.bool,

	  nodeRenderer: _propTypes2.default.func,

	  onClick: _propTypes2.default.func
	};

	TreeNode.defaultProps = {
	  name: undefined,
	  data: undefined,
	  expanded: true,

	  nodeRenderer: function nodeRenderer(_ref2) {
	    var name = _ref2.name;
	    return _react2.default.createElement(
	      'span',
	      null,
	      name
	    );
	  },

	  onClick: function onClick() {},

	  shouldShowArrow: false,
	  shouldShowPlaceholder: true
	};

	TreeNode.contextTypes = {
	  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
	};

	exports.default = TreeNode;
	});

	unwrapExports(TreeNode_1);

	var pathUtils = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hasChildNodes = hasChildNodes;
	var DEFAULT_ROOT_PATH = exports.DEFAULT_ROOT_PATH = '$';

	var WILDCARD = '*';

	function hasChildNodes(data, dataIterator) {
	  return !dataIterator(data).next().done;
	}

	var wildcardPathsFromLevel = exports.wildcardPathsFromLevel = function wildcardPathsFromLevel(level) {
	  // i is depth
	  return Array.from({ length: level }, function (_, i) {
	    return [DEFAULT_ROOT_PATH].concat(Array.from({ length: i }, function () {
	      return '*';
	    })).join('.');
	  });
	};

	var getExpandedPaths = exports.getExpandedPaths = function getExpandedPaths(data, dataIterator, expandPaths, expandLevel) {
	  var initialState = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

	  var wildcardPaths = [].concat(wildcardPathsFromLevel(expandLevel)).concat(expandPaths).filter(function (path) {
	    return typeof path === 'string';
	  }); // could be undefined

	  var expandedPaths = [];
	  wildcardPaths.forEach(function (wildcardPath) {
	    var keyPaths = wildcardPath.split('.');
	    var populatePaths = function populatePaths(curData, curPath, depth) {
	      if (depth === keyPaths.length) {
	        expandedPaths.push(curPath);
	        return;
	      }
	      var key = keyPaths[depth];
	      if (depth === 0) {
	        if (hasChildNodes(curData, dataIterator) && (key === DEFAULT_ROOT_PATH || key === WILDCARD)) {
	          populatePaths(curData, DEFAULT_ROOT_PATH, depth + 1);
	        }
	      } else {
	        if (key === WILDCARD) {
	          var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;

	          try {
	            for (var _iterator = dataIterator(curData)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var _ref2 = _step.value;
	              var name = _ref2.name,
	                  _data = _ref2.data;

	              if (hasChildNodes(_data, dataIterator)) {
	                populatePaths(_data, curPath + '.' + name, depth + 1);
	              }
	            }
	          } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	              }
	            } finally {
	              if (_didIteratorError) {
	                throw _iteratorError;
	              }
	            }
	          }
	        } else {
	          var value = curData[key];
	          if (hasChildNodes(value, dataIterator)) {
	            populatePaths(value, curPath + '.' + key, depth + 1);
	          }
	        }
	      }
	    };

	    populatePaths(data, '', 0);
	  });

	  return expandedPaths.reduce(function (obj, path) {
	    obj[path] = true;
	    return obj;
	  }, initialState);
	};
	});

	unwrapExports(pathUtils);
	var pathUtils_1 = pathUtils.hasChildNodes;
	var pathUtils_2 = pathUtils.DEFAULT_ROOT_PATH;
	var pathUtils_3 = pathUtils.wildcardPathsFromLevel;
	var pathUtils_4 = pathUtils.getExpandedPaths;

	var TreeView_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _extends3 = _interopRequireDefault(_extends$1);



	var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



	var _classCallCheck3 = _interopRequireDefault(classCallCheck);



	var _createClass3 = _interopRequireDefault(createClass);



	var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



	var _inherits3 = _interopRequireDefault(inherits);



	var _defineProperty3 = _interopRequireDefault(defineProperty$5);



	var _react2 = _interopRequireDefault(react);



	var _propTypes2 = _interopRequireDefault(propTypes);



	var _TreeNode2 = _interopRequireDefault(TreeNode_1);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reducer = function reducer(state, action) {
	  switch (action.type) {
	    case 'TOGGLE_EXPAND':
	      {
	        var path = action.path;
	        var expandedPaths = state.expandedPaths;
	        var expanded = !!expandedPaths[path];

	        return Object.assign({}, state, {
	          expandedPaths: Object.assign({}, state.expandedPaths, (0, _defineProperty3.default)({}, path, !expanded))
	        });
	      }
	    default:
	      return state;
	  }
	};

	var ConnectedTreeNode = function (_Component) {
	  (0, _inherits3.default)(ConnectedTreeNode, _Component);

	  function ConnectedTreeNode(props, context) {
	    (0, _classCallCheck3.default)(this, ConnectedTreeNode);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (ConnectedTreeNode.__proto__ || Object.getPrototypeOf(ConnectedTreeNode)).call(this, props));

	    _this.state = context.store.storeState;
	    return _this;
	  }

	  (0, _createClass3.default)(ConnectedTreeNode, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !!nextState.expandedPaths[nextProps.path] !== !!this.state.expandedPaths[this.props.path] || nextProps.data !== this.props.data || nextProps.name !== this.props.name;
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(path) {
	      this.context.store.storeState = reducer(this.context.store.storeState, {
	        type: 'TOGGLE_EXPAND',
	        path: path
	      });
	      this.setState(this.context.store.storeState);
	    }
	  }, {
	    key: 'renderChildNodes',
	    value: function renderChildNodes(parentData, parentPath) {
	      var dataIterator = this.props.dataIterator;
	      var depth = this.props.depth;
	      var nodeRenderer = this.props.nodeRenderer;


	      var childNodes = [];
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = dataIterator(parentData)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var _ref2 = _step.value;
	          var name = _ref2.name,
	              data = _ref2.data,
	              props = (0, _objectWithoutProperties3.default)(_ref2, ['name', 'data']);

	          var key = name;
	          var path = parentPath + '.' + key;
	          childNodes.push(_react2.default.createElement(ConnectedTreeNode, (0, _extends3.default)({
	            name: name,
	            data: data,
	            depth: depth + 1,
	            path: path,
	            key: key,
	            dataIterator: dataIterator,
	            nodeRenderer: nodeRenderer
	          }, props)) // props for nodeRenderer
	          );
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      return childNodes;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          data = _props.data,
	          dataIterator = _props.dataIterator,
	          path = _props.path,
	          depth = _props.depth;


	      var nodeHasChildNodes = (0, pathUtils.hasChildNodes)(data, dataIterator);
	      var expandedPaths = this.state.expandedPaths;

	      var expanded = !!expandedPaths[path];

	      var nodeRenderer = this.props.nodeRenderer;


	      return _react2.default.createElement(
	        _TreeNode2.default,
	        (0, _extends3.default)({
	          expanded: expanded,
	          onClick: nodeHasChildNodes ? this.handleClick.bind(this, path) : function () {}
	          // show arrow anyway even if not expanded and not rendering children
	          , shouldShowArrow: nodeHasChildNodes
	          // show placeholder only for non root nodes
	          , shouldShowPlaceholder: depth > 0
	          // Render a node from name and data (or possibly other props like isNonenumerable)
	          , nodeRenderer: nodeRenderer
	        }, this.props),
	        // only render if the node is expanded
	        expanded ? this.renderChildNodes(data, path) : undefined
	      );
	    }
	  }]);
	  return ConnectedTreeNode;
	}(react.Component);

	ConnectedTreeNode.propTypes = {
	  name: _propTypes2.default.string,
	  data: _propTypes2.default.any,
	  dataIterator: _propTypes2.default.func,

	  depth: _propTypes2.default.number,
	  expanded: _propTypes2.default.bool,

	  nodeRenderer: _propTypes2.default.func
	};

	ConnectedTreeNode.contextTypes = {
	  store: _propTypes2.default.any
	};

	var TreeView = function (_Component2) {
	  (0, _inherits3.default)(TreeView, _Component2);

	  function TreeView(props) {
	    (0, _classCallCheck3.default)(this, TreeView);

	    var _this2 = (0, _possibleConstructorReturn3.default)(this, (TreeView.__proto__ || Object.getPrototypeOf(TreeView)).call(this, props));

	    _this2.store = {
	      storeState: {
	        expandedPaths: (0, pathUtils.getExpandedPaths)(props.data, props.dataIterator, props.expandPaths, props.expandLevel)
	      }
	    };
	    return _this2;
	  }

	  (0, _createClass3.default)(TreeView, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.store = {
	        storeState: {
	          expandedPaths: (0, pathUtils.getExpandedPaths)(nextProps.data, nextProps.dataIterator, nextProps.expandPaths, nextProps.expandLevel, this.store.storeState.expandedPaths)
	        }
	      };
	    }
	  }, {
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        store: this.store
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          name = _props2.name,
	          data = _props2.data,
	          dataIterator = _props2.dataIterator;
	      var nodeRenderer = this.props.nodeRenderer;


	      var rootPath = pathUtils.DEFAULT_ROOT_PATH;

	      return _react2.default.createElement(ConnectedTreeNode, {
	        name: name,
	        data: data,
	        dataIterator: dataIterator,
	        depth: 0,
	        path: rootPath,
	        nodeRenderer: nodeRenderer
	      });
	    }
	  }]);
	  return TreeView;
	}(react.Component);

	TreeView.defaultProps = {
	  expandLevel: 0,
	  expandPaths: []
	};
	TreeView.childContextTypes = {
	  store: _propTypes2.default.any
	};


	TreeView.propTypes = {
	  name: _propTypes2.default.string,
	  data: _propTypes2.default.any,
	  dataIterator: _propTypes2.default.func,

	  nodeRenderer: _propTypes2.default.func
	};

	TreeView.defaultProps = {
	  name: undefined
	};

	exports.default = TreeView;
	});

	unwrapExports(TreeView_1);

	var ObjectName_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _extends3 = _interopRequireDefault(_extends$1);



	var _react2 = _interopRequireDefault(react);



	var _propTypes2 = _interopRequireDefault(propTypes);



	var _createStyles2 = _interopRequireDefault(createStyles_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * A view for object property names.
	 *
	 * If the property name is enumerable (in Object.keys(object)),
	 * the property name will be rendered normally.
	 *
	 * If the property name is not enumerable (`Object.prototype.propertyIsEnumerable()`),
	 * the property name will be dimmed to show the difference.
	 */
	var ObjectName = function ObjectName(_ref, _ref2) {
	  var name = _ref.name,
	      dimmed = _ref.dimmed,
	      styles = _ref.styles;
	  var theme = _ref2.theme;

	  var themeStyles = (0, _createStyles2.default)('ObjectName', theme);
	  var appliedStyles = (0, _extends3.default)({}, themeStyles.base, dimmed ? themeStyles['dimmed'] : {}, styles);

	  return _react2.default.createElement(
	    'span',
	    { style: appliedStyles },
	    name
	  );
	};

	ObjectName.propTypes = {
	  /** Property name */
	  name: _propTypes2.default.string,
	  /** Should property name be dimmed */
	  dimmed: _propTypes2.default.bool
	};

	ObjectName.defaultProps = {
	  dimmed: false
	};

	ObjectName.contextTypes = {
	  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
	};

	exports.default = ObjectName;
	});

	unwrapExports(ObjectName_1);

	var ObjectValue_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _typeof3 = _interopRequireDefault(_typeof_1);



	var _extends3 = _interopRequireDefault(_extends$1);



	var _react2 = _interopRequireDefault(react);



	var _propTypes2 = _interopRequireDefault(propTypes);



	var _createStyles2 = _interopRequireDefault(createStyles_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * A short description of the object values.
	 * Can be used to render tree node in ObjectInspector
	 * or render objects in TableInspector.
	 */
	var ObjectValue = function ObjectValue(_ref, _ref2) {
	  var object = _ref.object,
	      styles = _ref.styles;
	  var theme = _ref2.theme;

	  var themeStyles = (0, _createStyles2.default)('ObjectValue', theme);

	  var mkStyle = function mkStyle(key) {
	    return (0, _extends3.default)({}, themeStyles[key], styles);
	  };

	  switch (typeof object === 'undefined' ? 'undefined' : (0, _typeof3.default)(object)) {
	    case 'number':
	      return _react2.default.createElement(
	        'span',
	        { style: mkStyle('objectValueNumber') },
	        String(object)
	      );
	    case 'string':
	      return _react2.default.createElement(
	        'span',
	        { style: mkStyle('objectValueString') },
	        '"',
	        object,
	        '"'
	      );
	    case 'boolean':
	      return _react2.default.createElement(
	        'span',
	        { style: mkStyle('objectValueBoolean') },
	        String(object)
	      );
	    case 'undefined':
	      return _react2.default.createElement(
	        'span',
	        { style: mkStyle('objectValueUndefined') },
	        'undefined'
	      );
	    case 'object':
	      if (object === null) {
	        return _react2.default.createElement(
	          'span',
	          { style: mkStyle('objectValueNull') },
	          'null'
	        );
	      }
	      if (object instanceof Date) {
	        return _react2.default.createElement(
	          'span',
	          null,
	          object.toString()
	        );
	      }
	      if (object instanceof RegExp) {
	        return _react2.default.createElement(
	          'span',
	          { style: mkStyle('objectValueRegExp') },
	          object.toString()
	        );
	      }
	      if (Array.isArray(object)) {
	        return _react2.default.createElement(
	          'span',
	          null,
	          'Array[' + object.length + ']'
	        );
	      }

	      if (!object.constructor) {
	        return _react2.default.createElement(
	          'span',
	          null,
	          'Object'
	        );
	      }

	      return _react2.default.createElement(
	        'span',
	        null,
	        object.constructor.name
	      );
	    case 'function':
	      return _react2.default.createElement(
	        'span',
	        null,
	        _react2.default.createElement(
	          'span',
	          { style: mkStyle('objectValueFunctionKeyword') },
	          'function'
	        ),
	        _react2.default.createElement(
	          'span',
	          { style: mkStyle('objectValueFunctionName') },
	          '\xA0',
	          object.name,
	          '()'
	        )
	      );
	    case 'symbol':
	      return _react2.default.createElement(
	        'span',
	        { style: mkStyle('objectValueSymbol') },
	        object.toString()
	      );
	    default:
	      return _react2.default.createElement('span', null);
	  }
	};

	ObjectValue.propTypes = {
	  /** the object to describe */
	  object: _propTypes2.default.any
	};

	ObjectValue.contextTypes = {
	  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
	};

	exports.default = ObjectValue;
	});

	unwrapExports(ObjectValue_1);

	var ObjectPreview_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _typeof3 = _interopRequireDefault(_typeof_1);



	var _react2 = _interopRequireDefault(react);



	var _propTypes2 = _interopRequireDefault(propTypes);



	var _ObjectValue2 = _interopRequireDefault(ObjectValue_1);



	var _ObjectName2 = _interopRequireDefault(ObjectName_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* NOTE: Chrome console.log is italic */
	var styles = {
	  preview: {
	    fontStyle: 'italic'
	  }
	};

	/* intersperse arr with separator */
	function intersperse(arr, sep) {
	  if (arr.length === 0) {
	    return [];
	  }

	  return arr.slice(1).reduce(function (xs, x) {
	    return xs.concat([sep, x]);
	  }, [arr[0]]);
	}

	/**
	 * A preview of the object
	 */
	var ObjectPreview = function ObjectPreview(_ref) {
	  var data = _ref.data,
	      maxProperties = _ref.maxProperties;

	  var object = data;

	  if ((typeof object === 'undefined' ? 'undefined' : (0, _typeof3.default)(object)) !== 'object' || object === null || object instanceof Date || object instanceof RegExp) {
	    return _react2.default.createElement(_ObjectValue2.default, { object: object });
	  }

	  if (Array.isArray(object)) {
	    return _react2.default.createElement(
	      'span',
	      { style: styles.preview },
	      '[',
	      intersperse(object.map(function (element, index) {
	        return _react2.default.createElement(_ObjectValue2.default, { key: index, object: element });
	      }), ', '),
	      ']'
	    );
	  } else {
	    var propertyNodes = [];
	    for (var propertyName in object) {
	      var propertyValue = object[propertyName];
	      if (object.hasOwnProperty(propertyName)) {
	        var ellipsis = void 0;
	        if (propertyNodes.length === maxProperties - 1 && Object.keys(object).length > maxProperties) {
	          ellipsis = _react2.default.createElement(
	            'span',
	            { key: 'ellipsis' },
	            '\u2026'
	          );
	        }
	        propertyNodes.push(_react2.default.createElement(
	          'span',
	          { key: propertyName },
	          _react2.default.createElement(_ObjectName2.default, { name: propertyName || '""' }),
	          ':\xA0',
	          _react2.default.createElement(_ObjectValue2.default, { object: propertyValue }),
	          ellipsis
	        ));
	        if (ellipsis) break;
	      }
	    }

	    return _react2.default.createElement(
	      'span',
	      { style: styles.preview },
	      object.constructor.name + ' {',
	      intersperse(propertyNodes, ', '),
	      '}'
	    );
	  }
	};

	ObjectPreview.propTypes = {
	  /**
	   * max number of properties shown in the property view
	   */
	  maxProperties: _propTypes2.default.number
	};
	ObjectPreview.defaultProps = {
	  maxProperties: 5
	};

	exports.default = ObjectPreview;
	});

	unwrapExports(ObjectPreview_1);

	var ObjectRootLabel_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _react2 = _interopRequireDefault(react);



	var _ObjectName2 = _interopRequireDefault(ObjectName_1);



	var _ObjectPreview2 = _interopRequireDefault(ObjectPreview_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ObjectRootLabel = function ObjectRootLabel(_ref) {
	  var name = _ref.name,
	      data = _ref.data;

	  if (typeof name === 'string') {
	    return _react2.default.createElement(
	      'span',
	      null,
	      _react2.default.createElement(_ObjectName2.default, { name: name }),
	      _react2.default.createElement(
	        'span',
	        null,
	        ': '
	      ),
	      _react2.default.createElement(_ObjectPreview2.default, { data: data })
	    );
	  } else {
	    return _react2.default.createElement(_ObjectPreview2.default, { data: data });
	  }
	};

	exports.default = ObjectRootLabel;
	});

	unwrapExports(ObjectRootLabel_1);

	var ObjectLabel_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _react2 = _interopRequireDefault(react);



	var _propTypes2 = _interopRequireDefault(propTypes);



	var _ObjectName2 = _interopRequireDefault(ObjectName_1);



	var _ObjectValue2 = _interopRequireDefault(ObjectValue_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * if isNonenumerable is specified, render the name dimmed
	 */
	var ObjectLabel = function ObjectLabel(_ref) {
	  var name = _ref.name,
	      data = _ref.data,
	      isNonenumerable = _ref.isNonenumerable;

	  var object = data;

	  return _react2.default.createElement(
	    'span',
	    null,
	    _react2.default.createElement(_ObjectName2.default, { name: name, dimmed: isNonenumerable }),
	    _react2.default.createElement(
	      'span',
	      null,
	      ': '
	    ),
	    _react2.default.createElement(_ObjectValue2.default, { object: object })
	  );
	};

	ObjectLabel.propTypes = {
	  /** Non enumerable object property will be dimmed */
	  isNonenumerable: _propTypes2.default.bool
	};

	ObjectLabel.defaultProps = {
	  isNonenumerable: false
	};

	exports.default = ObjectLabel;
	});

	unwrapExports(ObjectLabel_1);

	var ThemeProvider_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _classCallCheck3 = _interopRequireDefault(classCallCheck);



	var _createClass3 = _interopRequireDefault(createClass);



	var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



	var _inherits3 = _interopRequireDefault(inherits);





	var _propTypes2 = _interopRequireDefault(propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ThemeProvider = function (_Component) {
	  (0, _inherits3.default)(ThemeProvider, _Component);

	  function ThemeProvider() {
	    (0, _classCallCheck3.default)(this, ThemeProvider);
	    return (0, _possibleConstructorReturn3.default)(this, (ThemeProvider.__proto__ || Object.getPrototypeOf(ThemeProvider)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(ThemeProvider, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      var theme = this.props.theme;

	      return {
	        // createStyles: createStyles
	        theme: theme
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);
	  return ThemeProvider;
	}(react.Component);

	ThemeProvider.childContextTypes = {
	  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
	};

	exports.default = ThemeProvider;
	});

	unwrapExports(ThemeProvider_1);

	var ObjectInspector_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _extends3 = _interopRequireDefault(_extends$1);



	var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



	var _classCallCheck3 = _interopRequireDefault(classCallCheck);



	var _createClass3 = _interopRequireDefault(createClass);



	var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



	var _inherits3 = _interopRequireDefault(inherits);



	var _regenerator2 = _interopRequireDefault(regenerator);



	var _slicedToArray3 = _interopRequireDefault(slicedToArray);



	var _typeof3 = _interopRequireDefault(_typeof_1);



	var _react2 = _interopRequireDefault(react);



	var _propTypes2 = _interopRequireDefault(propTypes);



	var _TreeView2 = _interopRequireDefault(TreeView_1);



	var _ObjectRootLabel2 = _interopRequireDefault(ObjectRootLabel_1);



	var _ObjectLabel2 = _interopRequireDefault(ObjectLabel_1);



	var _ThemeProvider2 = _interopRequireDefault(ThemeProvider_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createIterator = function createIterator(showNonenumerable, sortObjectKeys) {
	  var objectIterator = /*#__PURE__*/_regenerator2.default.mark(function objectIterator(data) {
	    var shouldIterate, i, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entry, _entry, k, v, keys, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, propertyName, propertyValue, _propertyValue;

	    return _regenerator2.default.wrap(function objectIterator$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            shouldIterate = (typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) === 'object' && data !== null || typeof data === 'function';

	            if (shouldIterate) {
	              _context.next = 3;
	              break;
	            }

	            return _context.abrupt('return');

	          case 3:
	            if (!(!Array.isArray(data) && data[Symbol.iterator])) {
	              _context.next = 40;
	              break;
	            }

	            i = 0;
	            _iteratorNormalCompletion = true;
	            _didIteratorError = false;
	            _iteratorError = undefined;
	            _context.prev = 8;
	            _iterator = data[Symbol.iterator]();

	          case 10:
	            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
	              _context.next = 24;
	              break;
	            }

	            entry = _step.value;

	            if (!(Array.isArray(entry) && entry.length === 2)) {
	              _context.next = 18;
	              break;
	            }

	            _entry = (0, _slicedToArray3.default)(entry, 2), k = _entry[0], v = _entry[1];
	            _context.next = 16;
	            return {
	              name: k,
	              data: v
	            };

	          case 16:
	            _context.next = 20;
	            break;

	          case 18:
	            _context.next = 20;
	            return {
	              name: i.toString(),
	              data: entry
	            };

	          case 20:
	            i++;

	          case 21:
	            _iteratorNormalCompletion = true;
	            _context.next = 10;
	            break;

	          case 24:
	            _context.next = 30;
	            break;

	          case 26:
	            _context.prev = 26;
	            _context.t0 = _context['catch'](8);
	            _didIteratorError = true;
	            _iteratorError = _context.t0;

	          case 30:
	            _context.prev = 30;
	            _context.prev = 31;

	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }

	          case 33:
	            _context.prev = 33;

	            if (!_didIteratorError) {
	              _context.next = 36;
	              break;
	            }

	            throw _iteratorError;

	          case 36:
	            return _context.finish(33);

	          case 37:
	            return _context.finish(30);

	          case 38:
	            _context.next = 81;
	            break;

	          case 40:
	            keys = Object.getOwnPropertyNames(data);

	            if (sortObjectKeys === true) {
	              keys.sort();
	            } else if (typeof sortObjectKeys === 'function') {
	              keys.sort(sortObjectKeys);
	            }

	            _iteratorNormalCompletion2 = true;
	            _didIteratorError2 = false;
	            _iteratorError2 = undefined;
	            _context.prev = 45;
	            _iterator2 = keys[Symbol.iterator]();

	          case 47:
	            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
	              _context.next = 64;
	              break;
	            }

	            propertyName = _step2.value;

	            if (!data.propertyIsEnumerable(propertyName)) {
	              _context.next = 55;
	              break;
	            }

	            propertyValue = data[propertyName];
	            _context.next = 53;
	            return {
	              name: propertyName || '""',
	              data: propertyValue
	            };

	          case 53:
	            _context.next = 61;
	            break;

	          case 55:
	            if (!showNonenumerable) {
	              _context.next = 61;
	              break;
	            }

	            // To work around the error (happens some time when propertyName === 'caller' || propertyName === 'arguments')
	            // 'caller' and 'arguments' are restricted function properties and cannot be accessed in this context
	            // http://stackoverflow.com/questions/31921189/caller-and-arguments-are-restricted-function-properties-and-cannot-be-access
	            _propertyValue = void 0;

	            try {
	              _propertyValue = data[propertyName];
	            } catch (e) {
	              // console.warn(e)
	            }

	            if (!(_propertyValue !== undefined)) {
	              _context.next = 61;
	              break;
	            }

	            _context.next = 61;
	            return {
	              name: propertyName,
	              data: _propertyValue,
	              isNonenumerable: true
	            };

	          case 61:
	            _iteratorNormalCompletion2 = true;
	            _context.next = 47;
	            break;

	          case 64:
	            _context.next = 70;
	            break;

	          case 66:
	            _context.prev = 66;
	            _context.t1 = _context['catch'](45);
	            _didIteratorError2 = true;
	            _iteratorError2 = _context.t1;

	          case 70:
	            _context.prev = 70;
	            _context.prev = 71;

	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	              _iterator2.return();
	            }

	          case 73:
	            _context.prev = 73;

	            if (!_didIteratorError2) {
	              _context.next = 76;
	              break;
	            }

	            throw _iteratorError2;

	          case 76:
	            return _context.finish(73);

	          case 77:
	            return _context.finish(70);

	          case 78:
	            if (!(showNonenumerable && data !== Object.prototype /* already added */)) {
	              _context.next = 81;
	              break;
	            }

	            _context.next = 81;
	            return {
	              name: '__proto__',
	              data: Object.getPrototypeOf(data),
	              isNonenumerable: true
	            };

	          case 81:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, objectIterator, this, [[8, 26, 30, 38], [31,, 33, 37], [45, 66, 70, 78], [71,, 73, 77]]);
	  });

	  return objectIterator;
	};

	var defaultNodeRenderer = function defaultNodeRenderer(_ref) {
	  var depth = _ref.depth,
	      name = _ref.name,
	      data = _ref.data,
	      isNonenumerable = _ref.isNonenumerable;
	  return depth === 0 ? _react2.default.createElement(_ObjectRootLabel2.default, { name: name, data: data }) : _react2.default.createElement(_ObjectLabel2.default, { name: name, data: data, isNonenumerable: isNonenumerable });
	};

	/**
	 * Tree-view for objects
	 */

	var ObjectInspector = function (_Component) {
	  (0, _inherits3.default)(ObjectInspector, _Component);

	  function ObjectInspector() {
	    (0, _classCallCheck3.default)(this, ObjectInspector);
	    return (0, _possibleConstructorReturn3.default)(this, (ObjectInspector.__proto__ || Object.getPrototypeOf(ObjectInspector)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(ObjectInspector, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          showNonenumerable = _props.showNonenumerable,
	          sortObjectKeys = _props.sortObjectKeys,
	          nodeRenderer = _props.nodeRenderer,
	          rest = (0, _objectWithoutProperties3.default)(_props, ['showNonenumerable', 'sortObjectKeys', 'nodeRenderer']);

	      var dataIterator = createIterator(showNonenumerable, sortObjectKeys);

	      var renderer = nodeRenderer ? nodeRenderer : defaultNodeRenderer;

	      return _react2.default.createElement(
	        _ThemeProvider2.default,
	        { theme: this.props.theme },
	        _react2.default.createElement(_TreeView2.default, (0, _extends3.default)({ nodeRenderer: renderer, dataIterator: dataIterator }, rest))
	      );
	    }
	  }]);
	  return ObjectInspector;
	}(react.Component);

	ObjectInspector.defaultProps = {
	  showNonenumerable: false,

	  theme: 'chromeLight'
	};
	ObjectInspector.propTypes = {
	  /** An integer specifying to which level the tree should be initially expanded. */
	  expandLevel: _propTypes2.default.number,
	  /** An array containing all the paths that should be expanded when the component is initialized, or a string of just one path */
	  expandPaths: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),

	  name: _propTypes2.default.string,
	  /** Not required prop because we also allow undefined value */
	  data: _propTypes2.default.any,

	  /** A known theme or theme object */
	  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),

	  /** Show non-enumerable properties */
	  showNonenumerable: _propTypes2.default.bool,
	  /** Sort object keys with optional compare function. */
	  sortObjectKeys: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),

	  /** Provide a custom nodeRenderer */
	  nodeRenderer: _propTypes2.default.func
	};
	exports.default = ObjectInspector;
	});

	unwrapExports(ObjectInspector_1);

	// call something on iterator step with safe closing on error

	var _iterCall = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) _anObject(ret.call(iterator));
	    throw e;
	  }
	};

	// check on default Array iterator

	var ITERATOR$3 = _wks('iterator');
	var ArrayProto = Array.prototype;

	var _isArrayIter = function (it) {
	  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$3] === it);
	};

	var _createProperty = function (object, index, value) {
	  if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
	  else object[index] = value;
	};

	var ITERATOR$4 = _wks('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR$4]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	} catch (e) { /* empty */ }

	var _iterDetect = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR$4]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR$4] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};

	_export(_export.S + _export.F * !_iterDetect(function (iter) { }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = _toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = core_getIteratorMethod(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = _toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

	var from = _core.Array.from;

	var from$1 = createCommonjsModule(function (module) {
	module.exports = { "default": from, __esModule: true };
	});

	unwrapExports(from$1);

	var toConsumableArray = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _from2 = _interopRequireDefault(from$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};
	});

	unwrapExports(toConsumableArray);

	var getHeaders_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _toConsumableArray3 = _interopRequireDefault(toConsumableArray);



	var _typeof3 = _interopRequireDefault(_typeof_1);

	exports.default = getHeaders;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 * Polyfill for running tests
	 * `includes` is an ES2016 feature
	 */
	if (!Array.prototype.includes) {
	  Array.prototype.includes = function (searchElement /*, fromIndex*/) {
	    var O = Object(this);
	    var len = parseInt(O.length) || 0;
	    if (len === 0) {
	      return false;
	    }
	    var n = parseInt(arguments[1]) || 0;
	    var k;
	    if (n >= 0) {
	      k = n;
	    } else {
	      k = len + n;
	      if (k < 0) {
	        k = 0;
	      }
	    }
	    var currentElement;
	    while (k < len) {
	      currentElement = O[k];
	      if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
	        // NaN !== NaN
	        return true;
	      }
	      k++;
	    }
	    return false;
	  };
	}

	function getHeaders(data) {
	  if ((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) === 'object') {
	    var rowHeaders = void 0;
	    // is an array
	    if (Array.isArray(data)) {
	      var nRows = data.length;
	      rowHeaders = [].concat((0, _toConsumableArray3.default)(Array(nRows).keys()));
	    } else if (data !== null) {
	      // is an object
	      // keys are row indexes
	      rowHeaders = Object.keys(data);
	    }

	    // Time: O(nRows * nCols)
	    var colHeaders = rowHeaders.reduce(function (colHeaders, rowHeader) {
	      var row = data[rowHeader];
	      if ((typeof row === 'undefined' ? 'undefined' : (0, _typeof3.default)(row)) === 'object' && row !== null) {
	        /* O(nCols) Could optimize `includes` here */
	        var cols = Object.keys(row);
	        cols.reduce(function (xs, x) {
	          if (!xs.includes(x)) {
	            /* xs is the colHeaders to be filled by searching the row's indexes */
	            xs.push(x);
	          }
	          return xs;
	        }, colHeaders);
	      }
	      return colHeaders;
	    }, []);
	    return {
	      rowHeaders: rowHeaders,
	      colHeaders: colHeaders
	    };
	  }
	  return undefined;
	}
	});

	unwrapExports(getHeaders_1);

	var DataContainer_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _typeof3 = _interopRequireDefault(_typeof_1);



	var _extends3 = _interopRequireDefault(_extends$1);



	var _react2 = _interopRequireDefault(react);



	var _propTypes2 = _interopRequireDefault(propTypes);



	var _createStyles2 = _interopRequireDefault(createStyles_1);



	var _ObjectValue2 = _interopRequireDefault(ObjectValue_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DataContainer = function DataContainer(_ref, _ref2) {
	  var rows = _ref.rows,
	      columns = _ref.columns,
	      rowsData = _ref.rowsData;
	  var theme = _ref2.theme;

	  var styles = (0, _createStyles2.default)('TableInspectorDataContainer', theme);
	  var borderStyles = (0, _createStyles2.default)('TableInspectorLeftBorder', theme);

	  return _react2.default.createElement(
	    'div',
	    { style: styles.div },
	    _react2.default.createElement(
	      'table',
	      { style: styles.table },
	      _react2.default.createElement('colgroup', null),
	      _react2.default.createElement(
	        'tbody',
	        null,
	        rows.map(function (row, i) {
	          return _react2.default.createElement(
	            'tr',
	            { key: row, style: styles.tr },
	            _react2.default.createElement(
	              'td',
	              { style: (0, _extends3.default)({}, styles.td, borderStyles.none) },
	              row
	            ),
	            columns.map(function (column) {
	              var rowData = rowsData[i];
	              // rowData could be
	              //  object -> index by key
	              //    array -> index by array index
	              //    null -> pass
	              //  boolean -> pass
	              //  string -> pass (hasOwnProperty returns true for [0..len-1])
	              //  number -> pass
	              //  function -> pass
	              //  symbol
	              //  undefined -> pass
	              if ((typeof rowData === 'undefined' ? 'undefined' : (0, _typeof3.default)(rowData)) === 'object' && rowData !== null && rowData.hasOwnProperty(column)) {
	                return _react2.default.createElement(
	                  'td',
	                  { key: column, style: (0, _extends3.default)({}, styles.td, borderStyles.solid) },
	                  _react2.default.createElement(_ObjectValue2.default, { object: rowData[column] })
	                );
	              } else {
	                return _react2.default.createElement('td', { key: column, style: (0, _extends3.default)({}, styles.td, borderStyles.solid) });
	              }
	            })
	          );
	        })
	      )
	    )
	  );
	};

	DataContainer.contextTypes = {
	  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
	};

	exports.default = DataContainer;
	});

	unwrapExports(DataContainer_1);

	var TH_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _extends3 = _interopRequireDefault(_extends$1);



	var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



	var _classCallCheck3 = _interopRequireDefault(classCallCheck);



	var _createClass3 = _interopRequireDefault(createClass);



	var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



	var _inherits3 = _interopRequireDefault(inherits);



	var _react2 = _interopRequireDefault(react);



	var _propTypes2 = _interopRequireDefault(propTypes);



	var _createStyles2 = _interopRequireDefault(createStyles_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SortIconContainer = function SortIconContainer(props) {
	  return _react2.default.createElement(
	    'div',
	    {
	      style: {
	        position: 'absolute',
	        top: 1,
	        right: 0,
	        bottom: 1,
	        display: 'flex',
	        alignItems: 'center'
	      }
	    },
	    props.children
	  );
	};

	var SortIcon = function SortIcon(_ref, _ref2) {
	  var sortAscending = _ref.sortAscending;
	  var theme = _ref2.theme;

	  var glyph = sortAscending ? '▲' : '▼';
	  var styles = (0, _createStyles2.default)('TableInspectorSortIcon', theme);
	  return _react2.default.createElement(
	    'div',
	    { style: styles },
	    glyph
	  );
	};

	SortIcon.contextTypes = {
	  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
	};

	var TH = function (_Component) {
	  (0, _inherits3.default)(TH, _Component);

	  function TH() {
	    var _ref3;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, TH);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref3 = TH.__proto__ || Object.getPrototypeOf(TH)).call.apply(_ref3, [this].concat(args))), _this), _this.state = { hovered: false }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(TH, [{
	    key: 'toggleHovered',
	    value: function toggleHovered(hovered) {
	      this.setState({ hovered: hovered });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      // either not sorted, sort ascending or sort descending
	      var _props = this.props,
	          borderStyle = _props.borderStyle,
	          children = _props.children,
	          onClick = _props.onClick,
	          sortAscending = _props.sortAscending,
	          sorted = _props.sorted,
	          props = (0, _objectWithoutProperties3.default)(_props, ['borderStyle', 'children', 'onClick', 'sortAscending', 'sorted']);
	      var theme = this.context.theme;

	      var styles = (0, _createStyles2.default)('TableInspectorTH', theme);

	      return _react2.default.createElement(
	        'th',
	        (0, _extends3.default)({}, props, {
	          style: (0, _extends3.default)({}, styles.base, borderStyle, this.state.hovered ? styles.base[':hover'] : {}),
	          onMouseEnter: this.toggleHovered.bind(this, true),
	          onMouseLeave: this.toggleHovered.bind(this, false),
	          onClick: onClick
	        }),
	        _react2.default.createElement(
	          'div',
	          { style: styles.div },
	          children
	        ),
	        sorted && _react2.default.createElement(
	          SortIconContainer,
	          null,
	          _react2.default.createElement(SortIcon, { sortAscending: sortAscending })
	        )
	      );
	    }
	  }]);
	  return TH;
	}(react.Component);

	TH.contextTypes = {
	  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
	};

	TH.defaultProps = {
	  sortAscending: false,
	  sorted: false,
	  onClick: undefined
	};

	exports.default = TH;
	});

	unwrapExports(TH_1);

	var HeaderContainer_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _react2 = _interopRequireDefault(react);



	var _propTypes2 = _interopRequireDefault(propTypes);



	var _createStyles2 = _interopRequireDefault(createStyles_1);



	var _TH2 = _interopRequireDefault(TH_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HeaderContainer = function HeaderContainer(_ref, _ref2) {
	  var indexColumnText = _ref.indexColumnText,
	      columns = _ref.columns,
	      sorted = _ref.sorted,
	      sortIndexColumn = _ref.sortIndexColumn,
	      sortColumn = _ref.sortColumn,
	      sortAscending = _ref.sortAscending,
	      onTHClick = _ref.onTHClick,
	      onIndexTHClick = _ref.onIndexTHClick;
	  var theme = _ref2.theme;

	  var styles = (0, _createStyles2.default)('TableInspectorHeaderContainer', theme);
	  var borderStyles = (0, _createStyles2.default)('TableInspectorLeftBorder', theme);
	  return _react2.default.createElement(
	    'div',
	    { style: styles.base },
	    _react2.default.createElement(
	      'table',
	      { style: styles.table },
	      _react2.default.createElement(
	        'tbody',
	        null,
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            _TH2.default,
	            {
	              borderStyle: borderStyles.none,
	              sorted: sorted && sortIndexColumn,
	              sortAscending: sortAscending,
	              onClick: onIndexTHClick
	            },
	            indexColumnText
	          ),
	          columns.map(function (column) {
	            return _react2.default.createElement(
	              _TH2.default,
	              {
	                borderStyle: borderStyles.solid,
	                key: column,
	                sorted: sorted && sortColumn === column,
	                sortAscending: sortAscending,
	                onClick: onTHClick.bind(undefined, column)
	              },
	              column
	            );
	          })
	        )
	      )
	    )
	  );
	};

	HeaderContainer.defaultProps = {
	  indexColumnText: '(index)',
	  columns: []
	};

	HeaderContainer.contextTypes = {
	  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
	};

	exports.default = HeaderContainer;
	});

	unwrapExports(HeaderContainer_1);

	var TableInspector_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _typeof3 = _interopRequireDefault(_typeof_1);



	var _classCallCheck3 = _interopRequireDefault(classCallCheck);



	var _createClass3 = _interopRequireDefault(createClass);



	var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



	var _inherits3 = _interopRequireDefault(inherits);



	var _react2 = _interopRequireDefault(react);



	var _propTypes2 = _interopRequireDefault(propTypes);



	var _ThemeProvider2 = _interopRequireDefault(ThemeProvider_1);



	var _createStyles2 = _interopRequireDefault(createStyles_1);



	var _getHeaders3 = _interopRequireDefault(getHeaders_1);



	var _DataContainer2 = _interopRequireDefault(DataContainer_1);



	var _HeaderContainer2 = _interopRequireDefault(HeaderContainer_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TableInspector = function (_Component) {
	  (0, _inherits3.default)(TableInspector, _Component);

	  function TableInspector(props) {
	    (0, _classCallCheck3.default)(this, TableInspector);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (TableInspector.__proto__ || Object.getPrototypeOf(TableInspector)).call(this, props));

	    _this.state = {
	      sorted: false, // has user ever clicked the <th> tag to sort?
	      sortIndexColumn: false, // is index column sorted?
	      sortColumn: undefined, // which column is sorted?
	      sortAscending: false // is sorting ascending or descending?
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(TableInspector, [{
	    key: 'handleIndexTHClick',
	    value: function handleIndexTHClick() {
	      this.setState(function (_ref) {
	        var sortIndexColumn = _ref.sortIndexColumn,
	            sortAscending = _ref.sortAscending;
	        return {
	          sorted: true,
	          sortIndexColumn: true,
	          sortColumn: undefined,
	          // when changed to a new column, default to asending
	          sortAscending: sortIndexColumn ? !sortAscending : true
	        };
	      });
	    }
	  }, {
	    key: 'handleTHClick',
	    value: function handleTHClick(col) {
	      this.setState(function (_ref2) {
	        var sortColumn = _ref2.sortColumn,
	            sortAscending = _ref2.sortAscending;
	        return {
	          sorted: true,
	          sortIndexColumn: false,
	          // update sort column
	          sortColumn: col,
	          // when changed to a new column, default to asending
	          sortAscending: col === sortColumn ? !sortAscending : true
	        };
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var data = this.props.data;
	      var columns = this.props.columns;

	      var theme = this.props.theme;

	      var styles = (0, _createStyles2.default)('TableInspector', theme);

	      if ((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) !== 'object' || data === null) {
	        return _react2.default.createElement('div', null);
	      }

	      var _getHeaders = (0, _getHeaders3.default)(data),
	          rowHeaders = _getHeaders.rowHeaders,
	          colHeaders = _getHeaders.colHeaders;

	      // columns to be displayed are specified
	      // NOTE: there's some space for optimization here


	      if (columns !== undefined) {
	        colHeaders = columns;
	      }

	      var rowsData = rowHeaders.map(function (rowHeader) {
	        return data[rowHeader];
	      });

	      var sortIndexColumn = this.state.sortIndexColumn,
	          sortColumn = this.state.sortColumn,
	          sortAscending = this.state.sortAscending;

	      var columnDataWithRowIndexes = void 0; /* row indexes are [0..nRows-1] */
	      // TODO: refactor
	      if (sortColumn !== undefined) {
	        // the column to be sorted (rowsData, column) => [[columnData, rowIndex]]
	        columnDataWithRowIndexes = rowsData.map(function (rowData, index) {
	          // normalize rowData
	          if ((typeof rowData === 'undefined' ? 'undefined' : (0, _typeof3.default)(rowData)) === 'object' && rowData !== null /*&& rowData.hasOwnProperty(sortColumn)*/
	          ) {
	              var columnData = rowData[sortColumn];
	              return [columnData, index];
	            }
	          return [undefined, index];
	        });
	      } else {
	        if (sortIndexColumn) {
	          columnDataWithRowIndexes = rowHeaders.map(function (rowData, index) {
	            var columnData = rowHeaders[index];
	            return [columnData, index];
	          });
	        }
	      }
	      if (columnDataWithRowIndexes !== undefined) {
	        // apply a mapper before sorting (because we need to access inside a container)
	        var comparator = function comparator(mapper, ascending) {
	          return function (a, b) {
	            var v1 = mapper(a); // the datum
	            var v2 = mapper(b);
	            var type1 = typeof v1 === 'undefined' ? 'undefined' : (0, _typeof3.default)(v1);
	            var type2 = typeof v2 === 'undefined' ? 'undefined' : (0, _typeof3.default)(v2);
	            // use '<' operator to compare same type of values or compare type precedence order #
	            var lt = function lt(v1, v2) {
	              if (v1 < v2) {
	                return -1;
	              } else if (v1 > v2) {
	                return 1;
	              } else {
	                return 0;
	              }
	            };
	            var result = void 0;
	            if (type1 === type2) {
	              result = lt(v1, v2);
	            } else {
	              // order of different types
	              var order = {
	                string: 0,
	                number: 1,
	                object: 2,
	                symbol: 3,
	                boolean: 4,
	                undefined: 5,
	                function: 6
	              };
	              result = lt(order[type1], order[type2]);
	            }
	            // reverse result if descending
	            if (!ascending) result = -result;
	            return result;
	          };
	        };
	        var sortedRowIndexes = columnDataWithRowIndexes.sort(comparator(function (item) {
	          return item[0];
	        }, sortAscending)).map(function (item) {
	          return item[1];
	        }); // sorted row indexes
	        rowHeaders = sortedRowIndexes.map(function (i) {
	          return rowHeaders[i];
	        });
	        rowsData = sortedRowIndexes.map(function (i) {
	          return rowsData[i];
	        });
	      }

	      return _react2.default.createElement(
	        _ThemeProvider2.default,
	        { theme: this.props.theme },
	        _react2.default.createElement(
	          'div',
	          { style: styles.base },
	          _react2.default.createElement(_HeaderContainer2.default, {
	            columns: colHeaders
	            /* for sorting */
	            , sorted: this.state.sorted,
	            sortIndexColumn: this.state.sortIndexColumn,
	            sortColumn: this.state.sortColumn,
	            sortAscending: this.state.sortAscending,
	            onTHClick: this.handleTHClick.bind(this),
	            onIndexTHClick: this.handleIndexTHClick.bind(this)
	          }),
	          _react2.default.createElement(_DataContainer2.default, { rows: rowHeaders, columns: colHeaders, rowsData: rowsData })
	        )
	      );
	    }
	  }]);
	  return TableInspector;
	}(react.Component); /**
	                      * Specs:
	                      * https://developer.chrome.com/devtools/docs/commandline-api#tabledata-columns
	                      * https://developer.mozilla.org/en-US/docs/Web/API/Console/table
	                      */

	exports.default = TableInspector;


	TableInspector.propTypes = {
	  /**
	   * the Javascript object you would like to inspect, either an array or an object
	   */
	  data: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
	  /**
	   * An array of the names of the columns you'd like to display in the table
	   */
	  columns: _propTypes2.default.array
	};

	TableInspector.defaultProps = {
	  data: undefined,
	  columns: undefined,
	  theme: 'chromeLight'
	};
	});

	unwrapExports(TableInspector_1);

	var shouldInline_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var TEXT_NODE_MAX_INLINE_CHARS = 80;

	var shouldInline = function shouldInline(data) {
	  return data.childNodes.length === 0 || data.childNodes.length === 1 && data.childNodes[0].nodeType === Node.TEXT_NODE && data.textContent.length < TEXT_NODE_MAX_INLINE_CHARS;
	};

	exports.default = shouldInline;
	});

	unwrapExports(shouldInline_1);

	var DOMNodePreview_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _react2 = _interopRequireDefault(react);



	var _propTypes2 = _interopRequireDefault(propTypes);



	var _createStyles2 = _interopRequireDefault(createStyles_1);



	var _shouldInline2 = _interopRequireDefault(shouldInline_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var OpenTag = function OpenTag(_ref) {
	  var tagName = _ref.tagName,
	      attributes = _ref.attributes,
	      styles = _ref.styles;

	  return _react2.default.createElement(
	    'span',
	    { style: styles.base },
	    '<',
	    _react2.default.createElement(
	      'span',
	      { style: styles.tagName },
	      tagName
	    ),
	    function () {
	      if (attributes) {
	        var attributeNodes = [];
	        for (var i = 0; i < attributes.length; i++) {
	          var attribute = attributes[i];
	          attributeNodes.push(_react2.default.createElement(
	            'span',
	            { key: i },
	            ' ',
	            _react2.default.createElement(
	              'span',
	              { style: styles.htmlAttributeName },
	              attribute.name
	            ),
	            '="',
	            _react2.default.createElement(
	              'span',
	              { style: styles.htmlAttributeValue },
	              attribute.value
	            ),
	            '"'
	          ));
	        }
	        return attributeNodes;
	      }
	    }(),
	    '>'
	  );
	};

	// isChildNode style={{ marginLeft: -12 /* hack: offset placeholder */ }}
	var CloseTag = function CloseTag(_ref2) {
	  var tagName = _ref2.tagName,
	      _ref2$isChildNode = _ref2.isChildNode,
	      isChildNode = _ref2$isChildNode === undefined ? false : _ref2$isChildNode,
	      styles = _ref2.styles;
	  return _react2.default.createElement(
	    'span',
	    { style: Object.assign({}, styles.base, isChildNode && styles.offsetLeft) },
	    '</',
	    _react2.default.createElement(
	      'span',
	      { style: styles.tagName },
	      tagName
	    ),
	    '>'
	  );
	};

	var nameByNodeType = {
	  1: 'ELEMENT_NODE',
	  3: 'TEXT_NODE',
	  7: 'PROCESSING_INSTRUCTION_NODE',
	  8: 'COMMENT_NODE',
	  9: 'DOCUMENT_NODE',
	  10: 'DOCUMENT_TYPE_NODE', // http://stackoverflow.com/questions/6088972/get-doctype-of-an-html-as-string-with-javascript
	  11: 'DOCUMENT_FRAGMENT_NODE'
	};

	var DOMNodePreview = function DOMNodePreview(_ref3, _ref4) {
	  var isCloseTag = _ref3.isCloseTag,
	      data = _ref3.data,
	      expanded = _ref3.expanded;
	  var theme = _ref4.theme;

	  var styles = (0, _createStyles2.default)('DOMNodePreview', theme);

	  if (isCloseTag) {
	    return _react2.default.createElement(CloseTag, { styles: styles.htmlCloseTag, isChildNode: true, tagName: data.tagName });
	  }

	  switch (data.nodeType) {
	    case Node.ELEMENT_NODE:
	      return _react2.default.createElement(
	        'span',
	        null,
	        _react2.default.createElement(OpenTag, {
	          tagName: data.tagName,
	          attributes: data.attributes,
	          styles: styles.htmlOpenTag
	        }),
	        (0, _shouldInline2.default)(data) ? data.textContent : !expanded && '…',
	        !expanded && _react2.default.createElement(CloseTag, { tagName: data.tagName, styles: styles.htmlCloseTag })
	      );
	    case Node.TEXT_NODE:
	      return _react2.default.createElement(
	        'span',
	        null,
	        data.textContent
	      );
	    case Node.CDATA_SECTION_NODE:
	      return _react2.default.createElement(
	        'span',
	        null,
	        '<![CDATA[' + data.textContent + ']]>'
	      );
	    case Node.COMMENT_NODE:
	      return _react2.default.createElement(
	        'span',
	        { style: styles.htmlComment },
	        '<!--',
	        data.textContent,
	        '-->'
	      );
	    case Node.PROCESSING_INSTRUCTION_NODE:
	      return _react2.default.createElement(
	        'span',
	        null,
	        data.nodeName
	      );
	    case Node.DOCUMENT_TYPE_NODE:
	      return _react2.default.createElement(
	        'span',
	        { style: styles.htmlDoctype },
	        '<!DOCTYPE ',
	        data.name,
	        data.publicId ? ' PUBLIC "' + data.publicId + '"' : '',
	        !data.publicId && data.systemId ? ' SYSTEM' : '',
	        data.systemId ? ' "' + data.systemId + '"' : '',
	        '>'
	      );
	    case Node.DOCUMENT_NODE:
	      return _react2.default.createElement(
	        'span',
	        null,
	        data.nodeName
	      );
	    case Node.DOCUMENT_FRAGMENT_NODE:
	      return _react2.default.createElement(
	        'span',
	        null,
	        data.nodeName
	      );
	    default:
	      return _react2.default.createElement(
	        'span',
	        null,
	        nameByNodeType[data.nodeType]
	      );
	  }
	};

	DOMNodePreview.propTypes = {
	  /** If true, just render a close tag */
	  isCloseTag: _propTypes2.default.bool,
	  /**  */
	  name: _propTypes2.default.string,
	  /** The DOM Node */
	  data: _propTypes2.default.object.isRequired,
	  /** Whether the DOM node has been expanded. */
	  expanded: _propTypes2.default.bool.isRequired
	};

	DOMNodePreview.contextTypes = {
	  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
	};

	exports.default = DOMNodePreview;
	});

	unwrapExports(DOMNodePreview_1);

	var DOMInspector_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _extends3 = _interopRequireDefault(_extends$1);



	var _classCallCheck3 = _interopRequireDefault(classCallCheck);



	var _createClass3 = _interopRequireDefault(createClass);



	var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



	var _inherits3 = _interopRequireDefault(inherits);



	var _regenerator2 = _interopRequireDefault(regenerator);



	var _react2 = _interopRequireDefault(react);



	var _propTypes2 = _interopRequireDefault(propTypes);



	var _DOMNodePreview2 = _interopRequireDefault(DOMNodePreview_1);



	var _TreeView2 = _interopRequireDefault(TreeView_1);



	var _shouldInline2 = _interopRequireDefault(shouldInline_1);



	var _ThemeProvider2 = _interopRequireDefault(ThemeProvider_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var domIterator = /*#__PURE__*/_regenerator2.default.mark(function domIterator(data) {
	  var textInlined, i, node;
	  return _regenerator2.default.wrap(function domIterator$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          if (!(data && data.childNodes)) {
	            _context.next = 17;
	            break;
	          }

	          textInlined = (0, _shouldInline2.default)(data);

	          if (!textInlined) {
	            _context.next = 4;
	            break;
	          }

	          return _context.abrupt('return');

	        case 4:
	          i = 0;

	        case 5:
	          if (!(i < data.childNodes.length)) {
	            _context.next = 14;
	            break;
	          }

	          node = data.childNodes[i];

	          if (!(node.nodeType === Node.TEXT_NODE && node.textContent.trim().length === 0)) {
	            _context.next = 9;
	            break;
	          }

	          return _context.abrupt('continue', 11);

	        case 9:
	          _context.next = 11;
	          return {
	            name: node.tagName + '[' + i + ']',
	            data: node
	          };

	        case 11:
	          i++;
	          _context.next = 5;
	          break;

	        case 14:
	          if (!data.tagName) {
	            _context.next = 17;
	            break;
	          }

	          _context.next = 17;
	          return {
	            name: 'CLOSE_TAG',
	            data: {
	              tagName: data.tagName
	            },
	            isCloseTag: true
	          };

	        case 17:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, domIterator, this);
	});

	var DOMInspector = function (_Component) {
	  (0, _inherits3.default)(DOMInspector, _Component);

	  function DOMInspector() {
	    (0, _classCallCheck3.default)(this, DOMInspector);
	    return (0, _possibleConstructorReturn3.default)(this, (DOMInspector.__proto__ || Object.getPrototypeOf(DOMInspector)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(DOMInspector, [{
	    key: 'render',
	    value: function render() {
	      var nodeRenderer = _DOMNodePreview2.default;

	      return _react2.default.createElement(
	        _ThemeProvider2.default,
	        { theme: this.props.theme },
	        _react2.default.createElement(_TreeView2.default, (0, _extends3.default)({ nodeRenderer: nodeRenderer, dataIterator: domIterator }, this.props))
	      );
	    }
	  }]);
	  return DOMInspector;
	}(react.Component);

	DOMInspector.propTypes = {
	  /** The DOM Node to inspect */
	  data: _propTypes2.default.object.isRequired
	};
	DOMInspector.defaultProps = {
	  theme: 'chromeLight'
	};
	exports.default = DOMInspector;
	});

	unwrapExports(DOMInspector_1);

	var isDom = isNode;

	function isNode (val) {
	  return (!val || typeof val !== 'object')
	    ? false
	    : (typeof window === 'object' && typeof window.Node === 'object')
	      ? (val instanceof window.Node)
	      : (typeof val.nodeType === 'number') &&
	        (typeof val.nodeName === 'string')
	}

	var lib = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Inspector = exports.ObjectName = exports.ObjectValue = exports.ObjectRootLabel = exports.ObjectLabel = exports.DOMInspector = exports.TableInspector = exports.ObjectInspector = exports.chromeDark = exports.chromeLight = undefined;



	var _extends3 = _interopRequireDefault(_extends$1);



	var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



	Object.defineProperty(exports, 'chromeLight', {
	  enumerable: true,
	  get: function get() {
	    return themes.chromeLight;
	  }
	});
	Object.defineProperty(exports, 'chromeDark', {
	  enumerable: true,
	  get: function get() {
	    return themes.chromeDark;
	  }
	});



	var _ObjectInspector3 = _interopRequireDefault(ObjectInspector_1);



	var _TableInspector3 = _interopRequireDefault(TableInspector_1);



	var _DOMInspector3 = _interopRequireDefault(DOMInspector_1);



	var _ObjectLabel3 = _interopRequireDefault(ObjectLabel_1);



	var _ObjectRootLabel3 = _interopRequireDefault(ObjectRootLabel_1);



	var _ObjectValue3 = _interopRequireDefault(ObjectValue_1);



	var _ObjectName3 = _interopRequireDefault(ObjectName_1);



	var _react2 = _interopRequireDefault(react);



	var _propTypes2 = _interopRequireDefault(propTypes);



	var _isDom2 = _interopRequireDefault(isDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.ObjectInspector = _ObjectInspector3.default;
	exports.TableInspector = _TableInspector3.default;
	exports.DOMInspector = _DOMInspector3.default;
	exports.ObjectLabel = _ObjectLabel3.default;
	exports.ObjectRootLabel = _ObjectRootLabel3.default;
	exports.ObjectValue = _ObjectValue3.default;
	exports.ObjectName = _ObjectName3.default;

	// Wrapping the inspectors

	var Inspector = function Inspector(_ref) {
	  var _ref$table = _ref.table,
	      table = _ref$table === undefined ? false : _ref$table,
	      data = _ref.data,
	      rest = (0, _objectWithoutProperties3.default)(_ref, ['table', 'data']);

	  if (table) {
	    return _react2.default.createElement(_TableInspector3.default, (0, _extends3.default)({ data: data }, rest));
	  }

	  if ((0, _isDom2.default)(data)) return _react2.default.createElement(_DOMInspector3.default, (0, _extends3.default)({ data: data }, rest));

	  return _react2.default.createElement(_ObjectInspector3.default, (0, _extends3.default)({ data: data }, rest));
	};

	Inspector.propTypes = {
	  data: _propTypes2.default.any,
	  name: _propTypes2.default.string,
	  table: _propTypes2.default.bool
	};

	exports.Inspector = Inspector;
	exports.default = Inspector;
	});

	unwrapExports(lib);
	var lib_1 = lib.Inspector;
	var lib_2 = lib.ObjectName;
	var lib_3 = lib.ObjectValue;
	var lib_4 = lib.ObjectRootLabel;
	var lib_5 = lib.ObjectLabel;
	var lib_6 = lib.DOMInspector;
	var lib_7 = lib.TableInspector;
	var lib_8 = lib.ObjectInspector;
	var lib_9 = lib.chromeDark;
	var lib_10 = lib.chromeLight;

	var _default = createCommonjsModule(function (module, exports) {
	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	exports.__esModule = true;

	var styles = function (props) {
	    return (__assign({}, ((props.variant || 'light') === 'light' ? lib.chromeLight : lib.chromeDark), { 
	        /**
	         * General
	         */
	        PADDING: '3px 22px 2px 0', 
	        /**
	         * Default log styles
	         */
	        LOG_COLOR: 'rgba(255,255,255,0.9)', LOG_BACKGROUND: 'transparent', LOG_BORDER: 'rgba(255,255,255,0.03)', LOG_ICON_WIDTH: 10, LOG_ICON_HEIGHT: 18, LOG_ICON: 'none', 
	        /**
	         * Log types
	         */
	        LOG_WARN_ICON: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACkSURBVChTbY7BCoJQFERn0Q/3BX1JuxQjsSCXiV8gtCgxhCIrKIRIqKDVzXl5w5cNHBjm6eGinXiAXu5inY2xYm/mbpIh+vcFhLA3sx0athNUhymEsP+10lAEEA17x8o/9wFuNGnYuVlWve0SQl7P0sBu3aq2R1Q/1JzSkYGd29eqNv2wjdnUuvNRciC/N+qe+7gidbA8zyHkOINsvA/sumcOkjcabcBmw2+mMgAAAABJRU5ErkJggg==)", LOG_WARN_BACKGROUND: '#332b00', LOG_WARN_COLOR: '#ffdc9e', LOG_WARN_BORDER: '#650', LOG_ERROR_ICON: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADESURBVChTY4CB7ZI8tmfU5E6e01b+DMIgNkgMKg0BR9Vkux6YWPx/bemIgkFiIDmwogOaqrYPzazAEm8DwuGKYGyQHEgNw0VT05Mwib9v3v7/kJEHxiA2TDFIDcNNU4vPMFPACj58/P/v40cwGyYOUsNwy8IZRSFIEUgxskKQGoZrzp4ErQapYbgYHG371M4dLACTQGaD5EBqwD6/FpzQ9dTBE64IhkFiIDmwIhi4mlJqey8o4eR9r8jPIAxig8QgsgwMAFZz1YtGPXgjAAAAAElFTkSuQmCC)", LOG_ERROR_BACKGROUND: '#290000', LOG_ERROR_BORDER: '#5b0000', LOG_ERROR_COLOR: '#ff8080', LOG_DEBUG_ICON: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 459 459'%3e%3cpath fill='%234D88FF' d='M433.5 127.5h-71.4a177.7 177.7 0 0 0-45.9-51L357 35.7 321.3 0l-56.1 56.1c-10.2-2.6-23-5.1-35.7-5.1s-25.5 2.5-35.7 5.1L137.7 0 102 35.7l40.8 40.8a177.7 177.7 0 0 0-45.9 51H25.5v51H79c-2.5 7.7-2.5 17.9-2.5 25.5v25.5h-51v51h51V306a88 88 0 0 0 2.5 25.5H25.5v51h71.4A152.2 152.2 0 0 0 229.5 459c56.1 0 107.1-30.6 132.6-76.5h71.4v-51H380c2.5-7.7 2.5-17.9 2.5-25.5v-25.5h51v-51h-51V204c0-7.7 0-17.9-2.5-25.5h53.5v-51zm-153 204h-102v-51h102v51zm0-102h-102v-51h102v51z'/%3e%3c/svg%3e\")", LOG_DEBUG_BACKGROUND: '', LOG_DEBUG_BORDER: '', LOG_DEBUG_COLOR: '#4D88FF', LOG_COMMAND_ICON: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABaSURBVChTY6AtmDx5cvnUqVP1oFzsoL+/XwCo8DEQv584caIVVBg7mDBhghxQ4Y2+vr6vU6ZM8YAKYwdA00SB+CxQ8S+g4jCoMCYgSiFRVpPkGaAiHMHDwAAA5Ko+F4/l6+MAAAAASUVORK5CYII=)", LOG_RESULT_ICON: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABpSURBVChTY6A92LNnj96uXbvKoVzsYMeOHVbbt29/D1T4eP/+/QJQYVSwe/duD6CCr0B8A8iWgwqjAqBk2NatW38B6bPbtm0TBYkBFbsA+c9ANFgRCBCtEASAAoSthgGiPAMD2IOHgQEA521bM7uG52wAAAAASUVORK5CYII=)", LOG_INFO_ICON: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADISURBVChTY4ABp/AztmZBZ07qe538rO114rOa8+GTskYHbKHSEOARd6nLIOTsf61gIA46U6kVePYQiK3uc/K/hPG+LrCi8IyrtkZh5yCKgk/80w46ba0RdGYGhH/2v6rXyf88qtttGVwSLp2ECQLxeiAu1wo6uwpJ7L+o2f6TDA6xZz8jCyqFnuHXCj4djywmZXHoM/EK0azGqhBsNYpngL6VCTnGqRF4xgKo+D5IDO4ZEEAKnjcQBafvqwWf/YoSPDCAP8AZGAC7mLM81zgOTQAAAABJRU5ErkJggg==)", 
	        /**
	         * Fonts
	         */
	        BASE_FONT_FAMILY: 'Consolas, Lucida Console, Courier New, monospace', BASE_FONT_SIZE: '12px', 
	        /**
	         * Other
	         */
	        ARROW_FONT_SIZE: 10, OBJECT_VALUE_STRING_COLOR: 'rgb(233,63,59)' }));
	};
	exports["default"] = styles;

	});

	unwrapExports(_default);

	function memoize(fn) {
	  var cache = {};
	  return function (arg) {
	    if (cache[arg] === undefined) cache[arg] = fn(arg);
	    return cache[arg];
	  };
	}

	var index$2 = {
	  animationIterationCount: 1,
	  borderImageOutset: 1,
	  borderImageSlice: 1,
	  borderImageWidth: 1,
	  boxFlex: 1,
	  boxFlexGroup: 1,
	  boxOrdinalGroup: 1,
	  columnCount: 1,
	  columns: 1,
	  flex: 1,
	  flexGrow: 1,
	  flexPositive: 1,
	  flexShrink: 1,
	  flexNegative: 1,
	  flexOrder: 1,
	  gridRow: 1,
	  gridRowEnd: 1,
	  gridRowSpan: 1,
	  gridRowStart: 1,
	  gridColumn: 1,
	  gridColumnEnd: 1,
	  gridColumnSpan: 1,
	  gridColumnStart: 1,
	  fontWeight: 1,
	  lineHeight: 1,
	  opacity: 1,
	  order: 1,
	  orphans: 1,
	  tabSize: 1,
	  widows: 1,
	  zIndex: 1,
	  zoom: 1,
	  WebkitLineClamp: 1,
	  // SVG-related properties
	  fillOpacity: 1,
	  floodOpacity: 1,
	  stopOpacity: 1,
	  strokeDasharray: 1,
	  strokeDashoffset: 1,
	  strokeMiterlimit: 1,
	  strokeOpacity: 1,
	  strokeWidth: 1
	};

	/* eslint-disable */
	// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
	function murmurhash2_32_gc(str) {
	  var l = str.length,
	      h = l ^ l,
	      i = 0,
	      k;

	  while (l >= 4) {
	    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
	    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	    k ^= k >>> 24;
	    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
	    l -= 4;
	    ++i;
	  }

	  switch (l) {
	    case 3:
	      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

	    case 2:
	      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

	    case 1:
	      h ^= str.charCodeAt(i) & 0xff;
	      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	  }

	  h ^= h >>> 13;
	  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	  h ^= h >>> 15;
	  return (h >>> 0).toString(36);
	}

	var W$1 = function da(X) {
	  function M(d, c, e, h, a) {
	    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, J = 0, k, u = k = q = 0, l = 0, r = 0, z = 0, t = 0, K = e.length, I = K - 1, y, f = '', p = '', F = '', G = '', C; l < K;) {
	      g = e.charCodeAt(l);
	      l === I && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, K++, I++);

	      if (0 === b + n + v + m) {
	        if (l === I && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
	          switch (g) {
	            case 32:
	            case 9:
	            case 59:
	            case 13:
	            case 10:
	              break;

	            default:
	              f += e.charAt(l);
	          }

	          g = 59;
	        }

	        switch (g) {
	          case 123:
	            f = f.trim();
	            q = f.charCodeAt(0);
	            k = 1;

	            for (t = ++l; l < K;) {
	              switch (g = e.charCodeAt(l)) {
	                case 123:
	                  k++;
	                  break;

	                case 125:
	                  k--;
	                  break;

	                case 47:
	                  switch (g = e.charCodeAt(l + 1)) {
	                    case 42:
	                    case 47:
	                      a: {
	                        for (u = l + 1; u < I; ++u) {
	                          switch (e.charCodeAt(u)) {
	                            case 47:
	                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
	                                l = u + 1;
	                                break a;
	                              }

	                              break;

	                            case 10:
	                              if (47 === g) {
	                                l = u + 1;
	                                break a;
	                              }

	                          }
	                        }

	                        l = u;
	                      }

	                  }

	                  break;

	                case 91:
	                  g++;

	                case 40:
	                  g++;

	                case 34:
	                case 39:
	                  for (; l++ < I && e.charCodeAt(l) !== g;) {
	                  }

	              }

	              if (0 === k) break;
	              l++;
	            }

	            k = e.substring(t, l);
	            0 === q && (q = (f = f.replace(ea, '').trim()).charCodeAt(0));

	            switch (q) {
	              case 64:
	                0 < r && (f = f.replace(N, ''));
	                g = f.charCodeAt(1);

	                switch (g) {
	                  case 100:
	                  case 109:
	                  case 115:
	                  case 45:
	                    r = c;
	                    break;

	                  default:
	                    r = O;
	                }

	                k = M(c, r, k, g, a + 1);
	                t = k.length;
	                0 < B && (r = Y(O, f, z), C = H(3, k, r, c, D, A, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
	                if (0 < t) switch (g) {
	                  case 115:
	                    f = f.replace(fa, ha);

	                  case 100:
	                  case 109:
	                  case 45:
	                    k = f + '{' + k + '}';
	                    break;

	                  case 107:
	                    f = f.replace(ia, '$1 $2');
	                    k = f + '{' + k + '}';
	                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
	                    break;

	                  default:
	                    k = f + k, 112 === h && (k = (p += k, ''));
	                } else k = '';
	                break;

	              default:
	                k = M(c, Y(c, f, z), k, h, a + 1);
	            }

	            F += k;
	            k = z = r = u = q = 0;
	            f = '';
	            g = e.charCodeAt(++l);
	            break;

	          case 125:
	          case 59:
	            f = (0 < r ? f.replace(N, '') : f).trim();
	            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < B && void 0 !== (C = H(1, f, c, d, D, A, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
	              case 0:
	                break;

	              case 64:
	                if (105 === g || 99 === g) {
	                  G += f + e.charAt(l);
	                  break;
	                }

	              default:
	                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
	            }
	            z = r = u = q = 0;
	            f = '';
	            g = e.charCodeAt(++l);
	        }
	      }

	      switch (g) {
	        case 13:
	        case 10:
	          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
	          0 < B * Z && H(0, f, c, d, D, A, p.length, h, a, h);
	          A = 1;
	          D++;
	          break;

	        case 59:
	        case 125:
	          if (0 === b + n + v + m) {
	            A++;
	            break;
	          }

	        default:
	          A++;
	          y = e.charAt(l);

	          switch (g) {
	            case 9:
	            case 32:
	              if (0 === n + m + b) switch (x) {
	                case 44:
	                case 58:
	                case 9:
	                case 32:
	                  y = '';
	                  break;

	                default:
	                  32 !== g && (y = ' ');
	              }
	              break;

	            case 0:
	              y = '\\0';
	              break;

	            case 12:
	              y = '\\f';
	              break;

	            case 11:
	              y = '\\v';
	              break;

	            case 38:
	              0 === n + b + m && (r = z = 1, y = '\f' + y);
	              break;

	            case 108:
	              if (0 === n + b + m + E && 0 < u) switch (l - u) {
	                case 2:
	                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

	                case 8:
	                  111 === J && (E = J);
	              }
	              break;

	            case 58:
	              0 === n + b + m && (u = l);
	              break;

	            case 44:
	              0 === b + v + n + m && (r = 1, y += '\r');
	              break;

	            case 34:
	            case 39:
	              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
	              break;

	            case 91:
	              0 === n + b + v && m++;
	              break;

	            case 93:
	              0 === n + b + v && m--;
	              break;

	            case 41:
	              0 === n + b + m && v--;
	              break;

	            case 40:
	              if (0 === n + b + m) {
	                if (0 === q) switch (2 * x + 3 * J) {
	                  case 533:
	                    break;

	                  default:
	                    q = 1;
	                }
	                v++;
	              }

	              break;

	            case 64:
	              0 === b + v + n + m + u + k && (k = 1);
	              break;

	            case 42:
	            case 47:
	              if (!(0 < n + m + v)) switch (b) {
	                case 0:
	                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
	                    case 235:
	                      b = 47;
	                      break;

	                    case 220:
	                      t = l, b = 42;
	                  }

	                  break;

	                case 42:
	                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
	              }
	          }

	          0 === b && (f += y);
	      }

	      J = x;
	      x = g;
	      l++;
	    }

	    t = p.length;

	    if (0 < t) {
	      r = c;
	      if (0 < B && (C = H(2, p, r, d, D, A, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
	      p = r.join(',') + '{' + p + '}';

	      if (0 !== w * E) {
	        2 !== w || L(p, 2) || (E = 0);

	        switch (E) {
	          case 111:
	            p = p.replace(ja, ':-moz-$1') + p;
	            break;

	          case 112:
	            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
	        }

	        E = 0;
	      }
	    }

	    return G + p + F;
	  }

	  function Y(d, c, e) {
	    var h = c.trim().split(ka);
	    c = h;
	    var a = h.length,
	        m = d.length;

	    switch (m) {
	      case 0:
	      case 1:
	        var b = 0;

	        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
	          c[b] = aa(d, c[b], e, m).trim();
	        }

	        break;

	      default:
	        var v = b = 0;

	        for (c = []; b < a; ++b) {
	          for (var n = 0; n < m; ++n) {
	            c[v++] = aa(d[n] + ' ', h[b], e, m).trim();
	          }
	        }

	    }

	    return c;
	  }

	  function aa(d, c, e) {
	    var h = c.charCodeAt(0);
	    33 > h && (h = (c = c.trim()).charCodeAt(0));

	    switch (h) {
	      case 38:
	        return c.replace(F, '$1' + d.trim());

	      case 58:
	        return d.trim() + c.replace(F, '$1' + d.trim());

	      default:
	        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
	    }

	    return d + c;
	  }

	  function P(d, c, e, h) {
	    var a = d + ';',
	        m = 2 * c + 3 * e + 4 * h;

	    if (944 === m) {
	      d = a.indexOf(':', 9) + 1;
	      var b = a.substring(d, a.length - 1).trim();
	      b = a.substring(0, d).trim() + b + ';';
	      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
	    }

	    if (0 === w || 2 === w && !L(a, 1)) return a;

	    switch (m) {
	      case 1015:
	        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

	      case 951:
	        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

	      case 963:
	        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

	      case 1009:
	        if (100 !== a.charCodeAt(4)) break;

	      case 969:
	      case 942:
	        return '-webkit-' + a + a;

	      case 978:
	        return '-webkit-' + a + '-moz-' + a + a;

	      case 1019:
	      case 983:
	        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

	      case 883:
	        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
	        if (0 < a.indexOf('image-set(', 11)) return a.replace(la, '$1-webkit-$2') + a;
	        break;

	      case 932:
	        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
	          case 103:
	            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

	          case 115:
	            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

	          case 98:
	            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
	        }
	        return '-webkit-' + a + '-ms-' + a + a;

	      case 964:
	        return '-webkit-' + a + '-ms-flex-' + a + a;

	      case 1023:
	        if (99 !== a.charCodeAt(8)) break;
	        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
	        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

	      case 1005:
	        return ma.test(a) ? a.replace(ba, ':-webkit-') + a.replace(ba, ':-moz-') + a : a;

	      case 1e3:
	        b = a.substring(13).trim();
	        c = b.indexOf('-') + 1;

	        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
	          case 226:
	            b = a.replace(G, 'tb');
	            break;

	          case 232:
	            b = a.replace(G, 'tb-rl');
	            break;

	          case 220:
	            b = a.replace(G, 'lr');
	            break;

	          default:
	            return a;
	        }

	        return '-webkit-' + a + '-ms-' + b + a;

	      case 1017:
	        if (-1 === a.indexOf('sticky', 9)) break;

	      case 975:
	        c = (a = d).length - 10;
	        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

	        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
	          case 203:
	            if (111 > b.charCodeAt(8)) break;

	          case 115:
	            a = a.replace(b, '-webkit-' + b) + ';' + a;
	            break;

	          case 207:
	          case 102:
	            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
	        }

	        return a + ';';

	      case 938:
	        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
	          case 105:
	            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

	          case 115:
	            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ca, '') + a;

	          default:
	            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ca, '') + a;
	        }
	        break;

	      case 973:
	      case 989:
	        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

	      case 931:
	      case 953:
	        if (!0 === na.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
	        break;

	      case 962:
	        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(oa, '$1-webkit-$2') + a;
	    }

	    return a;
	  }

	  function L(d, c) {
	    var e = d.indexOf(1 === c ? ':' : '{'),
	        h = d.substring(0, 3 !== c ? e : 10);
	    e = d.substring(e + 1, d.length - 1);
	    return R(2 !== c ? h : h.replace(pa, '$1'), e, c);
	  }

	  function ha(d, c) {
	    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
	    return e !== c + ';' ? e.replace(qa, ' or ($1)').substring(4) : '(' + c + ')';
	  }

	  function H(d, c, e, h, a, m, b, v, n, q) {
	    for (var g = 0, x = c, w; g < B; ++g) {
	      switch (w = S[g].call(z, d, x, e, h, a, m, b, v, n, q)) {
	        case void 0:
	        case !1:
	        case !0:
	        case null:
	          break;

	        default:
	          x = w;
	      }
	    }

	    if (x !== c) return x;
	  }

	  function T(d) {
	    switch (d) {
	      case void 0:
	      case null:
	        B = S.length = 0;
	        break;

	      default:
	        switch (d.constructor) {
	          case Array:
	            for (var c = 0, e = d.length; c < e; ++c) {
	              T(d[c]);
	            }

	            break;

	          case Function:
	            S[B++] = d;
	            break;

	          case Boolean:
	            Z = !!d | 0;
	        }

	    }

	    return T;
	  }

	  function U(d) {
	    d = d.prefix;
	    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
	    return U;
	  }

	  function z(d, c) {
	    if (void 0 !== this && this.constructor === z) return da(d);
	    var e = d;
	    33 > e.charCodeAt(0) && (e = e.trim());
	    V = e;
	    e = [V];

	    if (0 < B) {
	      var h = H(-1, c, e, e, D, A, 0, 0, 0, 0);
	      void 0 !== h && 'string' === typeof h && (c = h);
	    }

	    var a = M(O, e, c, 0, 0);
	    0 < B && (h = H(-2, a, e, e, D, A, a.length, 0, 0, 0), void 0 !== h && (a = h));
	    V = '';
	    E = 0;
	    A = D = 1;
	    return a;
	  }

	  var ea = /^\0+/g,
	      N = /[\0\r\f]/g,
	      ba = /: */g,
	      ma = /zoo|gra/,
	      oa = /([,: ])(transform)/g,
	      ka = /,\r+?/g,
	      F = /([\t\r\n ])*\f?&/g,
	      ia = /@(k\w+)\s*(\S*)\s*/,
	      Q = /::(place)/g,
	      ja = /:(read-only)/g,
	      G = /[svh]\w+-[tblr]{2}/,
	      fa = /\(\s*(.*)\s*\)/g,
	      qa = /([\s\S]*?);/g,
	      ca = /-self|flex-/g,
	      pa = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
	      na = /stretch|:\s*\w+\-(?:conte|avail)/,
	      la = /([^-])(image-set\()/,
	      A = 1,
	      D = 1,
	      E = 0,
	      w = 1,
	      O = [],
	      S = [],
	      B = 0,
	      R = null,
	      Z = 0,
	      V = '';
	  z.use = T;
	  z.set = U;
	  void 0 !== X && U(X);
	  return z;
	};

	var stylisRuleSheet = createCommonjsModule(function (module, exports) {
	(function (factory) {
		module['exports'] = factory();
	}(function () {

		return function (insertRule) {
			var delimiter = '/*|*/';
			var needle = delimiter+'}';

			function toSheet (block) {
				if (block)
					try {
						insertRule(block + '}');
					} catch (e) {}
			}

			return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
				switch (context) {
					// property
					case 1:
						// @import
						if (depth === 0 && content.charCodeAt(0) === 64)
							return insertRule(content+';'), ''
						break
					// selector
					case 2:
						if (ns === 0)
							return content + delimiter
						break
					// at-rule
					case 3:
						switch (ns) {
							// @font-face, @page
							case 102:
							case 112:
								return insertRule(selectors[0]+content), ''
							default:
								return content + (at === 0 ? delimiter : '')
						}
					case -2:
						content.split(needle).forEach(toSheet);
				}
			}
		}
	}));
	});

	var hyphenateRegex = /[A-Z]|^ms/g;
	var processStyleName = memoize(function (styleName) {
	  return styleName.replace(hyphenateRegex, '-$&').toLowerCase();
	});
	var processStyleValue = function processStyleValue(key, value) {
	  if (value == null || typeof value === 'boolean') {
	    return '';
	  }

	  if (index$2[key] !== 1 && key.charCodeAt(1) !== 45 && // custom properties
	  !isNaN(value) && value !== 0) {
	    return value + 'px';
	  }

	  return value;
	};

	if (true) {
	  var contentValuePattern = /(attr|calc|counters?|url)\(/;
	  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
	  var oldProcessStyleValue = processStyleValue;

	  processStyleValue = function processStyleValue(key, value) {
	    if (key === 'content') {
	      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
	        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
	      }
	    }

	    return oldProcessStyleValue(key, value);
	  };
	}

	var classnames = function classnames(args) {
	  var len = args.length;
	  var i = 0;
	  var cls = '';

	  for (; i < len; i++) {
	    var arg = args[i];
	    if (arg == null) continue;
	    var toAdd = void 0;

	    switch (typeof arg) {
	      case 'boolean':
	        break;

	      case 'function':
	        if (true) {
	          console.error('Passing functions to cx is deprecated and will be removed in the next major version of Emotion.\n' + 'Please call the function before passing it to cx.');
	        }

	        toAdd = classnames([arg()]);
	        break;

	      case 'object':
	        {
	          if (Array.isArray(arg)) {
	            toAdd = classnames(arg);
	          } else {
	            toAdd = '';

	            for (var k in arg) {
	              if (arg[k] && k) {
	                toAdd && (toAdd += ' ');
	                toAdd += k;
	              }
	            }
	          }

	          break;
	        }

	      default:
	        {
	          toAdd = arg;
	        }
	    }

	    if (toAdd) {
	      cls && (cls += ' ');
	      cls += toAdd;
	    }
	  }

	  return cls;
	};
	var isBrowser = typeof document !== 'undefined';

	/*

	high performance StyleSheet for css-in-js systems

	- uses multiple style tags behind the scenes for millions of rules
	- uses `insertRule` for appending in production for *much* faster performance
	- 'polyfills' on server side

	// usage

	import StyleSheet from 'glamor/lib/sheet'
	let styleSheet = new StyleSheet()

	styleSheet.inject()
	- 'injects' the stylesheet into the page (or into memory if on server)

	styleSheet.insert('#box { border: 1px solid red; }')
	- appends a css rule into the stylesheet

	styleSheet.flush()
	- empties the stylesheet of all its contents

	*/
	// $FlowFixMe
	function sheetForTag(tag) {
	  if (tag.sheet) {
	    // $FlowFixMe
	    return tag.sheet;
	  } // this weirdness brought to you by firefox


	  for (var i = 0; i < document.styleSheets.length; i++) {
	    if (document.styleSheets[i].ownerNode === tag) {
	      // $FlowFixMe
	      return document.styleSheets[i];
	    }
	  }
	}

	function makeStyleTag(opts) {
	  var tag = document.createElement('style');
	  tag.setAttribute('data-emotion', opts.key || '');

	  if (opts.nonce !== undefined) {
	    tag.setAttribute('nonce', opts.nonce);
	  }

	  tag.appendChild(document.createTextNode('')) // $FlowFixMe
	  ;
	  (opts.container !== undefined ? opts.container : document.head).appendChild(tag);
	  return tag;
	}

	var StyleSheet =
	/*#__PURE__*/
	function () {
	  function StyleSheet(options) {
	    this.isSpeedy = false; // the big drawback here is that the css won't be editable in devtools

	    this.tags = [];
	    this.ctr = 0;
	    this.opts = options;
	  }

	  var _proto = StyleSheet.prototype;

	  _proto.inject = function inject() {
	    if (this.injected) {
	      throw new Error('already injected!');
	    }

	    this.tags[0] = makeStyleTag(this.opts);
	    this.injected = true;
	  };

	  _proto.speedy = function speedy(bool) {
	    if (this.ctr !== 0) {
	      // cannot change speedy mode after inserting any rule to sheet. Either call speedy(${bool}) earlier in your app, or call flush() before speedy(${bool})
	      throw new Error("cannot change speedy now");
	    }

	    this.isSpeedy = !!bool;
	  };

	  _proto.insert = function insert(rule, sourceMap) {
	    // this is the ultrafast version, works across browsers
	    if (this.isSpeedy) {
	      var tag = this.tags[this.tags.length - 1];
	      var sheet = sheetForTag(tag);

	      try {
	        sheet.insertRule(rule, sheet.cssRules.length);
	      } catch (e) {
	        if (true) {
	          console.warn('illegal rule', rule); // eslint-disable-line no-console
	        }
	      }
	    } else {
	      var _tag = makeStyleTag(this.opts);

	      this.tags.push(_tag);

	      _tag.appendChild(document.createTextNode(rule + (sourceMap || '')));
	    }

	    this.ctr++;

	    if (this.ctr % 65000 === 0) {
	      this.tags.push(makeStyleTag(this.opts));
	    }
	  };

	  _proto.flush = function flush() {
	    // $FlowFixMe
	    this.tags.forEach(function (tag) {
	      return tag.parentNode.removeChild(tag);
	    });
	    this.tags = [];
	    this.ctr = 0; // todo - look for remnants in document.styleSheets

	    this.injected = false;
	  };

	  return StyleSheet;
	}();

	function createEmotion(context, options) {
	  if (context.__SECRET_EMOTION__ !== undefined) {
	    return context.__SECRET_EMOTION__;
	  }

	  if (options === undefined) options = {};
	  var key = options.key || 'css';

	  if (true) {
	    if (/[^a-z-]/.test(key)) {
	      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
	    }
	  }

	  var current;

	  function insertRule(rule) {
	    current += rule;

	    if (isBrowser) {
	      sheet.insert(rule, currentSourceMap);
	    }
	  }

	  var insertionPlugin = stylisRuleSheet(insertRule);
	  var stylisOptions;

	  if (options.prefix !== undefined) {
	    stylisOptions = {
	      prefix: options.prefix
	    };
	  }

	  var caches = {
	    registered: {},
	    inserted: {},
	    nonce: options.nonce,
	    key: key
	  };
	  var sheet = new StyleSheet(options);

	  if (isBrowser) {
	    // 🚀
	    sheet.inject();
	  }

	  var stylis = new W$1(stylisOptions);
	  stylis.use(options.stylisPlugins)(insertionPlugin);
	  var currentSourceMap = '';

	  function handleInterpolation(interpolation, couldBeSelectorInterpolation) {
	    if (interpolation == null) {
	      return '';
	    }

	    switch (typeof interpolation) {
	      case 'boolean':
	        return '';

	      case 'function':
	        if (interpolation.__emotion_styles !== undefined) {
	          var selector = interpolation.toString();

	          if (selector === 'NO_COMPONENT_SELECTOR' && true) {
	            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
	          }

	          return selector;
	        }

	        if (this === undefined && true) {
	          console.error('Interpolating functions in css calls is deprecated and will be removed in the next major version of Emotion.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
	        }

	        return handleInterpolation.call(this, this === undefined ? interpolation() : // $FlowFixMe
	        interpolation(this.mergedProps, this.context), couldBeSelectorInterpolation);

	      case 'object':
	        return createStringFromObject.call(this, interpolation);

	      default:
	        var cached = caches.registered[interpolation];
	        return couldBeSelectorInterpolation === false && cached !== undefined ? cached : interpolation;
	    }
	  }

	  var objectToStringCache = new WeakMap();

	  function createStringFromObject(obj) {
	    if (objectToStringCache.has(obj)) {
	      // $FlowFixMe
	      return objectToStringCache.get(obj);
	    }

	    var string = '';

	    if (Array.isArray(obj)) {
	      obj.forEach(function (interpolation) {
	        string += handleInterpolation.call(this, interpolation, false);
	      }, this);
	    } else {
	      Object.keys(obj).forEach(function (key) {
	        if (typeof obj[key] !== 'object') {
	          if (caches.registered[obj[key]] !== undefined) {
	            string += key + "{" + caches.registered[obj[key]] + "}";
	          } else {
	            string += processStyleName(key) + ":" + processStyleValue(key, obj[key]) + ";";
	          }
	        } else {
	          if (key === 'NO_COMPONENT_SELECTOR' && true) {
	            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
	          }

	          if (Array.isArray(obj[key]) && typeof obj[key][0] === 'string' && caches.registered[obj[key][0]] === undefined) {
	            obj[key].forEach(function (value) {
	              string += processStyleName(key) + ":" + processStyleValue(key, value) + ";";
	            });
	          } else {
	            string += key + "{" + handleInterpolation.call(this, obj[key], false) + "}";
	          }
	        }
	      }, this);
	    }

	    objectToStringCache.set(obj, string);
	    return string;
	  }

	  var name;
	  var stylesWithLabel;
	  var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;

	  var createClassName = function createClassName(styles, identifierName) {
	    return murmurhash2_32_gc(styles + identifierName) + identifierName;
	  };

	  if (true) {
	    var oldCreateClassName = createClassName;
	    var sourceMappingUrlPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;

	    createClassName = function createClassName(styles, identifierName) {
	      return oldCreateClassName(styles.replace(sourceMappingUrlPattern, function (sourceMap) {
	        currentSourceMap = sourceMap;
	        return '';
	      }), identifierName);
	    };
	  }

	  var createStyles = function createStyles(strings) {
	    var stringMode = true;
	    var styles = '';
	    var identifierName = '';

	    if (strings == null || strings.raw === undefined) {
	      stringMode = false;
	      styles += handleInterpolation.call(this, strings, false);
	    } else {
	      styles += strings[0];
	    }

	    for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      interpolations[_key - 1] = arguments[_key];
	    }

	    interpolations.forEach(function (interpolation, i) {
	      styles += handleInterpolation.call(this, interpolation, styles.charCodeAt(styles.length - 1) === 46 // .
	      );

	      if (stringMode === true && strings[i + 1] !== undefined) {
	        styles += strings[i + 1];
	      }
	    }, this);
	    stylesWithLabel = styles;
	    styles = styles.replace(labelPattern, function (match, p1) {
	      identifierName += "-" + p1;
	      return '';
	    });
	    name = createClassName(styles, identifierName);
	    return styles;
	  };

	  if (true) {
	    var oldStylis = stylis;

	    stylis = function stylis(selector, styles) {
	      oldStylis(selector, styles);
	      currentSourceMap = '';
	    };
	  }

	  function insert(scope, styles) {
	    if (caches.inserted[name] === undefined) {
	      current = '';
	      stylis(scope, styles);
	      caches.inserted[name] = current;
	    }
	  }

	  var css = function css() {
	    var styles = createStyles.apply(this, arguments);
	    var selector = key + "-" + name;

	    if (caches.registered[selector] === undefined) {
	      caches.registered[selector] = stylesWithLabel;
	    }

	    insert("." + selector, styles);
	    return selector;
	  };

	  var keyframes = function keyframes() {
	    var styles = createStyles.apply(this, arguments);
	    var animation = "animation-" + name;
	    insert('', "@keyframes " + animation + "{" + styles + "}");
	    return animation;
	  };

	  var injectGlobal = function injectGlobal() {
	    var styles = createStyles.apply(this, arguments);
	    insert('', styles);
	  };

	  function getRegisteredStyles(registeredStyles, classNames) {
	    var rawClassName = '';
	    classNames.split(' ').forEach(function (className) {
	      if (caches.registered[className] !== undefined) {
	        registeredStyles.push(className);
	      } else {
	        rawClassName += className + " ";
	      }
	    });
	    return rawClassName;
	  }

	  function merge(className, sourceMap) {
	    var registeredStyles = [];
	    var rawClassName = getRegisteredStyles(registeredStyles, className);

	    if (registeredStyles.length < 2) {
	      return className;
	    }

	    return rawClassName + css(registeredStyles, sourceMap);
	  }

	  function cx() {
	    for (var _len2 = arguments.length, classNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      classNames[_key2] = arguments[_key2];
	    }

	    return merge(classnames(classNames));
	  }

	  function hydrateSingleId(id) {
	    caches.inserted[id] = true;
	  }

	  function hydrate(ids) {
	    ids.forEach(hydrateSingleId);
	  }

	  function flush() {
	    if (isBrowser) {
	      sheet.flush();
	      sheet.inject();
	    }

	    caches.inserted = {};
	    caches.registered = {};
	  }

	  if (isBrowser) {
	    var chunks = document.querySelectorAll("[data-emotion-" + key + "]");
	    Array.prototype.forEach.call(chunks, function (node) {
	      // $FlowFixMe
	      sheet.tags[0].parentNode.insertBefore(node, sheet.tags[0]); // $FlowFixMe

	      node.getAttribute("data-emotion-" + key).split(' ').forEach(hydrateSingleId);
	    });
	  }

	  var emotion = {
	    flush: flush,
	    hydrate: hydrate,
	    cx: cx,
	    merge: merge,
	    getRegisteredStyles: getRegisteredStyles,
	    injectGlobal: injectGlobal,
	    keyframes: keyframes,
	    css: css,
	    sheet: sheet,
	    caches: caches
	  };
	  context.__SECRET_EMOTION__ = emotion;
	  return emotion;
	}

	var context = typeof global !== 'undefined' ? global : {};

	var _createEmotion = createEmotion(context),
	    flush = _createEmotion.flush,
	    hydrate = _createEmotion.hydrate,
	    cx = _createEmotion.cx,
	    merge = _createEmotion.merge,
	    getRegisteredStyles = _createEmotion.getRegisteredStyles,
	    injectGlobal = _createEmotion.injectGlobal,
	    keyframes = _createEmotion.keyframes,
	    css = _createEmotion.css,
	    sheet = _createEmotion.sheet,
	    caches = _createEmotion.caches;

	var emotion = /*#__PURE__*/Object.freeze({
		flush: flush,
		hydrate: hydrate,
		cx: cx,
		merge: merge,
		getRegisteredStyles: getRegisteredStyles,
		injectGlobal: injectGlobal,
		keyframes: keyframes,
		css: css,
		sheet: sheet,
		caches: caches
	});

	var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|accept|acceptCharset|accessKey|action|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria)-.*))$/i;
	var index$3 = memoize(RegExp.prototype.test.bind(reactPropsRegex));

	function _inheritsLoose$1(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	var channel$1 = '__EMOTION_THEMING__';

	// https://github.com/styled-components/styled-components/blob/e05b3fe247e9d956bcde786cec376e32afb85bca/src/utils/create-broadcast.js

	var _contextTypes$1;
	var contextTypes$1 = (_contextTypes$1 = {}, _contextTypes$1[channel$1] = propTypes.object, _contextTypes$1);

	function setTheme(theme) {
	  this.setState({
	    theme: theme
	  });
	}
	var testPickPropsOnStringTag = index$3;
	var testPickPropsOnComponent = function testPickPropsOnComponent(key) {
	  return key !== 'theme' && key !== 'innerRef';
	};
	var testAlwaysTrue = function testAlwaysTrue() {
	  return true;
	};
	var pickAssign = function pickAssign(testFn, target) {
	  var i = 2;
	  var length = arguments.length;

	  for (; i < length; i++) {
	    var source = arguments[i];

	    var _key = void 0;

	    for (_key in source) {
	      if (testFn(_key)) {
	        target[_key] = source[_key];
	      }
	    }
	  }

	  return target;
	};

	function createEmotionStyled(emotion, view) {
	  var _createStyled = function createStyled(tag, options) {
	    if (true) {
	      if (tag === undefined) {
	        throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
	      }
	    }

	    var staticClassName;
	    var identifierName;
	    var stableClassName;
	    var shouldForwardProp;

	    if (options !== undefined) {
	      staticClassName = options.e;
	      identifierName = options.label;
	      stableClassName = options.target;
	      shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
	        return tag.__emotion_forwardProp(propName) && // $FlowFixMe
	        options.shouldForwardProp(propName);
	      } : options.shouldForwardProp;
	    }

	    var isReal = tag.__emotion_real === tag;
	    var baseTag = staticClassName === undefined ? isReal && tag.__emotion_base || tag : tag;

	    if (typeof shouldForwardProp !== 'function') {
	      shouldForwardProp = typeof baseTag === 'string' && baseTag.charAt(0) === baseTag.charAt(0).toLowerCase() ? testPickPropsOnStringTag : testPickPropsOnComponent;
	    }

	    return function () {
	      var args = arguments;
	      var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

	      if (identifierName !== undefined) {
	        styles.push("label:" + identifierName + ";");
	      }

	      if (staticClassName === undefined) {
	        if (args[0] == null || args[0].raw === undefined) {
	          styles.push.apply(styles, args);
	        } else {
	          styles.push(args[0][0]);
	          var len = args.length;
	          var i = 1;

	          for (; i < len; i++) {
	            styles.push(args[i], args[0][i]);
	          }
	        }
	      }

	      var Styled =
	      /*#__PURE__*/
	      function (_view$Component) {
	        _inheritsLoose$1(Styled, _view$Component);

	        function Styled() {
	          return _view$Component.apply(this, arguments) || this;
	        }

	        var _proto = Styled.prototype;

	        _proto.componentWillMount = function componentWillMount() {
	          if (this.context[channel$1] !== undefined) {
	            this.unsubscribe = this.context[channel$1].subscribe(setTheme.bind(this));
	          }
	        };

	        _proto.componentWillUnmount = function componentWillUnmount() {
	          if (this.unsubscribe !== undefined) {
	            this.context[channel$1].unsubscribe(this.unsubscribe);
	          }
	        };

	        _proto.render = function render() {
	          var props = this.props,
	              state = this.state;
	          this.mergedProps = pickAssign(testAlwaysTrue, {}, props, {
	            theme: state !== null && state.theme || props.theme || {}
	          });
	          var className = '';
	          var classInterpolations = [];

	          if (props.className) {
	            if (staticClassName === undefined) {
	              className += emotion.getRegisteredStyles(classInterpolations, props.className);
	            } else {
	              className += props.className + " ";
	            }
	          }

	          if (staticClassName === undefined) {
	            className += emotion.css.apply(this, styles.concat(classInterpolations));
	          } else {
	            className += staticClassName;
	          }

	          if (stableClassName !== undefined) {
	            className += " " + stableClassName;
	          }

	          return view.createElement(baseTag, // $FlowFixMe
	          pickAssign(shouldForwardProp, {}, props, {
	            className: className,
	            ref: props.innerRef
	          }));
	        };

	        return Styled;
	      }(view.Component);

	      Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";

	      if (tag.defaultProps !== undefined) {
	        // $FlowFixMe
	        Styled.defaultProps = tag.defaultProps;
	      }

	      Styled.contextTypes = contextTypes$1;
	      Styled.__emotion_styles = styles;
	      Styled.__emotion_base = baseTag;
	      Styled.__emotion_real = Styled;
	      Styled.__emotion_forwardProp = shouldForwardProp;
	      Object.defineProperty(Styled, 'toString', {
	        enumerable: false,
	        value: function value() {
	          if (true && stableClassName === undefined) {
	            return 'NO_COMPONENT_SELECTOR';
	          } // $FlowFixMe


	          return "." + stableClassName;
	        }
	      });

	      Styled.withComponent = function (nextTag, nextOptions) {
	        return _createStyled(nextTag, nextOptions !== undefined ? // $FlowFixMe
	        pickAssign(testAlwaysTrue, {}, options, nextOptions) : options).apply(void 0, styles);
	      };

	      return Styled;
	    };
	  };

	  if (true && typeof Proxy !== 'undefined') {
	    _createStyled = new Proxy(_createStyled, {
	      get: function get(target, property) {
	        switch (property) {
	          // react-hot-loader tries to access this stuff
	          case '__proto__':
	          case 'name':
	          case 'prototype':
	          case 'displayName':
	            {
	              return target[property];
	            }

	          default:
	            {
	              throw new Error("You're trying to use the styled shorthand without babel-plugin-emotion." + ("\nPlease install and setup babel-plugin-emotion or use the function call syntax(`styled('" + property + "')` instead of `styled." + property + "`)"));
	            }
	        }
	      }
	    });
	  }

	  return _createStyled;
	}

	var index$4 = createEmotionStyled(emotion, react);

	var index_esm$1 = /*#__PURE__*/Object.freeze({
		default: index$4,
		flush: flush,
		hydrate: hydrate,
		cx: cx,
		merge: merge,
		getRegisteredStyles: getRegisteredStyles,
		injectGlobal: injectGlobal,
		keyframes: keyframes,
		css: css,
		sheet: sheet,
		caches: caches
	});

	var react_emotion_1 = ( index_esm$1 && index$4 ) || index_esm$1;

	var theme = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;

	exports["default"] = react_emotion_1["default"];

	});

	unwrapExports(theme);

	var elements = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;

	/**
	 * Return themed log-method style
	 * @param style The style
	 * @param type The method
	 */
	var Themed = function (style, method, styles) {
	    return styles["LOG_" + method.toUpperCase() + "_" + style.toUpperCase()] ||
	        styles["LOG_" + style.toUpperCase()];
	};
	/**
	 * console-feed
	 */
	exports.Root = theme["default"]('div')({
	    wordBreak: 'break-word'
	});
	/**
	 * console-message
	 */
	exports.Message = theme["default"]('div')(function (_a) {
	    var _b = _a.theme, styles = _b.styles, method = _b.method;
	    return ({
	        position: 'relative',
	        display: 'flex',
	        color: Themed('color', method, styles),
	        backgroundColor: Themed('background', method, styles),
	        borderTop: "1px solid " + Themed('border', method, styles),
	        borderBottom: "1px solid " + Themed('border', method, styles),
	        marginTop: -1,
	        marginBottom: +/^warn|error$/.test(method),
	        paddingLeft: 10,
	        boxSizing: 'border-box',
	        '& *': {
	            verticalAlign: 'top',
	            boxSizing: 'border-box',
	            fontFamily: styles.BASE_FONT_FAMILY,
	            whiteSpace: 'pre-wrap',
	            fontSize: styles.BASE_FONT_SIZE
	        },
	        '& a': {
	            color: 'rgb(177, 177, 177)'
	        }
	    });
	});
	/**
	 * message-icon
	 */
	exports.Icon = theme["default"]('div')(function (_a) {
	    var _b = _a.theme, styles = _b.styles, method = _b.method;
	    return ({
	        width: styles.LOG_ICON_WIDTH,
	        height: styles.LOG_ICON_HEIGHT,
	        backgroundImage: Themed('icon', method, styles),
	        backgroundRepeat: 'no-repeat',
	        backgroundPosition: '50% 50%'
	    });
	});
	/**
	 * console-content
	 */
	exports.Content = theme["default"]('div')(function (_a) {
	    var _b = _a.theme, styles = _b.styles, method = _b.method;
	    return ({
	        clear: 'right',
	        position: 'relative',
	        padding: styles.PADDING,
	        marginLeft: 15,
	        minHeight: 18,
	        flex: 'auto',
	        width: 'calc(100% - 15px)'
	    });
	});

	});

	unwrapExports(elements);
	var elements_1 = elements.Root;
	var elements_2 = elements.Message;
	var elements_3 = elements.Icon;
	var elements_4 = elements.Content;

	var elements$2 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;

	/**
	 * Object root
	 */
	exports.Root = theme["default"]('div')({
	    display: 'inline-block',
	    '&::after': {
	        content: "' '",
	        display: 'inline-block'
	    },
	    '& > li': {
	        backgroundColor: 'transparent !important',
	        display: 'inline-block'
	    },
	    '& ol:empty': {
	        paddingLeft: '0 !important'
	    }
	});
	/**
	 * Table
	 */
	exports.Table = theme["default"]('span')({
	    '& > li': {
	        display: 'inline-block',
	        marginTop: 5
	    }
	});
	/**
	 * HTML
	 */
	exports.HTML = theme["default"]('span')({
	    display: 'inline-block',
	    '& div:hover': {
	        backgroundColor: 'rgba(255, 220, 158, .05) !important',
	        borderRadius: '2px'
	    }
	});
	/**
	 * Object constructor
	 */
	exports.Constructor = theme["default"]('span')({
	    '& > span > span:nth-child(1)': {
	        opacity: 0.6
	    }
	});

	});

	unwrapExports(elements$2);
	var elements_1$1 = elements$2.Root;
	var elements_2$1 = elements$2.Table;
	var elements_3$1 = elements$2.HTML;
	var elements_4$1 = elements$2.Constructor;

	var html5NamedCharRefs = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	var HTML5NamedCharRefs = {
	    // We don't need the complete named character reference because linkifyHtml
	    // does not modify the escape sequences. We do need &nbsp; so that
	    // whitespace is parsed properly. Other types of whitespace should already
	    // be accounted for
	    nbsp: "\xA0"
	};
	exports.default = HTML5NamedCharRefs;
	});

	unwrapExports(html5NamedCharRefs);

	var entityParser = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	function EntityParser(named) {
	  this.named = named;
	}

	var HEXCHARCODE = /^#[xX]([A-Fa-f0-9]+)$/;
	var CHARCODE = /^#([0-9]+)$/;
	var NAMED = /^([A-Za-z0-9]+)$/;

	EntityParser.prototype.parse = function (entity) {
	  if (!entity) {
	    return;
	  }
	  var matches = entity.match(HEXCHARCODE);
	  if (matches) {
	    return "&#x" + matches[1] + ";";
	  }
	  matches = entity.match(CHARCODE);
	  if (matches) {
	    return "&#" + matches[1] + ";";
	  }
	  matches = entity.match(NAMED);
	  if (matches) {
	    return this.named[matches[1]] || "&" + matches[1] + ";";
	  }
	};

	exports.default = EntityParser;
	});

	unwrapExports(entityParser);

	var utils = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.isSpace = isSpace;
	exports.isAlpha = isAlpha;
	exports.preprocessInput = preprocessInput;
	var WSP = /[\t\n\f ]/;
	var ALPHA = /[A-Za-z]/;
	var CRLF = /\r\n?/g;

	function isSpace(char) {
	  return WSP.test(char);
	}

	function isAlpha(char) {
	  return ALPHA.test(char);
	}

	function preprocessInput(input) {
	  return input.replace(CRLF, "\n");
	}
	});

	unwrapExports(utils);
	var utils_1 = utils.isSpace;
	var utils_2 = utils.isAlpha;
	var utils_3 = utils.preprocessInput;

	var eventedTokenizer = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	function EventedTokenizer(delegate, entityParser) {
	  this.delegate = delegate;
	  this.entityParser = entityParser;

	  this.state = null;
	  this.input = null;

	  this.index = -1;
	  this.line = -1;
	  this.column = -1;
	  this.tagLine = -1;
	  this.tagColumn = -1;

	  this.reset();
	}

	EventedTokenizer.prototype = {
	  reset: function reset() {
	    this.state = 'beforeData';
	    this.input = '';

	    this.index = 0;
	    this.line = 1;
	    this.column = 0;

	    this.tagLine = -1;
	    this.tagColumn = -1;

	    this.delegate.reset();
	  },

	  tokenize: function tokenize(input) {
	    this.reset();
	    this.tokenizePart(input);
	    this.tokenizeEOF();
	  },

	  tokenizePart: function tokenizePart(input) {
	    this.input += (0, utils.preprocessInput)(input);

	    while (this.index < this.input.length) {
	      this.states[this.state].call(this);
	    }
	  },

	  tokenizeEOF: function tokenizeEOF() {
	    this.flushData();
	  },

	  flushData: function flushData() {
	    if (this.state === 'data') {
	      this.delegate.finishData();
	      this.state = 'beforeData';
	    }
	  },

	  peek: function peek() {
	    return this.input.charAt(this.index);
	  },

	  consume: function consume() {
	    var char = this.peek();

	    this.index++;

	    if (char === "\n") {
	      this.line++;
	      this.column = 0;
	    } else {
	      this.column++;
	    }

	    return char;
	  },

	  consumeCharRef: function consumeCharRef() {
	    var endIndex = this.input.indexOf(';', this.index);
	    if (endIndex === -1) {
	      return;
	    }
	    var entity = this.input.slice(this.index, endIndex);
	    var chars = this.entityParser.parse(entity);
	    if (chars) {
	      var count = entity.length;
	      // consume the entity chars
	      while (count) {
	        this.consume();
	        count--;
	      }
	      // consume the `;`
	      this.consume();

	      return chars;
	    }
	  },

	  markTagStart: function markTagStart() {
	    // these properties to be removed in next major bump
	    this.tagLine = this.line;
	    this.tagColumn = this.column;

	    if (this.delegate.tagOpen) {
	      this.delegate.tagOpen();
	    }
	  },

	  states: {
	    beforeData: function beforeData() {
	      var char = this.peek();

	      if (char === "<") {
	        this.state = 'tagOpen';
	        this.markTagStart();
	        this.consume();
	      } else {
	        this.state = 'data';
	        this.delegate.beginData();
	      }
	    },

	    data: function data() {
	      var char = this.peek();

	      if (char === "<") {
	        this.delegate.finishData();
	        this.state = 'tagOpen';
	        this.markTagStart();
	        this.consume();
	      } else if (char === "&") {
	        this.consume();
	        this.delegate.appendToData(this.consumeCharRef() || "&");
	      } else {
	        this.consume();
	        this.delegate.appendToData(char);
	      }
	    },

	    tagOpen: function tagOpen() {
	      var char = this.consume();

	      if (char === "!") {
	        this.state = 'markupDeclaration';
	      } else if (char === "/") {
	        this.state = 'endTagOpen';
	      } else if ((0, utils.isAlpha)(char)) {
	        this.state = 'tagName';
	        this.delegate.beginStartTag();
	        this.delegate.appendToTagName(char.toLowerCase());
	      }
	    },

	    markupDeclaration: function markupDeclaration() {
	      var char = this.consume();

	      if (char === "-" && this.input.charAt(this.index) === "-") {
	        this.consume();
	        this.state = 'commentStart';
	        this.delegate.beginComment();
	      }
	    },

	    commentStart: function commentStart() {
	      var char = this.consume();

	      if (char === "-") {
	        this.state = 'commentStartDash';
	      } else if (char === ">") {
	        this.delegate.finishComment();
	        this.state = 'beforeData';
	      } else {
	        this.delegate.appendToCommentData(char);
	        this.state = 'comment';
	      }
	    },

	    commentStartDash: function commentStartDash() {
	      var char = this.consume();

	      if (char === "-") {
	        this.state = 'commentEnd';
	      } else if (char === ">") {
	        this.delegate.finishComment();
	        this.state = 'beforeData';
	      } else {
	        this.delegate.appendToCommentData("-");
	        this.state = 'comment';
	      }
	    },

	    comment: function comment() {
	      var char = this.consume();

	      if (char === "-") {
	        this.state = 'commentEndDash';
	      } else {
	        this.delegate.appendToCommentData(char);
	      }
	    },

	    commentEndDash: function commentEndDash() {
	      var char = this.consume();

	      if (char === "-") {
	        this.state = 'commentEnd';
	      } else {
	        this.delegate.appendToCommentData("-" + char);
	        this.state = 'comment';
	      }
	    },

	    commentEnd: function commentEnd() {
	      var char = this.consume();

	      if (char === ">") {
	        this.delegate.finishComment();
	        this.state = 'beforeData';
	      } else {
	        this.delegate.appendToCommentData("--" + char);
	        this.state = 'comment';
	      }
	    },

	    tagName: function tagName() {
	      var char = this.consume();

	      if ((0, utils.isSpace)(char)) {
	        this.state = 'beforeAttributeName';
	      } else if (char === "/") {
	        this.state = 'selfClosingStartTag';
	      } else if (char === ">") {
	        this.delegate.finishTag();
	        this.state = 'beforeData';
	      } else {
	        this.delegate.appendToTagName(char);
	      }
	    },

	    beforeAttributeName: function beforeAttributeName() {
	      var char = this.peek();

	      if ((0, utils.isSpace)(char)) {
	        this.consume();
	        return;
	      } else if (char === "/") {
	        this.state = 'selfClosingStartTag';
	        this.consume();
	      } else if (char === ">") {
	        this.consume();
	        this.delegate.finishTag();
	        this.state = 'beforeData';
	      } else {
	        this.state = 'attributeName';
	        this.delegate.beginAttribute();
	        this.consume();
	        this.delegate.appendToAttributeName(char);
	      }
	    },

	    attributeName: function attributeName() {
	      var char = this.peek();

	      if ((0, utils.isSpace)(char)) {
	        this.state = 'afterAttributeName';
	        this.consume();
	      } else if (char === "/") {
	        this.delegate.beginAttributeValue(false);
	        this.delegate.finishAttributeValue();
	        this.consume();
	        this.state = 'selfClosingStartTag';
	      } else if (char === "=") {
	        this.state = 'beforeAttributeValue';
	        this.consume();
	      } else if (char === ">") {
	        this.delegate.beginAttributeValue(false);
	        this.delegate.finishAttributeValue();
	        this.consume();
	        this.delegate.finishTag();
	        this.state = 'beforeData';
	      } else {
	        this.consume();
	        this.delegate.appendToAttributeName(char);
	      }
	    },

	    afterAttributeName: function afterAttributeName() {
	      var char = this.peek();

	      if ((0, utils.isSpace)(char)) {
	        this.consume();
	        return;
	      } else if (char === "/") {
	        this.delegate.beginAttributeValue(false);
	        this.delegate.finishAttributeValue();
	        this.consume();
	        this.state = 'selfClosingStartTag';
	      } else if (char === "=") {
	        this.consume();
	        this.state = 'beforeAttributeValue';
	      } else if (char === ">") {
	        this.delegate.beginAttributeValue(false);
	        this.delegate.finishAttributeValue();
	        this.consume();
	        this.delegate.finishTag();
	        this.state = 'beforeData';
	      } else {
	        this.delegate.beginAttributeValue(false);
	        this.delegate.finishAttributeValue();
	        this.consume();
	        this.state = 'attributeName';
	        this.delegate.beginAttribute();
	        this.delegate.appendToAttributeName(char);
	      }
	    },

	    beforeAttributeValue: function beforeAttributeValue() {
	      var char = this.peek();

	      if ((0, utils.isSpace)(char)) {
	        this.consume();
	      } else if (char === '"') {
	        this.state = 'attributeValueDoubleQuoted';
	        this.delegate.beginAttributeValue(true);
	        this.consume();
	      } else if (char === "'") {
	        this.state = 'attributeValueSingleQuoted';
	        this.delegate.beginAttributeValue(true);
	        this.consume();
	      } else if (char === ">") {
	        this.delegate.beginAttributeValue(false);
	        this.delegate.finishAttributeValue();
	        this.consume();
	        this.delegate.finishTag();
	        this.state = 'beforeData';
	      } else {
	        this.state = 'attributeValueUnquoted';
	        this.delegate.beginAttributeValue(false);
	        this.consume();
	        this.delegate.appendToAttributeValue(char);
	      }
	    },

	    attributeValueDoubleQuoted: function attributeValueDoubleQuoted() {
	      var char = this.consume();

	      if (char === '"') {
	        this.delegate.finishAttributeValue();
	        this.state = 'afterAttributeValueQuoted';
	      } else if (char === "&") {
	        this.delegate.appendToAttributeValue(this.consumeCharRef('"') || "&");
	      } else {
	        this.delegate.appendToAttributeValue(char);
	      }
	    },

	    attributeValueSingleQuoted: function attributeValueSingleQuoted() {
	      var char = this.consume();

	      if (char === "'") {
	        this.delegate.finishAttributeValue();
	        this.state = 'afterAttributeValueQuoted';
	      } else if (char === "&") {
	        this.delegate.appendToAttributeValue(this.consumeCharRef("'") || "&");
	      } else {
	        this.delegate.appendToAttributeValue(char);
	      }
	    },

	    attributeValueUnquoted: function attributeValueUnquoted() {
	      var char = this.peek();

	      if ((0, utils.isSpace)(char)) {
	        this.delegate.finishAttributeValue();
	        this.consume();
	        this.state = 'beforeAttributeName';
	      } else if (char === "&") {
	        this.consume();
	        this.delegate.appendToAttributeValue(this.consumeCharRef(">") || "&");
	      } else if (char === ">") {
	        this.delegate.finishAttributeValue();
	        this.consume();
	        this.delegate.finishTag();
	        this.state = 'beforeData';
	      } else {
	        this.consume();
	        this.delegate.appendToAttributeValue(char);
	      }
	    },

	    afterAttributeValueQuoted: function afterAttributeValueQuoted() {
	      var char = this.peek();

	      if ((0, utils.isSpace)(char)) {
	        this.consume();
	        this.state = 'beforeAttributeName';
	      } else if (char === "/") {
	        this.consume();
	        this.state = 'selfClosingStartTag';
	      } else if (char === ">") {
	        this.consume();
	        this.delegate.finishTag();
	        this.state = 'beforeData';
	      } else {
	        this.state = 'beforeAttributeName';
	      }
	    },

	    selfClosingStartTag: function selfClosingStartTag() {
	      var char = this.peek();

	      if (char === ">") {
	        this.consume();
	        this.delegate.markTagAsSelfClosing();
	        this.delegate.finishTag();
	        this.state = 'beforeData';
	      } else {
	        this.state = 'beforeAttributeName';
	      }
	    },

	    endTagOpen: function endTagOpen() {
	      var char = this.consume();

	      if ((0, utils.isAlpha)(char)) {
	        this.state = 'tagName';
	        this.delegate.beginEndTag();
	        this.delegate.appendToTagName(char.toLowerCase());
	      }
	    }
	  }
	};

	exports.default = EventedTokenizer;
	});

	unwrapExports(eventedTokenizer);

	var tokenizer = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _eventedTokenizer2 = _interopRequireDefault(eventedTokenizer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Tokenizer(entityParser, options) {
	  this.token = null;
	  this.startLine = 1;
	  this.startColumn = 0;
	  this.options = options || {};
	  this.tokenizer = new _eventedTokenizer2.default(this, entityParser);
	}

	Tokenizer.prototype = {
	  tokenize: function tokenize(input) {
	    this.tokens = [];
	    this.tokenizer.tokenize(input);
	    return this.tokens;
	  },

	  tokenizePart: function tokenizePart(input) {
	    this.tokens = [];
	    this.tokenizer.tokenizePart(input);
	    return this.tokens;
	  },

	  tokenizeEOF: function tokenizeEOF() {
	    this.tokens = [];
	    this.tokenizer.tokenizeEOF();
	    return this.tokens[0];
	  },

	  reset: function reset() {
	    this.token = null;
	    this.startLine = 1;
	    this.startColumn = 0;
	  },

	  addLocInfo: function addLocInfo() {
	    if (this.options.loc) {
	      this.token.loc = {
	        start: {
	          line: this.startLine,
	          column: this.startColumn
	        },
	        end: {
	          line: this.tokenizer.line,
	          column: this.tokenizer.column
	        }
	      };
	    }
	    this.startLine = this.tokenizer.line;
	    this.startColumn = this.tokenizer.column;
	  },

	  // Data

	  beginData: function beginData() {
	    this.token = {
	      type: 'Chars',
	      chars: ''
	    };
	    this.tokens.push(this.token);
	  },

	  appendToData: function appendToData(char) {
	    this.token.chars += char;
	  },

	  finishData: function finishData() {
	    this.addLocInfo();
	  },

	  // Comment

	  beginComment: function beginComment() {
	    this.token = {
	      type: 'Comment',
	      chars: ''
	    };
	    this.tokens.push(this.token);
	  },

	  appendToCommentData: function appendToCommentData(char) {
	    this.token.chars += char;
	  },

	  finishComment: function finishComment() {
	    this.addLocInfo();
	  },

	  // Tags - basic

	  beginStartTag: function beginStartTag() {
	    this.token = {
	      type: 'StartTag',
	      tagName: '',
	      attributes: [],
	      selfClosing: false
	    };
	    this.tokens.push(this.token);
	  },

	  beginEndTag: function beginEndTag() {
	    this.token = {
	      type: 'EndTag',
	      tagName: ''
	    };
	    this.tokens.push(this.token);
	  },

	  finishTag: function finishTag() {
	    this.addLocInfo();
	  },

	  markTagAsSelfClosing: function markTagAsSelfClosing() {
	    this.token.selfClosing = true;
	  },

	  // Tags - name

	  appendToTagName: function appendToTagName(char) {
	    this.token.tagName += char;
	  },

	  // Tags - attributes

	  beginAttribute: function beginAttribute() {
	    this._currentAttribute = ["", "", null];
	    this.token.attributes.push(this._currentAttribute);
	  },

	  appendToAttributeName: function appendToAttributeName(char) {
	    this._currentAttribute[0] += char;
	  },

	  beginAttributeValue: function beginAttributeValue(isQuoted) {
	    this._currentAttribute[2] = isQuoted;
	  },

	  appendToAttributeValue: function appendToAttributeValue(char) {
	    this._currentAttribute[1] = this._currentAttribute[1] || "";
	    this._currentAttribute[1] += char;
	  },

	  finishAttributeValue: function finishAttributeValue() {}
	};

	exports.default = Tokenizer;
	});

	unwrapExports(tokenizer);

	var tokenize_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.default = tokenize;



	var _tokenizer2 = _interopRequireDefault(tokenizer);



	var _entityParser2 = _interopRequireDefault(entityParser);



	var _html5NamedCharRefs2 = _interopRequireDefault(html5NamedCharRefs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function tokenize(input, options) {
	  var tokenizer$$1 = new _tokenizer2.default(new _entityParser2.default(_html5NamedCharRefs2.default), options);
	  return tokenizer$$1.tokenize(input);
	}
	});

	unwrapExports(tokenize_1);

	var simpleHtmlTokenizer = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _html5NamedCharRefs2 = _interopRequireDefault(html5NamedCharRefs);



	var _entityParser2 = _interopRequireDefault(entityParser);



	var _eventedTokenizer2 = _interopRequireDefault(eventedTokenizer);



	var _tokenizer2 = _interopRequireDefault(tokenizer);



	var _tokenize2 = _interopRequireDefault(tokenize_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HTML5Tokenizer = {
		HTML5NamedCharRefs: _html5NamedCharRefs2.default,
		EntityParser: _entityParser2.default,
		EventedTokenizer: _eventedTokenizer2.default,
		Tokenizer: _tokenizer2.default,
		tokenize: _tokenize2.default
	};

	exports.default = HTML5Tokenizer;
	});

	unwrapExports(simpleHtmlTokenizer);

	var _class = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.inherits = inherits;
	function inherits(parent, child) {
		var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		var extended = Object.create(parent.prototype);
		for (var p in props) {
			extended[p] = props[p];
		}
		extended.constructor = child;
		child.prototype = extended;
		return child;
	}
	});

	unwrapExports(_class);
	var _class_1 = _class.inherits;

	var options = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var defaults = {
		defaultProtocol: 'http',
		events: null,
		format: noop,
		formatHref: noop,
		nl2br: false,
		tagName: 'a',
		target: typeToTarget,
		validate: true,
		ignoreTags: [],
		attributes: null,
		className: 'linkified' // Deprecated value - no default class will be provided in the future
	};

	exports.defaults = defaults;
	exports.Options = Options;
	exports.contains = contains;


	function Options(opts) {
		opts = opts || {};

		this.defaultProtocol = opts.hasOwnProperty('defaultProtocol') ? opts.defaultProtocol : defaults.defaultProtocol;
		this.events = opts.hasOwnProperty('events') ? opts.events : defaults.events;
		this.format = opts.hasOwnProperty('format') ? opts.format : defaults.format;
		this.formatHref = opts.hasOwnProperty('formatHref') ? opts.formatHref : defaults.formatHref;
		this.nl2br = opts.hasOwnProperty('nl2br') ? opts.nl2br : defaults.nl2br;
		this.tagName = opts.hasOwnProperty('tagName') ? opts.tagName : defaults.tagName;
		this.target = opts.hasOwnProperty('target') ? opts.target : defaults.target;
		this.validate = opts.hasOwnProperty('validate') ? opts.validate : defaults.validate;
		this.ignoreTags = [];

		// linkAttributes and linkClass is deprecated
		this.attributes = opts.attributes || opts.linkAttributes || defaults.attributes;
		this.className = opts.hasOwnProperty('className') ? opts.className : opts.linkClass || defaults.className;

		// Make all tags names upper case
		var ignoredTags = opts.hasOwnProperty('ignoreTags') ? opts.ignoreTags : defaults.ignoreTags;
		for (var i = 0; i < ignoredTags.length; i++) {
			this.ignoreTags.push(ignoredTags[i].toUpperCase());
		}
	}

	Options.prototype = {
		/**
	  * Given the token, return all options for how it should be displayed
	  */
		resolve: function resolve(token) {
			var href = token.toHref(this.defaultProtocol);
			return {
				formatted: this.get('format', token.toString(), token),
				formattedHref: this.get('formatHref', href, token),
				tagName: this.get('tagName', href, token),
				className: this.get('className', href, token),
				target: this.get('target', href, token),
				events: this.getObject('events', href, token),
				attributes: this.getObject('attributes', href, token)
			};
		},


		/**
	  * Returns true or false based on whether a token should be displayed as a
	  * link based on the user options. By default,
	  */
		check: function check(token) {
			return this.get('validate', token.toString(), token);
		},


		// Private methods

		/**
	  * Resolve an option's value based on the value of the option and the given
	  * params.
	  * @param {String} key Name of option to use
	  * @param operator will be passed to the target option if it's method
	  * @param {MultiToken} token The token from linkify.tokenize
	  */
		get: function get(key, operator, token) {
			var optionValue = void 0,
			    option = this[key];
			if (!option) {
				return option;
			}

			switch (typeof option === 'undefined' ? 'undefined' : _typeof(option)) {
				case 'function':
					return option(operator, token.type);
				case 'object':
					optionValue = option.hasOwnProperty(token.type) ? option[token.type] : defaults[key];
					return typeof optionValue === 'function' ? optionValue(operator, token.type) : optionValue;
			}

			return option;
		},
		getObject: function getObject(key, operator, token) {
			var option = this[key];
			return typeof option === 'function' ? option(operator, token.type) : option;
		}
	};

	/**
	 * Quick indexOf replacement for checking the ignoreTags option
	 */
	function contains(arr, value) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === value) {
				return true;
			}
		}
		return false;
	}

	function noop(val) {
		return val;
	}

	function typeToTarget(href, type) {
		return type === 'url' ? '_blank' : null;
	}
	});

	unwrapExports(options);
	var options_1 = options.defaults;
	var options_2 = options.Options;
	var options_3 = options.contains;

	var state = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.stateify = exports.TokenState = exports.CharacterState = undefined;



	function createStateClass() {
		return function (tClass) {
			this.j = [];
			this.T = tClass || null;
		};
	}

	/**
		A simple state machine that can emit token classes

		The `j` property in this class refers to state jumps. It's a
		multidimensional array where for each element:

		* index [0] is a symbol or class of symbols to transition to.
		* index [1] is a State instance which matches

		The type of symbol will depend on the target implementation for this class.
		In Linkify, we have a two-stage scanner. Each stage uses this state machine
		but with a slighly different (polymorphic) implementation.

		The `T` property refers to the token class.

		TODO: Can the `on` and `next` methods be combined?

		@class BaseState
	*/
	var BaseState = createStateClass();
	BaseState.prototype = {
		defaultTransition: false,

		/**
	 	@method constructor
	 	@param {Class} tClass Pass in the kind of token to emit if there are
	 		no jumps after this state and the state is accepting.
	 */

		/**
	 	On the given symbol(s), this machine should go to the given state
	 		@method on
	 	@param {Array|Mixed} symbol
	 	@param {BaseState} state Note that the type of this state should be the
	 		same as the current instance (i.e., don't pass in a different
	 		subclass)
	 */
		on: function on(symbol, state) {
			if (symbol instanceof Array) {
				for (var i = 0; i < symbol.length; i++) {
					this.j.push([symbol[i], state]);
				}
				return this;
			}
			this.j.push([symbol, state]);
			return this;
		},


		/**
	 	Given the next item, returns next state for that item
	 	@method next
	 	@param {Mixed} item Should be an instance of the symbols handled by
	 		this particular machine.
	 	@return {State} state Returns false if no jumps are available
	 */
		next: function next(item) {
			for (var i = 0; i < this.j.length; i++) {
				var jump = this.j[i];
				var symbol = jump[0]; // Next item to check for
				var state = jump[1]; // State to jump to if items match

				// compare item with symbol
				if (this.test(item, symbol)) {
					return state;
				}
			}

			// Nowhere left to jump!
			return this.defaultTransition;
		},


		/**
	 	Does this state accept?
	 	`true` only of `this.T` exists
	 		@method accepts
	 	@return {Boolean}
	 */
		accepts: function accepts() {
			return !!this.T;
		},


		/**
	 	Determine whether a given item "symbolizes" the symbol, where symbol is
	 	a class of items handled by this state machine.
	 		This method should be overriden in extended classes.
	 		@method test
	 	@param {Mixed} item Does this item match the given symbol?
	 	@param {Mixed} symbol
	 	@return {Boolean}
	 */
		test: function test(item, symbol) {
			return item === symbol;
		},


		/**
	 	Emit the token for this State (just return it in this case)
	 	If this emits a token, this instance is an accepting state
	 	@method emit
	 	@return {Class} T
	 */
		emit: function emit() {
			return this.T;
		}
	};

	/**
		State machine for string-based input

		@class CharacterState
		@extends BaseState
	*/
	var CharacterState = (0, _class.inherits)(BaseState, createStateClass(), {
		/**
	 	Does the given character match the given character or regular
	 	expression?
	 		@method test
	 	@param {String} char
	 	@param {String|RegExp} charOrRegExp
	 	@return {Boolean}
	 */
		test: function test(character, charOrRegExp) {
			return character === charOrRegExp || charOrRegExp instanceof RegExp && charOrRegExp.test(character);
		}
	});

	/**
		State machine for input in the form of TextTokens

		@class TokenState
		@extends BaseState
	*/
	var TokenState = (0, _class.inherits)(BaseState, createStateClass(), {

		/**
	  * Similar to `on`, but returns the state the results in the transition from
	  * the given item
	  * @method jump
	  * @param {Mixed} item
	  * @param {Token} [token]
	  * @return state
	  */
		jump: function jump(token) {
			var tClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			var state = this.next(new token('')); // dummy temp token
			if (state === this.defaultTransition) {
				// Make a new state!
				state = new this.constructor(tClass);
				this.on(token, state);
			} else if (tClass) {
				state.T = tClass;
			}
			return state;
		},


		/**
	 	Is the given token an instance of the given token class?
	 		@method test
	 	@param {TextToken} token
	 	@param {Class} tokenClass
	 	@return {Boolean}
	 */
		test: function test(token, tokenClass) {
			return token instanceof tokenClass;
		}
	});

	/**
		Given a non-empty target string, generates states (if required) for each
		consecutive substring of characters in str starting from the beginning of
		the string. The final state will have a special value, as specified in
		options. All other "in between" substrings will have a default end state.

		This turns the state machine into a Trie-like data structure (rather than a
		intelligently-designed DFA).

		Note that I haven't really tried these with any strings other than
		DOMAIN.

		@param {String} str
		@param {CharacterState} start State to jump from the first character
		@param {Class} endToken Token class to emit when the given string has been
			matched and no more jumps exist.
		@param {Class} defaultToken "Filler token", or which token type to emit when
			we don't have a full match
		@return {Array} list of newly-created states
	*/
	function stateify(str, start, endToken, defaultToken) {
		var i = 0,
		    len = str.length,
		    state = start,
		    newStates = [],
		    nextState = void 0;

		// Find the next state without a jump to the next character
		while (i < len && (nextState = state.next(str[i]))) {
			state = nextState;
			i++;
		}

		if (i >= len) {
			return [];
		} // no new tokens were added

		while (i < len - 1) {
			nextState = new CharacterState(defaultToken);
			newStates.push(nextState);
			state.on(str[i], nextState);
			state = nextState;
			i++;
		}

		nextState = new CharacterState(endToken);
		newStates.push(nextState);
		state.on(str[len - 1], nextState);

		return newStates;
	}

	exports.CharacterState = CharacterState;
	exports.TokenState = TokenState;
	exports.stateify = stateify;
	});

	unwrapExports(state);
	var state_1 = state.stateify;
	var state_2 = state.TokenState;
	var state_3 = state.CharacterState;

	var createTokenClass_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	function createTokenClass() {
		return function (value) {
			if (value) {
				this.v = value;
			}
		};
	}

	exports.createTokenClass = createTokenClass;
	});

	unwrapExports(createTokenClass_1);
	var createTokenClass_2 = createTokenClass_1.createTokenClass;

	var text = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.AMPERSAND = exports.CLOSEPAREN = exports.CLOSEANGLEBRACKET = exports.CLOSEBRACKET = exports.CLOSEBRACE = exports.OPENPAREN = exports.OPENANGLEBRACKET = exports.OPENBRACKET = exports.OPENBRACE = exports.WS = exports.TLD = exports.SYM = exports.UNDERSCORE = exports.SLASH = exports.MAILTO = exports.PROTOCOL = exports.QUERY = exports.POUND = exports.PLUS = exports.NUM = exports.NL = exports.LOCALHOST = exports.PUNCTUATION = exports.DOT = exports.COLON = exports.AT = exports.DOMAIN = exports.Base = undefined;





	/******************************************************************************
		Text Tokens
		Tokens composed of strings
	******************************************************************************/

	/**
		Abstract class used for manufacturing text tokens.
		Pass in the value this token represents

		@class TextToken
		@abstract
	*/
	var TextToken = (0, createTokenClass_1.createTokenClass)();
	TextToken.prototype = {
		toString: function toString() {
			return this.v + '';
		}
	};

	function inheritsToken(value) {
		var props = value ? { v: value } : {};
		return (0, _class.inherits)(TextToken, (0, createTokenClass_1.createTokenClass)(), props);
	}

	/**
		A valid domain token
		@class DOMAIN
		@extends TextToken
	*/
	var DOMAIN = inheritsToken();

	/**
		@class AT
		@extends TextToken
	*/
	var AT = inheritsToken('@');

	/**
		Represents a single colon `:` character

		@class COLON
		@extends TextToken
	*/
	var COLON = inheritsToken(':');

	/**
		@class DOT
		@extends TextToken
	*/
	var DOT = inheritsToken('.');

	/**
		A character class that can surround the URL, but which the URL cannot begin
		or end with. Does not include certain English punctuation like parentheses.

		@class PUNCTUATION
		@extends TextToken
	*/
	var PUNCTUATION = inheritsToken();

	/**
		The word localhost (by itself)
		@class LOCALHOST
		@extends TextToken
	*/
	var LOCALHOST = inheritsToken();

	/**
		Newline token
		@class NL
		@extends TextToken
	*/
	var NL = inheritsToken('\n');

	/**
		@class NUM
		@extends TextToken
	*/
	var NUM = inheritsToken();

	/**
		@class PLUS
		@extends TextToken
	*/
	var PLUS = inheritsToken('+');

	/**
		@class POUND
		@extends TextToken
	*/
	var POUND = inheritsToken('#');

	/**
		Represents a web URL protocol. Supported types include

		* `http:`
		* `https:`
		* `ftp:`
		* `ftps:`

		@class PROTOCOL
		@extends TextToken
	*/
	var PROTOCOL = inheritsToken();

	/**
		Represents the start of the email URI protocol

		@class MAILTO
		@extends TextToken
	*/
	var MAILTO = inheritsToken('mailto:');

	/**
		@class QUERY
		@extends TextToken
	*/
	var QUERY = inheritsToken('?');

	/**
		@class SLASH
		@extends TextToken
	*/
	var SLASH = inheritsToken('/');

	/**
		@class UNDERSCORE
		@extends TextToken
	*/
	var UNDERSCORE = inheritsToken('_');

	/**
		One ore more non-whitespace symbol.
		@class SYM
		@extends TextToken
	*/
	var SYM = inheritsToken();

	/**
		@class TLD
		@extends TextToken
	*/
	var TLD = inheritsToken();

	/**
		Represents a string of consecutive whitespace characters

		@class WS
		@extends TextToken
	*/
	var WS = inheritsToken();

	/**
		Opening/closing bracket classes
	*/

	var OPENBRACE = inheritsToken('{');
	var OPENBRACKET = inheritsToken('[');
	var OPENANGLEBRACKET = inheritsToken('<');
	var OPENPAREN = inheritsToken('(');
	var CLOSEBRACE = inheritsToken('}');
	var CLOSEBRACKET = inheritsToken(']');
	var CLOSEANGLEBRACKET = inheritsToken('>');
	var CLOSEPAREN = inheritsToken(')');

	var AMPERSAND = inheritsToken('&');

	exports.Base = TextToken;
	exports.DOMAIN = DOMAIN;
	exports.AT = AT;
	exports.COLON = COLON;
	exports.DOT = DOT;
	exports.PUNCTUATION = PUNCTUATION;
	exports.LOCALHOST = LOCALHOST;
	exports.NL = NL;
	exports.NUM = NUM;
	exports.PLUS = PLUS;
	exports.POUND = POUND;
	exports.QUERY = QUERY;
	exports.PROTOCOL = PROTOCOL;
	exports.MAILTO = MAILTO;
	exports.SLASH = SLASH;
	exports.UNDERSCORE = UNDERSCORE;
	exports.SYM = SYM;
	exports.TLD = TLD;
	exports.WS = WS;
	exports.OPENBRACE = OPENBRACE;
	exports.OPENBRACKET = OPENBRACKET;
	exports.OPENANGLEBRACKET = OPENANGLEBRACKET;
	exports.OPENPAREN = OPENPAREN;
	exports.CLOSEBRACE = CLOSEBRACE;
	exports.CLOSEBRACKET = CLOSEBRACKET;
	exports.CLOSEANGLEBRACKET = CLOSEANGLEBRACKET;
	exports.CLOSEPAREN = CLOSEPAREN;
	exports.AMPERSAND = AMPERSAND;
	});

	unwrapExports(text);
	var text_1 = text.AMPERSAND;
	var text_2 = text.CLOSEPAREN;
	var text_3 = text.CLOSEANGLEBRACKET;
	var text_4 = text.CLOSEBRACKET;
	var text_5 = text.CLOSEBRACE;
	var text_6 = text.OPENPAREN;
	var text_7 = text.OPENANGLEBRACKET;
	var text_8 = text.OPENBRACKET;
	var text_9 = text.OPENBRACE;
	var text_10 = text.WS;
	var text_11 = text.TLD;
	var text_12 = text.SYM;
	var text_13 = text.UNDERSCORE;
	var text_14 = text.SLASH;
	var text_15 = text.MAILTO;
	var text_16 = text.PROTOCOL;
	var text_17 = text.QUERY;
	var text_18 = text.POUND;
	var text_19 = text.PLUS;
	var text_20 = text.NUM;
	var text_21 = text.NL;
	var text_22 = text.LOCALHOST;
	var text_23 = text.PUNCTUATION;
	var text_24 = text.DOT;
	var text_25 = text.COLON;
	var text_26 = text.AT;
	var text_27 = text.DOMAIN;
	var text_28 = text.Base;

	var scanner = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.start = exports.run = exports.TOKENS = exports.State = undefined;





	var TOKENS = _interopRequireWildcard(text);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var tlds = 'aaa|aarp|abarth|abb|abbott|abbvie|abc|able|abogado|abudhabi|ac|academy|accenture|accountant|accountants|aco|active|actor|ad|adac|ads|adult|ae|aeg|aero|aetna|af|afamilycompany|afl|africa|ag|agakhan|agency|ai|aig|aigo|airbus|airforce|airtel|akdn|al|alfaromeo|alibaba|alipay|allfinanz|allstate|ally|alsace|alstom|am|americanexpress|americanfamily|amex|amfam|amica|amsterdam|analytics|android|anquan|anz|ao|aol|apartments|app|apple|aq|aquarelle|ar|arab|aramco|archi|army|arpa|art|arte|as|asda|asia|associates|at|athleta|attorney|au|auction|audi|audible|audio|auspost|author|auto|autos|avianca|aw|aws|ax|axa|az|azure|ba|baby|baidu|banamex|bananarepublic|band|bank|bar|barcelona|barclaycard|barclays|barefoot|bargains|baseball|basketball|bauhaus|bayern|bb|bbc|bbt|bbva|bcg|bcn|bd|be|beats|beauty|beer|bentley|berlin|best|bestbuy|bet|bf|bg|bh|bharti|bi|bible|bid|bike|bing|bingo|bio|biz|bj|black|blackfriday|blanco|blockbuster|blog|bloomberg|blue|bm|bms|bmw|bn|bnl|bnpparibas|bo|boats|boehringer|bofa|bom|bond|boo|book|booking|boots|bosch|bostik|boston|bot|boutique|box|br|bradesco|bridgestone|broadway|broker|brother|brussels|bs|bt|budapest|bugatti|build|builders|business|buy|buzz|bv|bw|by|bz|bzh|ca|cab|cafe|cal|call|calvinklein|cam|camera|camp|cancerresearch|canon|capetown|capital|capitalone|car|caravan|cards|care|career|careers|cars|cartier|casa|case|caseih|cash|casino|cat|catering|catholic|cba|cbn|cbre|cbs|cc|cd|ceb|center|ceo|cern|cf|cfa|cfd|cg|ch|chanel|channel|chase|chat|cheap|chintai|chloe|christmas|chrome|chrysler|church|ci|cipriani|circle|cisco|citadel|citi|citic|city|cityeats|ck|cl|claims|cleaning|click|clinic|clinique|clothing|cloud|club|clubmed|cm|cn|co|coach|codes|coffee|college|cologne|com|comcast|commbank|community|company|compare|computer|comsec|condos|construction|consulting|contact|contractors|cooking|cookingchannel|cool|coop|corsica|country|coupon|coupons|courses|cr|credit|creditcard|creditunion|cricket|crown|crs|cruise|cruises|csc|cu|cuisinella|cv|cw|cx|cy|cymru|cyou|cz|dabur|dad|dance|data|date|dating|datsun|day|dclk|dds|de|deal|dealer|deals|degree|delivery|dell|deloitte|delta|democrat|dental|dentist|desi|design|dev|dhl|diamonds|diet|digital|direct|directory|discount|discover|dish|diy|dj|dk|dm|dnp|do|docs|doctor|dodge|dog|doha|domains|dot|download|drive|dtv|dubai|duck|dunlop|duns|dupont|durban|dvag|dvr|dz|earth|eat|ec|eco|edeka|edu|education|ee|eg|email|emerck|energy|engineer|engineering|enterprises|epost|epson|equipment|er|ericsson|erni|es|esq|estate|esurance|et|etisalat|eu|eurovision|eus|events|everbank|exchange|expert|exposed|express|extraspace|fage|fail|fairwinds|faith|family|fan|fans|farm|farmers|fashion|fast|fedex|feedback|ferrari|ferrero|fi|fiat|fidelity|fido|film|final|finance|financial|fire|firestone|firmdale|fish|fishing|fit|fitness|fj|fk|flickr|flights|flir|florist|flowers|fly|fm|fo|foo|food|foodnetwork|football|ford|forex|forsale|forum|foundation|fox|fr|free|fresenius|frl|frogans|frontdoor|frontier|ftr|fujitsu|fujixerox|fun|fund|furniture|futbol|fyi|ga|gal|gallery|gallo|gallup|game|games|gap|garden|gb|gbiz|gd|gdn|ge|gea|gent|genting|george|gf|gg|ggee|gh|gi|gift|gifts|gives|giving|gl|glade|glass|gle|global|globo|gm|gmail|gmbh|gmo|gmx|gn|godaddy|gold|goldpoint|golf|goo|goodhands|goodyear|goog|google|gop|got|gov|gp|gq|gr|grainger|graphics|gratis|green|gripe|grocery|group|gs|gt|gu|guardian|gucci|guge|guide|guitars|guru|gw|gy|hair|hamburg|hangout|haus|hbo|hdfc|hdfcbank|health|healthcare|help|helsinki|here|hermes|hgtv|hiphop|hisamitsu|hitachi|hiv|hk|hkt|hm|hn|hockey|holdings|holiday|homedepot|homegoods|homes|homesense|honda|honeywell|horse|hospital|host|hosting|hot|hoteles|hotels|hotmail|house|how|hr|hsbc|ht|htc|hu|hughes|hyatt|hyundai|ibm|icbc|ice|icu|id|ie|ieee|ifm|ikano|il|im|imamat|imdb|immo|immobilien|in|industries|infiniti|info|ing|ink|institute|insurance|insure|int|intel|international|intuit|investments|io|ipiranga|iq|ir|irish|is|iselect|ismaili|ist|istanbul|it|itau|itv|iveco|iwc|jaguar|java|jcb|jcp|je|jeep|jetzt|jewelry|jio|jlc|jll|jm|jmp|jnj|jo|jobs|joburg|jot|joy|jp|jpmorgan|jprs|juegos|juniper|kaufen|kddi|ke|kerryhotels|kerrylogistics|kerryproperties|kfh|kg|kh|ki|kia|kim|kinder|kindle|kitchen|kiwi|km|kn|koeln|komatsu|kosher|kp|kpmg|kpn|kr|krd|kred|kuokgroup|kw|ky|kyoto|kz|la|lacaixa|ladbrokes|lamborghini|lamer|lancaster|lancia|lancome|land|landrover|lanxess|lasalle|lat|latino|latrobe|law|lawyer|lb|lc|lds|lease|leclerc|lefrak|legal|lego|lexus|lgbt|li|liaison|lidl|life|lifeinsurance|lifestyle|lighting|like|lilly|limited|limo|lincoln|linde|link|lipsy|live|living|lixil|lk|loan|loans|locker|locus|loft|lol|london|lotte|lotto|love|lpl|lplfinancial|lr|ls|lt|ltd|ltda|lu|lundbeck|lupin|luxe|luxury|lv|ly|ma|macys|madrid|maif|maison|makeup|man|management|mango|map|market|marketing|markets|marriott|marshalls|maserati|mattel|mba|mc|mckinsey|md|me|med|media|meet|melbourne|meme|memorial|men|menu|meo|merckmsd|metlife|mg|mh|miami|microsoft|mil|mini|mint|mit|mitsubishi|mk|ml|mlb|mls|mm|mma|mn|mo|mobi|mobile|mobily|moda|moe|moi|mom|monash|money|monster|mopar|mormon|mortgage|moscow|moto|motorcycles|mov|movie|movistar|mp|mq|mr|ms|msd|mt|mtn|mtr|mu|museum|mutual|mv|mw|mx|my|mz|na|nab|nadex|nagoya|name|nationwide|natura|navy|nba|nc|ne|nec|net|netbank|netflix|network|neustar|new|newholland|news|next|nextdirect|nexus|nf|nfl|ng|ngo|nhk|ni|nico|nike|nikon|ninja|nissan|nissay|nl|no|nokia|northwesternmutual|norton|now|nowruz|nowtv|np|nr|nra|nrw|ntt|nu|nyc|nz|obi|observer|off|office|okinawa|olayan|olayangroup|oldnavy|ollo|om|omega|one|ong|onl|online|onyourside|ooo|open|oracle|orange|org|organic|origins|osaka|otsuka|ott|ovh|pa|page|panasonic|panerai|paris|pars|partners|parts|party|passagens|pay|pccw|pe|pet|pf|pfizer|pg|ph|pharmacy|phd|philips|phone|photo|photography|photos|physio|piaget|pics|pictet|pictures|pid|pin|ping|pink|pioneer|pizza|pk|pl|place|play|playstation|plumbing|plus|pm|pn|pnc|pohl|poker|politie|porn|post|pr|pramerica|praxi|press|prime|pro|prod|productions|prof|progressive|promo|properties|property|protection|pru|prudential|ps|pt|pub|pw|pwc|py|qa|qpon|quebec|quest|qvc|racing|radio|raid|re|read|realestate|realtor|realty|recipes|red|redstone|redumbrella|rehab|reise|reisen|reit|reliance|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rexroth|rich|richardli|ricoh|rightathome|ril|rio|rip|rmit|ro|rocher|rocks|rodeo|rogers|room|rs|rsvp|ru|rugby|ruhr|run|rw|rwe|ryukyu|sa|saarland|safe|safety|sakura|sale|salon|samsclub|samsung|sandvik|sandvikcoromant|sanofi|sap|sapo|sarl|sas|save|saxo|sb|sbi|sbs|sc|sca|scb|schaeffler|schmidt|scholarships|school|schule|schwarz|science|scjohnson|scor|scot|sd|se|search|seat|secure|security|seek|select|sener|services|ses|seven|sew|sex|sexy|sfr|sg|sh|shangrila|sharp|shaw|shell|shia|shiksha|shoes|shop|shopping|shouji|show|showtime|shriram|si|silk|sina|singles|site|sj|sk|ski|skin|sky|skype|sl|sling|sm|smart|smile|sn|sncf|so|soccer|social|softbank|software|sohu|solar|solutions|song|sony|soy|space|spiegel|spot|spreadbetting|sr|srl|srt|st|stada|staples|star|starhub|statebank|statefarm|statoil|stc|stcgroup|stockholm|storage|store|stream|studio|study|style|su|sucks|supplies|supply|support|surf|surgery|suzuki|sv|swatch|swiftcover|swiss|sx|sy|sydney|symantec|systems|sz|tab|taipei|talk|taobao|target|tatamotors|tatar|tattoo|tax|taxi|tc|tci|td|tdk|team|tech|technology|tel|telecity|telefonica|temasek|tennis|teva|tf|tg|th|thd|theater|theatre|tiaa|tickets|tienda|tiffany|tips|tires|tirol|tj|tjmaxx|tjx|tk|tkmaxx|tl|tm|tmall|tn|to|today|tokyo|tools|top|toray|toshiba|total|tours|town|toyota|toys|tr|trade|trading|training|travel|travelchannel|travelers|travelersinsurance|trust|trv|tt|tube|tui|tunes|tushu|tv|tvs|tw|tz|ua|ubank|ubs|uconnect|ug|uk|unicom|university|uno|uol|ups|us|uy|uz|va|vacations|vana|vanguard|vc|ve|vegas|ventures|verisign|versicherung|vet|vg|vi|viajes|video|vig|viking|villas|vin|vip|virgin|visa|vision|vista|vistaprint|viva|vivo|vlaanderen|vn|vodka|volkswagen|volvo|vote|voting|voto|voyage|vu|vuelos|wales|walmart|walter|wang|wanggou|warman|watch|watches|weather|weatherchannel|webcam|weber|website|wed|wedding|weibo|weir|wf|whoswho|wien|wiki|williamhill|win|windows|wine|winners|wme|wolterskluwer|woodside|work|works|world|wow|ws|wtc|wtf|xbox|xerox|xfinity|xihuan|xin|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--30rr7y|xn--3bst00m|xn--3ds443g|xn--3e0b707e|xn--3hcrj9c|xn--3oq18vl8pn36a|xn--3pxu8k|xn--42c2d9a|xn--45br5cyl|xn--45brj9c|xn--45q11c|xn--4gbrim|xn--54b7fta0cc|xn--55qw42g|xn--55qx5d|xn--5su34j936bgsg|xn--5tzm5g|xn--6frz82g|xn--6qq986b3xl|xn--80adxhks|xn--80ao21a|xn--80aqecdr1a|xn--80asehdb|xn--80aswg|xn--8y0a063a|xn--90a3ac|xn--90ae|xn--90ais|xn--9dbq2a|xn--9et52u|xn--9krt00a|xn--b4w605ferd|xn--bck1b9a5dre4c|xn--c1avg|xn--c2br7g|xn--cck2b3b|xn--cg4bki|xn--clchc0ea0b2g2a9gcd|xn--czr694b|xn--czrs0t|xn--czru2d|xn--d1acj3b|xn--d1alf|xn--e1a4c|xn--eckvdtc9d|xn--efvy88h|xn--estv75g|xn--fct429k|xn--fhbei|xn--fiq228c5hs|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--fjq720a|xn--flw351e|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--fzys8d69uvgm|xn--g2xx48c|xn--gckr3f0f|xn--gecrj9c|xn--gk3at1e|xn--h2breg3eve|xn--h2brj9c|xn--h2brj9c8c|xn--hxt814e|xn--i1b6b1a6a2e|xn--imr513n|xn--io0a7i|xn--j1aef|xn--j1amh|xn--j6w193g|xn--jlq61u9w7b|xn--jvr189m|xn--kcrx77d1x4a|xn--kprw13d|xn--kpry57d|xn--kpu716f|xn--kput3i|xn--l1acc|xn--lgbbat1ad8j|xn--mgb9awbf|xn--mgba3a3ejt|xn--mgba3a4f16a|xn--mgba7c0bbn0a|xn--mgbaakc7dvf|xn--mgbaam7a8h|xn--mgbab2bd|xn--mgbai9azgqp6j|xn--mgbayh7gpa|xn--mgbb9fbpob|xn--mgbbh1a|xn--mgbbh1a71e|xn--mgbc0a9azcg|xn--mgbca7dzdo|xn--mgberp4a5d4ar|xn--mgbgu82a|xn--mgbi4ecexp|xn--mgbpl2fh|xn--mgbt3dhd|xn--mgbtx2b|xn--mgbx4cd0ab|xn--mix891f|xn--mk1bu44c|xn--mxtq1m|xn--ngbc5azd|xn--ngbe9e0a|xn--ngbrx|xn--node|xn--nqv7f|xn--nqv7fs00ema|xn--nyqy26a|xn--o3cw4h|xn--ogbpf8fl|xn--p1acf|xn--p1ai|xn--pbt977c|xn--pgbs0dh|xn--pssy2u|xn--q9jyb4c|xn--qcka1pmc|xn--qxam|xn--rhqv96g|xn--rovu88b|xn--rvc1e0am3e|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--tckwe|xn--tiq49xqyj|xn--unup4y|xn--vermgensberater-ctb|xn--vermgensberatung-pwb|xn--vhquv|xn--vuq861b|xn--w4r85el8fhu5dnra|xn--w4rs40l|xn--wgbh1c|xn--wgbl6a|xn--xhq521b|xn--xkc2al3hye2a|xn--xkc2dl3a5ee0h|xn--y9a3aq|xn--yfro4i67o|xn--ygbi2ammx|xn--zfr164b|xperia|xxx|xyz|yachts|yahoo|yamaxun|yandex|ye|yodobashi|yoga|yokohama|you|youtube|yt|yun|za|zappos|zara|zero|zip|zippo|zm|zone|zuerich|zw'.split('|'); // macro, see gulpfile.js

	/**
		The scanner provides an interface that takes a string of text as input, and
		outputs an array of tokens instances that can be used for easy URL parsing.

		@module linkify
		@submodule scanner
		@main scanner
	*/

	var NUMBERS = '0123456789'.split('');
	var ALPHANUM = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
	var WHITESPACE = [' ', '\f', '\r', '\t', '\v', '\xA0', '\u1680', '\u180E']; // excluding line breaks

	var domainStates = []; // states that jump to DOMAIN on /[a-z0-9]/
	var makeState = function makeState(tokenClass) {
		return new state.CharacterState(tokenClass);
	};

	// Frequently used states
	var S_START = makeState();
	var S_NUM = makeState(text.NUM);
	var S_DOMAIN = makeState(text.DOMAIN);
	var S_DOMAIN_HYPHEN = makeState(); // domain followed by 1 or more hyphen characters
	var S_WS = makeState(text.WS);

	// States for special URL symbols
	S_START.on('@', makeState(text.AT)).on('.', makeState(text.DOT)).on('+', makeState(text.PLUS)).on('#', makeState(text.POUND)).on('?', makeState(text.QUERY)).on('/', makeState(text.SLASH)).on('_', makeState(text.UNDERSCORE)).on(':', makeState(text.COLON)).on('{', makeState(text.OPENBRACE)).on('[', makeState(text.OPENBRACKET)).on('<', makeState(text.OPENANGLEBRACKET)).on('(', makeState(text.OPENPAREN)).on('}', makeState(text.CLOSEBRACE)).on(']', makeState(text.CLOSEBRACKET)).on('>', makeState(text.CLOSEANGLEBRACKET)).on(')', makeState(text.CLOSEPAREN)).on('&', makeState(text.AMPERSAND)).on([',', ';', '!', '"', '\''], makeState(text.PUNCTUATION));

	// Whitespace jumps
	// Tokens of only non-newline whitespace are arbitrarily long
	S_START.on('\n', makeState(text.NL)).on(WHITESPACE, S_WS);

	// If any whitespace except newline, more whitespace!
	S_WS.on(WHITESPACE, S_WS);

	// Generates states for top-level domains
	// Note that this is most accurate when tlds are in alphabetical order
	for (var i = 0; i < tlds.length; i++) {
		var newStates = (0, state.stateify)(tlds[i], S_START, text.TLD, text.DOMAIN);
		domainStates.push.apply(domainStates, newStates);
	}

	// Collect the states generated by different protocls
	var partialProtocolFileStates = (0, state.stateify)('file', S_START, text.DOMAIN, text.DOMAIN);
	var partialProtocolFtpStates = (0, state.stateify)('ftp', S_START, text.DOMAIN, text.DOMAIN);
	var partialProtocolHttpStates = (0, state.stateify)('http', S_START, text.DOMAIN, text.DOMAIN);
	var partialProtocolMailtoStates = (0, state.stateify)('mailto', S_START, text.DOMAIN, text.DOMAIN);

	// Add the states to the array of DOMAINeric states
	domainStates.push.apply(domainStates, partialProtocolFileStates);
	domainStates.push.apply(domainStates, partialProtocolFtpStates);
	domainStates.push.apply(domainStates, partialProtocolHttpStates);
	domainStates.push.apply(domainStates, partialProtocolMailtoStates);

	// Protocol states
	var S_PROTOCOL_FILE = partialProtocolFileStates.pop();
	var S_PROTOCOL_FTP = partialProtocolFtpStates.pop();
	var S_PROTOCOL_HTTP = partialProtocolHttpStates.pop();
	var S_MAILTO = partialProtocolMailtoStates.pop();
	var S_PROTOCOL_SECURE = makeState(text.DOMAIN);
	var S_FULL_PROTOCOL = makeState(text.PROTOCOL); // Full protocol ends with COLON
	var S_FULL_MAILTO = makeState(text.MAILTO); // Mailto ends with COLON

	// Secure protocols (end with 's')
	S_PROTOCOL_FTP.on('s', S_PROTOCOL_SECURE).on(':', S_FULL_PROTOCOL);

	S_PROTOCOL_HTTP.on('s', S_PROTOCOL_SECURE).on(':', S_FULL_PROTOCOL);

	domainStates.push(S_PROTOCOL_SECURE);

	// Become protocol tokens after a COLON
	S_PROTOCOL_FILE.on(':', S_FULL_PROTOCOL);
	S_PROTOCOL_SECURE.on(':', S_FULL_PROTOCOL);
	S_MAILTO.on(':', S_FULL_MAILTO);

	// Localhost
	var partialLocalhostStates = (0, state.stateify)('localhost', S_START, text.LOCALHOST, text.DOMAIN);
	domainStates.push.apply(domainStates, partialLocalhostStates);

	// Everything else
	// DOMAINs make more DOMAINs
	// Number and character transitions
	S_START.on(NUMBERS, S_NUM);
	S_NUM.on('-', S_DOMAIN_HYPHEN).on(NUMBERS, S_NUM).on(ALPHANUM, S_DOMAIN); // number becomes DOMAIN

	S_DOMAIN.on('-', S_DOMAIN_HYPHEN).on(ALPHANUM, S_DOMAIN);

	// All the generated states should have a jump to DOMAIN
	for (var _i = 0; _i < domainStates.length; _i++) {
		domainStates[_i].on('-', S_DOMAIN_HYPHEN).on(ALPHANUM, S_DOMAIN);
	}

	S_DOMAIN_HYPHEN.on('-', S_DOMAIN_HYPHEN).on(NUMBERS, S_DOMAIN).on(ALPHANUM, S_DOMAIN);

	// Set default transition
	S_START.defaultTransition = makeState(text.SYM);

	/**
		Given a string, returns an array of TOKEN instances representing the
		composition of that string.

		@method run
		@param {String} str Input string to scan
		@return {Array} Array of TOKEN instances
	*/
	var run = function run(str) {

		// The state machine only looks at lowercase strings.
		// This selective `toLowerCase` is used because lowercasing the entire
		// string causes the length and character position to vary in some in some
		// non-English strings. This happens only on V8-based runtimes.
		var lowerStr = str.replace(/[A-Z]/g, function (c) {
			return c.toLowerCase();
		});
		var len = str.length;
		var tokens = []; // return value

		var cursor = 0;

		// Tokenize the string
		while (cursor < len) {
			var state$$1 = S_START;
			var nextState = null;
			var tokenLength = 0;
			var latestAccepting = null;
			var sinceAccepts = -1;

			while (cursor < len && (nextState = state$$1.next(lowerStr[cursor]))) {
				state$$1 = nextState;

				// Keep track of the latest accepting state
				if (state$$1.accepts()) {
					sinceAccepts = 0;
					latestAccepting = state$$1;
				} else if (sinceAccepts >= 0) {
					sinceAccepts++;
				}

				tokenLength++;
				cursor++;
			}

			if (sinceAccepts < 0) {
				continue;
			} // Should never happen

			// Roll back to the latest accepting state
			cursor -= sinceAccepts;
			tokenLength -= sinceAccepts;

			// Get the class for the new token
			var TOKEN = latestAccepting.emit(); // Current token class

			// No more jumps, just make a new token
			tokens.push(new TOKEN(str.substr(cursor - tokenLength, tokenLength)));
		}

		return tokens;
	};

	var start = S_START;
	exports.State = state.CharacterState;
	exports.TOKENS = TOKENS;
	exports.run = run;
	exports.start = start;
	});

	unwrapExports(scanner);
	var scanner_1 = scanner.start;
	var scanner_2 = scanner.run;
	var scanner_3 = scanner.TOKENS;
	var scanner_4 = scanner.State;

	var multi = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.URL = exports.TEXT = exports.NL = exports.EMAIL = exports.MAILTOEMAIL = exports.Base = undefined;







	/******************************************************************************
		Multi-Tokens
		Tokens composed of arrays of TextTokens
	******************************************************************************/

	// Is the given token a valid domain token?
	// Should nums be included here?
	function isDomainToken(token) {
		return token instanceof text.DOMAIN || token instanceof text.TLD;
	}

	/**
		Abstract class used for manufacturing tokens of text tokens. That is rather
		than the value for a token being a small string of text, it's value an array
		of text tokens.

		Used for grouping together URLs, emails, hashtags, and other potential
		creations.

		@class MultiToken
		@abstract
	*/
	var MultiToken = (0, createTokenClass_1.createTokenClass)();

	MultiToken.prototype = {
		/**
	 	String representing the type for this token
	 	@property type
	 	@default 'TOKEN'
	 */
		type: 'token',

		/**
	 	Is this multitoken a link?
	 	@property isLink
	 	@default false
	 */
		isLink: false,

		/**
	 	Return the string this token represents.
	 	@method toString
	 	@return {String}
	 */
		toString: function toString() {
			var result = [];
			for (var i = 0; i < this.v.length; i++) {
				result.push(this.v[i].toString());
			}
			return result.join('');
		},


		/**
	 	What should the value for this token be in the `href` HTML attribute?
	 	Returns the `.toString` value by default.
	 		@method toHref
	 	@return {String}
	 */
		toHref: function toHref() {
			return this.toString();
		},


		/**
	 	Returns a hash of relevant values for this token, which includes keys
	 	* type - Kind of token ('url', 'email', etc.)
	 	* value - Original text
	 	* href - The value that should be added to the anchor tag's href
	 		attribute
	 		@method toObject
	 	@param {String} [protocol] `'http'` by default
	 	@return {Object}
	 */
		toObject: function toObject() {
			var protocol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http';

			return {
				type: this.type,
				value: this.toString(),
				href: this.toHref(protocol)
			};
		}
	};

	/**
		Represents an arbitrarily mailto email address with the prefix included
		@class MAILTO
		@extends MultiToken
	*/
	var MAILTOEMAIL = (0, _class.inherits)(MultiToken, (0, createTokenClass_1.createTokenClass)(), {
		type: 'email',
		isLink: true
	});

	/**
		Represents a list of tokens making up a valid email address
		@class EMAIL
		@extends MultiToken
	*/
	var EMAIL = (0, _class.inherits)(MultiToken, (0, createTokenClass_1.createTokenClass)(), {
		type: 'email',
		isLink: true,
		toHref: function toHref() {
			return 'mailto:' + this.toString();
		}
	});

	/**
		Represents some plain text
		@class TEXT
		@extends MultiToken
	*/
	var TEXT = (0, _class.inherits)(MultiToken, (0, createTokenClass_1.createTokenClass)(), { type: 'text' });

	/**
		Multi-linebreak token - represents a line break
		@class NL
		@extends MultiToken
	*/
	var NL = (0, _class.inherits)(MultiToken, (0, createTokenClass_1.createTokenClass)(), { type: 'nl' });

	/**
		Represents a list of tokens making up a valid URL
		@class URL
		@extends MultiToken
	*/
	var URL = (0, _class.inherits)(MultiToken, (0, createTokenClass_1.createTokenClass)(), {
		type: 'url',
		isLink: true,

		/**
	 	Lowercases relevant parts of the domain and adds the protocol if
	 	required. Note that this will not escape unsafe HTML characters in the
	 	URL.
	 		@method href
	 	@param {String} protocol
	 	@return {String}
	 */
		toHref: function toHref() {
			var protocol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http';

			var hasProtocol = false;
			var hasSlashSlash = false;
			var tokens = this.v;
			var result = [];
			var i = 0;

			// Make the first part of the domain lowercase
			// Lowercase protocol
			while (tokens[i] instanceof text.PROTOCOL) {
				hasProtocol = true;
				result.push(tokens[i].toString().toLowerCase());
				i++;
			}

			// Skip slash-slash
			while (tokens[i] instanceof text.SLASH) {
				hasSlashSlash = true;
				result.push(tokens[i].toString());
				i++;
			}

			// Lowercase all other characters in the domain
			while (isDomainToken(tokens[i])) {
				result.push(tokens[i].toString().toLowerCase());
				i++;
			}

			// Leave all other characters as they were written
			for (; i < tokens.length; i++) {
				result.push(tokens[i].toString());
			}

			result = result.join('');

			if (!(hasProtocol || hasSlashSlash)) {
				result = protocol + '://' + result;
			}

			return result;
		},
		hasProtocol: function hasProtocol() {
			return this.v[0] instanceof text.PROTOCOL;
		}
	});

	exports.Base = MultiToken;
	exports.MAILTOEMAIL = MAILTOEMAIL;
	exports.EMAIL = EMAIL;
	exports.NL = NL;
	exports.TEXT = TEXT;
	exports.URL = URL;
	});

	unwrapExports(multi);
	var multi_1 = multi.URL;
	var multi_2 = multi.TEXT;
	var multi_3 = multi.NL;
	var multi_4 = multi.EMAIL;
	var multi_5 = multi.MAILTOEMAIL;
	var multi_6 = multi.Base;

	var parser = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.start = exports.run = exports.TOKENS = exports.State = undefined;





	var MULTI_TOKENS = _interopRequireWildcard(multi);



	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
		Not exactly parser, more like the second-stage scanner (although we can
		theoretically hotswap the code here with a real parser in the future... but
		for a little URL-finding utility abstract syntax trees may be a little
		overkill).

		URL format: http://en.wikipedia.org/wiki/URI_scheme
		Email format: http://en.wikipedia.org/wiki/Email_address (links to RFC in
		reference)

		@module linkify
		@submodule parser
		@main parser
	*/

	var makeState = function makeState(tokenClass) {
		return new state.TokenState(tokenClass);
	};

	// The universal starting state.
	var S_START = makeState();

	// Intermediate states for URLs. Note that domains that begin with a protocol
	// are treated slighly differently from those that don't.
	var S_PROTOCOL = makeState(); // e.g., 'http:'
	var S_MAILTO = makeState(); // 'mailto:'
	var S_PROTOCOL_SLASH = makeState(); // e.g., '/', 'http:/''
	var S_PROTOCOL_SLASH_SLASH = makeState(); // e.g., '//', 'http://'
	var S_DOMAIN = makeState(); // parsed string ends with a potential domain name (A)
	var S_DOMAIN_DOT = makeState(); // (A) domain followed by DOT
	var S_TLD = makeState(multi.URL); // (A) Simplest possible URL with no query string
	var S_TLD_COLON = makeState(); // (A) URL followed by colon (potential port number here)
	var S_TLD_PORT = makeState(multi.URL); // TLD followed by a port number
	var S_URL = makeState(multi.URL); // Long URL with optional port and maybe query string
	var S_URL_NON_ACCEPTING = makeState(); // URL followed by some symbols (will not be part of the final URL)
	var S_URL_OPENBRACE = makeState(); // URL followed by {
	var S_URL_OPENBRACKET = makeState(); // URL followed by [
	var S_URL_OPENANGLEBRACKET = makeState(); // URL followed by <
	var S_URL_OPENPAREN = makeState(); // URL followed by (
	var S_URL_OPENBRACE_Q = makeState(multi.URL); // URL followed by { and some symbols that the URL can end it
	var S_URL_OPENBRACKET_Q = makeState(multi.URL); // URL followed by [ and some symbols that the URL can end it
	var S_URL_OPENANGLEBRACKET_Q = makeState(multi.URL); // URL followed by < and some symbols that the URL can end it
	var S_URL_OPENPAREN_Q = makeState(multi.URL); // URL followed by ( and some symbols that the URL can end it
	var S_URL_OPENBRACE_SYMS = makeState(); // S_URL_OPENBRACE_Q followed by some symbols it cannot end it
	var S_URL_OPENBRACKET_SYMS = makeState(); // S_URL_OPENBRACKET_Q followed by some symbols it cannot end it
	var S_URL_OPENANGLEBRACKET_SYMS = makeState(); // S_URL_OPENANGLEBRACKET_Q followed by some symbols it cannot end it
	var S_URL_OPENPAREN_SYMS = makeState(); // S_URL_OPENPAREN_Q followed by some symbols it cannot end it
	var S_EMAIL_DOMAIN = makeState(); // parsed string starts with local email info + @ with a potential domain name (C)
	var S_EMAIL_DOMAIN_DOT = makeState(); // (C) domain followed by DOT
	var S_EMAIL = makeState(multi.EMAIL); // (C) Possible email address (could have more tlds)
	var S_EMAIL_COLON = makeState(); // (C) URL followed by colon (potential port number here)
	var S_EMAIL_PORT = makeState(multi.EMAIL); // (C) Email address with a port
	var S_MAILTO_EMAIL = makeState(multi.MAILTOEMAIL); // Email that begins with the mailto prefix (D)
	var S_MAILTO_EMAIL_NON_ACCEPTING = makeState(); // (D) Followed by some non-query string chars
	var S_LOCALPART = makeState(); // Local part of the email address
	var S_LOCALPART_AT = makeState(); // Local part of the email address plus @
	var S_LOCALPART_DOT = makeState(); // Local part of the email address plus '.' (localpart cannot end in .)
	var S_NL = makeState(multi.NL); // single new line

	// Make path from start to protocol (with '//')
	S_START.on(text.NL, S_NL).on(text.PROTOCOL, S_PROTOCOL).on(text.MAILTO, S_MAILTO).on(text.SLASH, S_PROTOCOL_SLASH);

	S_PROTOCOL.on(text.SLASH, S_PROTOCOL_SLASH);
	S_PROTOCOL_SLASH.on(text.SLASH, S_PROTOCOL_SLASH_SLASH);

	// The very first potential domain name
	S_START.on(text.TLD, S_DOMAIN).on(text.DOMAIN, S_DOMAIN).on(text.LOCALHOST, S_TLD).on(text.NUM, S_DOMAIN);

	// Force URL for protocol followed by anything sane
	S_PROTOCOL_SLASH_SLASH.on(text.TLD, S_URL).on(text.DOMAIN, S_URL).on(text.NUM, S_URL).on(text.LOCALHOST, S_URL);

	// Account for dots and hyphens
	// hyphens are usually parts of domain names
	S_DOMAIN.on(text.DOT, S_DOMAIN_DOT);
	S_EMAIL_DOMAIN.on(text.DOT, S_EMAIL_DOMAIN_DOT);

	// Hyphen can jump back to a domain name

	// After the first domain and a dot, we can find either a URL or another domain
	S_DOMAIN_DOT.on(text.TLD, S_TLD).on(text.DOMAIN, S_DOMAIN).on(text.NUM, S_DOMAIN).on(text.LOCALHOST, S_DOMAIN);

	S_EMAIL_DOMAIN_DOT.on(text.TLD, S_EMAIL).on(text.DOMAIN, S_EMAIL_DOMAIN).on(text.NUM, S_EMAIL_DOMAIN).on(text.LOCALHOST, S_EMAIL_DOMAIN);

	// S_TLD accepts! But the URL could be longer, try to find a match greedily
	// The `run` function should be able to "rollback" to the accepting state
	S_TLD.on(text.DOT, S_DOMAIN_DOT);
	S_EMAIL.on(text.DOT, S_EMAIL_DOMAIN_DOT);

	// Become real URLs after `SLASH` or `COLON NUM SLASH`
	// Here PSS and non-PSS converge
	S_TLD.on(text.COLON, S_TLD_COLON).on(text.SLASH, S_URL);
	S_TLD_COLON.on(text.NUM, S_TLD_PORT);
	S_TLD_PORT.on(text.SLASH, S_URL);
	S_EMAIL.on(text.COLON, S_EMAIL_COLON);
	S_EMAIL_COLON.on(text.NUM, S_EMAIL_PORT);

	// Types of characters the URL can definitely end in
	var qsAccepting = [text.DOMAIN, text.AT, text.LOCALHOST, text.NUM, text.PLUS, text.POUND, text.PROTOCOL, text.SLASH, text.TLD, text.UNDERSCORE, text.SYM, text.AMPERSAND];

	// Types of tokens that can follow a URL and be part of the query string
	// but cannot be the very last characters
	// Characters that cannot appear in the URL at all should be excluded
	var qsNonAccepting = [text.COLON, text.DOT, text.QUERY, text.PUNCTUATION, text.CLOSEBRACE, text.CLOSEBRACKET, text.CLOSEANGLEBRACKET, text.CLOSEPAREN, text.OPENBRACE, text.OPENBRACKET, text.OPENANGLEBRACKET, text.OPENPAREN];

	// These states are responsible primarily for determining whether or not to
	// include the final round bracket.

	// URL, followed by an opening bracket
	S_URL.on(text.OPENBRACE, S_URL_OPENBRACE).on(text.OPENBRACKET, S_URL_OPENBRACKET).on(text.OPENANGLEBRACKET, S_URL_OPENANGLEBRACKET).on(text.OPENPAREN, S_URL_OPENPAREN);

	// URL with extra symbols at the end, followed by an opening bracket
	S_URL_NON_ACCEPTING.on(text.OPENBRACE, S_URL_OPENBRACE).on(text.OPENBRACKET, S_URL_OPENBRACKET).on(text.OPENANGLEBRACKET, S_URL_OPENANGLEBRACKET).on(text.OPENPAREN, S_URL_OPENPAREN);

	// Closing bracket component. This character WILL be included in the URL
	S_URL_OPENBRACE.on(text.CLOSEBRACE, S_URL);
	S_URL_OPENBRACKET.on(text.CLOSEBRACKET, S_URL);
	S_URL_OPENANGLEBRACKET.on(text.CLOSEANGLEBRACKET, S_URL);
	S_URL_OPENPAREN.on(text.CLOSEPAREN, S_URL);
	S_URL_OPENBRACE_Q.on(text.CLOSEBRACE, S_URL);
	S_URL_OPENBRACKET_Q.on(text.CLOSEBRACKET, S_URL);
	S_URL_OPENANGLEBRACKET_Q.on(text.CLOSEANGLEBRACKET, S_URL);
	S_URL_OPENPAREN_Q.on(text.CLOSEPAREN, S_URL);
	S_URL_OPENBRACE_SYMS.on(text.CLOSEBRACE, S_URL);
	S_URL_OPENBRACKET_SYMS.on(text.CLOSEBRACKET, S_URL);
	S_URL_OPENANGLEBRACKET_SYMS.on(text.CLOSEANGLEBRACKET, S_URL);
	S_URL_OPENPAREN_SYMS.on(text.CLOSEPAREN, S_URL);

	// URL that beings with an opening bracket, followed by a symbols.
	// Note that the final state can still be `S_URL_OPENBRACE_Q` (if the URL only
	// has a single opening bracket for some reason).
	S_URL_OPENBRACE.on(qsAccepting, S_URL_OPENBRACE_Q);
	S_URL_OPENBRACKET.on(qsAccepting, S_URL_OPENBRACKET_Q);
	S_URL_OPENANGLEBRACKET.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
	S_URL_OPENPAREN.on(qsAccepting, S_URL_OPENPAREN_Q);
	S_URL_OPENBRACE.on(qsNonAccepting, S_URL_OPENBRACE_SYMS);
	S_URL_OPENBRACKET.on(qsNonAccepting, S_URL_OPENBRACKET_SYMS);
	S_URL_OPENANGLEBRACKET.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_SYMS);
	S_URL_OPENPAREN.on(qsNonAccepting, S_URL_OPENPAREN_SYMS);

	// URL that begins with an opening bracket, followed by some symbols
	S_URL_OPENBRACE_Q.on(qsAccepting, S_URL_OPENBRACE_Q);
	S_URL_OPENBRACKET_Q.on(qsAccepting, S_URL_OPENBRACKET_Q);
	S_URL_OPENANGLEBRACKET_Q.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
	S_URL_OPENPAREN_Q.on(qsAccepting, S_URL_OPENPAREN_Q);
	S_URL_OPENBRACE_Q.on(qsNonAccepting, S_URL_OPENBRACE_Q);
	S_URL_OPENBRACKET_Q.on(qsNonAccepting, S_URL_OPENBRACKET_Q);
	S_URL_OPENANGLEBRACKET_Q.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_Q);
	S_URL_OPENPAREN_Q.on(qsNonAccepting, S_URL_OPENPAREN_Q);

	S_URL_OPENBRACE_SYMS.on(qsAccepting, S_URL_OPENBRACE_Q);
	S_URL_OPENBRACKET_SYMS.on(qsAccepting, S_URL_OPENBRACKET_Q);
	S_URL_OPENANGLEBRACKET_SYMS.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
	S_URL_OPENPAREN_SYMS.on(qsAccepting, S_URL_OPENPAREN_Q);
	S_URL_OPENBRACE_SYMS.on(qsNonAccepting, S_URL_OPENBRACE_SYMS);
	S_URL_OPENBRACKET_SYMS.on(qsNonAccepting, S_URL_OPENBRACKET_SYMS);
	S_URL_OPENANGLEBRACKET_SYMS.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_SYMS);
	S_URL_OPENPAREN_SYMS.on(qsNonAccepting, S_URL_OPENPAREN_SYMS);

	// Account for the query string
	S_URL.on(qsAccepting, S_URL);
	S_URL_NON_ACCEPTING.on(qsAccepting, S_URL);

	S_URL.on(qsNonAccepting, S_URL_NON_ACCEPTING);
	S_URL_NON_ACCEPTING.on(qsNonAccepting, S_URL_NON_ACCEPTING);

	// Email address-specific state definitions
	// Note: We are not allowing '/' in email addresses since this would interfere
	// with real URLs

	// For addresses with the mailto prefix
	// 'mailto:' followed by anything sane is a valid email
	S_MAILTO.on(text.TLD, S_MAILTO_EMAIL).on(text.DOMAIN, S_MAILTO_EMAIL).on(text.NUM, S_MAILTO_EMAIL).on(text.LOCALHOST, S_MAILTO_EMAIL);

	// Greedily get more potential valid email values
	S_MAILTO_EMAIL.on(qsAccepting, S_MAILTO_EMAIL).on(qsNonAccepting, S_MAILTO_EMAIL_NON_ACCEPTING);
	S_MAILTO_EMAIL_NON_ACCEPTING.on(qsAccepting, S_MAILTO_EMAIL).on(qsNonAccepting, S_MAILTO_EMAIL_NON_ACCEPTING);

	// For addresses without the mailto prefix
	// Tokens allowed in the localpart of the email
	var localpartAccepting = [text.DOMAIN, text.NUM, text.PLUS, text.POUND, text.QUERY, text.UNDERSCORE, text.SYM, text.AMPERSAND, text.TLD];

	// Some of the tokens in `localpartAccepting` are already accounted for here and
	// will not be overwritten (don't worry)
	S_DOMAIN.on(localpartAccepting, S_LOCALPART).on(text.AT, S_LOCALPART_AT);
	S_TLD.on(localpartAccepting, S_LOCALPART).on(text.AT, S_LOCALPART_AT);
	S_DOMAIN_DOT.on(localpartAccepting, S_LOCALPART);

	// Okay we're on a localpart. Now what?
	// TODO: IP addresses and what if the email starts with numbers?
	S_LOCALPART.on(localpartAccepting, S_LOCALPART).on(text.AT, S_LOCALPART_AT) // close to an email address now
	.on(text.DOT, S_LOCALPART_DOT);
	S_LOCALPART_DOT.on(localpartAccepting, S_LOCALPART);
	S_LOCALPART_AT.on(text.TLD, S_EMAIL_DOMAIN).on(text.DOMAIN, S_EMAIL_DOMAIN).on(text.LOCALHOST, S_EMAIL);
	// States following `@` defined above

	var run = function run(tokens) {
		var len = tokens.length;
		var cursor = 0;
		var multis = [];
		var textTokens = [];

		while (cursor < len) {
			var state$$1 = S_START;
			var secondState = null;
			var nextState = null;
			var multiLength = 0;
			var latestAccepting = null;
			var sinceAccepts = -1;

			while (cursor < len && !(secondState = state$$1.next(tokens[cursor]))) {
				// Starting tokens with nowhere to jump to.
				// Consider these to be just plain text
				textTokens.push(tokens[cursor++]);
			}

			while (cursor < len && (nextState = secondState || state$$1.next(tokens[cursor]))) {

				// Get the next state
				secondState = null;
				state$$1 = nextState;

				// Keep track of the latest accepting state
				if (state$$1.accepts()) {
					sinceAccepts = 0;
					latestAccepting = state$$1;
				} else if (sinceAccepts >= 0) {
					sinceAccepts++;
				}

				cursor++;
				multiLength++;
			}

			if (sinceAccepts < 0) {

				// No accepting state was found, part of a regular text token
				// Add all the tokens we looked at to the text tokens array
				for (var i = cursor - multiLength; i < cursor; i++) {
					textTokens.push(tokens[i]);
				}
			} else {

				// Accepting state!

				// First close off the textTokens (if available)
				if (textTokens.length > 0) {
					multis.push(new multi.TEXT(textTokens));
					textTokens = [];
				}

				// Roll back to the latest accepting state
				cursor -= sinceAccepts;
				multiLength -= sinceAccepts;

				// Create a new multitoken
				var MULTI = latestAccepting.emit();
				multis.push(new MULTI(tokens.slice(cursor - multiLength, cursor)));
			}
		}

		// Finally close off the textTokens (if available)
		if (textTokens.length > 0) {
			multis.push(new multi.TEXT(textTokens));
		}

		return multis;
	};

	exports.State = state.TokenState;
	exports.TOKENS = MULTI_TOKENS;
	exports.run = run;
	exports.start = S_START;
	});

	unwrapExports(parser);
	var parser_1 = parser.start;
	var parser_2 = parser.run;
	var parser_3 = parser.TOKENS;
	var parser_4 = parser.State;

	var linkify = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.tokenize = exports.test = exports.scanner = exports.parser = exports.options = exports.inherits = exports.find = undefined;





	var options$$1 = _interopRequireWildcard(options);



	var scanner$$1 = _interopRequireWildcard(scanner);



	var parser$$1 = _interopRequireWildcard(parser);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	if (!Array.isArray) {
		Array.isArray = function (arg) {
			return Object.prototype.toString.call(arg) === '[object Array]';
		};
	}

	/**
		Converts a string into tokens that represent linkable and non-linkable bits
		@method tokenize
		@param {String} str
		@return {Array} tokens
	*/
	var tokenize = function tokenize(str) {
		return parser$$1.run(scanner$$1.run(str));
	};

	/**
		Returns a list of linkable items in the given string.
	*/
	var find = function find(str) {
		var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		var tokens = tokenize(str);
		var filtered = [];

		for (var i = 0; i < tokens.length; i++) {
			var token = tokens[i];
			if (token.isLink && (!type || token.type === type)) {
				filtered.push(token.toObject());
			}
		}

		return filtered;
	};

	/**
		Is the given string valid linkable text of some sort
		Note that this does not trim the text for you.

		Optionally pass in a second `type` param, which is the type of link to test
		for.

		For example,

			test(str, 'email');

		Will return `true` if str is a valid email.
	*/
	var test = function test(str) {
		var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		var tokens = tokenize(str);
		return tokens.length === 1 && tokens[0].isLink && (!type || tokens[0].type === type);
	};

	// Scanner and parser provide states and tokens for the lexicographic stage
	// (will be used to add additional link types)
	exports.find = find;
	exports.inherits = _class.inherits;
	exports.options = options$$1;
	exports.parser = parser$$1;
	exports.scanner = scanner$$1;
	exports.test = test;
	exports.tokenize = tokenize;
	});

	unwrapExports(linkify);
	var linkify_1 = linkify.tokenize;
	var linkify_2 = linkify.test;
	var linkify_3 = linkify.scanner;
	var linkify_4 = linkify.parser;
	var linkify_5 = linkify.options;
	var linkify_6 = linkify.inherits;
	var linkify_7 = linkify.find;

	var linkifyHtml_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.default = linkifyHtml;



	var _simpleHtmlTokenizer2 = _interopRequireDefault(simpleHtmlTokenizer);



	var linkify$$1 = _interopRequireWildcard(linkify);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var options = linkify$$1.options;
	var Options = options.Options;


	var StartTag = 'StartTag';
	var EndTag = 'EndTag';
	var Chars = 'Chars';
	var Comment = 'Comment';

	/**
		`tokens` and `token` in this section refer to tokens generated by the HTML
		parser.
	*/
	function linkifyHtml(str) {
		var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		var tokens = _simpleHtmlTokenizer2.default.tokenize(str);
		var linkifiedTokens = [];
		var linkified = [];
		var i;

		opts = new Options(opts);

		// Linkify the tokens given by the parser
		for (i = 0; i < tokens.length; i++) {
			var token = tokens[i];

			if (token.type === StartTag) {
				linkifiedTokens.push(token);

				// Ignore all the contents of ignored tags
				var tagName = token.tagName.toUpperCase();
				var isIgnored = tagName === 'A' || options.contains(opts.ignoreTags, tagName);
				if (!isIgnored) {
					continue;
				}

				var preskipLen = linkifiedTokens.length;
				skipTagTokens(tagName, tokens, ++i, linkifiedTokens);
				i += linkifiedTokens.length - preskipLen - 1;
				continue;
			} else if (token.type !== Chars) {
				// Skip this token, it's not important
				linkifiedTokens.push(token);
				continue;
			}

			// Valid text token, linkify it!
			var linkifedChars = linkifyChars(token.chars, opts);
			linkifiedTokens.push.apply(linkifiedTokens, linkifedChars);
		}

		// Convert the tokens back into a string
		for (i = 0; i < linkifiedTokens.length; i++) {
			var _token = linkifiedTokens[i];
			switch (_token.type) {
				case StartTag:
					{
						var link = '<' + _token.tagName;
						if (_token.attributes.length > 0) {
							var attrs = attrsToStrings(_token.attributes);
							link += ' ' + attrs.join(' ');
						}
						link += '>';
						linkified.push(link);
						break;
					}
				case EndTag:
					linkified.push('</' + _token.tagName + '>');
					break;
				case Chars:
					linkified.push(escapeText(_token.chars));
					break;
				case Comment:
					linkified.push('<!--' + escapeText(_token.chars) + '-->');
					break;
			}
		}

		return linkified.join('');
	}

	/**
		`tokens` and `token` in this section referes to tokens returned by
		`linkify.tokenize`. `linkified` will contain HTML Parser-style tokens
	*/
	function linkifyChars(str, opts) {
		var tokens = linkify$$1.tokenize(str);
		var result = [];

		for (var i = 0; i < tokens.length; i++) {
			var token = tokens[i];

			if (token.type === 'nl' && opts.nl2br) {
				result.push({
					type: StartTag,
					tagName: 'br',
					attributes: [],
					selfClosing: true
				});
				continue;
			} else if (!token.isLink || !opts.check(token)) {
				result.push({ type: Chars, chars: token.toString() });
				continue;
			}

			var _opts$resolve = opts.resolve(token),
			    formatted = _opts$resolve.formatted,
			    formattedHref = _opts$resolve.formattedHref,
			    tagName = _opts$resolve.tagName,
			    className = _opts$resolve.className,
			    target = _opts$resolve.target,
			    attributes = _opts$resolve.attributes;

			// Build up attributes


			var attributeArray = [['href', formattedHref]];

			if (className) {
				attributeArray.push(['class', className]);
			}

			if (target) {
				attributeArray.push(['target', target]);
			}

			for (var attr in attributes) {
				attributeArray.push([attr, attributes[attr]]);
			}

			// Add the required tokens
			result.push({
				type: StartTag,
				tagName: tagName,
				attributes: attributeArray,
				selfClosing: false
			});
			result.push({ type: Chars, chars: formatted });
			result.push({ type: EndTag, tagName: tagName });
		}

		return result;
	}

	/**
		Returns a list of tokens skipped until the closing tag of tagName.

		* `tagName` is the closing tag which will prompt us to stop skipping
		* `tokens` is the array of tokens generated by HTML5Tokenizer which
		* `i` is the index immediately after the opening tag to skip
		* `skippedTokens` is an array which skipped tokens are being pushed into

		Caveats

		* Assumes that i is the first token after the given opening tagName
		* The closing tag will be skipped, but nothing after it
		* Will track whether there is a nested tag of the same type
	*/
	function skipTagTokens(tagName, tokens, i, skippedTokens) {

		// number of tokens of this type on the [fictional] stack
		var stackCount = 1;

		while (i < tokens.length && stackCount > 0) {
			var token = tokens[i];

			if (token.type === StartTag && token.tagName.toUpperCase() === tagName) {
				// Nested tag of the same type, "add to stack"
				stackCount++;
			} else if (token.type === EndTag && token.tagName.toUpperCase() === tagName) {
				// Closing tag
				stackCount--;
			}

			skippedTokens.push(token);
			i++;
		}

		// Note that if stackCount > 0 here, the HTML is probably invalid
		return skippedTokens;
	}

	function escapeText(text) {
		// Not required, HTML tokenizer ensures this occurs properly
		return text;
	}

	function escapeAttr(attr) {
		return attr.replace(/"/g, '&quot;');
	}

	function attrsToStrings(attrs) {
		var attrStrs = [];
		for (var i = 0; i < attrs.length; i++) {
			var _attrs$i = attrs[i],
			    name = _attrs$i[0],
			    value = _attrs$i[1];

			attrStrs.push(name + '="' + escapeAttr(value) + '"');
		}
		return attrStrs;
	}
	});

	unwrapExports(linkifyHtml_1);

	var html = linkifyHtml_1.default;

	var stringUtils = createCommonjsModule(function (module, exports) {
	// Taken from the source of chrome devtools:
	// https://github.com/ChromeDevTools/devtools-frontend/blob/master/front_end/platform/utilities.js#L805-L1006
	exports.__esModule = true;
	// Copyright 2014 The Chromium Authors. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions are
	// met:
	//
	//    * Redistributions of source code must retain the above copyright
	// notice, this list of conditions and the following disclaimer.
	//    * Redistributions in binary form must reproduce the above
	// copyright notice, this list of conditions and the following disclaimer
	// in the documentation and/or other materials provided with the
	// distribution.
	//    * Neither the name of Google Inc. nor the names of its
	// contributors may be used to endorse or promote products derived from
	// this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	var String;
	(function (String) {
	    /**
	     * @param {string} string
	     * @param {number} index
	     * @return {boolean}
	     */
	    function isDigitAt(string, index) {
	        var c = string.charCodeAt(index);
	        return 48 <= c && c <= 57;
	    }
	    /**
	     * @param {string} format
	     * @param {!Object.<string, function(string, ...):*>} formatters
	     * @return {!Array.<!Object>}
	     */
	    function tokenizeFormatString(format, formatters) {
	        var tokens = [];
	        var substitutionIndex = 0;
	        function addStringToken(str) {
	            if (tokens.length && tokens[tokens.length - 1].type === 'string')
	                tokens[tokens.length - 1].value += str;
	            else
	                tokens.push({ type: 'string', value: str });
	        }
	        function addSpecifierToken(specifier, precision, substitutionIndex) {
	            tokens.push({
	                type: 'specifier',
	                specifier: specifier,
	                precision: precision,
	                substitutionIndex: substitutionIndex
	            });
	        }
	        var index = 0;
	        for (var precentIndex = format.indexOf('%', index); precentIndex !== -1; precentIndex = format.indexOf('%', index)) {
	            if (format.length === index)
	                // unescaped % sign at the end of the format string.
	                break;
	            addStringToken(format.substring(index, precentIndex));
	            index = precentIndex + 1;
	            if (format[index] === '%') {
	                // %% escape sequence.
	                addStringToken('%');
	                ++index;
	                continue;
	            }
	            if (isDigitAt(format, index)) {
	                // The first character is a number, it might be a substitution index.
	                var number = parseInt(format.substring(index), 10);
	                while (isDigitAt(format, index))
	                    ++index;
	                // If the number is greater than zero and ends with a "$",
	                // then this is a substitution index.
	                if (number > 0 && format[index] === '$') {
	                    substitutionIndex = number - 1;
	                    ++index;
	                }
	            }
	            var precision = -1;
	            if (format[index] === '.') {
	                // This is a precision specifier. If no digit follows the ".",
	                // then the precision should be zero.
	                ++index;
	                precision = parseInt(format.substring(index), 10);
	                if (isNaN(precision))
	                    precision = 0;
	                while (isDigitAt(format, index))
	                    ++index;
	            }
	            if (!(format[index] in formatters)) {
	                addStringToken(format.substring(precentIndex, index + 1));
	                ++index;
	                continue;
	            }
	            addSpecifierToken(format[index], precision, substitutionIndex);
	            ++substitutionIndex;
	            ++index;
	        }
	        addStringToken(format.substring(index));
	        return tokens;
	    }
	    /**
	     * @param {string} format
	     * @param {?ArrayLike} substitutions
	     * @param {!Object.<string, function(string, ...):Q>} formatters
	     * @param {!T} initialValue
	     * @param {function(T, Q): T|undefined} append
	     * @param {!Array.<!Object>=} tokenizedFormat
	     * @return {!{formattedResult: T, unusedSubstitutions: ?ArrayLike}};
	     * @template T, Q
	     */
	    function format(format, substitutions, formatters, initialValue, append, tokenizedFormat) {
	        if (!format || !substitutions || !substitutions.length)
	            return {
	                formattedResult: append(initialValue, format),
	                unusedSubstitutions: substitutions
	            };
	        function prettyFunctionName() {
	            return ('String.format("' +
	                format +
	                '", "' +
	                Array.prototype.join.call(substitutions, '", "') +
	                '")');
	        }
	        function warn(msg) {
	            console.warn(prettyFunctionName() + ': ' + msg);
	        }
	        function error(msg) {
	            console.error(prettyFunctionName() + ': ' + msg);
	        }
	        var result = initialValue;
	        var tokens = tokenizedFormat || tokenizeFormatString(format, formatters);
	        var usedSubstitutionIndexes = {};
	        for (var i = 0; i < tokens.length; ++i) {
	            var token = tokens[i];
	            if (token.type === 'string') {
	                result = append(result, token.value);
	                continue;
	            }
	            if (token.type !== 'specifier') {
	                error('Unknown token type "' + token.type + '" found.');
	                continue;
	            }
	            if (token.substitutionIndex >= substitutions.length) {
	                // If there are not enough substitutions for the current substitutionIndex
	                // just output the format specifier literally and move on.
	                error('not enough substitution arguments. Had ' +
	                    substitutions.length +
	                    ' but needed ' +
	                    (token.substitutionIndex + 1) +
	                    ', so substitution was skipped.');
	                result = append(result, '%' + (token.precision > -1 ? token.precision : '') + token.specifier);
	                continue;
	            }
	            usedSubstitutionIndexes[token.substitutionIndex] = true;
	            if (!(token.specifier in formatters)) {
	                // Encountered an unsupported format character, treat as a string.
	                warn('unsupported format character \u201C' +
	                    token.specifier +
	                    '\u201D. Treating as a string.');
	                result = append(result, substitutions[token.substitutionIndex]);
	                continue;
	            }
	            result = append(result, formatters[token.specifier](substitutions[token.substitutionIndex], token));
	        }
	        var unusedSubstitutions = [];
	        for (var i = 0; i < substitutions.length; ++i) {
	            if (i in usedSubstitutionIndexes)
	                continue;
	            unusedSubstitutions.push(substitutions[i]);
	        }
	        return { formattedResult: result, unusedSubstitutions: unusedSubstitutions };
	    }
	    String.format = format;
	})(String = exports.String || (exports.String = {}));

	});

	unwrapExports(stringUtils);
	var stringUtils_1 = stringUtils.String;

	var formatMessage = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;

	function createAppend(s) {
	    var container = document.createDocumentFragment();
	    container.appendChild(document.createTextNode(s));
	    return container;
	}
	/**
	 * @param {string} format
	 * @param {!Array.<!SDK.RemoteObject>} parameters
	 * @param {!Element} formattedResult
	 */
	function formatWithSubstitutionString(format, parameters, formattedResult) {
	    var formatters = {};
	    function stringFormatter(obj) {
	        return obj;
	    }
	    function floatFormatter(obj) {
	        if (typeof obj !== 'number')
	            return 'NaN';
	        return obj;
	    }
	    function integerFormatter(obj) {
	        if (typeof obj !== 'number')
	            return 'NaN';
	        return Math.floor(obj);
	    }
	    function bypassFormatter(obj) {
	        return obj instanceof Node ? obj : '';
	    }
	    var currentStyle = null;
	    function styleFormatter(obj) {
	        currentStyle = {};
	        var buffer = document.createElement('span');
	        buffer.setAttribute('style', obj);
	        for (var i = 0; i < buffer.style.length; i++) {
	            var property = buffer.style[i];
	            if (isWhitelistedProperty(property))
	                currentStyle[property] = buffer.style[property];
	        }
	    }
	    function isWhitelistedProperty(property) {
	        var prefixes = [
	            'background',
	            'border',
	            'color',
	            'font',
	            'line',
	            'margin',
	            'padding',
	            'text',
	            '-webkit-background',
	            '-webkit-border',
	            '-webkit-font',
	            '-webkit-margin',
	            '-webkit-padding',
	            '-webkit-text'
	        ];
	        for (var i = 0; i < prefixes.length; i++) {
	            if (property.startsWith(prefixes[i]))
	                return true;
	        }
	        return false;
	    }
	    formatters.s = stringFormatter;
	    formatters.f = floatFormatter;
	    // Firebug allows both %i and %d for formatting integers.
	    formatters.i = integerFormatter;
	    formatters.d = integerFormatter;
	    // Firebug uses %c for styling the message.
	    formatters.c = styleFormatter;
	    formatters._ = bypassFormatter;
	    function append(a, b) {
	        if (b instanceof Node) {
	            a.appendChild(b);
	        }
	        else if (typeof b !== 'undefined') {
	            var toAppend = createAppend(String(b));
	            if (currentStyle) {
	                var wrapper = document.createElement('span');
	                wrapper.appendChild(toAppend);
	                applyCurrentStyle(wrapper);
	                for (var i = 0; i < wrapper.children.length; ++i)
	                    applyCurrentStyle(wrapper.children[i]);
	                toAppend = wrapper;
	            }
	            a.appendChild(toAppend);
	        }
	        return a;
	    }
	    /**
	     * @param {!Element} element
	     */
	    function applyCurrentStyle(element) {
	        for (var key in currentStyle)
	            element.style[key] = currentStyle[key];
	    }
	    // String.format does treat formattedResult like a Builder, result is an object.
	    return stringUtils.String.format(format, parameters, formatters, formattedResult, append);
	}
	exports["default"] = formatWithSubstitutionString;

	});

	unwrapExports(formatMessage);

	var devtoolsParser = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;


	/**
	 * Formats a console log message using the Devtools parser and returns HTML
	 * @param args The arguments passed to the console method
	 */
	function formatMessage$$1(args) {
	    var formattedResult = document.createElement('span');
	    formatMessage["default"](args[0], args.slice(1), formattedResult);
	    return html(formattedResult.outerHTML.replace(/(?:\r\n|\r|\n)/g, '<br />'));
	}
	exports["default"] = formatMessage$$1;

	});

	unwrapExports(devtoolsParser);

	var Formatted_1 = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	exports.__esModule = true;



	var Formatted = /** @class */ (function (_super) {
	    __extends(Formatted, _super);
	    function Formatted() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Formatted.prototype.render = function () {
	        return (react.createElement(elements$2.Root, { "data-type": "formatted", dangerouslySetInnerHTML: {
	                __html: devtoolsParser["default"](this.props.data || [])
	            } }));
	    };
	    return Formatted;
	}(react.PureComponent));
	exports["default"] = Formatted;

	});

	unwrapExports(Formatted_1);

	var linkifyReact = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _react2 = _interopRequireDefault(react);



	var linkify$$1 = _interopRequireWildcard(linkify);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var options = linkify$$1.options;
	var Options = options.Options;

	// Given a string, converts to an array of valid React components
	// (which may include strings)

	function stringToElements(str, opts) {

		var tokens = linkify$$1.tokenize(str);
		var elements = [];
		var linkId = 0;

		for (var i = 0; i < tokens.length; i++) {
			var token = tokens[i];

			if (token.type === 'nl' && opts.nl2br) {
				elements.push(_react2.default.createElement('br', { key: 'linkified-' + ++linkId }));
				continue;
			} else if (!token.isLink || !opts.check(token)) {
				// Regular text
				elements.push(token.toString());
				continue;
			}

			var _opts$resolve = opts.resolve(token),
			    formatted = _opts$resolve.formatted,
			    formattedHref = _opts$resolve.formattedHref,
			    tagName = _opts$resolve.tagName,
			    className = _opts$resolve.className,
			    target = _opts$resolve.target,
			    attributes = _opts$resolve.attributes;

			var props = {
				key: 'linkified-' + ++linkId,
				href: formattedHref
			};

			if (className) {
				props.className = className;
			}

			if (target) {
				props.target = target;
			}

			// Build up additional attributes
			// Support for events via attributes hash
			if (attributes) {
				for (var attr in attributes) {
					props[attr] = attributes[attr];
				}
			}

			elements.push(_react2.default.createElement(tagName, props, formatted));
		}

		return elements;
	}

	// Recursively linkify the contents of the given React Element instance
	function linkifyReactElement(element, opts) {
		var elementId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

		if (_react2.default.Children.count(element.props.children) === 0) {
			// No need to clone if the element had no children
			return element;
		}

		var children = [];

		_react2.default.Children.forEach(element.props.children, function (child) {
			if (typeof child === 'string') {
				// ensure that we always generate unique element IDs for keys
				elementId = elementId + 1;
				children.push.apply(children, stringToElements(child, opts));
			} else if (_react2.default.isValidElement(child)) {
				if (typeof child.type === 'string' && options.contains(opts.ignoreTags, child.type.toUpperCase())) {
					// Don't linkify this element
					children.push(child);
				} else {
					children.push(linkifyReactElement(child, opts, ++elementId));
				}
			} else {
				// Unknown element type, just push
				children.push(child);
			}
		});

		// Set a default unique key, copy over remaining props
		var newProps = { key: 'linkified-element-' + elementId };
		for (var prop in element.props) {
			newProps[prop] = element.props[prop];
		}

		return _react2.default.cloneElement(element, newProps, children);
	}

	var Linkify = function (_React$Component) {
		_inherits(Linkify, _React$Component);

		function Linkify() {
			_classCallCheck(this, Linkify);

			return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
		}

		Linkify.prototype.render = function render() {
			// Copy over all non-linkify-specific props
			var newProps = { key: 'linkified-element-0' };
			for (var prop in this.props) {
				if (prop !== 'options' && prop !== 'tagName') {
					newProps[prop] = this.props[prop];
				}
			}

			var opts = new Options(this.props.options);
			var tagName = this.props.tagName || 'span';
			var element = _react2.default.createElement(tagName, newProps);

			return linkifyReactElement(element, opts, 0);
		};

		return Linkify;
	}(_react2.default.Component);

	exports.default = Linkify;
	});

	unwrapExports(linkifyReact);

	var react$1 = linkifyReact.default;

	var reactInspector = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	exports.__esModule = true;





	var CustomInspector = /** @class */ (function (_super) {
	    __extends(CustomInspector, _super);
	    function CustomInspector() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    CustomInspector.prototype.render = function () {
	        var _a = this.props, data = _a.data, theme = _a.theme;
	        var styles = theme.styles, method = theme.method;
	        var dom = data instanceof HTMLElement;
	        var table = method === 'table';
	        return (react.createElement(elements$2.Root, { "data-type": table ? 'table' : dom ? 'html' : 'object' }, table ? (react.createElement(elements$2.Table, null,
	            react.createElement(lib.Inspector, __assign({}, this.props, { theme: styles, table: true })),
	            react.createElement(lib.Inspector, __assign({}, this.props, { theme: styles })))) : dom ? (react.createElement(elements$2.HTML, null,
	            react.createElement(lib.DOMInspector, __assign({}, this.props, { theme: styles })))) : (react.createElement(lib.Inspector, __assign({}, this.props, { theme: styles, nodeRenderer: this.nodeRenderer.bind(this) })))));
	    };
	    CustomInspector.prototype.getCustomNode = function (data) {
	        var styles = this.props.theme.styles;
	        var constructor = data && data.constructor ? data.constructor.name : null;
	        if (constructor === 'Function')
	            return (react.createElement("span", { style: { fontStyle: 'italic' } },
	                react.createElement(ObjectPreview_1["default"], { data: data }), " {",
	                react.createElement("span", { style: { color: 'rgb(181, 181, 181)' } }, data.body), "}"));
	        if (constructor === 'Promise')
	            return (react.createElement("span", { style: { fontStyle: 'italic' } },
	                "Promise ", "{",
	                react.createElement("span", { style: { opacity: 0.6 } }, "<pending>"), "}"));
	        if (data instanceof HTMLElement)
	            return (react.createElement(elements$2.HTML, null,
	                react.createElement(lib.DOMInspector, { data: data, theme: styles })));
	        return null;
	    };
	    CustomInspector.prototype.nodeRenderer = function (props) {
	        var depth = props.depth, name = props.name, data = props.data, isNonenumerable = props.isNonenumerable;
	        // Root
	        if (depth === 0) {
	            var customNode_1 = this.getCustomNode(data);
	            return customNode_1 || react.createElement(lib.ObjectRootLabel, { name: name, data: data });
	        }
	        if (name === 'constructor')
	            return (react.createElement(elements$2.Constructor, null,
	                react.createElement(lib.ObjectLabel, { name: "<constructor>", data: data.name, isNonenumerable: isNonenumerable })));
	        var customNode = this.getCustomNode(data);
	        return customNode ? (react.createElement(elements$2.Root, null,
	            react.createElement(lib.ObjectName, { name: name }),
	            react.createElement("span", null, ": "),
	            customNode)) : (react.createElement(lib.ObjectLabel, { name: name, data: data, isNonenumerable: isNonenumerable }));
	    };
	    return CustomInspector;
	}(react.PureComponent));
	exports["default"] = index_esm.withTheme(CustomInspector);

	});

	unwrapExports(reactInspector);

	var _Object = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	exports.__esModule = true;





	var ObjectTree = /** @class */ (function (_super) {
	    __extends(ObjectTree, _super);
	    function ObjectTree() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    ObjectTree.prototype.render = function () {
	        var _a = this.props, theme = _a.theme, quoted = _a.quoted, log = _a.log;
	        return log.data.map(function (message, i) {
	            if (typeof message === 'string') {
	                var string = !quoted && message.length ? (message + " ") : (react.createElement("span", null,
	                    react.createElement("span", null, "\""),
	                    react.createElement("span", { style: {
	                            color: theme.styles.OBJECT_VALUE_STRING_COLOR
	                        } }, message),
	                    react.createElement("span", null, "\" ")));
	                return (react.createElement(elements$2.Root, { "data-type": "string", key: i },
	                    react.createElement(react$1, null, string)));
	            }
	            return react.createElement(reactInspector["default"], { data: message, key: i });
	        });
	    };
	    return ObjectTree;
	}(react.PureComponent));
	exports["default"] = index_esm.withTheme(ObjectTree);

	});

	unwrapExports(_Object);

	var _Error = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	exports.__esModule = true;


	function splitMessage(message) {
	    var breakIndex = message.indexOf('\n');
	    // consider that there can be line without a break
	    if (breakIndex === -1) {
	        return message;
	    }
	    return message.substr(0, breakIndex);
	}
	var ErrorPanel = /** @class */ (function (_super) {
	    __extends(ErrorPanel, _super);
	    function ErrorPanel() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    ErrorPanel.prototype.render = function () {
	        var log = this.props.log;
	        /* This checks for error logTypes and shortens the message in the console by wrapping
	        it a <details /> tag and putting the first line in a <summary /> tag and the other lines
	        follow after that. This creates a nice collapsible error message */
	        var otherErrorLines;
	        var msgLine = log.data.join(' ');
	        var firstLine = splitMessage(msgLine);
	        var msgArray = msgLine.split('\n');
	        if (msgArray.length > 1) {
	            otherErrorLines = msgArray.slice(1);
	        }
	        if (!otherErrorLines) {
	            return react.createElement(react$1, null, log.data.join(' '));
	        }
	        return (react.createElement("details", null,
	            react.createElement("summary", { style: { outline: 'none', cursor: 'pointer' } }, firstLine),
	            react.createElement(react$1, null, otherErrorLines.join('\n\r'))));
	    };
	    return ErrorPanel;
	}(react.PureComponent));
	exports["default"] = ErrorPanel;

	});

	unwrapExports(_Error);

	var Message = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	exports.__esModule = true;






	var ConsoleMessage = /** @class */ (function (_super) {
	    __extends(ConsoleMessage, _super);
	    function ConsoleMessage() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.theme = function (theme) { return (__assign({}, theme, { method: _this.props.log.method })); };
	        return _this;
	    }
	    ConsoleMessage.prototype.render = function () {
	        var log = this.props.log;
	        return (react.createElement(index_esm.ThemeProvider, { theme: this.theme },
	            react.createElement(elements.Message, { "data-method": log.method },
	                react.createElement(elements.Icon, null),
	                react.createElement(elements.Content, null, this.getNode()))));
	    };
	    ConsoleMessage.prototype.getNode = function () {
	        var log = this.props.log;
	        // Error handling
	        var error = this.typeCheck(log);
	        if (error)
	            return error;
	        // Chrome formatting
	        if (log.data.length > 0 &&
	            typeof log.data[0] === 'string' &&
	            log.data[0].indexOf('%') > -1) {
	            return react.createElement(Formatted_1["default"], { data: log.data });
	        }
	        // Error panel
	        if (log.data.every(function (message) { return typeof message === 'string'; }) &&
	            log.method === 'error') {
	            return react.createElement(_Error["default"], { log: log });
	        }
	        // Normal inspector
	        var quoted = typeof log.data[0] !== 'string';
	        return react.createElement(_Object["default"], { log: log, quoted: quoted });
	    };
	    ConsoleMessage.prototype.typeCheck = function (log) {
	        if (!log) {
	            return (react.createElement(Formatted_1["default"], { data: [
	                    "%c[console-feed] %cFailed to parse message! %clog was typeof " + typeof log + ", but it should've been a log object",
	                    'color: red',
	                    'color: orange',
	                    'color: cyan'
	                ] }));
	        }
	        else if (!(log.data instanceof Array)) {
	            return (react.createElement(Formatted_1["default"], { data: [
	                    '%c[console-feed] %cFailed to parse message! %clog.data was not an array!',
	                    'color: red',
	                    'color: orange',
	                    'color: cyan'
	                ] }));
	        }
	        return false;
	    };
	    return ConsoleMessage;
	}(react.PureComponent));
	exports["default"] = ConsoleMessage;

	});

	unwrapExports(Message);

	var Component = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	exports.__esModule = true;





	var Console = /** @class */ (function (_super) {
	    __extends(Console, _super);
	    function Console() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.theme = function () { return ({
	            variant: _this.props.variant || 'light',
	            styles: __assign({}, _default["default"](_this.props), _this.props.styles)
	        }); };
	        return _this;
	    }
	    Console.prototype.render = function () {
	        var filter = this.props.filter || [];
	        var logs = this.props.logs || [];
	        return (react.createElement(index_esm.ThemeProvider, { theme: this.theme },
	            react.createElement(elements.Root, null, logs.map(function (log, i) {
	                // If the filter is defined and doesn't include the method
	                var filtered = filter.length !== 0 &&
	                    log.method &&
	                    filter.indexOf(log.method) === -1;
	                return filtered ? null : react.createElement(Message["default"], { log: log, key: i });
	            }))));
	    };
	    return Console;
	}(react.PureComponent));
	exports["default"] = Console;

	});

	unwrapExports(Component);

	var Methods = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	var methods = [
	    'log',
	    'debug',
	    'info',
	    'warn',
	    'error',
	    'table',
	    'clear',
	    'time',
	    'timeEnd',
	    'count',
	    'assert'
	];
	exports["default"] = methods;

	});

	unwrapExports(Methods);

	var GUID = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	function guidGenerator() {
	    var S4 = function () {
	        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	    };
	    return (S4() +
	        S4() +
	        '-' +
	        S4() +
	        '-' +
	        S4() +
	        '-' +
	        S4() +
	        '-' +
	        S4() +
	        '-' +
	        Date.now());
	}
	exports["default"] = guidGenerator;

	});

	unwrapExports(GUID);

	var state$2 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	function update(newState) {
	    exports.state = newState;
	}
	exports.update = update;

	});

	unwrapExports(state$2);
	var state_1$1 = state$2.state;
	var state_2$1 = state$2.update;

	var reducer = createCommonjsModule(function (module, exports) {
	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	exports.__esModule = true;
	exports.initialState = {
	    timings: {},
	    count: {}
	};
	exports["default"] = (function (state, action) {
	    if (state === void 0) { state = exports.initialState; }
	    switch (action.type) {
	        case 'COUNT': {
	            var times = state.count[action.name] || 0;
	            return __assign({}, state, { count: __assign({}, state.count, (_a = {}, _a[action.name] = times + 1, _a)) });
	        }
	        case 'TIME_START': {
	            return __assign({}, state, { timings: __assign({}, state.timings, (_b = {}, _b[action.name] = {
	                    start: performance.now() || +new Date()
	                }, _b)) });
	        }
	        case 'TIME_END': {
	            var timing = state.timings[action.name];
	            var end = performance.now() || +new Date();
	            var start = timing.start;
	            var time = end - start;
	            return __assign({}, state, { timings: __assign({}, state.timings, (_c = {}, _c[action.name] = __assign({}, timing, { end: end,
	                    time: time }), _c)) });
	        }
	        default: {
	            return state;
	        }
	    }
	    var _a, _b, _c;
	});

	});

	unwrapExports(reducer);
	var reducer_1 = reducer.initialState;

	var dispatch_1 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;


	function dispatch(action) {
	    state$2.update(reducer["default"](state$2.state, action));
	}
	exports["default"] = dispatch;

	});

	unwrapExports(dispatch_1);

	var actions = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	function count(name) {
	    return {
	        type: 'COUNT',
	        name: name
	    };
	}
	exports.count = count;
	function timeStart(name) {
	    return {
	        type: 'TIME_START',
	        name: name
	    };
	}
	exports.timeStart = timeStart;
	function timeEnd(name) {
	    return {
	        type: 'TIME_END',
	        name: name
	    };
	}
	exports.timeEnd = timeEnd;

	});

	unwrapExports(actions);
	var actions_1 = actions.count;
	var actions_2 = actions.timeStart;
	var actions_3 = actions.timeEnd;

	var timing = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;



	function start(label) {
	    dispatch_1["default"](actions.timeStart(label));
	}
	exports.start = start;
	function stop(label) {
	    var timing = state$2.state.timings[label];
	    if (timing && !timing.end) {
	        dispatch_1["default"](actions.timeEnd(label));
	        var time = state$2.state.timings[label].time;
	        return {
	            method: 'log',
	            data: [label + ": " + time + "ms"]
	        };
	    }
	    return {
	        method: 'warn',
	        data: ["Timer '" + label + "' does not exist"]
	    };
	}
	exports.stop = stop;

	});

	unwrapExports(timing);
	var timing_1 = timing.start;
	var timing_2 = timing.stop;

	var count = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;



	function increment(label) {
	    dispatch_1["default"](actions.count(label));
	    var times = state$2.state.count[label];
	    return {
	        method: 'log',
	        data: [label + ": " + times]
	    };
	}
	exports.increment = increment;

	});

	unwrapExports(count);
	var count_1 = count.increment;

	var assert = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	function test(expression) {
	    var messages = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        messages[_i - 1] = arguments[_i];
	    }
	    if (expression)
	        return false;
	    // Default message
	    if (messages.length === 0)
	        messages.push('console.assert');
	    return {
	        method: 'error',
	        data: ["Assertion failed:"].concat(messages)
	    };
	}
	exports.test = test;

	});

	unwrapExports(assert);
	var assert_1 = assert.test;

	var parse = createCommonjsModule(function (module, exports) {
	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	exports.__esModule = true;




	/**
	 * Parses a console log and converts it to a special Log object
	 * @argument method The console method to parse
	 * @argument data The arguments passed to the console method
	 */
	function Parse(method, data, staticID) {
	    // Create an ID
	    var id = staticID || GUID["default"]();
	    // Parse the methods
	    switch (method) {
	        case 'clear': {
	            return {
	                method: method,
	                id: id
	            };
	        }
	        case 'count': {
	            var label = typeof data[0] === 'string' ? data[0] : null;
	            if (!label)
	                return false;
	            return __assign({}, count.increment(label), { id: id });
	        }
	        case 'time':
	        case 'timeEnd': {
	            var label = typeof data[0] === 'string' ? data[0] : null;
	            if (!label)
	                return false;
	            if (method === 'time') {
	                timing.start(label);
	                return false;
	            }
	            return __assign({}, timing.stop(label), { id: id });
	        }
	        case 'assert': {
	            var valid = data.length !== 0 ? true : false;
	            if (valid) {
	                var assertion = assert.test.apply(assert, [data[0]].concat(data.slice(1)));
	                if (assertion) {
	                    return __assign({}, assertion, { id: id });
	                }
	            }
	            return false;
	        }
	        case 'error': {
	            var errors = data.map(function (error) {
	                try {
	                    return error.stack || error;
	                }
	                catch (e) {
	                    return error;
	                }
	            });
	            return {
	                method: method,
	                id: id,
	                data: errors
	            };
	        }
	        default: {
	            return {
	                method: method,
	                id: id,
	                data: data
	            };
	        }
	    }
	}
	exports["default"] = Parse;

	});

	unwrapExports(parse);

	var arithmetic = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	var Arithmetic;
	(function (Arithmetic) {
	    Arithmetic[Arithmetic["infinity"] = 0] = "infinity";
	    Arithmetic[Arithmetic["minusInfinity"] = 1] = "minusInfinity";
	    Arithmetic[Arithmetic["minusZero"] = 2] = "minusZero";
	})(Arithmetic || (Arithmetic = {}));
	function isMinusZero(value) {
	    return 1 / value === -Infinity;
	}
	exports["default"] = {
	    type: 'Arithmetic',
	    shouldTransform: function (type, value) {
	        return (type === 'number' &&
	            (value === Infinity || value === -Infinity || isMinusZero(value)));
	    },
	    toSerializable: function (value) {
	        return value === Infinity
	            ? Arithmetic.infinity
	            : value === -Infinity
	                ? Arithmetic.minusInfinity
	                : Arithmetic.minusZero;
	    },
	    fromSerializable: function (data) {
	        if (data === Arithmetic.infinity)
	            return Infinity;
	        if (data === Arithmetic.minusInfinity)
	            return -Infinity;
	        if (data === Arithmetic.minusZero)
	            return -0;
	        return data;
	    }
	};

	});

	unwrapExports(arithmetic);

	var _Function = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	/**
	 * Serialize a function into JSON
	 */
	exports["default"] = {
	    type: 'Function',
	    shouldTransform: function (type, obj) {
	        return typeof obj === 'function';
	    },
	    toSerializable: function (func) {
	        var body = '';
	        try {
	            body = func
	                .toString()
	                .substring(body.indexOf('{') + 1, body.lastIndexOf('}'));
	        }
	        catch (e) { }
	        return {
	            name: func.name,
	            body: body,
	            proto: Object.getPrototypeOf(func).constructor.name
	        };
	    },
	    fromSerializable: function (data) {
	        try {
	            var tempFunc = function () { };
	            if (typeof data.name === 'string') {
	                Object.defineProperty(tempFunc, 'name', {
	                    value: data.name,
	                    writable: false
	                });
	            }
	            if (typeof data.body === 'string') {
	                Object.defineProperty(tempFunc, 'body', {
	                    value: data.body,
	                    writable: false
	                });
	            }
	            if (typeof data.proto === 'string') {
	                // @ts-ignore
	                tempFunc.constructor = {
	                    name: data.proto
	                };
	            }
	            return tempFunc;
	        }
	        catch (e) {
	            return data;
	        }
	    }
	};

	});

	unwrapExports(_Function);

	var HTML = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	// Sandbox HTML elements
	var sandbox = document.implementation.createHTMLDocument('sandbox');
	function objectifyAttributes(element) {
	    var data = {};
	    for (var _i = 0, _a = element.attributes; _i < _a.length; _i++) {
	        var attribute = _a[_i];
	        data[attribute.name] = attribute.value;
	    }
	    return data;
	}
	/**
	 * Serialize a HTML element into JSON
	 */
	exports["default"] = {
	    type: 'HTMLElement',
	    shouldTransform: function (type, obj) {
	        return (obj &&
	            obj.children &&
	            typeof obj.innerHTML === 'string' &&
	            typeof obj.tagName === 'string');
	    },
	    toSerializable: function (element) {
	        return {
	            tagName: element.tagName.toLowerCase(),
	            attributes: objectifyAttributes(element),
	            innerHTML: element.innerHTML
	        };
	    },
	    fromSerializable: function (data) {
	        try {
	            var element = sandbox.createElement(data.tagName);
	            element.innerHTML = data.innerHTML;
	            for (var _i = 0, _a = Object.keys(data.attributes); _i < _a.length; _i++) {
	                var attribute = _a[_i];
	                try {
	                    element.setAttribute(attribute, data.attributes[attribute]);
	                }
	                catch (e) { }
	            }
	            return element;
	        }
	        catch (e) {
	            return data;
	        }
	    }
	};

	});

	unwrapExports(HTML);

	var replicator = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	// Const
	var TRANSFORMED_TYPE_KEY = '@t';
	var CIRCULAR_REF_KEY = '@r';
	var KEY_REQUIRE_ESCAPING_RE = /^#*@(t|r)$/;
	var GLOBAL = (function getGlobal() {
	    // NOTE: see http://www.ecma-international.org/ecma-262/6.0/index.html#sec-performeval step 10
	    var savedEval = eval;
	    return savedEval('this');
	})();
	var ARRAY_BUFFER_SUPPORTED = typeof ArrayBuffer === 'function';
	var MAP_SUPPORTED = typeof Map === 'function';
	var SET_SUPPORTED = typeof Set === 'function';
	var TYPED_ARRAY_CTORS = [
	    'Int8Array',
	    'Uint8Array',
	    'Uint8ClampedArray',
	    'Int16Array',
	    'Uint16Array',
	    'Int32Array',
	    'Uint32Array',
	    'Float32Array',
	    'Float64Array'
	];
	// Saved proto functions
	var arrSlice = Array.prototype.slice;
	// Default serializer
	var JSONSerializer = {
	    serialize: function (val) {
	        return JSON.stringify(val);
	    },
	    deserialize: function (val) {
	        return JSON.parse(val);
	    }
	};
	// EncodingTransformer
	var EncodingTransformer = /** @class */ (function () {
	    function EncodingTransformer(val, transforms) {
	        this.references = val;
	        this.transforms = transforms;
	        this.circularCandidates = [];
	        this.circularCandidatesDescrs = [];
	        this.circularRefCount = 0;
	    }
	    EncodingTransformer._createRefMark = function (idx) {
	        var obj = Object.create(null);
	        obj[CIRCULAR_REF_KEY] = idx;
	        return obj;
	    };
	    EncodingTransformer.prototype._createCircularCandidate = function (val, parent, key) {
	        this.circularCandidates.push(val);
	        this.circularCandidatesDescrs.push({ parent: parent, key: key, refIdx: -1 });
	    };
	    EncodingTransformer.prototype._applyTransform = function (val, parent, key, transform) {
	        var result = Object.create(null);
	        var serializableVal = transform.toSerializable(val);
	        if (typeof serializableVal === 'object')
	            this._createCircularCandidate(val, parent, key);
	        result[TRANSFORMED_TYPE_KEY] = transform.type;
	        result.data = this._handleValue(serializableVal, parent, key);
	        return result;
	    };
	    EncodingTransformer.prototype._handleArray = function (arr) {
	        var result = [];
	        for (var i = 0; i < arr.length; i++)
	            result[i] = this._handleValue(arr[i], result, i);
	        return result;
	    };
	    EncodingTransformer.prototype._handlePlainObject = function (obj) {
	        var result = Object.create(null);
	        for (var key in obj) {
	            if (obj.hasOwnProperty(key)) {
	                var resultKey = KEY_REQUIRE_ESCAPING_RE.test(key) ? "#" + key : key;
	                result[resultKey] = this._handleValue(obj[key], result, resultKey);
	            }
	        }
	        var name = obj.__proto__.constructor.name;
	        if (name !== 'Object') {
	            result.constructor = { name: name };
	        }
	        return result;
	    };
	    EncodingTransformer.prototype._handleObject = function (obj, parent, key) {
	        this._createCircularCandidate(obj, parent, key);
	        return Array.isArray(obj)
	            ? this._handleArray(obj)
	            : this._handlePlainObject(obj);
	    };
	    EncodingTransformer.prototype._ensureCircularReference = function (obj) {
	        var circularCandidateIdx = this.circularCandidates.indexOf(obj);
	        if (circularCandidateIdx > -1) {
	            var descr = this.circularCandidatesDescrs[circularCandidateIdx];
	            if (descr.refIdx === -1)
	                descr.refIdx = descr.parent ? ++this.circularRefCount : 0;
	            return EncodingTransformer._createRefMark(descr.refIdx);
	        }
	        return null;
	    };
	    EncodingTransformer.prototype._handleValue = function (val, parent, key) {
	        var type = typeof val;
	        var isObject = type === 'object' && val !== null;
	        if (isObject) {
	            var refMark = this._ensureCircularReference(val);
	            if (refMark)
	                return refMark;
	        }
	        for (var _i = 0, _a = this.transforms; _i < _a.length; _i++) {
	            var transform = _a[_i];
	            if (transform.shouldTransform(type, val))
	                return this._applyTransform(val, parent, key, transform);
	        }
	        if (isObject)
	            return this._handleObject(val, parent, key);
	        return val;
	    };
	    EncodingTransformer.prototype.transform = function () {
	        var references = [this._handleValue(this.references, null, null)];
	        for (var _i = 0, _a = this.circularCandidatesDescrs; _i < _a.length; _i++) {
	            var descr = _a[_i];
	            if (descr.refIdx > 0) {
	                references[descr.refIdx] = descr.parent[descr.key];
	                descr.parent[descr.key] = EncodingTransformer._createRefMark(descr.refIdx);
	            }
	        }
	        return references;
	    };
	    return EncodingTransformer;
	}());
	// DecodingTransform
	var DecodingTransformer = /** @class */ (function () {
	    function DecodingTransformer(references, transformsMap) {
	        this.activeTransformsStack = [];
	        this.visitedRefs = Object.create(null);
	        this.references = references;
	        this.transformMap = transformsMap;
	    }
	    DecodingTransformer.prototype._handlePlainObject = function (obj) {
	        var unescaped = Object.create(null);
	        if ('constructor' in obj) {
	            if (!obj.constructor || typeof obj.constructor.name !== 'string') {
	                obj.constructor = {
	                    name: 'Object'
	                };
	            }
	        }
	        for (var key in obj) {
	            if (obj.hasOwnProperty(key)) {
	                this._handleValue(obj[key], obj, key);
	                if (KEY_REQUIRE_ESCAPING_RE.test(key)) {
	                    // NOTE: use intermediate object to avoid unescaped and escaped keys interference
	                    // E.g. unescaped "##@t" will be "#@t" which can overwrite escaped "#@t".
	                    unescaped[key.substring(1)] = obj[key];
	                    delete obj[key];
	                }
	            }
	        }
	        for (var unsecapedKey in unescaped)
	            obj[unsecapedKey] = unescaped[unsecapedKey];
	    };
	    DecodingTransformer.prototype._handleTransformedObject = function (obj, parent, key) {
	        var transformType = obj[TRANSFORMED_TYPE_KEY];
	        var transform = this.transformMap[transformType];
	        if (!transform)
	            throw new Error("Can't find transform for \"" + transformType + "\" type.");
	        this.activeTransformsStack.push(obj);
	        this._handleValue(obj.data, obj, 'data');
	        this.activeTransformsStack.pop();
	        parent[key] = transform.fromSerializable(obj.data);
	    };
	    DecodingTransformer.prototype._handleCircularSelfRefDuringTransform = function (refIdx, parent, key) {
	        // NOTE: we've hit a hard case: object reference itself during transformation.
	        // We can't dereference it since we don't have resulting object yet. And we'll
	        // not be able to restore reference lately because we will need to traverse
	        // transformed object again and reference might be unreachable or new object contain
	        // new circular references. As a workaround we create getter, so once transformation
	        // complete, dereferenced property will point to correct transformed object.
	        var references = this.references;
	        Object.defineProperty(parent, key, {
	            // @ts-ignore
	            val: void 0,
	            configurable: true,
	            enumerable: true,
	            get: function () {
	                if (this.val === void 0)
	                    this.val = references[refIdx];
	                return this.val;
	            },
	            set: function (value) {
	                this.val = value;
	            }
	        });
	    };
	    DecodingTransformer.prototype._handleCircularRef = function (refIdx, parent, key) {
	        if (this.activeTransformsStack.includes(this.references[refIdx]))
	            this._handleCircularSelfRefDuringTransform(refIdx, parent, key);
	        else {
	            if (!this.visitedRefs[refIdx]) {
	                this.visitedRefs[refIdx] = true;
	                this._handleValue(this.references[refIdx], this.references, refIdx);
	            }
	            parent[key] = this.references[refIdx];
	        }
	    };
	    DecodingTransformer.prototype._handleValue = function (val, parent, key) {
	        if (typeof val !== 'object' || val === null)
	            return;
	        var refIdx = val[CIRCULAR_REF_KEY];
	        if (refIdx !== void 0)
	            this._handleCircularRef(refIdx, parent, key);
	        else if (val[TRANSFORMED_TYPE_KEY])
	            this._handleTransformedObject(val, parent, key);
	        else if (Array.isArray(val)) {
	            for (var i = 0; i < val.length; i++)
	                this._handleValue(val[i], val, i);
	        }
	        else
	            this._handlePlainObject(val);
	    };
	    DecodingTransformer.prototype.transform = function () {
	        this.visitedRefs[0] = true;
	        this._handleValue(this.references[0], this.references, 0);
	        return this.references[0];
	    };
	    return DecodingTransformer;
	}());
	// Transforms
	var builtInTransforms = [
	    {
	        type: '[[NaN]]',
	        shouldTransform: function (type, val) {
	            return type === 'number' && isNaN(val);
	        },
	        toSerializable: function () {
	            return '';
	        },
	        fromSerializable: function () {
	            return NaN;
	        }
	    },
	    {
	        type: '[[undefined]]',
	        shouldTransform: function (type) {
	            return type === 'undefined';
	        },
	        toSerializable: function () {
	            return '';
	        },
	        fromSerializable: function () {
	            return void 0;
	        }
	    },
	    {
	        type: '[[Date]]',
	        shouldTransform: function (type, val) {
	            return val instanceof Date;
	        },
	        toSerializable: function (date) {
	            return date.getTime();
	        },
	        fromSerializable: function (val) {
	            var date = new Date();
	            date.setTime(val);
	            return date;
	        }
	    },
	    {
	        type: '[[RegExp]]',
	        shouldTransform: function (type, val) {
	            return val instanceof RegExp;
	        },
	        toSerializable: function (re) {
	            var result = {
	                src: re.source,
	                flags: ''
	            };
	            if (re.global)
	                result.flags += 'g';
	            if (re.ignoreCase)
	                result.flags += 'i';
	            if (re.multiline)
	                result.flags += 'm';
	            return result;
	        },
	        fromSerializable: function (val) {
	            return new RegExp(val.src, val.flags);
	        }
	    },
	    {
	        type: '[[Error]]',
	        shouldTransform: function (type, val) {
	            return val instanceof Error;
	        },
	        toSerializable: function (err) {
	            return {
	                name: err.name,
	                message: err.message,
	                stack: err.stack
	            };
	        },
	        fromSerializable: function (val) {
	            var Ctor = GLOBAL[val.name] || Error;
	            var err = new Ctor(val.message);
	            err.stack = val.stack;
	            return err;
	        }
	    },
	    {
	        type: '[[ArrayBuffer]]',
	        shouldTransform: function (type, val) {
	            return ARRAY_BUFFER_SUPPORTED && val instanceof ArrayBuffer;
	        },
	        toSerializable: function (buffer) {
	            var view = new Int8Array(buffer);
	            return arrSlice.call(view);
	        },
	        fromSerializable: function (val) {
	            if (ARRAY_BUFFER_SUPPORTED) {
	                var buffer = new ArrayBuffer(val.length);
	                var view = new Int8Array(buffer);
	                view.set(val);
	                return buffer;
	            }
	            return val;
	        }
	    },
	    {
	        type: '[[TypedArray]]',
	        shouldTransform: function (type, val) {
	            for (var _i = 0, TYPED_ARRAY_CTORS_1 = TYPED_ARRAY_CTORS; _i < TYPED_ARRAY_CTORS_1.length; _i++) {
	                var ctorName = TYPED_ARRAY_CTORS_1[_i];
	                if (typeof GLOBAL[ctorName] === 'function' &&
	                    val instanceof GLOBAL[ctorName])
	                    return true;
	            }
	            return false;
	        },
	        toSerializable: function (arr) {
	            return {
	                ctorName: arr.constructor.name,
	                arr: arrSlice.call(arr)
	            };
	        },
	        fromSerializable: function (val) {
	            return typeof GLOBAL[val.ctorName] === 'function'
	                ? new GLOBAL[val.ctorName](val.arr)
	                : val.arr;
	        }
	    },
	    {
	        type: '[[Map]]',
	        shouldTransform: function (type, val) {
	            return MAP_SUPPORTED && val instanceof Map;
	        },
	        toSerializable: function (map) {
	            var flattenedKVArr = [];
	            map.forEach(function (val, key) {
	                flattenedKVArr.push(key);
	                flattenedKVArr.push(val);
	            });
	            return flattenedKVArr;
	        },
	        fromSerializable: function (val) {
	            if (MAP_SUPPORTED) {
	                // NOTE: new Map(iterable) is not supported by all browsers
	                var map = new Map();
	                for (var i = 0; i < val.length; i += 2)
	                    map.set(val[i], val[i + 1]);
	                return map;
	            }
	            var kvArr = [];
	            // @ts-ignore
	            for (var j = 0; j < val.length; j += 2)
	                kvArr.push([val[i], val[i + 1]]);
	            return kvArr;
	        }
	    },
	    {
	        type: '[[Set]]',
	        shouldTransform: function (type, val) {
	            return SET_SUPPORTED && val instanceof Set;
	        },
	        toSerializable: function (set) {
	            var arr = [];
	            set.forEach(function (val) {
	                arr.push(val);
	            });
	            return arr;
	        },
	        fromSerializable: function (val) {
	            if (SET_SUPPORTED) {
	                // NOTE: new Set(iterable) is not supported by all browsers
	                var set = new Set();
	                for (var i = 0; i < val.length; i++)
	                    set.add(val[i]);
	                return set;
	            }
	            return val;
	        }
	    }
	];
	// Replicator
	var Replicator = /** @class */ (function () {
	    function Replicator(serializer) {
	        this.transforms = [];
	        this.transformsMap = Object.create(null);
	        this.serializer = serializer || JSONSerializer;
	        this.addTransforms(builtInTransforms);
	    }
	    Replicator.prototype.addTransforms = function (transforms) {
	        transforms = Array.isArray(transforms) ? transforms : [transforms];
	        for (var _i = 0, transforms_1 = transforms; _i < transforms_1.length; _i++) {
	            var transform = transforms_1[_i];
	            if (this.transformsMap[transform.type])
	                throw new Error("Transform with type \"" + transform.type + "\" was already added.");
	            this.transforms.push(transform);
	            this.transformsMap[transform.type] = transform;
	        }
	        return this;
	    };
	    Replicator.prototype.removeTransforms = function (transforms) {
	        transforms = Array.isArray(transforms) ? transforms : [transforms];
	        for (var _i = 0, transforms_2 = transforms; _i < transforms_2.length; _i++) {
	            var transform = transforms_2[_i];
	            var idx = this.transforms.indexOf(transform);
	            if (idx > -1)
	                this.transforms.splice(idx, 1);
	            delete this.transformsMap[transform.type];
	        }
	        return this;
	    };
	    Replicator.prototype.encode = function (val) {
	        var transformer = new EncodingTransformer(val, this.transforms);
	        var references = transformer.transform();
	        return this.serializer.serialize(references);
	    };
	    Replicator.prototype.decode = function (val) {
	        var references = this.serializer.deserialize(val);
	        var transformer = new DecodingTransformer(references, this.transformsMap);
	        return transformer.transform();
	    };
	    return Replicator;
	}());
	exports["default"] = Replicator;

	});

	unwrapExports(replicator);

	var Transform = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;




	var transforms = [HTML["default"], _Function["default"], arithmetic["default"]];
	var replicator$$1 = new replicator["default"]();
	replicator$$1.addTransforms(transforms);
	function Encode(data) {
	    return JSON.parse(replicator$$1.encode(data));
	}
	exports.Encode = Encode;
	function Decode(data) {
	    return replicator$$1.decode(JSON.stringify(data));
	}
	exports.Decode = Decode;

	});

	unwrapExports(Transform);
	var Transform_1 = Transform.Encode;
	var Transform_2 = Transform.Decode;

	var Hook_1 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;



	// import Construct from './construct'
	/**
	 * Hook a console constructor and forward messages to a callback
	 * @argument console The Console constructor to Hook
	 * @argument callback The callback to be called once a message is logged
	 */
	function Hook(console, callback) {
	    var TargetConsole = console;
	    var Storage = {
	        pointers: {},
	        src: {
	            npm: 'https://npmjs.com/package/console-feed',
	            github: 'https://github.com/samdenty99/console-feed'
	        }
	    };
	    var _loop_1 = function (method) {
	        var NativeMethod = TargetConsole[method];
	        // Override
	        TargetConsole[method] = function () {
	            // Pass back to native method
	            NativeMethod.apply(this, arguments);
	            // Parse arguments and send to transport
	            var args = [].slice.call(arguments);
	            // setTimeout to prevent lag
	            setTimeout(function () {
	                var parsed = parse["default"](method, args);
	                if (parsed) {
	                    var encoded = Transform.Encode(parsed);
	                    callback(encoded, parsed);
	                }
	            });
	        };
	        // Store native methods
	        Storage.pointers[method] = NativeMethod;
	    };
	    // Override console methods
	    for (var _i = 0, Methods_2 = Methods["default"]; _i < Methods_2.length; _i++) {
	        var method = Methods_2[_i];
	        _loop_1(method);
	    }
	    TargetConsole.feed = Storage;
	    return TargetConsole;
	}
	exports["default"] = Hook;

	});

	unwrapExports(Hook_1);

	var Unhook_1 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	/**
	 * Unhook a console constructor and restore back the Native methods
	 * @argument console The Console constructor to Hook
	 */
	function Unhook(console) {
	    if (console.feed) {
	        for (var _i = 0, _a = Object.keys(console.feed.pointers); _i < _a.length; _i++) {
	            var method = _a[_i];
	            console[method] = console.feed.pointers[method];
	        }
	        return delete console.feed;
	    }
	    else {
	        return false;
	    }
	}
	exports["default"] = Unhook;

	});

	unwrapExports(Unhook_1);

	var lib$1 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;

	exports.Console = Component["default"];

	exports.Hook = Hook_1["default"];

	exports.Unhook = Unhook_1["default"];

	exports.Decode = Transform.Decode;
	var Transform_2 = Transform;
	exports.Encode = Transform_2.Encode;

	});

	unwrapExports(lib$1);
	var lib_1$1 = lib$1.Console;
	var lib_2$1 = lib$1.Hook;
	var lib_3$1 = lib$1.Unhook;
	var lib_4$1 = lib$1.Decode;
	var lib_5$1 = lib$1.Encode;

	self.__console = self.console;

	var logIt = function logIt(type) {
	  return function () {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    self.__console[type](args);

	    processArgs(type)(args);
	  };
	};

	lib_2$1(self.console, function (log) {
	  self.postMessage({
	    args: lib_4$1(log)
	  });
	}); // const url = URL.createObjectURL(blob);
	// const processArgs = (type) => (args) => {
	//   const finalArgs = Array(args.length)
	//   args.forEach((arg, i) => {
	//     finalArgs[i] = new Promise((resolve, reject) => {
	//       const reader = new FileReader()
	//       reader.addEventListener('loadend', function() {
	//         self.__console.log('GOT THE RESULT:', reader.result)
	//         resolve(reader.result)
	//       })
	//       const a = ['number', 'string', 'boolean'].includes(typeof arg)
	//         ? arg
	//         : JSON.stringify(arg)
	//       self.__console.log({ arg, a })
	//       const blob = new Blob([a], { type: 'application/javascript' }) // pass a useful mime type here
	//       reader.readAsText(blob)
	//     })
	//   })
	//   Promise.all(finalArgs).then((values) => {
	//     self.__console.log('done with that shit:', { values, finalArgs })
	//     self.postMessage({ type, args: values })
	//   })
	// }

	self.console = {
	  log: logIt('log'),
	  warn: logIt('warn'),
	  error: logIt('error'),
	  debug: logIt('debug'),
	  table: logIt('table'),
	  info: logIt('info')
	};

	importScripts('https://cdnjs.cloudflare.com/ajax/libs/mobx/5.0.3/mobx.umd.js');
	var _mobx = mobx,
	    observable = _mobx.observable,
	    action = _mobx.action,
	    computed = _mobx.computed,
	    autorun = _mobx.autorun;
	var createMessenger = function createMessenger() {
	  self.onmessage = function (event) {
	    var data = event.data,
	        origin = event.origin;

	    if (data.type === 'execute') {
	      importScripts(data.url);
	    }
	  };
	};

	createMessenger();

}());