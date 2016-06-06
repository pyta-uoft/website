% PyTA Help Documentation

This is some welcome text.

## Pylint errors {#pylint}

### R0101: Too many nested blocks {#R0101}

This error occurs when you have more than three nested blocks in your code.
This type of nesting is a sign that your function is too complex,
and should be broken down using helper functions.

Note: the nested block doesn't doesn't include function or class definition
as a block, so the example below is considered to have *four* nested blocks,
not five.

Note: we set a limit of three nested if blocks.

~~~~ {include="R0101_too_many_nested_blocks"}
~~~~


### R0102: Simplifiable if statement {#R0102}

This error occurs when you have an if statement that can be simplified
simply by using the value of the condition, rather than putting in extra
`True` and `False` literals.

~~~~ {include="R0102_simplifiable_if_statement"}
~~~~

The above example can be simplified to:

```python
def is_even(num):
    """Return whether <num> is even or odd."""
    return num % 2 == 0
```

### E1101: no-member {#E1101}

This error occurs when you access an object(variable, function...) for a non-exist
member. To be specific, you should not call a variable or function which is not
defined.

~~~~ {include="E1101_no_member"}
~~~~


### E1102: not-callable {#E1102}

This error occurs when you call an object which has not been inferred to a
callable object. In the following example, we should not call x() because x is
a variable which is not callable.

~~~~ {include="E1102_not_callable"}
~~~~


### E1111: assignment-from-no-return {#E1111}

This error occurs when you assign to a function call with the inferred function
does not return an object. This error is similar to E1128. In the following example,
f() does not return anything. As a result, x has no value if we assign x f().

~~~~ {include="E1111_assignment_from_no_return"}
~~~~


### E1120: no-value-for-parameter {#E1120}

We expect you to pass values for each argument (one for each) in a function.
In the following example, there should be three values passed to the function
instead of two.

~~~~ {include="E1120_no_value_for_parameter"}
~~~~

Corrected version
```python
get_sum(1, 2, 3)
```


### E1121: too-many-function-args {#E1121}

This error indicates you should pass values for each argument (one for each) in a
function. It is just the opposite to E1121. In the following example, more
values are passed to the function.

~~~~ {include="E1121_too_many_function_args"}
~~~~

Corrected version
```python
get_sum(1, 2)
```


### E1126: invalid-sequence-index {#E1126}

This error occurs when a sequence indexed with an invalid type. For example,
inside a list, you should always use the index with type integer.

~~~~ {include="E1126_invalid_sequence_index"}
~~~~

Corrected version

```python
a = ['p', 'y', 'T', 'A']
print(a[0])      # Error on this line
```


### E1127: invalid-slice-index {#E1127}

This error occurs when you use a slice index with wrong types. For example,
inside a list, whenever you want to get slices of this list, you should use the
indexs which are integers to indicate where to start and stop.

~~~~ {include="E1127_invalid_slice_index"}
~~~~

Corrected version

```python
a = ['p', 'y', 'T', 'A']
print(a[0:3])
```


### E1128: assignment-from-none {#E1128}

This error occurs when an assignment is done on a function call but the inferred
function returns nothing but None. This error is similar to E1111. In the
following example, f() return None. As a result, x has no value if we assign
x f().

~~~~ {include="E1128_assignment_from_none"}
~~~~


### E1130: invalid-unary-operand-type {#E1130}

This error occurs when the unary operand on the objects does not support this
type of operation. For example, we should never add string to integer.

~~~~ {include="E1130_invalid_unary_operand_type"}
~~~~


### E1131: unsupported-binary-operation {#E1131}

This error occurs when two operands do not support binary arithmetic operation.
For example, a dictionary could not be added to a list.

~~~~ {include="E1131_unsupported_binary_operation"}
~~~~


### E1135: unsupported-membership-test {#E1135}

This error occurs when you use an instance in membership test expression which
implement membership protocol. This error may be similar to E1101.
For example, if you want to check if a specific instance is inside another
object, please make sure the object has this kind of membership.

~~~~ {include="E1135_unsupported_membership_test"}
~~~~


### E1136: unsubscriptable-object {#E1136}

This error occurs when you subscript value which does not support subscription.
In the following example, b[0] could not work on 5.

~~~~ {include="E1136_unsubscriptable_object"}
~~~~


### E1305: too-many-format-args {#E1305}

This error occurs when you do not use one argument for a {} for format string.
This error is similar to E1121, meanwhile opposite to E1306.
In the following example, we give more values than the number of {}.

~~~~ {include="E1305_too_many_format_args"}
~~~~

Corrected version

```python
name = "Amy"
age = "17"
country = "England"

s = "{} who is {} lives in {}".format(name, age, country)
```


### E1306: too-few-format-args {#E1306}

This error occurs when you do not use one argument for a {} for format string.
This error is similar to E1120, meanwhile opposite to E1305.
In the following example, we give fewer values than the number of {}.

~~~~ {include="E1306_too_few_format_args"}
~~~~

Corrected version

```python
s = "{} and {}".format("first", "second")
```


### E1310: bad-str-strip-call {#E1310}

This error occurs when a constant string contains duplicate characters.

~~~~ {include="E1310_bad_str_strip_call"}
~~~~


### W1303: missing-format-argument-key {#W1303}

This error occurs when a format string that uses named fields does not
receive required keywords. This error is similar to E1120 and E1306. In the
following example, we should assign three values for bond, james and act.

~~~~ {include="W1303_missing_format_argument_key"}
~~~~


### W1305: format-combined-specification {#W1305}

This error occurs when a format string contains both automatic field numbering
(e.g. ‘{}’) and manual field specification (e.g. ‘{0}’).
For example, we should not use {} and {index} at the same time.

~~~~ {include="W1305_format_combined_specification"}
~~~~

Corrected version

```python
s = "{} and {}".format("a", "b")
```
or

```python
s = "{0} and {1}".format("a", "b")
```


### W1401: anomalous-backslash-in-string {#W1401}

This error occurs when a backslash is in a literal string but not as an escape.

~~~~ {include="W1401_anomalous_backslash_in_string"}
~~~~


### R0204: Redefined variable type {#R0204}

This error occurs when the type of a variable changes inside a method or a
function. See the examples below.

~~~~ {include="R0204_redefined_variable_type"}
~~~~


### E0401: Import error {#E0401}

The module is unable to be imported. Check the spelling of the module name, or
whether the module is in the correct directory.

~~~~ {include="E0401_import_error"}
~~~~

There are other forms of import statements that may cause this error, for
example:

```python
import missing_module as foo  # this module does not exist.
```


### W0406: Import self {#W0406}

A module should not import itself. So for example, if the module is named
`W0406_import_self` you cannot import it as follows:

~~~~ {include="W0406_import_self"}
~~~~


### W0404: Reimported {#W0404}

A module should not be imported more than once.

~~~~ {include="W0404_reimported"}
~~~~


### W0401: Wildcard import {#W0401}

Only import what you need. Wildcard imports (shown below) are generally
discouraged because they add all the functions from the imported module into the
global namespace. Problems can occur when identical names conflict.

~~~~ {include="W0401_wildcard_import"}
~~~~

Rather than importing everything with wildcard '*', try importing specific
functions for example:

```python
from module_name import certain_definition
```

Or, if you need to import many functions, import them the following way, to
keep them separated in the namespace by module name. Then you can use the
function like, module_name.function_name

```python
import module_name
```

Or, you can create an alias for module names in the way below. Which can be
used like: dino.function_name

```python
import tyrannosaurus_rex as dino
```


### C0411: Wrong import order {#C0411}

Used when PEP8 import order is not respected (do the standard imports first,
then third-party libraries, then local imports)

~~~~ {include="C0411_wrong_import_order"}
~~~~


### C0413: Wrong import position {#C0413}

Imports should be placed at the top of the module above any other code
(below the docstring).

~~~~ {include="C0413_wrong_import_position"}
~~~~


### C0412: Ungrouped imports {#C0412}

Imports should be grouped by packages.

~~~~ {include="C0412_ungrouped_imports"}
~~~~

Logically group the imports by same package name:

```python
from sys import byteorder  # same packages should be grouped
from sys import stdin  # same packages should be grouped
from math import floor
```


### C0410: Multiple imports {#C0410}

Don't import multiple modules on one line.

~~~~ {include="C0410_multiple_imports"}
~~~~

Do this instead:

```python
import sys
import math
```

Although, note that you can import multiple functions on a line, when they are
from the same module, for example:

```python
from sys import byteorder, stdin
```


### W1503: Redundant unittest assert {#W1503}

The first argument of assertTrue and assertFalse is a "condition", which should
evaluate to True or False. If the condition is a constant value, then it is
considered to always be True, since it cannot be anything different.

The warning message looks like:
Redundant use of (assertTrue or assertFalse) with constant value <your-constant>

~~~~ {include="W1503_redundant_unittest_assert"}
~~~~


### R0913: Too many arguments {#R0913}

The function or method is defined with too many arguments.

Note: the limit is 5 arguments.

~~~~ {include="R0913_too_many_arguments"}
~~~~


### R0912: Too many branches {#R0912}

The function or method has too many branches, making it hard to follow.

Note: the limit is 12 branches.

~~~~ {include="R0912_too_many_branches"}
~~~~


### R0902: Too many instance attributes {#R0902}

The class has too many instance attributes, try to reduce this to get a
simpler (and easier to use) class.

Note: the limit is 7 instance attributes.

~~~~ {include="R0902_too_many_instance_attributes"}
~~~~

One solution is to logically decompose into more classes, each with fewer
instance attributes. Then we can use composition to access those attributes in
another class.

```python
class Edible(object):
    """Example with fewer instance attributes."""

    def __init__(self):
        """Below are the instance attributes:"""
        self.bread = "Sourdough"
        self.liquid = "Water"


class Ownership(object):
    """Example with fewer instance attributes."""

    def __init__(self):
        """Below are the instance attributes:"""
        self.animal = "Dog"
        self.clothing = "Shirt"


class Description(object):
    """Example with fewer instance attributes."""

    def __init__(self):
        """Below are the instance attributes:"""
        self.colour = "Black"
        self.shape = "Circle"
        self.direction = "Up"
        self.number = 3


class Composition(object):
    """Example showing composition of other classes into instance attributes."""

    def __init__(self):
        """Construct instance attributes. For example,
        self.ownership.animal is "Dog"
        """
        self.edible = Edible()
        self.ownership = Ownership()
        self.description = Description()
```


### R0914: Too many locals {#R0914}

The function or method has too many local variables.

Note: the limit is 15 local variables.

~~~~ {include="R0914_too_many_locals"}
~~~~


### R0915: Too many statements {#R0915}

The function or method has too many statements. You should then split it
in smaller functions / methods.

Note: comments do not count as statements

Note: the limit is 50 statements.

~~~~ {include="R0915_too_many_statements"}
~~~~


### C0111: Missing docstring {#C0111}

This is some helpful description of the C0111 error.


### C0102 Blacklisted name {#C0102}

This error occurs when a variable name is listed in the black list. The black
list includes names:

 - foo
 - bar
 - baz
 - toto
 - tutu
 - tata

Students are expected to use meaningful variable names.

~~~~ {include="C0102_blacklisted_name"}
~~~~


### C0103 Invalid Name {#C0103}

This error occurs when a name does not follow the format associated with to its type (constant, variable ...).

- Variable/Attribute/Method/Argument: All variable/attribute/method/argument names should be of the form: a lowercase letter followed by a lowercase letter or digit. The minimum number of characters should be 2 and the maximum should be 30.

- Constant: All constant names should be of the form: an uppercase letter followed by a uppercase letter or digit.

- Class: All class names should be of the form: an uppercase letter followed by a lowercase letter or uppercase letter or digit.

A special character accepted in all types of names is '_'.

~~~~ {include="C0103_invalid_name"}
~~~~


### C0111 Missing Docstring {#C0111}

This error occurs when a module, function, class or method has no docstring.
Some special methods like __init__ don't require a docstring. Students are
expected to write docstrings for every module, function, class and method.

~~~~ {include="C0111_missing_docstring"}
~~~~


### C0112 Empty Docstring {#C0112}

This error occurs when a module, function, class or method has an empty
docstring like,

```python
"""
"""
```

Students are expected to write complete docstrings for every module,
function, class and method.

~~~~ {include="C0112_empty_docstring"}
~~~~


### C0113 Unneeded not {#C0113}

This error occurs when a boolean expression contains an unneeded negation. If
you are getting this error, the expression can be simplified to not use a
negation.

~~~~ {include="C0113_unneeded_not"}
~~~~

The above can be modified to:

```python
def is_true():
    """
    @rtype: bool
    """
    temp = 5
    if temp <= 3:
        return False
    else:
        return True
```


### C0121 Singleton comparison {#C0121}

This is an error that occurs when an expression is compared to singleton values
like True, False or None.

~~~~ {include="C0121_singleton_comparison"}
~~~~

The above can be modified to:

```python
def is_true():
    """
    @rtype: bool
    """
    temp = 5
    if temp is None:
        return False
    else:
        return True
```


### C0123 Unidiomatic type check {#C0123}

This error occurs when type() is used instead of isinstance() for a type check.
Students are expected to use `isinstance(x, Y)` instead of `type(x) == Y`.

~~~~ {include="C0123_unidiomatic_typecheck"}
~~~~

The above can be modified to:

```python
def is_int(obj):
    """Check is the given object is of type 'int'.

    @type obj: object
    @rtype: bool
    """
    return isinstance(obj, int)
```


### E0101 Return in init {#E0101}

This error occurs when a return statement is used in the __init__ method.
Students should not use a return statement in the  __init__ method as it is not
directly called by your code. Instead, it is called by the code that
initializes objects at runtime.

~~~~ {include="E0101_return_in_init"}
~~~~


### E0102 Function redefined {#E0102}

This error occurs when a function, class or method is redefined. If you are
getting this error, you should make sure all the functions, methods and classes
you define have different names.

~~~~ {include="E0102_function_redefined"}
~~~~


### E0103 Not in loop {#E0103}

This error occurs when `break` and `continue` keywords are used outside loops.
The keyword `break` is used to exit a loop early and the keyword `continue` is
used to skip an iteration in a loop. Hence both the keywords only belong inside
loops.

~~~~ {include="E0103_not_in_loop"}
~~~~


### E0104 Return outside function {#E0104}

This error occurs when a `return` statement is found outside a function or
method. If you are getting this error, please check the indentation levels in
your code carefully.

~~~~ {include="E0104_return_outside_function"}
~~~~


### E0108 Duplicate argument name {E0108}

This error occurs if there are duplicate argument names in function
definitions. If you are getting this error, please make sure all the arguments
have distinct names.

~~~~ {include="E0108_duplicate_argument_name"}
~~~~


### W0101 Unreachable {#W0101}

This error occurs when there is some code behind a `return` or `raise`
statement. This code will never be run.

~~~~ {include="W0101_unreachable"}
~~~~


### W0102 Dangerous default value {#W0102}

This error occurs when a mutable value such as a list or dictionary is given a
default value in the function or method definition. It is dangerous to give
mutable objects a default value only when the function/method modifies the
argument. If you modify a default argument it will persist until the next call.
Hence your "empty" list or dictionary will start to contain values on calls
other than the first call.

~~~~ {include="W0102_dangerous_default_value"}
~~~~

Though the output to this is be expected to be:

```
[0, 1, 2, 3, 4]
[0, 1, 2, 3, 4]
```

The actual output is:

```
[0, 1, 2, 3, 4]
[0, 1, 2, 3, 4, 0, 1, 2, 3, 4]
```

If you want to avoid this situation then, you should use `None` as a default
value. Students should be careful when assigning a default value to mutable
objects.

### W0104 Pointless statement {#W0104}

This error occurs when a statement doesn't have any effect. This means that
when the code for a statement is run, nothing is executed. This may not be what was
intended.

~~~~ {include="W0104_pointless_statement"}
~~~~


### W0107 Unnecessary pass {#W0107}

This error occurs when a `pass` statement is used that can be avoided (or has
no effect). If you are able to remove the `pass` statement without changing the
effect of the program, then the statement is "unnecessary" and can be avoided.

~~~~ {include="W0107_unnecessary_pass"}
~~~~

In the above example, the `pass` statement is "unnecessary" as the program's
effect is not changed if `pass` is removed.


### W0109 Duplicate key {#W0109}

This error occurs when a dictionary expression binds the same key multiple
times.

~~~~ {include="W0109_duplicate_key"}
~~~~


### W0125 Using constant test {#W0125}

This error occurs when a conditional statement like an `if` statement uses a
constant value for its test. This is bad as the conditional statements using a
constant test always evaluate to the same value. In such a case, a conditional
statement should not be used.

~~~~ {include="W0125_using_constant_test"}
~~~~


### W0199 Assert on tuple {#W0199}

This error occurs when an "assert" statement is called like `assert (x, y)`.
`assert` acting on a tuple always returns true if the tuple is non-empty, and
false if it is empty. If you want to assert that two expressions are true then,
you should use `assert x, y` instead.

~~~~ {include="W0199_assert_on_tuple"}
~~~~


### E0601: Used before assignment {#E0601}

This error occurs when you are using a variable before its assignment.

~~~~ {include="E0601_used_before_assignment"}
~~~~


### E0602: Undefined variable {#E0602}

This error occurs when you are using a variable that has not been defined.

~~~~ {include="E0602_undefined_variable"}
~~~~


### E0611: No name in module {#E0611}

This error occurs when you are trying to access a variable from an imported
module, but that variable name could not be found in that referenced module.

~~~~ {include="E0611_no_name_in_module"}
~~~~


### E0632: Unbalanced tuple unpacking {E0632}

This error occurs when you have an unbalance unpacking assignment with a
sequence.

~~~~ {include="E0632_unbalanced_tuple_unpacking"}
~~~~


### E0633: Unpacking non sequence {E0633}

This error occurs when the unpacked result is not a sequence. For example,
if in an unpacking assignment, the unpacked result is None, then it is not
a sequence and will raise this error.

~~~~ {include="E0633_unpacking_non_sequence"}
~~~~


### W0611: Unused import {W0611}

This error occurs when you have a imported module that is unused in your code.

~~~~ {include="W0611_unused_import"}
~~~~


### W0612: Unused variable {W0612}

This error occurs when you have a defined variable that is never used.

~~~~ {include="W0612_unused_variable"}
~~~~


### W0613: Unused argument {W0613}

This error occurs when a function argument is never used in the function.

~~~~ {include="W0613_unused_argument"}
~~~~


### W0621: Redefined outer name {W0621}

This error occurs when you are trying to redefine a variable name that has
already been defined in the outer scope. For example, this error will occurs
when you have a local name identical to a global name. The local name takes
precedence. but it hides the global name, makes it no longer accessible.

~~~~ {include="W0621_redefined_outer_name"}
~~~~


### W0622: Redefined builtin {W0622}

This error occurs when you are trying to redefine/override a built-in function.

~~~~ {include="W0622_redefined_builtin"}
~~~~


### W0631: Undefined loop variable {W0631}

This error occurs when a loop variable is possibly used outside the loop that
is undefined.

~~~~ {include="W0631_undefined_loop_variable"}
~~~~


### E0601: Used before assignment {#E0601}

This error occurs when you are using a variable before its assignment.

~~~~ {include="E0601_used_before_assignment"}
~~~~


### E0602: Undefined variable {#E0602}

This error occurs when you are using a variable that has not been defined.

~~~~ {include="E0602_undefined_variable"}
~~~~


### E0611: No name in module {#E0611}

This error occurs when you are trying to access a variable from an imported
module, but that variable name could not be found in that referenced module.

~~~~ {include="E0611_no_name_in_module"}
~~~~


### E0632: Unbalanced tuple unpacking {E0632}

This error occurs when you have an unbalance unpacking assignment with a
sequence.

Note: Number of label(s) on the left side and number of value(s) on the right
side must always be the same in an unpacking assignment.

~~~~ {include="E0632_unbalanced_tuple_unpacking"}
~~~~


### E0633: Unpacking non sequence {E0633}

This error occurs when the unpacked result is not a sequence. For example,
if in an unpacking assignment, the unpacked result is None, then it is not
a sequence and will raise this error.

~~~~ {include="E0633_unpacking_non_sequence"}
~~~~


### W0611: Unused import {W0611}

This error occurs when you have a imported module that is unused in your code.

~~~~ {include="W0611_unused_import"}
~~~~


### W0612: Unused variable {W0612}

This error occurs when you have defined a variable that is never used.

~~~~ {include="W0612_unused_variable"}
~~~~


### W0613: Unused argument {W0613}

This error occurs when a function argument is never used in the function.

~~~~ {include="W0613_unused_argument"}
~~~~


### W0621: Redefined outer name {W0621}

This error occurs when you are trying to redefine a variable name that has
already been defined in the outer scope. For example, this error will occurs
when you have a local name identical to a global name. The local name takes
precedence. but it hides the global name, makes it no longer accessible.

~~~~ {include="W0621_redefined_outer_name"}
~~~~


### W0622: Redefined builtin {W0622}

This error occurs when you are trying to redefine/override a built-in function.

~~~~ {include="W0622_redefined_builtin"}
~~~~


### W0631: Undefined loop variable {W0631}

This error occurs when a loop variable is possibly used outside the loop that
is undefined.

~~~~ {include="W0631_undefined_loop_variable"}
~~~~


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


### E9998: Forbidden IO function {#E9998}

We do not expect to see I/O functions(input, open and print) in your code in
this course. If you are getting this error, please check your code carefully.

~~~~ {include="E9998_forbidden_io_function"}
~~~~

### E9996: Always returning in a loop {#E9996}

We do not expect to see you always return an object or none inside a loop body.
This will cause the loop to only ever excute once.

~~~~ {include="always_returning_example"}
~~~~


### E9991: Dynamic Execution {#E9991}

This error occurs when you use a dynamic execution of code. Use of builtin
functions exec(), eval() and compile() is not allowed.

~~~~ {include="dynamic_execution_example"}
~~~~
