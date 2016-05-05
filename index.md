% PyTA Help Documentation

This is some welcome text.

## Pylint errors {#pylint}

### R0102: simplifiable-if-statement {#R0102}

[Make the following into a more helpful description of the simplifiable-if-statement error, and delete this message after.]

The if statement can be reduced by %s Used when an if statement can be reduced to a boolean conversion of the statement’s test.

### R0101: too-many-nested-blocks {#R0101}

[Make the following into a more helpful description of the too-many-nested-blocks error, and delete this message after.]

Too many nested blocks (%s/%s) Used when a function or a method has too many nested blocks. This makes the code less understandable and maintainable.

### R0204: redefined-variable-type {#R0204}

[Make the following into a more helpful description of the redefined-variable-type error, and delete this message after.]

Redefinition of %s type from %s to %s Used when the type of a variable changes inside a method or a function.

### E0401: import-error {#E0401}

[Make the following into a more helpful description of the import-error error, and delete this message after.]

Unable to import %s Used when pylint has been unable to import a module.

### W0406: import-self {#W0406}

[Make the following into a more helpful description of the import-self error, and delete this message after.]

Module import itself Used when a module is importing itself.

### W0404: reimported {#W0404}

[Make the following into a more helpful description of the reimported error, and delete this message after.]

Reimport %r (imported line %s) Used when a module is reimported multiple times.

### W0403: relative-import {#W0403}

[Make the following into a more helpful description of the relative-import error, and delete this message after.]

Relative import %r, should be %r Used when an import relative to the package directory is detected. This message can’t be emitted when using Python >= 3.0.

### W0402: deprecated-module {#W0402}

[Make the following into a more helpful description of the deprecated-module error, and delete this message after.]

Uses of a deprecated module %r Used a module marked as deprecated is imported.

### W0401: wildcard-import {#W0401}

[Make the following into a more helpful description of the wildcard-import error, and delete this message after.]

Wildcard import %s Used when from module import * is detected.

### W0410: misplaced-future {#W0410}

[Make the following into a more helpful description of the misplaced-future error, and delete this message after.]

\_\_future\_\_ import is not the first non docstring statement Python 2.5 and greater require \_\_future\_\_ import to be the first non docstring statement in the module.

### R0401: cyclic-import {#R0401}

[Make the following into a more helpful description of the cyclic-import error, and delete this message after.]

Cyclic import (%s) Used when a cyclic import between two or more modules is detected.

### C0411: wrong-import-order {#C0411}

[Make the following into a more helpful description of the wrong-import-order error, and delete this message after.]

%s comes before %s Used when PEP8 import order is not respected (standard imports first, then third-party libraries, then local imports)

### C0413: wrong-import-position {#C0413}

[Make the following into a more helpful description of the wrong-import-position error, and delete this message after.]

Import “%s” should be placed at the top of the module Used when code and imports are mixed

### C0412: ungrouped-imports {#C0412}

[Make the following into a more helpful description of the ungrouped-imports error, and delete this message after.]

Imports from package %s are not grouped Used when imports are not grouped by packages

### C0410: multiple-imports {#C0410}

[Make the following into a more helpful description of the multiple-imports error, and delete this message after.]

Multiple imports on one line (%s) Used when import statement importing multiple modules is detected.

### E0633: unpacking-non-sequence {#E0633}

[Make the following into a more helpful description of the unpacking-non-sequence error, and delete this message after.]

Attempting to unpack a non-sequence%s Used when something which is not a sequence is used in an unpack assignment

### E0604: invalid-all-object {#E0604}

[Make the following into a more helpful description of the invalid-all-object error, and delete this message after.]

Invalid object %r in \_\_all\_\_, must contain only strings Used when an invalid (non-string) object occurs in \_\_all\_\_.

### E0611: no-name-in-module {#E0611}

[Make the following into a more helpful description of the no-name-in-module error, and delete this message after.]

No name %r in module %r Used when a name cannot be found in a module.

### E0632: unbalanced-tuple-unpacking {#E0632}

[Make the following into a more helpful description of the unbalanced-tuple-unpacking error, and delete this message after.]

Possible unbalanced tuple unpacking with sequence%s: left side has %d label(s), right side has %d value(s) Used when there is an unbalanced tuple unpacking in assignment

### E0602: undefined-variable {#E0602}

[Make the following into a more helpful description of the undefined-variable error, and delete this message after.]

Undefined variable %r Used when an undefined variable is accessed.

### E0603: undefined-all-variable {#E0603}

[Make the following into a more helpful description of the undefined-all-variable error, and delete this message after.]

Undefined variable name %r in \_\_all\_\_ Used when an undefined variable name is referenced in \_\_all\_\_.

### E0601: used-before-assignment {#E0601}

[Make the following into a more helpful description of the used-before-assignment error, and delete this message after.]

Using variable %r before assignment Used when a local variable is accessed before it’s assignment.

### W0640: cell-var-from-loop {#W0640}

[Make the following into a more helpful description of the cell-var-from-loop error, and delete this message after.]

Cell variable %s defined in loop A variable used in a closure is defined in a loop. This will result in all closures using the same value for the closed-over variable.

### W0601: global-variable-undefined {#W0601}

[Make the following into a more helpful description of the global-variable-undefined error, and delete this message after.]

Global variable %r undefined at the module level Used when a variable is defined through the “global” statement but the variable is not defined in the module scope.

### W0622: redefined-builtin {#W0622}

[Make the following into a more helpful description of the redefined-builtin error, and delete this message after.]

Redefining built-in %r Used when a variable or function override a built-in.

### W0623: redefine-in-handler {#W0623}

[Make the following into a more helpful description of the redefine-in-handler error, and delete this message after.]

Redefining name %r from %s in exception handler Used when an exception handler assigns the exception to an existing name

### W0621: redefined-outer-name {#W0621}

[Make the following into a more helpful description of the redefined-outer-name error, and delete this message after.]

Redefining name %r from outer scope (line %s) Used when a variable’s name hide a name defined in the outer scope.

### W0611: unused-import {#W0611}

[Make the following into a more helpful description of the unused-import error, and delete this message after.]

Unused %s Used when an imported module or variable is not used.

### W0613: unused-argument {#W0613}

[Make the following into a more helpful description of the unused-argument error, and delete this message after.]

Unused argument %r Used when a function or method argument is not used.

### W0614: unused-wildcard-import {#W0614}

[Make the following into a more helpful description of the unused-wildcard-import error, and delete this message after.]

Unused import %s from wildcard import Used when an imported module or variable is not used from a ‘from X import *’ style import.

### W0612: unused-variable {#W0612}

[Make the following into a more helpful description of the unused-variable error, and delete this message after.]

Unused variable %r Used when a variable is defined but not used.

### W0602: global-variable-not-assigned {#W0602}

[Make the following into a more helpful description of the global-variable-not-assigned error, and delete this message after.]

Using global for %r but no assignment is done Used when a variable is defined through the “global” statement but no assignment to this variable is done.

### W0631: undefined-loop-variable {#W0631}

[Make the following into a more helpful description of the undefined-loop-variable error, and delete this message after.]

Using possibly undefined loop variable %r Used when an loop variable (i.e. defined by a for loop or a list comprehension or a generator expression) is used outside the loop.

### W0603: global-statement {#W0603}

[Make the following into a more helpful description of the global-statement error, and delete this message after.]

Using the global statement Used when you use the “global” statement to update a global variable. Pylint just try to discourage this usage. That doesn’t mean you can not use it !

### W0604: global-at-module-level {#W0604}

[Make the following into a more helpful description of the global-at-module-level error, and delete this message after.]

Using the global statement at the module level Used when you use the “global” statement at the module level since it has no effect

### R0903: too-few-public-methods {#R0903}

[Make the following into a more helpful description of the too-few-public-methods error, and delete this message after.]

Too few public methods (%s/%s) Used when class has too few public methods, so be sure it’s really worth it.

### R0901: too-many-ancestors {#R0901}

[Make the following into a more helpful description of the too-many-ancestors error, and delete this message after.]

Too many ancestors (%s/%s) Used when class has too many parent classes, try to reduce this to get a simpler (and so easier to use) class.

### R0913: too-many-arguments {#R0913}

[Make the following into a more helpful description of the too-many-arguments error, and delete this message after.]

Too many arguments (%s/%s) Used when a function or method takes too many arguments.

### R0916: too-many-boolean-expressions {#R0916}

[Make the following into a more helpful description of the too-many-boolean-expressions error, and delete this message after.]

Too many boolean expressions in if statement (%s/%s) Used when a if statement contains too many boolean expressions

### R0912: too-many-branches {#R0912}

[Make the following into a more helpful description of the too-many-branches error, and delete this message after.]

Too many branches (%s/%s) Used when a function or method has too many branches, making it hard to follow.

### R0902: too-many-instance-attributes {#R0902}

[Make the following into a more helpful description of the too-many-instance-attributes error, and delete this message after.]

Too many instance attributes (%s/%s) Used when class has too many instance attributes, try to reduce this to get a simpler (and so easier to use) class.

### R0914: too-many-locals {#R0914}

[Make the following into a more helpful description of the too-many-locals error, and delete this message after.]

Too many local variables (%s/%s) Used when a function or method has too many local variables.

### R0904: too-many-public-methods {#R0904}

[Make the following into a more helpful description of the too-many-public-methods error, and delete this message after.]

Too many public methods (%s/%s) Used when class has too many public methods, try to reduce this to get a simpler (and so easier to use) class.

### R0911: too-many-return-statements {#R0911}

[Make the following into a more helpful description of the too-many-return-statements error, and delete this message after.]

Too many return statements (%s/%s) Used when a function or method has too many return statement, making it hard to follow.

### R0915: too-many-statements {#R0915}

[Make the following into a more helpful description of the too-many-statements error, and delete this message after.]

Too many statements (%s/%s) Used when a function or method has too many statements. You should then split it in smaller functions / methods.

### W1501: bad-open-mode {#W1501}

[Make the following into a more helpful description of the bad-open-mode error, and delete this message after.]

“%s” is not a valid mode for open. Python supports: r, w, a[, x] modes with b, +, and U (only with r) options. See http://docs.python.org/2/library/functions.html#open

### W1503: redundant-unittest-assert {#W1503}

[Make the following into a more helpful description of the redundant-unittest-assert error, and delete this message after.]

Redundant use of %s with constant value %r The first argument of assertTrue and assertFalse is a condition. If a constant is passed as parameter, that condition will be always true. In this case a warning should be emitted.

### W1502: boolean-datetime {#W1502}

[Make the following into a more helpful description of the boolean-datetime error, and delete this message after.]

Using datetime.time in a boolean context. Using datetime.time in a boolean context can hide subtle bugs when the time they represent matches midnight UTC. This behaviour was fixed in Python 3.5. See http://bugs.python.org/issue13936 for reference. This message can’t be emitted when using Python >= 3.5.

### W1505: deprecated-method {#W1505}

[Make the following into a more helpful description of the deprecated-method error, and delete this message after.]

Using deprecated method %s() The method is marked as deprecated and will be removed in a future version of Python. Consider looking for an alternative in the documentation.

### R0801: duplicate-code {#R0801}

[Make the following into a more helpful description of the duplicate-code error, and delete this message after.]

Similar lines in %s files Indicates that a set of similar lines has been detected among multiple file. This usually means that the code should be refactored to avoid this duplication.

### E0103: not-in-loop {#E0103}

[Make the following into a more helpful description of the not-in-loop error, and delete this message after.]

%r not properly in loop Used when break or continue keywords are used outside a loop.

### E0102: function-redefined {#E0102}

[Make the following into a more helpful description of the function-redefined error, and delete this message after.]

%s already defined line %s Used when a function / class / method is redefined.

### E0116: continue-in-finally {#E0116}

[Make the following into a more helpful description of the continue-in-finally error, and delete this message after.]

‘continue’ not supported inside ‘finally’ clause Emitted when the continue keyword is found inside a finally clause, which is a SyntaxError.

### E0110: abstract-class-instantiated {#E0110}

[Make the following into a more helpful description of the abstract-class-instantiated error, and delete this message after.]

Abstract class %r with abstract methods instantiated Used when an abstract class with abc.ABCMeta as metaclass has abstract methods and is instantiated.

### E0114: star-needs-assignment-target {#E0114}

[Make the following into a more helpful description of the star-needs-assignment-target error, and delete this message after.]

Can use starred expression only in assignment target Emitted when a star expression is not used in an assignment target. This message can’t be emitted when using Python < 3.0.

### E0108: duplicate-argument-name {#E0108}

[Make the following into a more helpful description of the duplicate-argument-name error, and delete this message after.]

Duplicate argument name %s in function definition Duplicate argument names in function definitions are syntax errors.

### E0101: return-in-init {#E0101}

[Make the following into a more helpful description of the return-in-init error, and delete this message after.]

Explicit return in \_\_init\_\_ Used when the special class method \_\_init\_\_ has an explicit return value.

### E0112: too-many-star-expressions {#E0112}

[Make the following into a more helpful description of the too-many-star-expressions error, and delete this message after.]

More than one starred expression in assignment Emitted when there are more than one starred expressions (*x) in an assignment. This is a SyntaxError. This message can’t be emitted when using Python < 3.0.

### E0115: nonlocal-and-global {#E0115}

[Make the following into a more helpful description of the nonlocal-and-global error, and delete this message after.]

Name %r is nonlocal and global Emitted when a name is both nonlocal and global. This message can’t be emitted when using Python < 3.0.

### E0104: return-outside-function {#E0104}

[Make the following into a more helpful description of the return-outside-function error, and delete this message after.]

Return outside function Used when a “return” statement is found outside a function or method.

### E0106: return-arg-in-generator {#E0106}

[Make the following into a more helpful description of the return-arg-in-generator error, and delete this message after.]

Return with argument inside generator Used when a “return” statement with an argument is found outside in a generator function or method (e.g. with some “yield” statements). This message can’t be emitted when using Python >= 3.3.

### E0113: invalid-star-assignment-target {#E0113}

[Make the following into a more helpful description of the invalid-star-assignment-target error, and delete this message after.]

Starred assignment target must be in a list or tuple Emitted when a star expression is used as a starred assignment target. This message can’t be emitted when using Python < 3.0.

### E0111: bad-reversed-sequence {#E0111}

[Make the following into a more helpful description of the bad-reversed-sequence error, and delete this message after.]

The first reversed() argument is not a sequence Used when the first argument to reversed() builtin isn’t a sequence (does not implement \_\_reversed\_\_, nor \_\_getitem\_\_ and \_\_len\_\_

### E0107: nonexistent-operator {#E0107}

[Make the following into a more helpful description of the nonexistent-operator error, and delete this message after.]

Use of the non-existent %s operator Used when you attempt to use the C-style pre-increment orpre-decrement operator – and ++, which doesn’t exist in Python.

### E0105: yield-outside-function {#E0105}

[Make the following into a more helpful description of the yield-outside-function error, and delete this message after.]

Yield outside function Used when a “yield” statement is found outside a function or method.

### E0100: init-is-generator {#E0100}

[Make the following into a more helpful description of the init-is-generator error, and delete this message after.]

\_\_init\_\_ method is a generator Used when the special class method \_\_init\_\_ is turned into a generator by a yield in its body.

### E0117: nonlocal-without-binding {#E0117}

[Make the following into a more helpful description of the nonlocal-without-binding error, and delete this message after.]

nonlocal name %s found without binding Emitted when a nonlocal variable does not have an attached name somewhere in the parent scopes This message can’t be emitted when using Python < 3.0.

### W0150: lost-exception {#W0150}

[Make the following into a more helpful description of the lost-exception error, and delete this message after.]

%s statement in finally block may swallow exception Used when a break or a return statement is found inside the finally clause of a try...finally block: the exceptions raised in the try clause will be silently swallowed instead of being re-raised.

### W0199: assert-on-tuple {#W0199}

[Make the following into a more helpful description of the assert-on-tuple error, and delete this message after.]

Assert called on a 2-uple. Did you mean ‘assert x,y’? A call of assert on a tuple will always evaluate to true if the tuple is not empty, and will always evaluate to false if it is.

### W0102: dangerous-default-value {#W0102}

[Make the following into a more helpful description of the dangerous-default-value error, and delete this message after.]

Dangerous default value %s as argument Used when a mutable value as list or dictionary is detected in a default value for an argument.

### W0109: duplicate-key {#W0109}

[Make the following into a more helpful description of the duplicate-key error, and delete this message after.]

Duplicate key %r in dictionary Used when a dictionary expression binds the same key multiple times.

### W0120: useless-else-on-loop {#W0120}

[Make the following into a more helpful description of the useless-else-on-loop error, and delete this message after.]

Else clause on loop without a break statement Loops should only have an else clause if they can exit early with a break statement, otherwise the statements under else should be on the same scope as the loop itself.

### W0106: expression-not-assigned {#W0106}

[Make the following into a more helpful description of the expression-not-assigned error, and delete this message after.]

Expression “%s” is assigned to nothing Used when an expression that is not a function call is assigned to nothing. Probably something else was intended.

### W0124: confusing-with-statement {#W0124}

[Make the following into a more helpful description of the confusing-with-statement error, and delete this message after.]

Following “as” with another context manager looks like a tuple. Emitted when a with statement component returns multiple values and uses name binding with as only for a part of those values, as in with ctx() as a, b. This can be misleading, since it’s not clear if the context manager returns a tuple or if the node without a name binding is another context manager.

### W0108: unnecessary-lambda {#W0108}

[Make the following into a more helpful description of the unnecessary-lambda error, and delete this message after.]

Lambda may not be necessary Used when the body of a lambda expression is a function call on the same argument list as the lambda itself; such lambda expressions are in all but a few cases replaceable with the function being called in the body of the lambda.

### W0104: pointless-statement {#W0104}

[Make the following into a more helpful description of the pointless-statement error, and delete this message after.]

Statement seems to have no effect Used when a statement doesn’t have (or at least seems to) any effect.

### W0105: pointless-string-statement {#W0105}

[Make the following into a more helpful description of the pointless-string-statement error, and delete this message after.]

String statement has no effect Used when a string is used as a statement (which of course has no effect). This is a particular case of W0104 with its own message so you can easily disable it if you’re using those strings as documentation, instead of comments.

### W0107: unnecessary-pass {#W0107}

[Make the following into a more helpful description of the unnecessary-pass error, and delete this message after.]

Unnecessary pass statement Used when a “pass” statement that can be avoided is encountered.

### W0101: unreachable {#W0101}

[Make the following into a more helpful description of the unreachable error, and delete this message after.]

Unreachable code Used when there is some code behind a “return” or “raise” statement, which will never be accessed.

### W0123: eval-used {#W0123}

[Make the following into a more helpful description of the eval-used error, and delete this message after.]

Use of eval Used when you use the “eval” function, to discourage its usage. Consider using ast.literal\_eval for safely evaluating strings containing Python expressions from untrusted sources.

### W0122: exec-used {#W0122}

[Make the following into a more helpful description of the exec-used error, and delete this message after.]

Use of exec Used when you use the “exec” statement (function for Python 3), to discourage its usage. That doesn’t mean you can not use it !

### W0141: bad-builtin {#W0141}

[Make the following into a more helpful description of the bad-builtin error, and delete this message after.]

Used builtin function %s Used when a black listed builtin function is used (see the bad-function option). Usual black listed functions are the ones like map, or filter , where Python offers now some cleaner alternative like list comprehension.

### W0125: using-constant-test {#W0125}

[Make the following into a more helpful description of the using-constant-test error, and delete this message after.]

Using a conditional statement with a constant value Emitted when a conditional statement (If or ternary if) uses a constant value for its test. This might not be what the user intended to do.

### W0110: deprecated-lambda {#W0110}

[Make the following into a more helpful description of the deprecated-lambda error, and delete this message after.]

map/filter on lambda could be replaced by comprehension Used when a lambda is the first argument to “map” or “filter”. It could be clearer as a list comprehension or generator expression. This message can’t be emitted when using Python >= 3.0.

### C0102: blacklisted-name {#C0102}

[Make the following into a more helpful description of the blacklisted-name error, and delete this message after.]

Black listed name “%s” Used when the name is listed in the black list (unauthorized names).

### C0122: misplaced-comparison-constant {#C0122}

[Make the following into a more helpful description of the misplaced-comparison-constant error, and delete this message after.]

Comparison should be %s Used when the constant is placed on the left sideof a comparison. It is usually clearer in intent to place it in the right hand side of the comparison.

### C0121: singleton-comparison {#C0121}

[Make the following into a more helpful description of the singleton-comparison error, and delete this message after.]

Comparison to %s should be %s Used when an expression is compared to singleton values like True, False or None.

### C0113: unneeded-not {#C0113}

[Make the following into a more helpful description of the unneeded-not error, and delete this message after.]

Consider changing “%s” to “%s” Used when a boolean expression contains an unneeded negation.

### C0200: consider-using-enumerate {#C0200}

[Make the following into a more helpful description of the consider-using-enumerate error, and delete this message after.]

Consider using enumerate instead of iterating with range and len Emitted when code that iterates with range and len is encountered. Such code can be simplified by using the enumerate builtin.

### C0112: empty-docstring {#C0112}

[Make the following into a more helpful description of the empty-docstring error, and delete this message after.]

Empty %s docstring Used when a module, function, class or method has an empty docstring (it would be too easy ;).

### C0103: invalid-name {#C0103}

[Make the following into a more helpful description of the invalid-name error, and delete this message after.]

Invalid %s name “%s”%s Used when the name doesn’t match the regular expression associated to its type (constant, variable, class...).

### C0111: missing-docstring {#C0111}

[Make the following into a more helpful description of the missing-docstring error, and delete this message after.]

Missing %s docstring Used when a module, function, class or method has no docstring.Some special methods like \_\_init\_\_ doesn’t necessary require a docstring.

### C0123: unidiomatic-typecheck {#C0123}

[Make the following into a more helpful description of the unidiomatic-typecheck error, and delete this message after.]

Using type() instead of isinstance() for a typecheck. The idiomatic way to perform an explicit typecheck in Python is to use isinstance(x, Y) rather than type(x) == Y, type(x) is Y. Though there are unusual situations where these give different results.

### E1003: bad-super-call {#E1003}

[Make the following into a more helpful description of the bad-super-call error, and delete this message after.]

Bad first argument %r given to super() Used when another argument than the current class is given as first argument of the super builtin.

### E1004: missing-super-argument {#E1004}

[Make the following into a more helpful description of the missing-super-argument error, and delete this message after.]

Missing argument to super() Used when the super builtin didn’t receive an argument. This message can’t be emitted when using Python >= 3.0.

### E1001: slots-on-old-class {#E1001}

[Make the following into a more helpful description of the slots-on-old-class error, and delete this message after.]

Use of \_\_slots\_\_ on an old style class Used when an old style class uses the \_\_slots\_\_ attribute. This message can’t be emitted when using Python >= 3.0.

### E1002: super-on-old-class {#E1002}

[Make the following into a more helpful description of the super-on-old-class error, and delete this message after.]

Use of super on an old style class Used when an old style class uses the super builtin. This message can’t be emitted when using Python >= 3.0.

### W1001: property-on-old-class {#W1001}

[Make the following into a more helpful description of the property-on-old-class error, and delete this message after.]

Use of “property” on an old style class Used when Pylint detect the use of the builtin “property” on an old style class while this is relying on new style classes features. This message can’t be emitted when using Python >= 3.0.

### C1001: old-style-class {#C1001}

[Make the following into a more helpful description of the old-style-class error, and delete this message after.]

Old-style class defined. Used when a class is defined that does not inherit from anotherclass and does not inherit explicitly from “object”. This message can’t be emitted when using Python >= 3.0.

### E1133: not-an-iterable {#E1133}

[Make the following into a more helpful description of the not-an-iterable error, and delete this message after.]

Non-iterable value %s is used in an iterating context Used when a non-iterable value is used in place whereiterable is expected

### E1134: not-a-mapping {#E1134}

[Make the following into a more helpful description of the not-a-mapping error, and delete this message after.]

Non-mapping value %s is used in a mapping context Used when a non-mapping value is used in place wheremapping is expected

### E1303: format-needs-mapping {#E1303}

[Make the following into a more helpful description of the format-needs-mapping error, and delete this message after.]

Expected mapping for format string, not %s Used when a format string that uses named conversion specifiers is used with an argument that is not a mapping.

### E1301: truncated-format-string {#E1301}

[Make the following into a more helpful description of the truncated-format-string error, and delete this message after.]

Format string ends in middle of conversion specifier Used when a format string terminates before the end of a conversion specifier.

### E1304: missing-format-string-key {#E1304}

[Make the following into a more helpful description of the missing-format-string-key error, and delete this message after.]

Missing key %r in format string dictionary Used when a format string that uses named conversion specifiers is used with a dictionary that doesn’t contain all the keys required by the format string.

### E1302: mixed-format-string {#E1302}

[Make the following into a more helpful description of the mixed-format-string error, and delete this message after.]

Mixing named and unnamed conversion specifiers in format string Used when a format string contains both named (e.g. ‘%(foo)d’) and unnamed (e.g. ‘%d’) conversion specifiers. This is also used when a named conversion specifier contains * for the minimum field width and/or precision.

### E1306: too-few-format-args {#E1306}

[Make the following into a more helpful description of the too-few-format-args error, and delete this message after.]

Not enough arguments for format string Used when a format string that uses unnamed conversion specifiers is given too few arguments

### E1310: bad-str-strip-call {#E1310}

[Make the following into a more helpful description of the bad-str-strip-call error, and delete this message after.]

Suspicious argument in %s.%s call The argument to a str.{l,r,}strip call contains a duplicate character,

### E1305: too-many-format-args {#E1305}

[Make the following into a more helpful description of the too-many-format-args error, and delete this message after.]

Too many arguments for format string Used when a format string that uses unnamed conversion specifiers is given too many arguments.

### E1300: bad-format-character {#E1300}

[Make the following into a more helpful description of the bad-format-character error, and delete this message after.]

Unsupported format character %r (%#02x) at index %d Used when a unsupported format character is used in a format string.

### W1305: format-combined-specification {#W1305}

[Make the following into a more helpful description of the format-combined-specification error, and delete this message after.]

Format string contains both automatic field numbering and manual field specification Usen when a PEP 3101 format string contains both automatic field numbering (e.g. ‘{}’) and manual field specification (e.g. ‘{0}’). This message can’t be emitted when using Python < 2.7.

### W1300: bad-format-string-key {#W1300}

[Make the following into a more helpful description of the bad-format-string-key error, and delete this message after.]

Format string dictionary key should be a string, not %s Used when a format string that uses named conversion specifiers is used with a dictionary whose keys are not all strings.

### W1302: bad-format-string {#W1302}

[Make the following into a more helpful description of the bad-format-string error, and delete this message after.]

Invalid format string Used when a PEP 3101 format string is invalid. This message can’t be emitted when using Python < 2.7.

### W1306: missing-format-attribute {#W1306}

[Make the following into a more helpful description of the missing-format-attribute error, and delete this message after.]

Missing format attribute %r in format specifier %r Used when a PEP 3101 format string uses an attribute specifier ({0.length}), but the argument passed for formatting doesn’t have that attribute. This message can’t be emitted when using Python < 2.7.

### W1303: missing-format-argument-key {#W1303}

[Make the following into a more helpful description of the missing-format-argument-key error, and delete this message after.]

Missing keyword argument %r for format string Used when a PEP 3101 format string that uses named fields doesn’t receive one or more required keywords. This message can’t be emitted when using Python < 2.7.

### W1304: unused-format-string-argument {#W1304}

[Make the following into a more helpful description of the unused-format-string-argument error, and delete this message after.]

Unused format argument %r Used when a PEP 3101 format string that uses named fields is used with an argument that is not required by the format string. This message can’t be emitted when using Python < 2.7.

### W1301: unused-format-string-key {#W1301}

[Make the following into a more helpful description of the unused-format-string-key error, and delete this message after.]

Unused key %r in format string dictionary Used when a format string that uses named conversion specifiers is used with a dictionary that conWtains keys not required by the format string.

### W1307: invalid-format-index {#W1307}

[Make the following into a more helpful description of the invalid-format-index error, and delete this message after.]

Using invalid lookup key %r in format specifier %r Used when a PEP 3101 format string uses a lookup specifier ({a[1]}), but the argument passed for formatting doesn’t contain or doesn’t have that key as an attribute. This message can’t be emitted when using Python < 2.7.

### W0311: bad-indentation {#W0311}

[Make the following into a more helpful description of the bad-indentation error, and delete this message after.]

Bad indentation. Found %s %s, expected %s Used when an unexpected number of indentation’s tabulations or spaces has been found.

### W0312: mixed-indentation {#W0312}

[Make the following into a more helpful description of the mixed-indentation error, and delete this message after.]

Found indentation with %ss instead of %ss Used when there are some mixed tabs and spaces in a module.

### W0301: unnecessary-semicolon {#W0301}

[Make the following into a more helpful description of the unnecessary-semicolon error, and delete this message after.]

Unnecessary semicolon Used when a statement is ended by a semi-colon (”;”), which isn’t necessary (that’s python, not C ;).

### W0332: lowercase-l-suffix {#W0332}

[Make the following into a more helpful description of the lowercase-l-suffix error, and delete this message after.]

Use of “l” as long integer identifier Used when a lower case “l” is used to mark a long integer. You should use a upper case “L” since the letter “l” looks too much like the digit “1” This message can’t be emitted when using Python >= 3.0.

### C0326: bad-whitespace {#C0326}

[Make the following into a more helpful description of the bad-whitespace error, and delete this message after.]

%s space %s %s %s Used when a wrong number of spaces is used around an operator, bracket or block opener.

### C0304: missing-final-newline {#C0304}

[Make the following into a more helpful description of the missing-final-newline error, and delete this message after.]

Final newline missing Used when the last line in a file is missing a newline.

### C0301: line-too-long {#C0301}

[Make the following into a more helpful description of the line-too-long error, and delete this message after.]

Line too long (%s/%s) Used when a line is longer than a given number of characters.

### C0327: mixed-line-endings {#C0327}

[Make the following into a more helpful description of the mixed-line-endings error, and delete this message after.]

Mixed line endings LF and CRLF Used when there are mixed (LF and CRLF) newline signs in a file.

### C0321: multiple-statements {#C0321}

[Make the following into a more helpful description of the multiple-statements error, and delete this message after.]

More than one statement on a single line Used when more than on statement are found on the same line.

### C0302: too-many-lines {#C0302}

[Make the following into a more helpful description of the too-many-lines error, and delete this message after.]

Too many lines in module (%s/%s) Used when a module has too much lines, reducing its readability.

### C0303: trailing-whitespace {#C0303}

[Make the following into a more helpful description of the trailing-whitespace error, and delete this message after.]

Trailing whitespace Used when there is whitespace between the end of a line and the newline.

### C0328: unexpected-line-ending-format {#C0328}

[Make the following into a more helpful description of the unexpected-line-ending-format error, and delete this message after.]

Unexpected line ending format. There is ‘%s’ while it should be ‘%s’. Used when there is different newline than expected.

### C0325: superfluous-parens {#C0325}

[Make the following into a more helpful description of the superfluous-parens error, and delete this message after.]

Unnecessary parens after %r keyword Used when a single item in parentheses follows an if, for, or other keyword.

### C0330: bad-continuation {#C0330}

[Make the following into a more helpful description of the bad-continuation error, and delete this message after.]

Wrong %s indentation%s%s. TODO

### W0511: fixme {#W0511}

[Make the following into a more helpful description of the fixme error, and delete this message after.]

Used when a warning note as FIXME or XXX is detected.

### W0512: invalid-encoded-data {#W0512}

[Make the following into a more helpful description of the invalid-encoded-data error, and delete this message after.]

Cannot decode using encoding “%s”, unexpected byte at position %d Used when a source line cannot be decoded using the specified source file encoding. This message can’t be emitted when using Python >= 3.0.

### C0403: invalid-characters-in-docstring {#C0403}

[Make the following into a more helpful description of the invalid-characters-in-docstring error, and delete this message after.]

Invalid characters %r in a docstring Used when a word in docstring cannot be checked by enchant.

### C0401: wrong-spelling-in-comment {#C0401}

[Make the following into a more helpful description of the wrong-spelling-in-comment error, and delete this message after.]

Wrong spelling of a word ‘%s’ in a comment: Used when a word in comment is not spelled correctly.

### C0402: wrong-spelling-in-docstring {#C0402}

[Make the following into a more helpful description of the wrong-spelling-in-docstring error, and delete this message after.]

Wrong spelling of a word ‘%s’ in a docstring: Used when a word in docstring is not spelled correctly.

### E1603: unpacking-in-except {#E1603}

[Make the following into a more helpful description of the unpacking-in-except error, and delete this message after.]

Implicit unpacking of exceptions is not supported in Python 3 Python3 will not allow implicit unpacking of exceptions in except clauses. See http://www.python.org/dev/peps/pep-3110/ This message can’t be emitted when using Python >= 3.0.

### E1609: import-star-module-level {#E1609}

[Make the following into a more helpful description of the import-star-module-level error, and delete this message after.]

Import * only allowed at module level Used when the import star syntax is used somewhere else than the module level. This message can’t be emitted when using Python >= 3.0.

### E1602: parameter-unpacking {#E1602}

[Make the following into a more helpful description of the parameter-unpacking error, and delete this message after.]

Parameter unpacking specified Used when parameter unpacking is specified for a function(Python 3 doesn’t allow it) This message can’t be emitted when using Python >= 3.0.

### E1606: long-suffix {#E1606}

[Make the following into a more helpful description of the long-suffix error, and delete this message after.]

Use of long suffix Used when “l” or “L” is used to mark a long integer. This will not work in Python 3, since int and long types have merged. This message can’t be emitted when using Python >= 3.0.

### E1608: old-octal-literal {#E1608}

[Make the following into a more helpful description of the old-octal-literal error, and delete this message after.]

Use of old octal literal Usen when encountering the old octal syntax, removed in Python 3. To use the new syntax, prepend 0o on the number. This message can’t be emitted when using Python >= 3.0.

### E1607: old-ne-operator {#E1607}

[Make the following into a more helpful description of the old-ne-operator error, and delete this message after.]

Use of the <> operator Used when the deprecated “<>” operator is used instead of ”!=”. This is removed in Python 3. This message can’t be emitted when using Python >= 3.0.

### E1605: backtick {#E1605}

[Make the following into a more helpful description of the backtick error, and delete this message after.]

Use of the \`\` operator Used when the deprecated “\`\`” (backtick) operator is used instead of the str() function. This message can’t be emitted when using Python >= 3.0.

### E1604: old-raise-syntax {#E1604}

[Make the following into a more helpful description of the old-raise-syntax error, and delete this message after.]

Use raise ErrorClass(args) instead of raise ErrorClass, args. Used when the alternate raise syntax ‘raise foo, bar’ is used instead of ‘raise foo(bar)’. This message can’t be emitted when using Python >= 3.0.

### E1601: print-statement {#E1601}

[Make the following into a more helpful description of the print-statement error, and delete this message after.]

print statement used Used when a print statement is used (print is a function in Python 3) This message can’t be emitted when using Python >= 3.0.

### W1623: metaclass-assignment {#W1623}

[Make the following into a more helpful description of the metaclass-assignment error, and delete this message after.]

Assigning to a class’s \_\_metaclass\_\_ attribute Used when a metaclass is specified by assigning to \_\_metaclass\_\_ (Python 3 specifies the metaclass as a class statement argument) This message can’t be emitted when using Python >= 3.0.

### W1622: next-method-called {#W1622}

[Make the following into a more helpful description of the next-method-called error, and delete this message after.]

Called a next() method on an object Used when an object’s next() method is called (Python 3 uses the next() built- in function) This message can’t be emitted when using Python >= 3.0.

### W1620: dict-iter-method {#W1620}

[Make the following into a more helpful description of the dict-iter-method error, and delete this message after.]

Calling a dict.iter*() method Used for calls to dict.iterkeys(), itervalues() or iteritems() (Python 3 lacks these methods) This message can’t be emitted when using Python >= 3.0.

### W1621: dict-view-method {#W1621}

[Make the following into a more helpful description of the dict-view-method error, and delete this message after.]

Calling a dict.view*() method Used for calls to dict.viewkeys(), viewvalues() or viewitems() (Python 3 lacks these methods) This message can’t be emitted when using Python >= 3.0.

### W1624: indexing-exception {#W1624}

[Make the following into a more helpful description of the indexing-exception error, and delete this message after.]

Indexing exceptions will not work on Python 3 Indexing exceptions will not work on Python 3. Use exception.args[index] instead. This message can’t be emitted when using Python >= 3.0.

### W1625: raising-string {#W1625}

[Make the following into a more helpful description of the raising-string error, and delete this message after.]

Raising a string exception Used when a string exception is raised. This will not work on Python 3. This message can’t be emitted when using Python >= 3.0.

### W1611: standarderror-builtin {#W1611}

[Make the following into a more helpful description of the standarderror-builtin error, and delete this message after.]

StandardError built-in referenced Used when the StandardError built-in function is referenced (missing from Python 3) This message can’t be emitted when using Python >= 3.0.

### W1640: using-cmp-argument {#W1640}

[Make the following into a more helpful description of the using-cmp-argument error, and delete this message after.]

Using the cmp argument for list.sort / sorted Using the cmp argument for list.sort or the sorted builtin should be avoided, since it was removed in Python 3. Using either key or functools.cmp\_to\_key should be preferred. This message can’t be emitted when using Python >= 3.0.

### W1630: cmp-method {#W1630}

[Make the following into a more helpful description of the cmp-method error, and delete this message after.]

\_\_cmp\_\_ method defined Used when a \_\_cmp\_\_ method is defined (method is not used by Python 3) This message can’t be emitted when using Python >= 3.0.

### W1614: coerce-method {#W1614}

[Make the following into a more helpful description of the coerce-method error, and delete this message after.]

\_\_coerce\_\_ method defined Used when a \_\_coerce\_\_ method is defined (method is not used by Python 3) This message can’t be emitted when using Python >= 3.0.

### W1615: delslice-method {#W1615}

[Make the following into a more helpful description of the delslice-method error, and delete this message after.]

\_\_delslice\_\_ method defined Used when a \_\_delslice\_\_ method is defined (method is not used by Python 3) This message can’t be emitted when using Python >= 3.0.

### W1616: getslice-method {#W1616}

[Make the following into a more helpful description of the getslice-method error, and delete this message after.]

\_\_getslice\_\_ method defined Used when a \_\_getslice\_\_ method is defined (method is not used by Python 3) This message can’t be emitted when using Python >= 3.0.

### W1628: hex-method {#W1628}

[Make the following into a more helpful description of the hex-method error, and delete this message after.]

\_\_hex\_\_ method defined Used when a \_\_hex\_\_ method is defined (method is not used by Python 3) This message can’t be emitted when using Python >= 3.0.

### W1629: nonzero-method {#W1629}

[Make the following into a more helpful description of the nonzero-method error, and delete this message after.]

\_\_nonzero\_\_ method defined Used when a \_\_nonzero\_\_ method is defined (method is not used by Python 3) This message can’t be emitted when using Python >= 3.0.

### W1627: oct-method {#W1627}

[Make the following into a more helpful description of the oct-method error, and delete this message after.]

\_\_oct\_\_ method defined Used when a \_\_oct\_\_ method is defined (method is not used by Python 3) This message can’t be emitted when using Python >= 3.0.

### W1617: setslice-method {#W1617}

[Make the following into a more helpful description of the setslice-method error, and delete this message after.]

\_\_setslice\_\_ method defined Used when a \_\_setslice\_\_ method is defined (method is not used by Python 3) This message can’t be emitted when using Python >= 3.0.

### W1601: apply-builtin {#W1601}

[Make the following into a more helpful description of the apply-builtin error, and delete this message after.]

apply built-in referenced Used when the apply built-in function is referenced (missing from Python 3) This message can’t be emitted when using Python >= 3.0.

### W1602: basestring-builtin {#W1602}

[Make the following into a more helpful description of the basestring-builtin error, and delete this message after.]

basestring built-in referenced Used when the basestring built-in function is referenced (missing from Python 3) This message can’t be emitted when using Python >= 3.0.

### W1603: buffer-builtin {#W1603}

[Make the following into a more helpful description of the buffer-builtin error, and delete this message after.]

buffer built-in referenced Used when the buffer built-in function is referenced (missing from Python 3) This message can’t be emitted when using Python >= 3.0.

### W1604: cmp-builtin {#W1604}

[Make the following into a more helpful description of the cmp-builtin error, and delete this message after.]

cmp built-in referenced Used when the cmp built-in function is referenced (missing from Python 3) This message can’t be emitted when using Python >= 3.0.

### W1605: coerce-builtin {#W1605}

[Make the following into a more helpful description of the coerce-builtin error, and delete this message after.]

coerce built-in referenced Used when the coerce built-in function is referenced (missing from Python 3) This message can’t be emitted when using Python >= 3.0.

### W1619: old-division {#W1619}

[Make the following into a more helpful description of the old-division error, and delete this message after.]

division w/o \_\_future\_\_ statement Used for non-floor division w/o a float literal or from \_\_future\_\_ import division (Python 3 returns a float for int division unconditionally) This message can’t be emitted when using Python >= 3.0.

### W1606: execfile-builtin {#W1606}

[Make the following into a more helpful description of the execfile-builtin error, and delete this message after.]

execfile built-in referenced Used when the execfile built-in function is referenced (missing from Python 3) This message can’t be emitted when using Python >= 3.0.

### W1607: file-builtin {#W1607}

[Make the following into a more helpful description of the file-builtin error, and delete this message after.]

file built-in referenced Used when the file built-in function is referenced (missing from Python 3) This message can’t be emitted when using Python >= 3.0.

### W1639: filter-builtin-not-iterating {#W1639}

[Make the following into a more helpful description of the filter-builtin-not-iterating error, and delete this message after.]

filter built-in referenced when not iterating Used when the filter built-in is referenced in a non-iterating context (returns an iterator in Python 3) This message can’t be emitted when using Python >= 3.0.

### W1618: no-absolute-import {#W1618}

[Make the following into a more helpful description of the no-absolute-import error, and delete this message after.]

import missing \`from \_\_future\_\_ import absolute\_import\` Used when an import is not accompanied by from \_\_future\_\_ import absolute\_import (default behaviour in Python 3) This message can’t be emitted when using Python >= 3.0.

### W1632: input-builtin {#W1632}

[Make the following into a more helpful description of the input-builtin error, and delete this message after.]

input built-in referenced Used when the input built-in is referenced (backwards-incompatible semantics in Python 3) This message can’t be emitted when using Python >= 3.0.

### W1634: intern-builtin {#W1634}

[Make the following into a more helpful description of the intern-builtin error, and delete this message after.]

intern built-in referenced Used when the intern built-in is referenced (Moved to sys.intern in Python 3) This message can’t be emitted when using Python >= 3.0.

### W1608: long-builtin {#W1608}

[Make the following into a more helpful description of the long-builtin error, and delete this message after.]

long built-in referenced Used when the long built-in function is referenced (missing from Python 3) This message can’t be emitted when using Python >= 3.0.

### W1636: map-builtin-not-iterating {#W1636}

[Make the following into a more helpful description of the map-builtin-not-iterating error, and delete this message after.]

map built-in referenced when not iterating Used when the map built-in is referenced in a non-iterating context (returns an iterator in Python 3) This message can’t be emitted when using Python >= 3.0.

### W1638: range-builtin-not-iterating {#W1638}

[Make the following into a more helpful description of the range-builtin-not-iterating error, and delete this message after.]

range built-in referenced when not iterating Used when the range built-in is referenced in a non-iterating context (returns an iterator in Python 3) This message can’t be emitted when using Python >= 3.0.

### W1609: raw_input-builtin {#W1609}

[Make the following into a more helpful description of the raw_input-builtin error, and delete this message after.]

raw\_input built-in referenced Used when the raw\_input built-in function is referenced (missing from Python 3) This message can’t be emitted when using Python >= 3.0.

### W1610: reduce-builtin {#W1610}

[Make the following into a more helpful description of the reduce-builtin error, and delete this message after.]

reduce built-in referenced Used when the reduce built-in function is referenced (missing from Python 3) This message can’t be emitted when using Python >= 3.0.

### W1626: reload-builtin {#W1626}

[Make the following into a more helpful description of the reload-builtin error, and delete this message after.]

reload built-in referenced Used when the reload built-in function is referenced (missing from Python 3). You can use instead imp.reload or importlib.reload. This message can’t be emitted when using Python >= 3.0.

### W1633: round-builtin {#W1633}

[Make the following into a more helpful description of the round-builtin error, and delete this message after.]

round built-in referenced Used when the round built-in is referenced (backwards-incompatible semantics in Python 3) This message can’t be emitted when using Python >= 3.0.

### W1635: unichr-builtin {#W1635}

[Make the following into a more helpful description of the unichr-builtin error, and delete this message after.]

unichr built-in referenced Used when the unichr built-in is referenced (Use chr in Python 3) This message can’t be emitted when using Python >= 3.0.

### W1612: unicode-builtin {#W1612}

[Make the following into a more helpful description of the unicode-builtin error, and delete this message after.]

unicode built-in referenced Used when the unicode built-in function is referenced (missing from Python 3) This message can’t be emitted when using Python >= 3.0.

### W1613: xrange-builtin {#W1613}

[Make the following into a more helpful description of the xrange-builtin error, and delete this message after.]

xrange built-in referenced Used when the xrange built-in function is referenced (missing from Python 3) This message can’t be emitted when using Python >= 3.0.

### W1637: zip-builtin-not-iterating {#W1637}

[Make the following into a more helpful description of the zip-builtin-not-iterating error, and delete this message after.]

zip built-in referenced when not iterating Used when the zip built-in is referenced in a non-iterating context (returns an iterator in Python 3) This message can’t be emitted when using Python >= 3.0.

### E1201: logging-format-truncated {#E1201}

[Make the following into a more helpful description of the logging-format-truncated error, and delete this message after.]

Logging format string ends in middle of conversion specifier Used when a logging statement format string terminates before the end of a conversion specifier.

### E1206: logging-too-few-args {#E1206}

[Make the following into a more helpful description of the logging-too-few-args error, and delete this message after.]

Not enough arguments for logging format string Used when a logging format string is given too many arguments

### E1205: logging-too-many-args {#E1205}

[Make the following into a more helpful description of the logging-too-many-args error, and delete this message after.]

Too many arguments for logging format string Used when a logging format string is given too few arguments.

### E1200: logging-unsupported-format {#E1200}

[Make the following into a more helpful description of the logging-unsupported-format error, and delete this message after.]

Unsupported logging format character %r (%#02x) at index %d Used when an unsupported format character is used in a logging statement format string.

### W1201: logging-not-lazy {#W1201}

[Make the following into a more helpful description of the logging-not-lazy error, and delete this message after.]

Specify string format arguments as logging function parameters Used when a logging statement has a call form of “logging.<logging method>(format\_string % (format\_args...))”. Such calls should leave string interpolation to the logging method itself and be written “logging.<logging method>(format\_string, format\_args...)” so that the program may avoid incurring the cost of the interpolation in those cases in which no message will be logged. For more, see http://www.python.org/dev/peps/pep-0282/.

### W1202: logging-format-interpolation {#W1202}

[Make the following into a more helpful description of the logging-format-interpolation error, and delete this message after.]

Use % formatting in logging functions and pass the % parameters as arguments Used when a logging statement has a call form of “logging.<logging method>(format\_string.format(format\_args...))”. Such calls should use % formatting instead, but leave interpolation to the logging function by passing the parameters as arguments.

### E1130: invalid-unary-operand-type {#E1130}

[Make the following into a more helpful description of the invalid-unary-operand-type error, and delete this message after.]

Emitted when an unary operand is used on an object which does not support this type of operation

### E1131: unsupported-binary-operation {#E1131}

[Make the following into a more helpful description of the unsupported-binary-operation error, and delete this message after.]

Emitted when a binary arithmetic operation between two operands is not supported.

### E1101: no-member {#E1101}

[Make the following into a more helpful description of the no-member error, and delete this message after.]

%s %r has no %r member Used when a variable is accessed for an unexistent member.

### E1102: not-callable {#E1102}

[Make the following into a more helpful description of the not-callable error, and delete this message after.]

%s is not callable Used when an object being called has been inferred to a non callable object

### E1124: redundant-keyword-arg {#E1124}

[Make the following into a more helpful description of the redundant-keyword-arg error, and delete this message after.]

Argument %r passed by position and keyword in %s call Used when a function call would result in assigning multiple values to a function parameter, one value from a positional argument and one from a keyword argument.

### E1111: assignment-from-no-return {#E1111}

[Make the following into a more helpful description of the assignment-from-no-return error, and delete this message after.]

Assigning to function call which doesn’t return Used when an assignment is done on a function call but the inferred function doesn’t return anything.

### E1128: assignment-from-none {#E1128}

[Make the following into a more helpful description of the assignment-from-none error, and delete this message after.]

Assigning to function call which only returns None Used when an assignment is done on a function call but the inferred function returns nothing but None.

### E1129: not-context-manager {#E1129}

[Make the following into a more helpful description of the not-context-manager error, and delete this message after.]

Context manager ‘%s’ doesn’t implement \_\_enter\_\_ and \_\_exit\_\_. Used when an instance in a with statement doesn’t implement the context manager protocol(\_\_enter\_\_/\_\_exit\_\_).

### E1132: repeated-keyword {#E1132}

[Make the following into a more helpful description of the repeated-keyword error, and delete this message after.]

Got multiple values for keyword argument %r in function call Emitted when a function call got multiple values for a keyword.

### E1125: missing-kwoa {#E1125}

[Make the following into a more helpful description of the missing-kwoa error, and delete this message after.]

Missing mandatory keyword argument %r in %s call Used when a function call does not pass a mandatory keyword-only argument. This message can’t be emitted when using Python < 3.0.

### E1120: no-value-for-parameter {#E1120}

[Make the following into a more helpful description of the no-value-for-parameter error, and delete this message after.]

No value for argument %s in %s call Used when a function call passes too few arguments.

### E1126: invalid-sequence-index {#E1126}

[Make the following into a more helpful description of the invalid-sequence-index error, and delete this message after.]

Sequence index is not an int, slice, or instance with \_\_index\_\_ Used when a sequence type is indexed with an invalid type. Valid types are ints, slices, and objects with an \_\_index\_\_ method.

### E1127: invalid-slice-index {#E1127}

[Make the following into a more helpful description of the invalid-slice-index error, and delete this message after.]

Slice index is not an int, None, or instance with \_\_index\_\_ Used when a slice index is not an integer, None, or an object with an \_\_index\_\_ method.

### E1121: too-many-function-args {#E1121}

[Make the following into a more helpful description of the too-many-function-args error, and delete this message after.]

Too many positional arguments for %s call Used when a function call passes too many positional arguments.

### E1123: unexpected-keyword-arg {#E1123}

[Make the following into a more helpful description of the unexpected-keyword-arg error, and delete this message after.]

Unexpected keyword argument %r in %s call Used when a function call passes a keyword argument that doesn’t correspond to one of the function’s parameter names.

### E1135: unsupported-membership-test {#E1135}

[Make the following into a more helpful description of the unsupported-membership-test error, and delete this message after.]

Value ‘%s’ doesn’t support membership test Emitted when an instance in membership test expression doesn’timplement membership protocol (\_\_contains\_\_/\_\_iter\_\_/\_\_getitem\_\_)

### E1136: unsubscriptable-object {#E1136}

[Make the following into a more helpful description of the unsubscriptable-object error, and delete this message after.]

Value ‘%s’ is unsubscriptable Emitted when a subscripted value doesn’t support subscription(i.e. doesn’t define \_\_getitem\_\_ method)

### E0203: access-member-before-definition {#E0203}

[Make the following into a more helpful description of the access-member-before-definition error, and delete this message after.]

Access to member %r before its definition line %s Used when an instance member is accessed before it’s actually assigned.

### E0202: method-hidden {#E0202}

[Make the following into a more helpful description of the method-hidden error, and delete this message after.]

An attribute defined in %s line %s hides this method Used when a class defines a method which is hidden by an instance attribute from an ancestor class or set by some client code.

### E0237: assigning-non-slot {#E0237}

[Make the following into a more helpful description of the assigning-non-slot error, and delete this message after.]

Assigning to attribute %r not defined in class slots Used when assigning to an attribute not defined in the class slots.

### E0241: duplicate-bases {#E0241}

[Make the following into a more helpful description of the duplicate-bases error, and delete this message after.]

Duplicate bases for class %r Used when a class has duplicate bases.

### E0240: inconsistent-mro {#E0240}

[Make the following into a more helpful description of the inconsistent-mro error, and delete this message after.]

Inconsistent method resolution order for class %r Used when a class has an inconsistent method resolutin order.

### E0239: inherit-non-class {#E0239}

[Make the following into a more helpful description of the inherit-non-class error, and delete this message after.]

Inheriting %r, which is not a class. Used when a class inherits from something which is not a class.

### E0238: invalid-slots {#E0238}

[Make the following into a more helpful description of the invalid-slots error, and delete this message after.]

Invalid \_\_slots\_\_ object Used when an invalid \_\_slots\_\_ is found in class. Only a string, an iterable or a sequence is permitted.

### E0236: invalid-slots-object {#E0236}

[Make the following into a more helpful description of the invalid-slots-object error, and delete this message after.]

Invalid object %r in \_\_slots\_\_, must contain only non empty strings Used when an invalid (non-string) object occurs in \_\_slots\_\_.

### E0211: no-method-argument {#E0211}

[Make the following into a more helpful description of the no-method-argument error, and delete this message after.]

Method has no argument Used when a method which should have the bound instance as first argument has no argument defined.

### E0213: no-self-argument {#E0213}

[Make the following into a more helpful description of the no-self-argument error, and delete this message after.]

Method should have “self” as first argument Used when a method has an attribute different the “self” as first argument. This is considered as an error since this is a so common convention that you shouldn’t break it!

### E0302: unexpected-special-method-signature {#E0302}

[Make the following into a more helpful description of the unexpected-special-method-signature error, and delete this message after.]

The special method %r expects %s param(s), %d %s given Emitted when a special method was defined with an invalid number of parameters. If it has too few or too many, it might not work at all.

### E0301: non-iterator-returned {#E0301}

[Make the following into a more helpful description of the non-iterator-returned error, and delete this message after.]

\_\_iter\_\_ returns non-iterator Used when an \_\_iter\_\_ method returns something which is not an iterable (i.e. has no next method)

### W0212: protected-access {#W0212}

[Make the following into a more helpful description of the protected-access error, and delete this message after.]

Access to a protected member %s of a client class Used when a protected member (i.e. class member with a name beginning with an underscore) is access outside the class or a descendant of the class where it’s defined.

### W0221: arguments-differ {#W0221}

[Make the following into a more helpful description of the arguments-differ error, and delete this message after.]

Arguments number differs from %s %r method Used when a method has a different number of arguments than in the implemented interface or in an overridden method.

### W0201: attribute-defined-outside-init {#W0201}

[Make the following into a more helpful description of the attribute-defined-outside-init error, and delete this message after.]

Attribute %r defined outside \_\_init\_\_ Used when an instance attribute is defined outside the \_\_init\_\_ method.

### W0232: no-init {#W0232}

[Make the following into a more helpful description of the no-init error, and delete this message after.]

Class has no \_\_init\_\_ method Used when a class has no \_\_init\_\_ method, neither its parent classes.

### W0223: abstract-method {#W0223}

[Make the following into a more helpful description of the abstract-method error, and delete this message after.]

Method %r is abstract in class %r but is not overridden Used when an abstract method (i.e. raise NotImplementedError) is not overridden in concrete class.

### W0222: signature-differs {#W0222}

[Make the following into a more helpful description of the signature-differs error, and delete this message after.]

Signature differs from %s %r method Used when a method signature is different than in the implemented interface or in an overridden method.

### W0211: bad-staticmethod-argument {#W0211}

[Make the following into a more helpful description of the bad-staticmethod-argument error, and delete this message after.]

Static method with %r as first argument Used when a static method has “self” or a value specified in valid- classmethod-first-arg option or valid-metaclass-classmethod-first-arg option as first argument.

### W0233: non-parent-init-called {#W0233}

[Make the following into a more helpful description of the non-parent-init-called error, and delete this message after.]

\_\_init\_\_ method from a non direct base class %r is called Used when an \_\_init\_\_ method is called on a class which is not in the direct ancestors for the analysed class.

### W0231: super-init-not-called {#W0231}

[Make the following into a more helpful description of the super-init-not-called error, and delete this message after.]

\_\_init\_\_ method from base class %r is not called Used when an ancestor class method has an \_\_init\_\_ method which is not called by a derived class.

### R0202: no-classmethod-decorator {#R0202}

[Make the following into a more helpful description of the no-classmethod-decorator error, and delete this message after.]

Consider using a decorator instead of calling classmethod Used when a class method is defined without using the decorator syntax.

### R0203: no-staticmethod-decorator {#R0203}

[Make the following into a more helpful description of the no-staticmethod-decorator error, and delete this message after.]

Consider using a decorator instead of calling staticmethod Used when a static method is defined without using the decorator syntax.

### R0201: no-self-use {#R0201}

[Make the following into a more helpful description of the no-self-use error, and delete this message after.]

Method could be a function Used when a method doesn’t use its bound instance, and so could be written as a function.

### C0202: bad-classmethod-argument {#C0202}

[Make the following into a more helpful description of the bad-classmethod-argument error, and delete this message after.]

Class method %s should have %s as first argument Used when a class method has a first argument named differently than the value specified in valid-classmethod-first-arg option (default to “cls”), recommended to easily differentiate them from regular instance methods.

### C0204: bad-mcs-classmethod-argument {#C0204}

[Make the following into a more helpful description of the bad-mcs-classmethod-argument error, and delete this message after.]

Metaclass class method %s should have %s as first argument Used when a metaclass class method has a first argument named differently than the value specified in valid-metaclass-classmethod-first-arg option (default to “mcs”), recommended to easily differentiate them from regular instance methods.

### C0203: bad-mcs-method-argument {#C0203}

[Make the following into a more helpful description of the bad-mcs-method-argument error, and delete this message after.]

Metaclass method %s should have %s as first argument Used when a metaclass method has a first agument named differently than the value specified in valid-classmethod-first-arg option (default to “cls”), recommended to easily differentiate them from regular instance methods.

### F0202: method-check-failed {#F0202}

[Make the following into a more helpful description of the method-check-failed error, and delete this message after.]

Unable to check methods signature (%s / %s) Used when Pylint has been unable to check methods signature compatibility for an unexpected reason. Please report this kind if you don’t make sense of it.

### W1402: anomalous-unicode-escape-in-string {#W1402}

[Make the following into a more helpful description of the anomalous-unicode-escape-in-string error, and delete this message after.]

Anomalous Unicode escape in byte string: ‘%s’. String constant might be missing an r or u prefix. Used when an escape like u is encountered in a byte string where it has no effect.

### W1401: anomalous-backslash-in-string {#W1401}

[Make the following into a more helpful description of the anomalous-backslash-in-string error, and delete this message after.]

Anomalous backslash in string: ‘%s’. String constant might be missing an r prefix. Used when a backslash is in a literal string but not as an escape.

### E0701: bad-except-order {#E0701}

[Make the following into a more helpful description of the bad-except-order error, and delete this message after.]

Bad except clauses order (%s) Used when except clauses are not in the correct order (from the more specific to the more generic). If you don’t fix the order, some exceptions may not be catched by the most specific handler.

### E0712: catching-non-exception {#E0712}

[Make the following into a more helpful description of the catching-non-exception error, and delete this message after.]

Catching an exception which doesn’t inherit from BaseException: %s Used when a class which doesn’t inherit from BaseException is used as an exception in an except clause.

### E0703: bad-exception-context {#E0703}

[Make the following into a more helpful description of the bad-exception-context error, and delete this message after.]

Exception context set to something which is not an exception, nor None Used when using the syntax “raise ... from ...”, where the exception context is not an exception, nor None. This message can’t be emitted when using Python < 3.0.

### E0711: notimplemented-raised {#E0711}

[Make the following into a more helpful description of the notimplemented-raised error, and delete this message after.]

NotImplemented raised - should raise NotImplementedError Used when NotImplemented is raised instead of NotImplementedError

### E0702: raising-bad-type {#E0702}

[Make the following into a more helpful description of the raising-bad-type error, and delete this message after.]

Raising %s while only classes or instances are allowed Used when something which is neither a class, an instance or a string is raised (i.e. a TypeError will be raised).

### E0710: raising-non-exception {#E0710}

[Make the following into a more helpful description of the raising-non-exception error, and delete this message after.]

Raising a new style class which doesn’t inherit from BaseException Used when a new style class which doesn’t inherit from BaseException is raised.

### E0704: misplaced-bare-raise {#E0704}

[Make the following into a more helpful description of the misplaced-bare-raise error, and delete this message after.]

The raise statement is not inside an except clause Used when a bare raise is not used inside an except clause. This generates an error, since there are no active exceptions to be reraised. An exception to this rule is represented by a bare raise inside a finally clause, which might work, as long as an exception is raised inside the try block, but it is nevertheless a code smell that must not be relied upon.

### W0705: duplicate-except {#W0705}

[Make the following into a more helpful description of the duplicate-except error, and delete this message after.]

Catching previously caught exception type %s Used when an except catches a type that was already caught by a previous handler.

### W0703: broad-except {#W0703}

[Make the following into a more helpful description of the broad-except error, and delete this message after.]

Catching too general exception %s Used when an except catches a too general exception, possibly burying unrelated errors.

### W0710: nonstandard-exception {#W0710}

[Make the following into a more helpful description of the nonstandard-exception error, and delete this message after.]

Exception doesn’t inherit from standard “Exception” class Used when a custom exception class is raised but doesn’t inherit from the builtin “Exception” class. This message can’t be emitted when using Python >= 3.0.

### W0711: binary-op-exception {#W0711}

[Make the following into a more helpful description of the binary-op-exception error, and delete this message after.]

Exception to catch is the result of a binary “%s” operation Used when the exception to catch is of the form “except A or B:”. If intending to catch multiple, rewrite as “except (A, B):”

### W0702: bare-except {#W0702}

[Make the following into a more helpful description of the bare-except error, and delete this message after.]

No exception type(s) specified Used when an except clause doesn’t specify exceptions type to catch.

### E1701: not-async-context-manager {#E1701}

[Make the following into a more helpful description of the not-async-context-manager error, and delete this message after.]

Async context manager ‘%s’ doesn’t implement \_\_aenter\_\_ and \_\_aexit\_\_. Used when an async context manager is used with an object that does not implement the async context management protocol. This message can’t be emitted when using Python < 3.5.

### E1700: yield-inside-async-function {#E1700}

[Make the following into a more helpful description of the yield-inside-async-function error, and delete this message after.]

Yield inside async function Used when an yield or yield from statement is found inside an async function. This message can’t be emitted when using Python < 3.5.









## Custom errors {#custom}

### E9999: Forbidden imports {#E9999}

For your work in CSC148, we expect you to use only the Python language
features we have covered in lectures, or ones that we have explicitly
mentioned for an exercise/lab/assignment. If you are getting this error,
please check your code carefully.

```python
import copy   # Error on this line

x = [1, 2, 3]
y = copy.copy(x)
```
