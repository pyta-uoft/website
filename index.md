% PyTA Help Documentation

Welcome to the **PyTA documentation website**, which describes in greater detail the errors that PyTA checks for.
If anything is unclear, incorrect, or missing, please don't hesitate to send an email to [david at cs dot toronto dot edu].


## Improper Python usage

These errors generally indicate a misuse of variables, control flow, or
other Python features in your code.

### Used before assignment (E0601) {#E0601}

This error occurs when you are using a variable before it has been assigned a value.

~~~~ {include="E0601_used_before_assignment"}
~~~~

### Undefined variable (E0602) {#E0602}

This error occurs when you are using a variable that has not been defined.

~~~~ {include="E0602_undefined_variable"}
~~~~

### Undefined loop variable (W0631) {#W0631}

This error occurs when a loop variable is used outside the `for` loop where it
was defined.

~~~~ {include="W0631_undefined_loop_variable"}
~~~~

Python, unlike many other languages (e.g. C, C++, Java), allows loop variables to be accessed outside the loop in which they were defined. This practice is discouraged, however, as it can lead to obscure and hard-to-detect bugs. For more information, see the Eli Bendersky's blog post: [The scope of index variables in Python's for loops].


### Not in loop (E0103) {#E0103}

This error occurs when the `break` or `continue` keyword is used outside a loop.
The keyword `break` is used to exit a loop early and the keyword `continue` is
used to skip an iteration in a loop. Hence both the keywords only belong inside
loops.

A common source of this error is when the `break` or `continue` is not indented
properly (it must be indented to be considered part of the loop body).

~~~~ {include="E0103_not_in_loop"}
~~~~


### Return outside function (E0104) {#E0104}

This error occurs when a `return` statement is found outside a function or
method.
A common source of this error is when the `return` is not indented
properly (it must be indented to be considered part of the loop body).

~~~~ {include="E0104_return_outside_function"}
~~~~


### Unreachable (W0101) {#W0101}

This error occurs when there is some code after a `return` or `raise`
statement. This code will never be run, and so either it should be removed,
or the function is returning too early.

~~~~ {include="W0101_unreachable"}
~~~~


### Duplicate key (W0109) {#W0109}

This error occurs when a dictionary literal sets the same key multiple times.

Dictionaries map unique keys to values. When different values are assigned to the same key, the last assignment takes precedence. This is rarely what the user wants when they are constructing a dictionary.

~~~~ {include="W0109_duplicate_key"}
~~~~

```python
print(ex)  # prints {'runner1': '7km'}
```

## Type errors

These errors are some of the most common errors we encounter in Python.
They generally have to do with using a value of one type where another type is required.

### No member (E1101) {#E1101}

This error occurs when you use dot notation (`my_var.x`) to access an attribute
or to call a method which does not exist for the given object.

This can happen for both built-in types like `str`, as well as classes that you define yourself.
This error often results in an **AttributeError** when you run your program.

~~~~ {include="E1101_no_member"}
~~~~


### Not callable (E1102) {#E1102}

This error occurs when you try to call a value which is not a function, method, or callable object.
In the following example, we should not call `x()` because `x` refers to an integer, and calling an integer has no meaning.

~~~~ {include="E1102_not_callable"}
~~~~


### Assignment from no return (E1111) {#E1111}

This error occurs when you assign a variable to the return value of a function call, but the function never returns anything. This error is similar to [E1128](#E1128).

In the following example, `add_fruit` mutates `fruit_basket` and does not return anything. As a result, `new_fruit_basket` always gets the value `None`.

~~~~ {include="E1111_assignment_from_no_return"}
~~~~

We should either modify `add_fruit` to return a new list, or call `add_fruit` without assigning the return value to a variable.

### No value for parameter (E1120) {#E1120}

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


### Too many function args (E1121) {#E1121}

A function must be called with one argument value per parameter in its header.
This error indicates you called a function with too many arguments.

~~~~ {include="E1121_too_many_function_args"}
~~~~

Corrected version:

```python
get_sum(1, 2)
```


### Invalid sequence index (E1126) {#E1126}

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


### Invalid slice index (E1127) {#E1127}

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


### Assignment from None (E1128) {#E1128}

This error occurs when you assign a variable the return value of a function call, but the function always returns `None`. This error is similar to [E1111](#E1111).

In the following example, `add_fruit` always returns `None`.  As a result, `new_fruit_basket` will always get the value `None`.

~~~~ {include="E1128_assignment_from_none"}
~~~~


### Invalid unary operand type (E1130) {#E1130}

This error occurs when you use a [unary operator][Unary arithmetic and bitwise operations] (`+`, `-`, `~`) on an object which does not support this operator. For example, a list does not support negation.

~~~~ {include="E1130_invalid_unary_operand_type"}
~~~~


### Unsupported binary operation (E1131) {#E1131}

This error occurs when you use a [binary arithmetic operator][Binary arithmetic operations] like `+` or `*`, but the left and right sides are not compatible types. For example, a dictionary cannot be added to a list.

~~~~ {include="E1131_unsupported_binary_operation"}
~~~~


### Unsupported membership test (E1135) {#E1135}

This error occurs when you use the membership test `a in b`, but the type of `b`
does not support membership tests.

The standard Python types which support membership tests are strings, lists, tuples,
and dictionaries.

~~~~ {include="E1135_unsupported_membership_test"}
~~~~


### Unsubscriptable object (E1136) {#E1136}

This error occurs when you try to index a value using square brackets (`a[...]`),
but the type of `a` does not support indexing (or "subscripting").

The standard Python types which support indexing are strings, lists, tuples,
and dictionaries.

~~~~ {include="E1136_unsubscriptable_object"}
~~~~


### Unbalanced tuple unpacking (E0632) {#E0632}

This error occurs when you are trying to assign to multiple variables at once,
but the right side has too few or too many values in the sequence.

~~~~ {include="E0632_unbalanced_tuple_unpacking"}
~~~~


### Unpacking non-sequence (E0633) {#E0633}

This error occurs when you are trying to assign to multiple variables at once,
but the right side is not a sequence, and so can't be unpacked.

~~~~ {include="E0633_unpacking_non_sequence"}
~~~~


## Code complexity

### Simplifiable if statement (R0102) {#R0102}

This error occurs when you have an `if ... else` statement that can be simplified by using the value of the condition instead of additional `True` and `False` literals.

~~~~ {include="R0102_simplifiable_if_statement"}
~~~~

The above example can be simplified to:

```python
def is_even(num):
    """Return whether <num> is even or odd."""
    return num % 2 == 0
```


### Unneeded not (C0113) {#C0113}

This error occurs when a boolean expression contains an unneeded negation. If
you are getting this error, the expression can be simplified to not use a
negation.

~~~~ {include="C0113_unneeded_not"}
~~~~

The above can be modified to:

```python
number = 5
if number < 0:
    number_category = 'negative'
else:
    number_category = 'non-negative'
```


### Singleton comparison (C0121) {#C0121}

This is an error that occurs when an expression is compared to singleton values
like True, False or None.

~~~~ {include="C0121_singleton_comparison"}
~~~~

The above can be modified to:

```python
def square(number):
    if number is None:
        return None
    else:
        return number**2
```


### Using constant test (W0125) {#W0125}

This error occurs when a conditional statement like an `if` statement uses a
constant value for its test. This is bad as the conditional statements using a
constant test always evaluate to the same value. In such a case, a conditional
statement should not be used, because the same branch will always execute.

~~~~ {include="W0125_using_constant_test"}
~~~~


### Too many branches (R0912) {#R0912}

The function or method has too many branches, making it hard to follow.
This is a sign that the function/method is too complex, and should be split up.

Note: the checker limit is 12 branches.

~~~~ {include="R0912_too_many_branches"}
~~~~


### Too many nested blocks (R0101) {#R0101}

This error occurs when you have more than three levels of nested blocks in your code.
Deep nesting is a sign that your function or method is too complex, and should be broken down using helper functions or rewritten as a [list comprehension][list comprehensions tutorial].

**Note**: this checker does not count function, method, or class definitions as blocks, so the example below is considered to have *six* nested blocks, not seven.

~~~~ {include="R0101_too_many_nested_blocks"}
~~~~

The code above can be fixed using a helper function:

```python
def drop_none(lst):
    new_lst = []
    for element in lst:
        if element is not None:
            new_lst.append(element)
    return new_lst


def cross_join(x_list, y_list, z_list):
    cross_join_list = []
    for x in drop_none(x_list):
        for y in drop_none(y_list):
            for z in drop_none(z_list):
                cross_join_list.append((x, y, z))
    return cross_join_list
```

or using list comprehension:

```python
def cross_join(x_list, y_list, z_list):
    cross_join_list = [
        (x, y, z)
        for x in x_list
        if x is not None
        for y in y_list
        if y is not None
        for z in z_list
        if z is not None
    ]
    return cross_join_list
```

### Too many arguments (R0913) {#R0913}

The function or method is defined with too many arguments.
This is a sign that the function/method is too complex, and should be split up, or that some of the arguments are related, and should be combined and passed as a single object.

Note: the checker limit is 5 arguments.

~~~~ {include="R0913_too_many_arguments"}
~~~~


### Too many locals (R0914) {#R0914}

The function or method has too many local variables.

Note: the checker limit is 15 local variables.

~~~~ {include="R0914_too_many_locals"}
~~~~


### Too many statements (R0915) {#R0915}

The function or method has too many statements. You should then split it
in smaller functions/methods.

Note: comments do not count as statements.

Note: the checker limit is 50 statements.

~~~~ {include="R0915_too_many_statements"}
~~~~


### Unused variable (W0612) {#W0612}

This error occurs when you have a defined variable that is never used.

~~~~ {include="W0612_unused_variable"}
~~~~


### Unused argument (W0613) {#W0613}

This error occurs when a function argument is never used in the function.

~~~~ {include="W0613_unused_argument"}
~~~~


### Pointless statement (W0104) {#W0104}

This error occurs when a statement doesn't have any effect.
This means that the statement could be removed without changing the behaviour
of the program.
This is likely not what was intended.

~~~~ {include="W0104_pointless_statement"}
~~~~


### Unnecessary pass (W0107) {#W0107}

This error occurs when a [`pass` statement][`pass` statements] is used that can be avoided (or has no effect). `pass` statements should only be used to fill what would otherwise be an empty code block, since code blocks cannot be empty in Python. Some examples of appropriate uses of `pass` can be found [here][StackOverflow: Reasons for `pass`].

~~~~ {include="W0107_unnecessary_pass"}
~~~~

In the above example, the `pass` statement is "unnecessary" as the program's
effect is not changed if `pass` is removed.


## Documentation and naming

Good documentation and identifiers are essential for writing software.
PyTA helps check to make sure you haven't forgotten to document anything,
as well as a basic check on the formatting of your identifiers.

### Missing Docstring (C0111) {#C0111}

This error occurs when a module, function, class or method has no docstring.
Special methods like `__init__` don't require a docstring.

~~~~ {include="C0111_missing_docstring"}
~~~~


### Empty Docstring (C0112) {#C0112}

This error occurs when a module, function, class or method has an empty
docstring.

```python
"""
"""
```

~~~~ {include="C0112_empty_docstring"}
~~~~


### Blacklisted name (C0102) {#C0102}

This error occurs when a variable name is chosen to be a typical generic name,
rather than a meaningful one. Here are some of the blacklisted names to avoid:

 - foo
 - bar
 - baz
 - toto
 - tutu
 - tata

~~~~ {include="C0102_blacklisted_name"}
~~~~


### Invalid name (C0103) {#C0103}

This error occurs when a name does not follow the [Python Naming Convention] associated with its type (constant, variable, etc.).

- Names of variables, attributes, methods, and arguments should be in **`lowercase_with_underscores`**.

- Names of constants should be in **`ALL_CAPS_WITH_UNDERSCORES`**.

- Names of classes should be in **`CamelCase`**.

A special character accepted in all types of names is '_'.
Numbers are allowed in all names, but names must not begin with a number.

~~~~ {include="C0103_invalid_name"}
~~~~


### Function redefined (E0102) {#E0102}

This error occurs when a function, class or method is redefined. If you are
getting this error, you should make sure all the functions, methods and classes
you define have different names.

~~~~ {include="E0102_function_redefined"}
~~~~


### Duplicate argument name (E0108) {#E0108}

This error occurs if there are duplicate parameter names in function
definitions. All parameters must have distinct names so you can refer to each
one separately in the function body.

~~~~ {include="E0108_duplicate_argument_name"}
~~~~


### Redefined outer name (W0621) {#W0621}

This error occurs when you are trying to redefine a variable name that has
already been defined in the outer scope. For example, this error will occur
when you have a local name identical to a global name. The local name takes
precedence, but it hides the global name, making it no longer accessible.

Note that the outer name is not accessible *anywhere* in the function where it is redefined, even before the redefinition.

~~~~ {include="W0621_redefined_outer_name"}
~~~~


### Redefined builtin (W0622) {#W0622}

This error occurs when you are trying to redefine a [built-in function][Built-in Functions].

~~~~ {include="W0622_redefined_builtin"}
~~~~


## Imports

There are standards governing how you should organize your imports,
or even possibly which modules you may import at all.

### Forbidden imports (E9999) {#E9999}

For your work in CSC148, we expect you to use only the Python language
features we have covered in lectures, or ones that we have explicitly
mentioned for an exercise/lab/assignment. No other external libraries
may be used.

```python
import copy   # Error on this line

x = [1, 2, 3]
y = copy.copy(x)
```


### Import error (E0401) {#E0401}

The module is unable to be imported. Check the spelling of the module name, or
whether the module is in the correct directory.

~~~~ {include="E0401_import_error"}
~~~~

There are other forms of import statements that may cause this error, for
example:

```python
import missing_module as foo  # this module does not exist
```


### No name in module (E0611) {#E0611}

This error occurs when you are trying to access a variable from an imported
module, but that variable name could not be found in that referenced module.

~~~~ {include="E0611_no_name_in_module"}
~~~~


### Import self (W0406) {#W0406}

A module should not import itself. So for example, if the module is named
`W0406_import_self` you cannot import it as follows:

~~~~ {include="W0406_import_self"}
~~~~


### Reimported (W0404) {#W0404}

A module should not be imported more than once.

~~~~ {include="W0404_reimported"}
~~~~


### Wildcard import (W0401) {#W0401}

Only import what you need. Wildcard imports (shown below) are generally discouraged, as they add all the objects from the imported module into the global namespace, and make it difficult to tell in which module a particular class, function or constant was defined. This may cause problems, for example, when multiple modules have objects with identical names.

~~~~ {include="W0401_wildcard_import"}
~~~~

Rather than importing everything with wildcard *, specify the names of the objects which you would like to import:

```python
from module_name import SOME_CONSTANT, SomeClass, some_function
```

Or, if you need to import many objects from a particular module, import the module itself, and use it as a namespace for the required objects:

```python
import module_name

c = module_name.SomeClass()
```


### Wrong import order (C0411) {#C0411}

Used when [PEP8 import order][PEP8 Imports] is not respected (do the standard library imports first,
then third-party libraries, then local imports).

~~~~ {include="C0411_wrong_import_order"}
~~~~


### Wrong import position (C0413) {#C0413}

Imports should be placed at the top of the module above any other code,
but below the module docstring.

~~~~ {include="C0413_wrong_import_position"}
~~~~


### Ungrouped imports (C0412) {#C0412}

Imports should be grouped by packages.

~~~~ {include="C0412_ungrouped_imports"}
~~~~

Corrected version:

```python
from sys import byteorder, stdin  # same packages should be grouped
from math import floor
```


### Multiple imports (C0410) {#C0410}

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


### Unused import (W0611) {#W0611}

This error occurs when you import a module which is not used anywhere in your code.

~~~~ {include="W0611_unused_import"}
~~~~


## Classes and objects

### Too many instance attributes (R0902) {#R0902}

The class has too many instance attributes, which suggests that it is too complicated and tries to do too many things.

**Note**: the checker limit is 7 instance attributes.

~~~~ {include="R0902_too_many_instance_attributes"}
~~~~

One solution is to logically decompose the class into multiple classes, each with fewer
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


### Different method signature (W0222) {#W0222}

When a child class overrides a method of the parent class, the new method should have the same signature as the method which it is overriding. In other words, the names and the order of the parameters should be the same in the two methods.

~~~~ {include="W0222_signature_differs"}
~~~~


### Return in `__init__` (E0101) {#E0101}

This error occurs when the [`__init__`][object.__init__] method contains a return statement.

The purpose of the `__init__` method is to initialize the attributes of an object. `__init__` is called by the special method [`__new__`][object.__new__] when a new object is being instantiated, and `__new__` will raise a `TypeError` if `__init__` returns anything other than `None`.

~~~~ {include="E0101_return_in_init"}
~~~~

### Protected member access (W0212) {#W0212}

Variable names starting with underscores are a convention that means the field should not be accessed outside of the calling class. This encapsulation is a hint to the user that they should not change the field, as it may be critical to the proper functioning of the object. Furthermore, this also applies to methods with underscores, since calling them may also cause adverse effects.

~~~~ {include="W0212_protected_access"}
~~~~


### Bad parent init (W0233) {#W0233}

You should call the `__init__` method of the parent, not of some arbitrary and unrelated class.

~~~~ {include="W0233_non_parent_init"}
~~~~

To fix this, call the `__init__` method of the parent class, or use [`super()`][super].

```python
# Call the `__init__` method on the correct parent class
class Child(Parent):
    def __init__(self):
        Parent.__init__(self)

# Or use `super()`
class Child(Parent):
    def __init__(self):
        super().__init__()
```

**See also**:

- [What does 'super' do in Python?]
- [Super considered super!]
- [Python's super considered harmful]

### Attribute defined outside init (W0201) {#W0201}

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
        self.other_num = None

    def set_other_num(self, other_num):
        self.other_num = other_num
```


### Access to member before definition (E0203) {#E0203}

Before trying to use a member of a class, it should have been defined at
some point. If you try to use it before assigning to it, an error will occur.

~~~~ {include="E0203_access_member_before_definition"}
~~~~


### Method hidden (E0202) {#E0202}

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


### Unexpected special method signature (E0302) {#E0302}

Occurs when a special method (aka ["dunder method"][Python double-under, double-wonder], because it has double underscores or "dunders" on both sides) does not have the expected number of parameters. Special methods have an expected signature, and if we create a method with the same name and a different number of parameters, it can break existing code and lead to exceptions.

~~~~ {include="E0302_unexpected_special_method_signature"}
~~~~


### Inheriting from a non-class (E0239) {#E0239}

When you inherit, it must come from a class. If you use something that is
not a class, you won't be able to inherit from it. In the following example,
trying to inherit from a string is not allowed. While a string is a class,
this is passing in an object rather than the actual class itself.

~~~~ {include="E0239_inherit_non_class"}
~~~~


### Duplicate bases (E0241) {#E0241}

When inheriting, you should only specify a class once to inherit from,
multiple times is an error:

```python
class A:
    pass

class B(A, A):  # Only include A once to inherit properly
    pass
```


### No method argument (E0211) {#E0211}

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


### `self` as the first argument (E0213) {#E0213}

The first parameter should be the exact word `self`.
Naming the first parameter something else is not technically an error,
but using "self" is such a common practice that PyTA checks for this.
The
following is an example of a good, and bad example:

~~~~ {include="E0213_no_self_argument"}
~~~~


### No self use (R0201) {#R0201}

If a method (a function in a class) does not make use of the 'self' (or
first) argument, that means the function is not performing anything that
is related to the object itself. This means the function could be moved
outside of the class since none of the code inside makes use of anything
inside the class it's defined.

~~~~ {include="R0201_no_self_use"}
~~~~


### Bad static member (W0211) {#W0211}

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


### Bare exception (W0702) {#W0702}

While you can catch any exception without specifying a class to catch after
the `except` keyword, this is bad practice since it will mask other exceptions
that could appear which you do not want to catch.

Always explicitly name the classes you expect to catch.

~~~~ {include="W0702_bare_except"}
~~~~


### Exception is too generic (W0703) {#W0703}

Similar to exception error W0702, if your exception is too generic then you
may end up burying errors since they will be always caught. Because of this,
you should not be using `except Exception` as your except block since it can
catch exceptions you do not want caught.

~~~~ {include="W0703_broad_except"}
~~~~


### Duplicate except blocks (W0705) {#W0705}

When you list an exception to be caught, you should not list it again. Only
have one block for each exception. This does not include having child and
parent exceptions, but rather it means don't have `exception MyException`,
and then later on when listing exceptions you have `exception MyException`
again.

~~~~ {include="W0705_duplicate_except"}
~~~~


### Bad exception order (E0701) {#E0701}

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


### Binary op exception (W0711) {#W0711}

The proper way to have an except block catch multiple exceptions is to have
the exception classes in a tuple. You can incorrectly write an except block
in Python with multiple classes separated by an _or_ (see example). If you do
it the second way, the _or_ binary operator will not do what you think it does
-- in fact, the exception on the right side of the _or_ will not be caught and
proceed to be passed up the call stack (which likely will yield an uncaught
exception, terminating your program).

~~~~ {include="W0711_binary_op_exception"}
~~~~


### Misplaced bare raise (E0704) {#E0704}

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


### Raising bad type (E0702) {#E0702}

You have to raise an object that is an exception, you can't raise anything
like a number. If it does not descend at some point from an Exception class,
it should not be raised. To solve this issue, extend a new class from the
Exception class, name it appropriately, and raise that.

~~~~ {include="E0702_raising_bad_type"}
~~~~


### Raising non-exception (E0710) {#E0710}

You cannot raise an object that is not a descendant of Exception (which implies
being a child of BaseException). Anything you raise must at some point descend
from a class that inherits exception.

The solution is either to create your own exception, or to find a proper
exception that best describes the problem.

~~~~ {include="E0710_raising_non_exception"}
~~~~


### NotImplemented raised (E0711) {#E0711}

`NotImplemented` is intended to be a return value for methods, such as when you
create your own comparisons (ex: using `__eq__`), when what you actually want
is to throw the exception. Forgetting the suffix 'Error' is a common mistake
and do what you intended.

This is also related to another error where raising a non-exception is not
allowed.

~~~~ {include="E0711_notimplemented_raised"}
~~~~


### Catching non-exception (E0712) {#E0712}

If your 'except' class uses a class that does not inherit from BaseException
at some point, then you are trying to catch an exception that is not a
well-defined exception. Your code should only try to catch exceptions
that extend from BaseException. Python requires you to raise exceptions
that derive from BaseException, and having a class type that does not extend
from this and being raised will cause a problem.

~~~~ {include="E0712_catching_non_exception"}
~~~~


## Custom errors {#custom}


### Forbidden IO function (E9998) {#E9998}

We do not expect to see I/O functions (input, open and print) in your code in
this course unless explicitly required. If you have used debugging print
statements to do your work, make sure to remove them before submission.

~~~~ {include="E9998_forbidden_io_function"}
~~~~

### Always returning in a loop (E9996) {#E9996}

This error occurs when you always return none or an object inside a loop body,
which causes the loop to only ever excute once.

~~~~ {include="always_returning_example"}
~~~~

### Dynamic Execution (E9991) {#E9991}

Use of builtin functions `exec`, `eval`, and `compile` is not allowed.

~~~~ {include="dynamic_execution_example"}
~~~~


## Miscellaneous


### Too many format args (E1305) {#E1305}

This error occurs when you use the `format` method on a string, but call it
with more arguments than the number of `{}` in the string.

~~~~ {include="E1305_too_many_format_args"}
~~~~

Corrected version:

```python
name = "Amy"
age = "17"
country = "England"

s = "{} who is {} lives in {}".format(name, age, country)
```

This error is similar to [E1121](#E1121).



### Too few format args (E1306) {#E1306}

This error occurs when you use the `format` method on a string, but call it
with fewer arguments than the number of `{}` in the string.

~~~~ {include="E1306_too_few_format_args"}
~~~~

Corrected version:

```python
s = "{} and {}".format("first", "second")
```

This error is similar to [E1120](#E1120).


### Missing format argument key (W1303) {#W1303}

This error occurs when a format string that uses named fields does not receive required keywords. In the following example, we should assign three values for `last_name`, `first_name` and `age`.

~~~~ {include="W1303_missing_format_argument_key"}
~~~~

Corrected version:

```python
s = '{last_name}, {fist_name} - {age}'.format(last_name='bond', first_name='james', age=37)
```

This error is similar to [E1120](#E1120) and [E1306](#E1120).


### Bad str strip call (E1310) {#E1310}

This error occurs when you call [`strip`][str.strip], [`lstrip`][str.lstrip], or [`rstrip`][str.rstrip], but pass an argument string which contains duplicate characters. The argument string should contain the *distinct* characters that you want to remove from the end(s) of a string.

~~~~ {include="E1310_bad_str_strip_call"}
~~~~

It is a common mistake to think that `mystring.strip(chars)` removes the substring `chars` from the beginning end end of `mystring`. It actually removes all characters in `chars` from the beginning and end of `mystring`, *irrespective of their order*!
If you pass an argument string with duplicate characters to `mystring.strip`, you are likely misinterpreting what this method is doing.


### Format combined specification (W1305) {#W1305}

This error occurs when a format string contains both automatic field numbering (e.g. `{}`) and manual field specification (e.g. `{0}`).

For example, we should not use `{}` and `{index}` at the same time.

~~~~ {include="W1305_format_combined_specification"}
~~~~

Corrected version:

```python
s = "{} and {}".format("a", "b")
```

or:

```python
s = "{0} and {1}".format("a", "b")
```


### Anomalous backslash in string (W1401) {#W1401}

This error occurs when a string literal contains a backslash which is not part of an escape sequence.

~~~~ {include="W1401_anomalous_backslash_in_string"}
~~~~

In order to make it explicit that the backslash character represents a backslash, you should escape the backslash with another backslash, or create a *raw string* by prefixing the string literal with the letter `r`.

```python
re.findall('(\\d+)\\D*', '123 Main St.')  # OK
re.findall(r'(\d+)\D*', '123 Main St.')  # OK
```

**See also**:

- [String and Bytes literals]
- [StackOverflow: pep8 warning on regex string in Python, Eclipse]


### Redundant unittest assert (W1503) {#W1503}

The first argument of `assertTrue` and `assertFalse` is a "condition", which should
evaluate to True or False.

These methods evaluate the condition to check whether the test passes or fails.
The conditions should depend on the code that you are testing, and should not
be a constant literal like `True` or `4`. Otherwise, the test will always have
the same result, regardless of whether your code is correct.

~~~~ {include="W1503_redundant_unittest_assert"}
~~~~


### Unidiomatic type check (C0123) {#C0123}

This error occurs when `type` is used instead of `isinstance` to perform a type check. Use `isinstance(x, Y)` instead of `type(x) == Y`.

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

This error is similar to [C0121](#C0121).


### Dangerous default value (W0102) {#W0102}

This warning occurs when a mutable object, such as a list or dictionary, is provided as a default argument inside a function or a method definition. Default arguments are instantiated only once, at the time when the function or the method is defined (i.e. when the interpreter parses the `def ...` block). If the default argument is modified, it will remain modified in all subsequent calls of the function or method. This leads to a common "gotcha" in Python, where an "empty" list or dictionary, specified as the default argument, starts containing values on calls other than the first call.

~~~~ {include="W0102_dangerous_default_value"}
~~~~

Many new users of Python would expect the output of the code above to be:

```
[0, 1, 2, 3, 4]
[0, 1, 2, 3, 4]
```

However, the actual output is:

```
[0, 1, 2, 3, 4]
[0, 1, 2, 3, 4, 0, 1, 2, 3, 4]
```

If you want to prevent this surprising behavior, you should use `None` as the default argument, and then check for `None` inside the function body. For example, the following code prints the expected output:

```python
def make_list(n, lst=None):
    if lst is None:
        lst = []
    for i in range(n):
        lst.append(i)
    print(lst)


print(make_list(5))
print(make_list(5))
```

**See also**:

- [Common Gotchas - Mutable Default Arguments]
- [Default Parameter Values in Python]

### Assert on tuple (W0199) {#W0199}

This error occurs when an `assert` statement is called with a tuple as the first argument. `assert` acting on a tuple passes if and only if the tuple is non-empty. This is likely *not* what the programmer had intended.

~~~~ {include="W0199_assert_on_tuple"}
~~~~

If you would like to assert multiple conditions, you should join those conditions using the `and` operator, or use individual `assert` statements for each condition.

```python
def check(condition1, condition2, condition3):
    # Option 1
    assert (condition1 and condition2 and condition3)
    # Option 2
    assert condition1
    assert condition2
    assert condition3
```

If you would like `assert` to show a special error message when the assertion fails, you should provide that message as the second argument.

```python
def check(condition, message):
    assert condition, message  # the message is optional
```


## Syntax errors {#syntax}

### Syntax Error (E0001) {#E0001}

1. *SyntaxError: Missing parentheses in call to 'print'*

    In Python 3, `print` is a builtin *function*, and should be called like any other function, with arguments inside parentheses. In previous versions of Python, `print` had been a keyword.

    ~~~~ {include="missing_parentheses_in_call_to_print"}
    ~~~~

2. *SyntaxError: can't assign to literal*

    There must always be a variable on the left-hand side of the equals sign (where the term "variable" can refer to a single identifier `a = 10`, multiple identifiers `a, b = 10, 20`, a dictionary element `foo['a'] = 10`, a class attribute `foo.bar = 10`, etc.). You cannot assign to a string or numeric literal.

    ~~~~ {include="assignment_to_literal"}
    ~~~~

3. *SyntaxError: invalid syntax*

    Some of the common causes of this error include:

    a. Missing colon at the end of an `if`, `elif`, `else`, `for`, `while`, `class`, or `def` statement.

        ~~~~ {include="missing_colon"}
        ~~~~

    b. Assignment operator `=` used inside a condition expression (likely in place of the equality operator `==`).

        ~~~~ {include="assignment_inside_condition"}
        ~~~~

    c. Missing quote at the beginning or the end of a string literal.

        ~~~~ {include="missing_quote"}
        ~~~~

    d. Assignment to a Python keyword.

        ~~~~ {include="assignment_to_keyword"}
        ~~~~

        The following is a [list of Python keywords][Keywords] which cannot be used as variable names:

        ```
        False      class      finally    is         return
        None       continue   for        lambda     try
        True       def        from       nonlocal   while
        and        del        global     not        with
        as         elif       if         or         yield
        assert     else       import     pass
        break      except     in         raise
        ```

    f. Use of an undefined operator. For example, there are no "increment by one" `++` or "decrement by one" `--` operators in Python.

        ~~~~ {include="undefined_operator"}
        ~~~~

### Indentation Error (E0002) {#E0002}

1. *IndentationError: unindent does not match any outer indentation level*

    You must use a constant number of whitespace characters for each level of indentation. If you start a code block using four spaces for indentation, you must use four spaces throughout that code block.

    ~~~~ {include="unindent_does_not_match_indentation"}
    ~~~~

    Note that it is **strongly recommended** that you [**always use four spaces per indentation level**][PEP8: Indentation] throughout your code.

2. *IndentationError: unexpected indent*

    In Python, the only time you would increase the indentation level of your code is to define a new code block after a [compound statement][Compound statements] such as `for`, `if`, `def`, or `class`.

    ~~~~ {include="unexpected_indent"}
    ~~~~


<!-- Python objects -->
[__init__]: https://docs.python.org/3/reference/datamodel.html#object.__init__
[str.strip]: https://docs.python.org/3/library/stdtypes.html#str.strip
[str.lstrip]: https://docs.python.org/3/library/stdtypes.html#str.lstrip
[str.rstrip]: https://docs.python.org/3/library/stdtypes.html#str.rstrip
[super]: https://docs.python.org/3/library/functions.html#super

<!-- Python docs -->
[`pass` statements]: https://docs.python.org/3/tutorial/controlflow.html#pass-statements
[Built-in Functions]: https://docs.python.org/3/library/functions.html

[Binary arithmetic operations]: https://docs.python.org/3/reference/expressions.html#binary-arithmetic-operations
[Compound statements]: https://docs.python.org/3/reference/compound_stmts.html
[Keywords]: https://docs.python.org/3/reference/lexical_analysis.html#keywords
[Literals]: https://docs.python.org/3/reference/lexical_analysis.html#literals
[Operators]: https://docs.python.org/3/reference/lexical_analysis.html#operators
[Delimiters]: https://docs.python.org/3/reference/lexical_analysis.html#delimiters
[String and Bytes literals]: https://docs.python.org/3/reference/lexical_analysis.html#string-and-bytes-literals

[Unary arithmetic and bitwise operations]: https://docs.python.org/3/reference/expressions.html#unary-arithmetic-and-bitwise-operations

<!-- PEP8 -->
[PEP8: Indentation]: https://www.python.org/dev/peps/pep-0008/#indentation

<!-- StackOverflow -->
[StackOverflow: pep8 warning on regex string in Python, Eclipse]: https://stackoverflow.com/a/19030982/2063031

<!-- everything else -->
[Common Gotchas - Mutable Default Arguments]: http://python-guide-pt-br.readthedocs.io/en/latest/writing/gotchas/#mutable-default-arguments
[Default Parameter Values in Python]: http://effbot.org/zone/default-values.htm
[list comprehensions tutorial]: https://www.digitalocean.com/community/tutorials/understanding-list-comprehensions-in-python-3
[PEP8 Imports]: https://www.python.org/dev/peps/pep-0008/#imports
[Python Naming Convention]: https://www.python.org/dev/peps/pep-0008/#prescriptive-naming-conventions
[Python's Super Considered Harmful]: https://fuhm.net/super-harmful/
[StackOverflow: Reasons for `pass`]: https://stackoverflow.com/a/22612774/2063031
[Super Considered Super!]: https://youtu.be/EiOglTERPEo
[The scope of index variables in Python's for loops]: http://eli.thegreenplace.net/2015/the-scope-of-index-variables-in-pythons-for-loops/
[What does 'super' do in Python?]: https://stackoverflow.com/q/222877/2063031
[Python double-under, double-wonder]: http://www.pixelmonkey.org/2013/04/11/python-double-under-double-wonder
