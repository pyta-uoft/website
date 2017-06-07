% PyTA Help Documentation

Welcome to the **PyTA documentation website**, which describes in greater detail the errors that PyTA checks for.
If anything is unclear, incorrect, or missing, please don't hesitate to send an email to [david at cs dot toronto dot edu].


## Improper Python usage

These errors generally indicate a misuse of variables, control flow, or
other Python features in your code.

### E0601: Used before assignment {#E0601}

This error occurs when you are using a variable before it has been assigned a value.

~~~~ {include="E0601_used_before_assignment"}
~~~~


### E0602: Undefined variable {#E0602}

This error occurs when you are using a variable that has not been defined.

~~~~ {include="E0602_undefined_variable"}
~~~~


### W0631: Undefined loop variable {#W0631}

This error occurs when a loop variable is used outside the `for` loop where it
was defined.

~~~~ {include="W0631_undefined_loop_variable"}
~~~~


### E0103: Not in loop {#E0103}

This error occurs when the `break` or `continue` keyword is used outside a loop.
The keyword `break` is used to exit a loop early and the keyword `continue` is
used to skip an iteration in a loop. Hence both the keywords only belong inside
loops.

A common source of this error is when the `break` or `continue` is not indented
properly (it must be indented to be considered part of the loop body).

~~~~ {include="E0103_not_in_loop"}
~~~~


### E0104: Return outside function {#E0104}

This error occurs when a `return` statement is found outside a function or
method.
A common source of this error is when the `return` is not indented
properly (it must be indented to be considered part of the loop body).

~~~~ {include="E0104_return_outside_function"}
~~~~


### W0101: Unreachable {#W0101}

This error occurs when there is some code after a `return` or `raise`
statement. This code will never be run, and so either it should be removed,
or the function is returning too early.

~~~~ {include="W0101_unreachable"}
~~~~


### W0109: Duplicate key {#W0109}

This error occurs when a dictionary expression stores the same key multiple times.

~~~~ {include="W0109_duplicate_key"}
~~~~


## Type errors

These errors are some of the most common errors we encounter in Python.
They generally have to do with using a value of one type where another type is required.

### E1101: No member {#E1101}

This error occurs when you use dot notation (`my_var.x`) to access an attribute
or to call a method which does not exist for the given value.

This can happen for both built-in types like `str`, as well as classes that you define yourself.
This error often results in an **AttributeError** when you run your program.

~~~~ {include="E1101_no_member"}
~~~~


### E1102: Not callable {#E1102}

This error occurs when you try to call a value which is not a function.
In the following example, we should not call `x()` because `x` refers to
a value which is an integer, not a function.

~~~~ {include="E1102_not_callable"}
~~~~


### E1111: Assignment from no return {#E1111}

This error occurs when you assign a variable to the return value of a function call, but the function never returns anything. This error is similar to [E1128](#E1128).

In the following example, `add_fruit` modifies `fruit_basket` inplace and does not return anything. As a result, `new_fruit_basket` always gets the value `None`.

~~~~ {include="E1111_assignment_from_no_return"}
~~~~

You should either modify `add_fruit` to return a new list, or call `add_fruit` without assigning the return value to a variable.

### E1120: No value for parameter {#E1120}

A function must be called with one argument value per parameter in its header.
This error indicates you called a function with too few arguments.
In the following example, there should be three values passed to the function
instead of two.

~~~~ {include="E1120_no_value_for_parameter"}
~~~~

Corrected version:

```python
get_sum(1, 2, 3)
```


### E1121: Too many function args {#E1121}

A function must be called with one argument value per parameter in its header.
This error indicates you called a function with too many arguments.

~~~~ {include="E1121_too_many_function_args"}
~~~~

Corrected version:

```python
get_sum(1, 2)
```


### E1126: Invalid sequence index {#E1126}

This error occurs when a list or tuple is indexed using the square bracket notation
`my_list[...]`, but the value of the index is not an integer.

Remember that the index indicates the *position* of the item in the list/tuple.

~~~~ {include="E1126_invalid_sequence_index"}
~~~~

Corrected version:

```python
a = ['p', 'y', 'T', 'A']
print(a[0])
```


### E1127: Invalid slice index {#E1127}

This error occurs when a list or tuple is sliced using the square bracket notation
`my_list[... : ...]`, but the two values on the left and right of the colon
are not integers.

Remember that the slice numbers indicate the *start* and *stop* positions for
the slice in the list/tuple.

~~~~ {include="E1127_invalid_slice_index"}
~~~~

Corrected version:

```python
a = ['p', 'y', 'T', 'A']
print(a[0:3])
```


### E1128: Assignment from None {#E1128}

This error occurs when you assign a variable the return value of a function call,
but the function always returns `None`.
This error is similar to E1111.
In the following example, `f` always returns `None`. As a result, `x` will always
get the value `None`.

~~~~ {include="E1128_assignment_from_none"}
~~~~


### E1130: Invalid unary operand type {#E1130}

This error occurs when the unary operand on the objects does not support this
type of operation. For example, we should never add string to integer.

~~~~ {include="E1130_invalid_unary_operand_type"}
~~~~


### E1131: Unsupported binary operation {#E1131}

This error occurs when you use a binary arithmetic operator like `+` or `*`,
but the left and right sides are not compatible types.
For example, a dictionary cannot be added to a list.

~~~~ {include="E1131_unsupported_binary_operation"}
~~~~


### E1135: Unsupported membership test {#E1135}

This error occurs when you use the membership test `a in b`, but the `b`'s type
does not support this type of check.

The standard Python types which support this check are strings, lists, tuples,
and dictionaries.

~~~~ {include="E1135_unsupported_membership_test"}
~~~~


### E1136: Unsubscriptable object {#E1136}

This error occurs when you try to index a value using square brackets (`a[...]`),
but the type of `a` does not support indexing (or "subscripting").

The standard Python types which support indexing are strings, lists, tuples,
and dictionaries.

~~~~ {include="E1136_unsubscriptable_object"}
~~~~


### E0632: Unbalanced tuple unpacking {#E0632}

This error occurs when you are trying to assign to multiple variables at once,
but the right side has too few values in the sequence.

~~~~ {include="E0632_unbalanced_tuple_unpacking"}
~~~~


### E0633: Unpacking non-sequence {#E0633}

This error occurs when you are trying to assign to multiple variables at once,
but the right side is not a sequence, and so can't be unpacked.

~~~~ {include="E0633_unpacking_non_sequence"}
~~~~


## Code complexity

### R0102: Simplifiable if statement {#R0102}

This error occurs when you have an `if` statement that can be simplified
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


### C0113: Unneeded not {#C0113}

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


### C0121: Singleton comparison {#C0121}

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


### W0125: Using constant test {#W0125}

This error occurs when a conditional statement like an `if` statement uses a
constant value for its test. This is bad as the conditional statements using a
constant test always evaluate to the same value. In such a case, a conditional
statement should not be used, because the same branch will always execute.

~~~~ {include="W0125_using_constant_test"}
~~~~


### R0912: Too many branches {#R0912}

The function or method has too many branches, making it hard to follow.
This is a sign that the function/method is too complex, and should be split up.

Note: the checker limit is 12 branches.

~~~~ {include="R0912_too_many_branches"}
~~~~


### R0101: Too many nested blocks {#R0101}

This error occurs when you have more than three levels of nested blocks in your code.
This type of nesting is a sign that your function is too complex,
and should be broken down using helper functions.

Note: this checker doesn't include function or class definition
as a block, so the example below is considered to have *four* nested blocks,
not five.

Note: we set a limit of three nested if blocks.

~~~~ {include="R0101_too_many_nested_blocks"}
~~~~


### R0913: Too many arguments {#R0913}

The function or method is defined with too many arguments.
This is a sign that the function/method is too complex, and should be split up.

Note: the checker limit is 5 arguments.

~~~~ {include="R0913_too_many_arguments"}
~~~~


### R0914: Too many locals {#R0914}

The function or method has too many local variables.

Note: the checker limit is 15 local variables.

~~~~ {include="R0914_too_many_locals"}
~~~~


### R0915: Too many statements {#R0915}

The function or method has too many statements. You should then split it
in smaller functions/methods.

Note: comments do not count as statements.

Note: the checker limit is 50 statements.

~~~~ {include="R0915_too_many_statements"}
~~~~


### W0612: Unused variable {#W0612}

This error occurs when you have a defined variable that is never used.

~~~~ {include="W0612_unused_variable"}
~~~~


### W0613: Unused argument {#W0613}

This error occurs when a function argument is never used in the function.

~~~~ {include="W0613_unused_argument"}
~~~~


### W0104: Pointless statement {#W0104}

This error occurs when a statement doesn't have any effect.
This means that the statement could be removed without changing the behaviour
of the program.
This is likely not what was intended.

~~~~ {include="W0104_pointless_statement"}
~~~~


### W0107: Unnecessary pass {#W0107}

This error occurs when a `pass` statement is used that can be avoided (or has
no effect). If you are able to remove the `pass` statement without changing the
effect of the program, then the statement is "unnecessary" and can be avoided.

~~~~ {include="W0107_unnecessary_pass"}
~~~~

In the above example, the `pass` statement is "unnecessary" as the program's
effect is not changed if `pass` is removed.


## Documentation and naming

Good documentation and identifiers are essential for writing software.
PyTA helps check to make sure you haven't forgotten to document anything,
as well as a basic check on the formatting of your identifiers.

### C0111: Missing Docstring {#C0111}

This error occurs when a module, function, class or method has no docstring.
Special methods like `__init__` don't require a docstring.

~~~~ {include="C0111_missing_docstring"}
~~~~


### C0112: Empty Docstring {#C0112}

This error occurs when a module, function, class or method has an empty
docstring.

```python
"""
"""
```

~~~~ {include="C0112_empty_docstring"}
~~~~


### C0102: Blacklisted name {#C0102}

This error occurs when a variable name is chosen to be a typical generic name,
rather than a meaningful one. Here are the blacklisted names to avoid:

 - foo
 - bar
 - baz
 - toto
 - tutu
 - tata

~~~~ {include="C0102_blacklisted_name"}
~~~~


### C0103: Invalid Name {#C0103}

This error occurs when a name does not follow the format associated with to its type (constant, variable ...).

- Variable/Attribute/Method/Argument: All variable/attribute/method/argument names should be in
**lowercase_with_underscores**.

- Constant: All constant names should be in **ALL_CAPS_WITH_UNDERSCORES**.

- Class: All class names should be in **CamelCase**.

A special character accepted in all types of names is '_'.
Numbers are allowed in all names, but names should not begin with a number.

~~~~ {include="C0103_invalid_name"}
~~~~


### E0102: Function redefined {#E0102}

This error occurs when a function, class or method is redefined. If you are
getting this error, you should make sure all the functions, methods and classes
you define have different names.

~~~~ {include="E0102_function_redefined"}
~~~~


### E0108: Duplicate argument name {#E0108}

This error occurs if there are duplicate parameter names in function
definitions. All parameters must have distinct names so you can refer to each
one separately in the function body.

~~~~ {include="E0108_duplicate_argument_name"}
~~~~


### W0621: Redefined outer name {#W0621}

This error occurs when you are trying to redefine a variable name that has
already been defined in the outer scope. For example, this error will occurs
when you have a local name identical to a global name. The local name takes
precedence. but it hides the global name, makes it no longer accessible.

~~~~ {include="W0621_redefined_outer_name"}
~~~~


### W0622: Redefined builtin {#W0622}

This error occurs when you are trying to redefine a built-in function.

~~~~ {include="W0622_redefined_builtin"}
~~~~


## Imports

There are standards governing how you should organize your imports,
or even possibly which modules you may import at all.

### E9999: Forbidden imports {#E9999}

For your work in CSC148, we expect you to use only the Python language
features we have covered in lectures, or ones that we have explicitly
mentioned for an exercise/lab/assignment. No other external libraries
may be used.

```python
import copy   # Error on this line

x = [1, 2, 3]
y = copy.copy(x)
```


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


### E0611: No name in module {#E0611}

This error occurs when you are trying to access a variable from an imported
module, but that variable name could not be found in that referenced module.

~~~~ {include="E0611_no_name_in_module"}
~~~~


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

Rather than importing everything with wildcard *, try importing specific
functions:

```python
from module_name import certain_definition
```

Or, if you need to import many functions, import them the following way, to
keep them separated in the namespace by module name. Then you can refer to the
function as `module_name.function_name`.

```python
import module_name

module_name.function_name()
```


### C0411: Wrong import order {#C0411}

Used when PEP8 import order is not respected (do the standard library imports first,
then third-party libraries, then local imports).

~~~~ {include="C0411_wrong_import_order"}
~~~~


### C0413: Wrong import position {#C0413}

Imports should be placed at the top of the module above any other code,
but below the module docstring.

~~~~ {include="C0413_wrong_import_position"}
~~~~


### C0412: Ungrouped imports {#C0412}

Imports should be grouped by packages.

~~~~ {include="C0412_ungrouped_imports"}
~~~~

Corrected version:

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


### W0611: Unused import {#W0611}

This error occurs when you have a imported module that is unused in your code.

~~~~ {include="W0611_unused_import"}
~~~~


## Classes and objects

### R0902: Too many instance attributes {#R0902}

The class has too many instance attributes, try to reduce this to get a
simpler (and easier to use) class.

Note: the limit is checker 7 instance attributes.

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


### W0222: Different method signature {#W0222}

When declaring a method in a child class, if you're going to provide a
method name that is the same as a method in the parent class, both the
parent and child should not differ in their signature (the number of
arguments).

When you have a method with the same name, the arguments should stay the
same.

~~~~ {include="W0222_signature_differs"}
~~~~


### E0101: Return in `__init__` {#E0101}

This error occurs when a return statement is used in the `__init__` method.
The purpose of this method is only to initialize the attributes of an object, and
it does not return anything directly.

~~~~ {include="E0101_return_in_init"}
~~~~


### W0212: Protected member access {#W0212}

Variable names starting with underscores are a convention that means the field should
not be accessed outside of the calling class. This encapsulation is a
hint to the user that they should not change the field as it may be
critical to the proper functioning of the object. Furthermore, this also
applies to methods with underscores since calling them may also cause
adverse affects.

~~~~ {include="W0212_protected_access"}
~~~~


### W0233: Bad parent init {#W0233}

You should call the `__init__` method of the parent, not some arbitrary and
unrelated class. To fix this, use the `__init__` from the lass
you are inheriting from.

~~~~ {include="W0233_non_parent_init"}
~~~~


### W0201: Attribute defined outside init {#W0201}

Any attribute you define for a class should be created inside the `__init__`
method. Defining it outside this method is considered bad practice,
as it makes it harder to keep track of what attributes the class actually has.

~~~~ {include="W0201_attribute_defined_outside_init"}
~~~~

You should do this instead:

```python
class MyClass:
    def __init__(self):
        self.num = 1
        self.other_num = 2
```


### E0203: Access to member before definition {#E0203}

Before trying to use a member of a class, it should have been defined at
some point. If you try to use it before assigning to it, E0an error will occur.

~~~~ {include="E0203_access_member_before_definition"}
~~~~


### E0202: Method hidden {#E0202}

If you accidentally mask a method with an attribute, it can cause other code
to attempt to invoke what it believes to be a method, which will fail since
it has become an attribute instead. This will cause the program
to raise an error.

```python
class Example:
    def field(self, num):
        return num

    def __init__(self):
        self.field = 'Masking the function with this string'

e = Example()
e.field(num)   # Error since we masked it
```


### E0302: Unexpected special method signature {#E0302}

Occurs when a special method (has double underscores on both sides) does not have
the expected number of arguments. These special methods have an expected
signature, and if we create a method with the same name and a different
amount of arguments, it can cause exceptions to be raised.

~~~~ {include="E0302_unexpected_special_method_signature"}
~~~~


### E0239: Inheriting from a non-class {#E0239}

When you inherit, it must come from a class. If you use something that is
not a class, you won't be able to inherit from it. In the following example,
trying to inherit from a string is not allowed. While a string is a class,
this is passing in an object rather than the actual class itself.

~~~~ {include="E0239_inherit_non_class"}
~~~~


### E0241: Duplicate bases {#E0241}

When inheriting, you should only specify a class once to inherit from,
multiple times is an error:

```python
class A:
    pass

class B(A, A):  # Only include A once to inherit properly
    pass
```


### E0211: No method argument {#E0211}

Each method in a class needs to have at least one argument (which is usually
`self`). Python uses this to call methods, and the first argument is populated
with the object that is calling the method. This is what allows you to access
the calling object.

For example, the following two are equivalent:

~~~~ {include="E0211_no_method_argument"}
~~~~


Therefore, if you do not provide any arguments, then Python does not know
how to pass the object to the method, and it will error out. To fix this,
put `self` in the parenthesis for the method call.

```python
class MyClass:
    def __init__(self):
        pass

    def method():
        print('Missing argument for method definition')
```


### E0213: `self` as the first argument {#E0213}

The first parameter should be the exact word `self`.
Naming the first parameter something else is not technically an error,
but using "self" is such a common practice that PyTA checks for this.
The
following is an example of a good, and bad example:

~~~~ {include="E0213_no_self_argument"}
~~~~


### R0201: No self use {#R0201}

If a method (a function in a class) does not make use of the 'self' (or
first) argument, that means the function is not performing anything that
is related to the object itself. This means the function could be moved
outside of the class since none of the code inside makes use of anything
inside the class it's defined.

~~~~ {include="R0201_no_self_use"}
~~~~


### W0211: Bad static member {#W0211}

Static methods are methods that do not operate on instances. Including
one inside a class can be done if you feel the logic belongs inside the
class and should be encapsulated by it for clarity, but static methods
mean they do not operate on classes, and therefore 'self' is very likely
a programming error unless you know what you are doing (and even then,
it is a bad practice).

When you make a static method, you should not name any variable 'self'
to avoid confusion.

```python
class C:
    def __init__(self):
        self.num = 5

    @staticmethod
    def method(self):  # Static methods do not have a 'self'
        self.num += 1
```


## Exceptions


### W0702: Bare exception {#W0702}

While you can catch any exception without specifying a class to catch after
the `except` keyword, this is bad practice since it will mask other exceptions
that could appear which you do not want to catch.

Always explicitly name the classes you expect to catch.

~~~~ {include="W0702_bare_except"}
~~~~


### W0703: Exception is too generic {#W0703}

Similar to exception error W0702, if your exception is too generic then you
may end up burying errors since they will be always caught. Because of this,
you should not be using `except Exception` as your except block since it can
catch exceptions you do not want caught.

~~~~ {include="W0703_broad_except"}
~~~~


### W0705: Duplicate except blocks {#W0705}

When you list an exception to be caught, you should not list it again. Only
have one block for each exception. This does not include having child and
parent exceptions, but rather it means don't have `exception MyException`,
and then later on when listing exceptions you have `exception MyException`
again.

~~~~ {include="W0705_duplicate_except"}
~~~~


### E0701: Bad exception order {#E0701}

Except blocks are analyzed sequentially (from top to bottom) and the
block that meets the criteria for catching the exception first will be
used. This means if you have a more generic exception type before a
specific exception type, you will never trigger the code in the block
that is hidden by the generic exception.

It is also good practice since you want to narrow down the exception
type to be as specific as possible, since the more generic exception
may catch other types as well.

~~~~ {include="E0701_bad_except_order"}
~~~~


### W0711: Binary op exception {#W0711}

The proper way to have an except block catch multiple exceptions is to have
the exception classes in a tuple. You can incorrectly write an except block
in Python with multiple classes separated by an _or_ (see example). If you do
it the second way, the _or_ binary operator will not do what you think it does
-- in fact, the exception on the right side of the _or_ will not be caught and
proceed to be passed up the call stack (which likely will yield an uncaught
exception, terminating your program).

~~~~ {include="W0711_binary_op_exception"}
~~~~


### E0704: Misplaced bare raise {#E0704}

When you call _raise_, it's usually to throw an exception. If you are inside
an 'except' block after you catch an exception, you can continue to pass on
the exception to later code. You may want to do this if your intention is to
capture a generated exception, then do something before passing it onwards
(such as maybe closing a file or some other sensitive operation that must
be done for program integrity that an exception would break). You can do this
by calling _raise_ on its own without a class as follows:

```python
def func():
    try:
        raise MyException()
    except MyException:
        # Do something important here (if needed).
        # Now, raise again what we just caught.
        raise
```

If you call _raise_ outside of an 'except' block, it can't work because there
is no exception to throw as seen in the following example:

```python
def bad_raise()
    # Bad example, needs to be in an 'except' block:
    raise
```


### E0702: Raising bad type {#E0702}

You have to raise an object that is an exception, you can't raise anything
like a number. If it does not descend at some point from an Exception class,
it should not be raised. To solve this issue, extend a new class from the
Exception class, name it appropriately, and raise that.

~~~~ {include="E0702_raising_bad_type"}
~~~~


### E0710: Raising non-exception {#E0710}

You cannot raise an object that is not a descendant of Exception (which implies
being a child of BaseException). Anything you raise must at some point descend
from a class that inherits exception.

The solution is either to create your own exception, or to find a proper
exception that best describes the problem.

~~~~ {include="E0710_raising_non_exception"}
~~~~


### E0711: NotImplemented raised {#E0711}

`NotImplemented` is intended to be a return value for methods, such as when you
create your own comparisons (ex: using `__eq__`), when what you actually want
is to throw the exception. Forgetting the suffix 'Error' is a common mistake
and do what you intended.

This is also related to another error where raising a non-exception is not
allowed.

~~~~ {include="E0711_notimplemented_raised"}
~~~~


### E0712: Catching non-exception {#E0712}

If your 'except' class uses a class that does not inherit from BaseException
at some point, then you are trying to catch an exception that is not a
well-defined exception. Your code should only try to catch exceptions
that extend from BaseException. Python requires you to raise exceptions
that derive from BaseException, and having a class type that does not extend
from this and being raised will cause a problem.

~~~~ {include="E0712_catching_non_exception"}
~~~~


## Custom errors {#custom}


### E9998: Forbidden IO function {#E9998}

We do not expect to see I/O functions (input, open and print) in your code in
this course unless explicitly required. If you have used debugging print
statements to do your work, make sure to remove them before submission.

~~~~ {include="E9998_forbidden_io_function"}
~~~~

### E9996: Always returning in a loop {#E9996}

This error occurs when you always return none or an object inside a loop body,
which causes the loop to only ever excute once.

~~~~ {include="always_returning_example"}
~~~~

### E9991: Dynamic Execution {#E9991}

Use of builtin functions `exec`, `eval`, and `compile` is not allowed.

~~~~ {include="dynamic_execution_example"}
~~~~


## Miscellaneous


### E1305: Too many format args {#E1305}

This error occurs when you use the `format` method on a string, but call it
with more arguments than the number of `{}` in the string.
This error is similar to E1121, meanwhile opposite to E1306.

~~~~ {include="E1305_too_many_format_args"}
~~~~

Corrected version:

```python
name = "Amy"
age = "17"
country = "England"

s = "{} who is {} lives in {}".format(name, age, country)
```


### E1306: Too few format args {#E1306}

This error occurs when you use the `format` method on a string, but call it
with fewer arguments than the number of `{}` in the string.
This error is similar to E1120, meanwhile opposite to E1305.

~~~~ {include="E1306_too_few_format_args"}
~~~~

Corrected version

```python
s = "{} and {}".format("first", "second")
```


### E1310: Bad str strip call {#E1310}

This error occurs when you call `strip`, `lstrip`, or `rstrip`, but give it
an argument string which contains duplicate characters.

The argument string should contain the *distinct* characters that you want to
remove from the end(s) of a string.

~~~~ {include="E1310_bad_str_strip_call"}
~~~~


### W1303: Missing format argument key {#W1303}

This error occurs when a format string that uses named fields does not
receive required keywords. This error is similar to E1120 and E1306. In the
following example, we should assign three values for bond, james and act.

~~~~ {include="W1303_missing_format_argument_key"}
~~~~


### W1305: Format combined specification {#W1305}

This error occurs when a format string contains both automatic field numbering
(e.g. ‘{}’) and manual field specification (e.g. ‘{0}’).
For example, we should not use {} and {index} at the same time.

~~~~ {include="W1305_format_combined_specification"}
~~~~

Corrected versions:

```python
s = "{} and {}".format("a", "b")
```
or

```python
s = "{0} and {1}".format("a", "b")
```


### W1401: Anomalous backslash in string {#W1401}

This error occurs when a backslash is in a literal string but not as an escape.

~~~~ {include="W1401_anomalous_backslash_in_string"}
~~~~


### W1503: Redundant unittest assert {#W1503}

The first argument of `assertTrue` and `assertFalse` is a "condition", which should
evaluate to True or False.

These methods evaluate the condition to check whether the test passes or fails.
The conditions should depend on the code that you are testing, and should not
be a constant literal like `True` or `4`. Otherwise, the test will always have
the same result, regardless of whether your code is correct.

~~~~ {include="W1503_redundant_unittest_assert"}
~~~~


### C0123: Unidiomatic type check {#C0123}

This error occurs when type() is used instead of isinstance() for a type check.
Use `isinstance(x, Y)` instead of `type(x) == Y`.

~~~~ {include="C0123_unidiomatic_typecheck"}
~~~~

The above can be modified to:

```python
def is_int(obj):
    """Check if the given object is of type 'int'.

    @type obj: object
    @rtype: bool
    """
    return isinstance(obj, int)
```


### W0102: Dangerous default value {#W0102}

This error occurs when a mutable value such as a list or dictionary is given a
default value in the function or method definition. It is dangerous to give
mutable objects a default value only when the function/method modifies the
argument. If you modify a default argument, those changes will remain for the
next time the function is called.

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
value, and then check for this default value inside the function body.

### W0199: Assert on tuple {#W0199}

This error occurs when an "assert" statement is called like `assert (x, y)`.
`assert` acting on a tuple always returns true if the tuple is non-empty, and
false if it is empty. If you want to assert that two expressions are true then,
you should use `assert x, y` instead.

~~~~ {include="W0199_assert_on_tuple"}
~~~~


## Syntax errors {#custom}

### E0001: Syntax Error {#E0001}

1. Python error message: "Missing parentheses in call to 'print'"
You must call the `print` function when you want to output text from your program.
Note that this was a major change from Python 2 to Python 3 (before, `print`
was just a keyword, not a function).
```python
print 3   # Error on this line
```

2. Python error message: "SyntaxError: invalid syntax"

    a. Forgetting to put a colon at the end of an if, elif, else, for, while, class,
    or def statement.
    ```python
    if spam == 42  # Error on this line
        print('Hello!')
    ```

    b. Using = instead of == inside a condition expression.
    ```python
    if spam = 42:  # Error on this line
        print('Hello!')
    ```

    c. Forgetting a quote to begin or end a string value.
    ```python
    print('Hello!) # Error on this line
    ```

    d. Trying to use a Python keyword for a variable name.
        Here are all the keywords you should avoid:
        ```
        and       del       from      not       while
        as        elif      global    or        with
        assert    else      if        pass      yield
        break     except    import    print
        class     exec      in        raise
        continue  finally   is        return
        def       for       lambda    try
        ```

        For example:

        ```python
        class = 'algebra' # Error on this line
        ```

    e. There is no ++ increment or –- decrement operator. Do not try to increment
    or decrement a variable with ++ or --.
    ```python
    spam = 0
    spam++  # Error on this line
    ```

    f. You can't assign to a literal in python. The variable name is always on the
    left-hand side of the equals sign. That is what gets assigned to.
    ```python
    a = 12
    12 = a  # Error on this line
    ```

    g. Unindent does not match any outer indentation level. There might be spaces
    mixed in with your tabs. Try doing a search-and-replace to replace all tabs with
    a few spaces.
    ```python
    a = 1
    if 2 < 3:
        if 1 < 2:
            a = a + 1
         else:         # Error on this line
            a = a - 1
    ```
