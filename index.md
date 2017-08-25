% PyTA Help Documentation

Welcome to the **PyTA documentation website**, which describes in greater detail the errors that PyTA checks for.
If anything is unclear, incorrect, or missing, please don't hesitate to send an email to \[david at cs dot toronto dot edu\].


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

Python, unlike many other languages (e.g. C, C++, Java), allows loop variables to be accessed outside the loop in which they were defined. However, this practice is discouraged, as it can lead to obscure and hard-to-detect bugs.

**See also**:

- [The scope of index variables in Python's for loops]


### Not in loop (E0103) {#E0103}

This error occurs when the `break` or `continue` keyword is used outside of a loop. The keyword `break` is used to exit a loop early and the keyword `continue` is used to skip an iteration in a loop. Hence both the keywords only belong inside loops.

~~~~ {include="E0103_not_in_loop"}
~~~~

A common source of this error is when the `break` or `continue` is not indented properly (it must be indented to be considered part of the loop body).


### Return outside function (E0104) {#E0104}

This error occurs when a `return` statement is found outside a function or method.

~~~~ {include="E0104_return_outside_function"}
~~~~

A common source of this error is when the `return` is not indented properly (it must be indented to be considered part of the loop body).


### Unreachable (W0101) {#W0101}

This error occurs when there is some code after a `return` or `raise` statement. This code will never be run, so either it should be removed, or the function is returning too early.

~~~~ {include="W0101_unreachable"}
~~~~


### Duplicate key (W0109) {#W0109}

This error occurs when a dictionary literal sets the same key multiple times.

~~~~ {include="W0109_duplicate_key"}
~~~~

Dictionaries map unique keys to values. When different values are assigned to the same key, the last assignment takes precedence. This is rarely what the user wants when they are constructing a dictionary.


## Type errors

These errors are some of the most common errors we encounter in Python.
They generally have to do with using a value of one type where another type is required.

### No member (E1101) {#E1101}

This error occurs when you use dot notation (`my_var.x`) to access an attribute
or to call a method which does not exist for the given object.

This can happen both for built-in types like `str` and for classes that you define yourself.
This error often results in an [**AttributeError**][AttributeError] when you run your program.

~~~~ {include="E1101_no_member"}
~~~~


### Not callable (E1102) {#E1102}

This error occurs when you try to call a value which is not a function, method, or callable object.
In the following example, we should not call `x()` because `x` refers to an integer, and calling an integer has no meaning.

~~~~ {include="E1102_not_callable"}
~~~~


### Assignment from no return (E1111) {#E1111}

This error occurs when you assign a variable to the return value of a function call, but the function never returns anything. In the following example, `add_fruit` mutates `fruit_basket` instead of returning a new list. As a result, `new_fruit_basket` always gets the value `None`.

~~~~ {include="E1111_assignment_from_no_return"}
~~~~

You should either modify `add_fruit` to return a new list, or call `add_fruit` without assigning the return value to a variable.

**See also**:

- [E1128](#E1128)


### No value for parameter (E1120) {#E1120}

A function must be called with one argument value per parameter in its header. This error indicates you called a function with too few arguments. In the following example, there should be *three* values passed to the function
instead of two.

~~~~ {include="E1120_no_value_for_parameter"}
~~~~

Corrected version:

```python
get_sum(1, 2, 3)
```


### Too many function args (E1121) {#E1121}

A function must be called with one argument value per parameter in its header. This error indicates you called a function with too many arguments. In the following example, there should be *two* values passed to the function instead of three.



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

This error occurs when you assign a variable the return value of a function call, but the function always returns `None`. In the following example, `add_fruit` always returns `None`.  As a result, `new_fruit_basket` will always get the value `None`.

~~~~ {include="E1128_assignment_from_none"}
~~~~

**See also**:

- [E1111](#E1111)


### Invalid unary operand type (E1130) {#E1130}

This error occurs when you use a [unary operator][Unary arithmetic and bitwise operations] (`+`, `-`, `~`) on an object which does not support this operator. For example, a list does not support negation.

~~~~ {include="E1130_invalid_unary_operand_type"}
~~~~


### Unsupported binary operation (E1131) {#E1131}

This error occurs when you use a [binary arithmetic operator][Binary arithmetic operations] like `+` or `*`, but the left and right sides are not compatible types. For example, a dictionary cannot be added to a list.

~~~~ {include="E1131_unsupported_binary_operation"}
~~~~


### Unsupported membership test (E1135) {#E1135}

This error occurs when you use the membership test `a in b`, but the type of `b` does not support membership tests.

The standard Python types which support membership tests are strings, lists, tuples, and dictionaries.

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
def is_even(num: int) -> bool:
    """Return whether <num> is even."""
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

This error occurs when an expression is compared to singleton values like `True`, `False` or `None`.

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

**See also**:

- [The story of None, True and False (and an explanation of literals, keywords and builtins thrown in)][The story of None, True and False]


### Using constant test (W0125) {#W0125}

This error occurs when a conditional statement (like an `if` statement) uses a constant value for its test. In such a case, a conditional statement is not necessary, as it will always result in the same path of execution.

~~~~ {include="W0125_using_constant_test"}
~~~~


### Too many branches (R0912) {#R0912}

The function or method has too many branches, making it hard to follow.
This is a sign that the function/method is too complex, and should be split up.

**Note**: The checker limit is 12 branches.

~~~~ {include="R0912_too_many_branches"}
~~~~


### Too many nested blocks (R1702) {#R1702}

This error occurs when you have more than three levels of nested blocks in your code.
Deep nesting is a sign that your function or method is too complex, and should be broken down using helper functions or rewritten as a [list comprehension][list comprehensions tutorial].

**Note**: This checker does not count function, method, or class definitions as blocks, so the example below is considered to have *six* nested blocks, not seven.

~~~~ {include="R1702_too_many_nested_blocks"}
~~~~

The code above can be fixed using a helper function:

```python
def drop_none(lst: List[Optional[int]]) -> List[int]:
    new_lst = []
    for element in lst:
        if element is not None:
            new_lst.append(element)
    return new_lst


def cross_join(x_list: List[Optional[int]], y_list: List[Optional[int]],
               z_list: List[Optional[int]]) -> List[Tuple[int, int, int]]:
    cross_join_list = []
    for x in drop_none(x_list):
        for y in drop_none(y_list):
            for z in drop_none(z_list):
                cross_join_list.append((x, y, z))
    return cross_join_list
```

or using list comprehension:

```python
def cross_join(x_list: List[Optional[int]], y_list: List[Optional[int]],
               z_list: List[Optional[int]]) -> List[Tuple[int, int, int]]:
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

**Note**: The checker limit is 5 arguments.

~~~~ {include="R0913_too_many_arguments"}
~~~~


### Too many locals (R0914) {#R0914}

The function or method has too many local variables.

**Note**: The checker limit is 15 local variables.

~~~~ {include="R0914_too_many_locals"}
~~~~


### Too many statements (R0915) {#R0915}

The function or method has too many statements. You should split it into smaller functions/methods.

**Note**:

- The checker limit is 50 statements.
- Comments do not count as statements.

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

~~~~ {include="W0104_pointless_statement"}
~~~~


### Unnecessary pass (W0107) {#W0107}

This error occurs when a [`pass` statement][`pass` statements] is used that can be avoided (or has no effect). `pass` statements should only be used to fill what would otherwise be an empty code block, since code blocks cannot be empty in Python.

~~~~ {include="W0107_unnecessary_pass"}
~~~~

In the above example, the `pass` statement is "unnecessary" as the program's
effect is not changed if `pass` is removed.

**See also:**

- [StackOverflow: How To Use The Pass Statement In Python]


## Documentation and naming

Good documentation and identifiers are essential for writing software.
PyTA helps check to make sure you haven't forgotten to document anything,
as well as a basic check on the formatting of your identifiers.

### Missing Docstring (C0111) {#C0111}

This error occurs when a module, function, class or method has no docstring.
Special methods like `__init__` do not require a docstring.

~~~~ {include="C0111_missing_docstring"}
~~~~


### Empty Docstring (C0112) {#C0112}

This error occurs when a module, function, class or method has an empty
docstring.

~~~~ {include="C0112_empty_docstring"}
~~~~


### Blacklisted name (C0102) {#C0102}

This error occurs when a variable name is chosen to be a typical generic name,
rather than a meaningful one. Here are some of the blacklisted names to avoid:

- `foo`
- `bar`
- `baz`
- `toto`
- `tutu`
- `tata`

~~~~ {include="C0102_blacklisted_name"}
~~~~


### Invalid name (C0103) {#C0103}

This error occurs when a name does not follow the [Python Naming Convention][PEP8: Naming Conventions] associated with its type (constant, variable, etc.).

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
definitions. All parameters must have distinct names, so that you can refer to each
one separately in the function body.

~~~~ {include="E0108_duplicate_argument_name"}
~~~~


### Redefined outer name (W0621) {#W0621}

This error occurs when you are trying to redefine a variable name that has already been defined in the outer scope.

For example, this error will occur when you have a local name identical to a global name. The local name takes precedence, but it hides the global name, making it no longer accessible. Note that the global name is not accessible *anywhere* in the function where it is redefined, even before the redefinition.

~~~~ {include="W0621_redefined_outer_name"}
~~~~


### Redefined builtin (W0622) {#W0622}

This error occurs when you are trying to redefine a built-in function, constant, class, or exception.

~~~~ {include="W0622_redefined_builtin"}
~~~~

The following is a list of [builtin functions][Built-in Functions] in Python 3.6.

```text
abs                 all                 any                 ascii               bin
bool                bytearray           bytes               callable            chr
classmethod         compile             complex             copyright           credits
delattr             dict                dir                 divmod              dreload
enumerate           eval                exec                filter              float
format              frozenset           get_ipython         getattr             globals
hasattr             hash                help                hex                 id
input               int                 isinstance          issubclass          iter
len                 license             list                locals              map
max                 memoryview          min                 next                object
oct                 open                ord                 pow                 print
property            range               repr                reversed            round
set                 setattr             slice               sorted              staticmethod
str                 sum                 super               tuple               type
vars                zip
```

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

There are other forms of import statements that may cause this error. For example:

```python
import missing_module as foo  # this module does not exist
```


### No name in module (E0611) {#E0611}

This error occurs when you are trying to access a variable from an imported
module, but that variable name could not be found in that referenced module.

~~~~ {include="E0611_no_name_in_module"}
~~~~


### Import self (W0406) {#W0406}

A module should not import itself. For example, if you have a module named `W0406_import_self`, it should not import a module with the same name.

~~~~ {include="W0406_import_self"}
~~~~

This error can occur when the name of your python file conflicts with the name of a module which you would like to import. For example, if you have a Python file named `math.py`, calling `import math` from within that file (or from within *any* Python file in the same directory) will import *your* `math.py` file, and not the [`math` module] from the standard library.


### Reimported (W0404) {#W0404}

A module should not be imported more than once.

~~~~ {include="W0404_reimported"}
~~~~


### Wildcard import (W0401) {#W0401}

Only import what you need. Wildcard imports (shown below) are generally discouraged, as they add all objects from the imported module into the global namespace. This makes it difficult to tell in which module a particular class, function or constant was defined, and may cause problems, for example, when multiple modules have objects with identical names.

~~~~ {include="W0401_wildcard_import"}
~~~~

Rather than importing everything with wildcard `*`, specify the names of the objects which you would like to import:

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

Imports should be placed at the top of the module, above any other code, but below the module docstring.

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

Rather, each module should be imported on a separate line.

```python
import sys
import math
```

Note, however, that you can import multiple functions, classes, or constants on one line, as long as they are from the same module.

```python
from shutil import copy, SameFileError
```


### Unused import (W0611) {#W0611}

This error occurs when you import a module which is not used anywhere in your code.

~~~~ {include="W0611_unused_import"}
~~~~


## Classes and objects

### Too many instance attributes (R0902) {#R0902}

The class has too many instance attributes, which suggests that it is too complicated and tries to do too many things.

**Note**: The checker limit is 7 instance attributes.

~~~~ {include="R0902_too_many_instance_attributes"}
~~~~

One solution is to logically decompose the class into multiple classes, each with fewer
instance attributes. You can then use composition to access those attributes in
a different class.

```python
class Edible(object):
    """Class with a few instance attributes."""

    def __init__(self) -> None:
        self.bread = "Sourdough"
        self.liquid = "Water"


class Ownership(object):
    """Class with a few instance attributes."""

    def __init__(self) -> None:
        self.animal = "Dog"
        self.clothing = "Shirt"


class Description(object):
    """Class with a few instance attributes."""

    def __init__(self) -> None:
        self.colour = "Black"
        self.shape = "Circle"
        self.direction = "Up"
        self.number = 3


class Composition(object):
    """Class using composition to leverage other classes.

    Example
    -------
    >>> comp = Composition()
    >>> isinstance(comp.ownership, Ownership)
    True
    >>> comp.description.colour
    'Black'
    """

    def __init__(self) -> None:
        self.edible = Edible()
        self.ownership = Ownership()
        self.description = Description()
```


### Different method signature (W0222) {#W0222}

When a child class overrides a method of the parent class, the new method should have the same signature as the method which it is overriding. In other words, the names and the order of the parameters should be the same in the two methods.

~~~~ {include="W0222_signature_differs"}
~~~~


### Return in `__init__` (E0101) {#E0101}

This error occurs when the [`__init__`] method contains a return statement.

The purpose of the `__init__` method is to initialize the attributes of an object. `__init__` is called by the special method [`__new__`] when a new object is being instantiated, and `__new__` will raise a `TypeError` if `__init__` returns anything other than `None`.

~~~~ {include="E0101_return_in_init"}
~~~~


### Protected member access (W0212) {#W0212}

Attributes and methods whose name starts with an underscore should be considered "private" and should not be accessed outside of the class in which they are defined.

~~~~ {include="W0212_protected_access"}
~~~~

Private attributes and methods can be modified, added, or removed by the maintainer of the class at any time, which makes external code which uses those attributes or methods fragile. Furthermore, modifying a private attribute or calling a private method may lead to undefined behavior from the class.


### Bad parent init (W0233) {#W0233}

When using inheritance, you should call the `__init__` method of the parent class, and not of some unrelated class.

~~~~ {include="W0233_non_parent_init"}
~~~~

To fix this, call the `__init__` method of the parent class, or use [`super()`][super].

```python
# Call the `__init__` method on the correct parent class
class Child(Parent):
    def __init__(self) -> None:
        Parent.__init__(self)

# Or use `super()`
class Child(Parent):
    def __init__(self) -> None:
        super().__init__()
```

**See also**:

- [Super considered super!]
- [Python's super considered harmful]
- [StackOverflow: What does 'super' do in Python?]


### Attribute defined outside init (W0201) {#W0201}

Any attribute you define for a class should be created inside the `__init__`
method. Defining it outside this method is considered bad practice,
as it makes it harder to keep track of what attributes the class actually has.

~~~~ {include="W0201_attribute_defined_outside_init"}
~~~~

You should do this instead:

```python
class MyClass:
    def __init__(self) -> None:
        self.num = 1
        self.other_num = None

    def set_other_num(self, other_num) -> None:
        self.other_num = other_num
```


### Access to member before definition (E0203) {#E0203}

Before trying to use a member of a class, it should have been defined at
some point. If you try to use it before assigning to it, an error will occur.

~~~~ {include="E0203_access_member_before_definition"}
~~~~


### Method hidden (E0202) {#E0202}

If you accidentally hide a method with an attribute, it can cause other code to attempt to invoke what it believes to be a method, which will fail since it has become an attribute instead. This will cause the program to raise an error.

```python
class Example:
    def field(self, num: float) -> float:
        return num

    def __init__(self) -> None:
        self.field = 'Hiding the function with this string'

e = Example()
e.field(num)   # Error on this line
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
    def __init__(self) -> None:
        pass

    def method(self) -> None:
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
    def __init__(self) -> None:
        self.num = 5

    @staticmethod
    def method(self) -> int:  # Static methods do not have a 'self'
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
in Python with multiple classes separated by an *or* (see example). If you do
it the second way, the *or* binary operator will not do what you think it does
-- in fact, the exception on the right side of the *or* will not be caught and
proceed to be passed up the call stack (which likely will yield an uncaught
exception, terminating your program).

~~~~ {include="W0711_binary_op_exception"}
~~~~


### Misplaced bare raise (E0704) {#E0704}

When you call *raise*, it's usually to throw an exception. If you are inside
an 'except' block after you catch an exception, you can continue to pass on
the exception to later code. You may want to do this if your intention is to
capture a generated exception, then do something before passing it onwards
(such as maybe closing a file or some other sensitive operation that must
be done for program integrity that an exception would break). You can do this
by calling *raise* on its own without a class as follows:

```python
def func() -> None:
    try:
        raise MyException()
    except MyException:
        # Do something important here (if needed).
        # Now, raise again what we just caught.
        raise
```

If you call *raise* outside of an 'except' block, it can't work because there
is no exception to throw, as seen in the following example:

```python
def bad_raise() -> None:
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

We do not expect to see I/O functions ([`input`], [`open`] and [`print`]) in your code in this course unless explicitly required. If you use print statements to debug your code, make sure to remove them before submission.

~~~~ {include="E9998_forbidden_io_function"}
~~~~

### Always returning in a loop (E9996) {#E9996}

This error occurs when you *always* return something inside a loop body, which makes the loop execute only once.

~~~~ {include="always_returning_example"}
~~~~

### Dynamic Execution (E9991) {#E9991}

Use of builtin functions [`exec`], [`eval`], and [`compile`] is not allowed.

~~~~ {include="dynamic_execution_example"}
~~~~

**See also**:

- [StackOverflow: What's the difference between eval, exec, and compile in Python?]


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

This error occurs when a format string that uses named fields does not receive the required keywords. In the following example, we should assign three values for `last_name`, `first_name`, and `age`.

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

It is a common mistake to think that `mystring.strip(chars)` removes the substring `chars` from the beginning and end of `mystring`. It actually removes all characters in `chars` from the beginning and end of `mystring`, *irrespective of their order*!
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

This error occurs when a string literal contains a backslash that is not part of an escape sequence.

~~~~ {include="W1401_anomalous_backslash_in_string"}
~~~~

The following is a [list of recognized escape sequences][String and Bytes literals] in Python string literals.

```txt
\newline    \a          \r          \xhh
\\          \b          \t          \N{name}
\'          \f          \v          \uxxxx
\"          \n          \ooo        \Uxxxxxxxx
```

If a backslash character is not used to start one of the escape sequences listed above, you should make this explicit by escaping the backslash with another backslash.

```python
print('This is a tab: \t')
print('This is a newline: \n')
print('This is not an escape sequence: \\d')
```


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
def is_int(obj: Union[int, float, str]) -> bool:
    """Check if the given object is of type 'int'."""
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
from typing import List, Optional

def make_list(n: int, lst: Optional[List[int]]=None) -> List[int]:
    if lst is None:
        lst = []
    for i in range(n):
        lst.append(i)
    return lst


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
def check(condition1: bool, condition2: bool, condition3: bool) -> None:
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

1.  *SyntaxError: Missing parentheses in call to 'print'*

    In Python 3, `print` is a builtin *function*, and should be called like any other function, with arguments inside parentheses. In previous versions of Python, `print` had been a keyword.

    ~~~~ {include="missing_parentheses_in_call_to_print"}
    ~~~~

2.  *SyntaxError: can't assign to literal*

    There must always be a variable on the left-hand side of the equals sign (where the term "variable" can refer to a single identifier `a = 10`, multiple identifiers `a, b = 10, 20`, a dictionary element `foo['a'] = 10`, a class attribute `foo.bar = 10`, etc.). You cannot assign to a string or numeric literal.

    ~~~~ {include="assignment_to_literal"}
    ~~~~

3.  *SyntaxError: invalid syntax*

    Some of the common causes of this error include:

    1.  Missing colon at the end of an `if`, `elif`, `else`, `for`, `while`, `class`, or `def` statement.

        ~~~~ {include="missing_colon"}
        ~~~~

    2.  Assignment operator `=` used inside a condition expression (likely in place of the equality operator `==`).

        ~~~~ {include="assignment_inside_condition"}
        ~~~~

    3.  Missing quote at the beginning or the end of a string literal.

        ~~~~ {include="missing_quote"}
        ~~~~

    4.  Assignment to a Python keyword.

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

4.  *IndentationError: unindent does not match any outer indentation level*

    You must use a constant number of whitespace characters for each level of indentation. If you start a code block using four spaces for indentation, you must use four spaces throughout that code block.

    ~~~~ {include="unindent_does_not_match_indentation"}
    ~~~~

    Note that it is **strongly recommended** that you [**always use four spaces per indentation level**][PEP8: Indentation] throughout your code.

5.  *IndentationError: unexpected indent*

    In Python, the only time you would increase the indentation level of your code is to define a new code block after a [compound statement][Compound statements] such as `for`, `if`, `def`, or `class`.

    ~~~~ {include="unexpected_indent"}
    ~~~~


## New errors {#new}

### Consider iterating dictionary (C0201) {#C0201}

It is more *pythonic* to iterate through a dictionary directly, without calling the `.keys` method.

~~~~ {include="C0201_consider_iterating_dictionary"}
~~~~

Corrected version:

```python
for item in menu:
    print("My store sells {}.".format(item))
```

### Superfluous parens (C0325) {#C0325}

This error occurs when a keyword, such as `if` or `for`, is followed by a single item enclosed in parentheses. In such a case, parentheses are not necessary.

~~~~ {include="C0325_superfluous_parens"}
~~~~

Corrected version:

```python
if 'anchovies' in pizza_toppings:  # Error on this line
    print("Awesome!")
```

### Literal comparison (R0123) {#R0123}

This error occurs when we use the identity operator `is` to compare Python literals. Whether or not two literals representing the same value (e.g. two identical strings) have the same identity can vary, depending on the way the code is being executed, the code that has ran previously, and the version and implementation of the Python interpreter. For example, each of the following assertions pass if the lines are evaluated together from a Python file, but `assert num is 257` and `assert chars is 'this string fails'` fail if the lines are entered into a Python interpreter one-by-one.

~~~~ {include="R0123_literal_comparison"}
~~~~

To prevent the confusion, it is advisable to use the equality operator `==` when comparing objects with Python literals.

```python
num = 256
assert num == 256

num = 257
assert num == 257  # Assertion fails if typed into a Python interpreter

chars = 'this_string_passes'
assert chars == 'this_string_passes'

chars = 'this string fails'
assert chars == 'this string fails'  # Assertion fails if typed into a Python interpreter
```

**See also**:

- [Literally Literals and Other Number Oddities In Python]
- [StackOverflow: About the changing id of an immutable string]
- [StackOverflow: When does Python allocate new memory for identical strings?]

### Unsupported assignment operation (E1137) {#E1137}

This error occurs when we assign something to an object which does not support assignment (i.e. an object which does not define the `__setitem__` method).

~~~~ {include="E1137_unsupported_assignment_operation"}
~~~~

While we cannot mutate an immutable object, often, we can create a new object instead.

```python
my_string = "Hello World!"
my_string = my_string[:6] + "Universe!"
print(my_string)  # Prints 'Hello Universe!'
```

### Expression not assigned (W0106) {#W0106}

This error occurs when an expression that is not a function call is not assigned to a variable. Typically, this indicates that we were indenting to do something else.

~~~~ {include="W0106_expression_not_assigned"}
~~~~

Corrected version:

```python
lst = [1, 2, 3]
lst.append(4)
print("Appended 4 to my list!")
```

### Invalid length returned (E0303) {#E0303}

This error occurs when the `__len__` special method returns something other than a non-negative integer.

~~~~ {include="E0303_invalid_length_returned"}
~~~~

Corrected version:

```python
class Company:

    def __init__(self, employees: List[str]) -> None:
        self._employees = employees

    def __len__(self) -> int:
        return len(self._employees)
```

### Abstract method (W0223) {#W0223}

This error occurs when an abstract method (i.e. a method with a `raise NotImplementedError` statement) is not overridden inside a concrete class.

~~~~ {include="W0223_abstract_method"}
~~~~

Corrected version:

```python
class Cat(Animal):

    def make_sound(self) -> str:
        return 'Miew...'
```

### Arguments differ (W0221) {#W0221}

This error occurs when a method takes a different number of arguments than the interface that it implements or the method that it overrides.

~~~~ {include="W0221_arguments_differ"}
~~~~

Corrected version:

```python
class Dog(Animal):
    """Class representing a dog."""

    def make_sound(self, mood: str) -> None:
        if mood == 'happy':
            print("Woof Woof!")
        elif mood == 'angry':
            print("Grrrrrrr!!")
```

### Unexpected keyword arg (E1123) {#E1123}

This error occurs when a function call passes a keyword argument which does not match the signature of the function being called.

~~~~ {include="E1123_unexpected_keyword_arg"}
~~~~

Corrected version:

```python
print_greeting(name="Arthur")
```

### Redefined argument from local (R1704) {#R1704}

This error occurs when a local name is redefining the name of a parameter. We should avoid reusing the name of a parameter in binding operations such as for iteration, with statement assignment, and exception handler assignment, as this needlessly obfuscates the code.

~~~~ {include="R1704_redefined_argument_from_local"}
~~~~

Corrected version:

```python
def greet_person(name, friends) -> None:
    print("My name is {}".format(name))
    for friend in friends:
        print("I am friends with {}".format(friend))
```

### Trailing comma tuple (R1707) {#R1707}

This error occurs when a Python expression is terminated by a comma. In Python, a tuple is created by the comma symbol, not by parentheses. This makes it easy to create a tuple accidentally, by misplacing a comma, which can lead to obscure bugs. In order to make our intention clear, we should always use parentheses when creating a tuple, and we should never leave a trailing comma in our code.

~~~~ {include="R1707_trailing_comma_tuple"}
~~~~

Corrected version:

```python
my_lucky_number = 7
print(my_lucky_number)  # Prints 7
```

### Bad whitespace (C0326) {#C0326}

This error occurs when we include a wrong number of spaces around an operator, bracket, or block opener. We should aim to follow the [PEP8 convention on whitespace in expressions and statements][PEP8: Whitespace in Expressions and Statements].

~~~~ {include="C0326_bad_whitespace"}
~~~~

Corrected version:

```python
def func(temp: int) -> bool:
    """Return whether <temp> is greater than 0."""
    return temp > 0
```

### Mixed indentation (W0312) {#W0312}

This error occurs when the code is indented with a mix of tabs and spaces. Please note that [*spaces are the preferred indentation method*][PEP8: Tabs or Spaces?].

~~~~ {include="W0312_mixed_indentation"}
~~~~

Corrected version:

```python
def hello_world() -> None:
    """Greet the universe with a friendly 'Hello World!'."""
    print("Hello World!")
```

### Bad indentation (W0311) {#W0311}

This error occurs when an unexpected number of tabs or spaces is used to indent the code. It is recommended that you use [*four spaces per indentation level*][PEP8: Indentation] throughout your code.

~~~~ {include="W0311_bad_indentation"}
~~~~

Corrected version:

```python
def print_greeting(name: str) -> None:
    print('Hello {}!'.format(name))
```


### Multiple statements (C0321) {#C0321}

This error occurs when we write more than one statement on a single line. According to PEP8, [*multiple statements on the same line are discouraged*][PEP8: Other Recommendations].

~~~~ {include="C0321_multiple_statements"}
~~~~

Corrected version:

```python
def pos(temp: int) -> str:
    if temp > 0:
      return 'positive'
    else:
        return 'negative'
```

### Unnecessary semicolon (W0301) {#W0301}

This error occurs when we end a Python statement with a semicolon. There is no good reason to ever use a semicolon in Python.

~~~~ {include="W0301_unnecessary_semicolon"}
~~~~

Corrected version:

```python
print("Hello World!")
```


### Missing final newline (C0304) {#C0304}

This error occurs when a file is missing a trailing newline character. For example, if we represent a (typically invisible) newline character as `¬`, the following file would raise this error:

~~~~ {include="C0304_missing_final_newline"}
~~~~

while the corrected file which contains a trailing newline character would not:

```python
print("Hello World!")  # Trailing newline is present:  ¬
```

### Trailing newlines (C0305) {#C0305}

This error occurs when a file ends with more than one newline character (i.e. when a file contains trailing blank lines). For example:

~~~~ {include="C0305_trailing_newlines"}
~~~~

Corrected version:

```python
print("Hello World!")  # This file ends with a single newline character! :)
```

### Bad continuation (C0330) {#C0330}

This error occurs when we use an inconsistent number of spaces to indent arguments or parameters in function and method calls or definitions.

~~~~ {include="C0330_bad_continuation"}
~~~~

Corrected version:

```python
def print_address(recipient_name: str,
                  street_number_and_name: str,
                  city: str,
                  province: str,
                  country: str) -> None:
    """Print the provided address in a standardized format."""
    address_string = (
        "{recipient_name}\n"
        "{street_number_and_name}\n"
        "{city}, {province}\n"
        "{country}"
        .format(
            recipient_name=recipient_name,
            street_number_and_name=street_number_and_name,
            city=city,
            province=province,
            country=country))
    print(address_string)
```

### Nonexistent operator (E0107) {#E0107}

This error occurs when we attempt to use C-style "increment by one" or "decrement by one" operators `++` and `--`, which do not exist in Python.

~~~~ {include="E0107_nonexistent_operator"}
~~~~

Corrected version:

```python
spam = 0
spam += 1
spam -= 1
```

### Used prior global declaration (E0118) {#E0118}

This error occurs when we use a global name prior to the global declaration.

~~~~ {include="E0118_used_prior_global_declaration"}
~~~~

Corrected version:

```python
def timestep() -> None:
    """Increment global time by 1."""
    global TIME
    print(TIME)
    TIME += 1
```

### Not an iterable (E1133) {#E1133}

This error occurs when a non-iterable value is used in a place where an iterable is expected. An iterable is an object capable of returning its members one at a time. Examples of iterables include sequence types such as `list`, `str`, and `tuple`, some non-sequence types such as `dict`, and instances of other classes which define the `__iter__` or `__getitem__` special methods.

~~~~ {include="E1133_not_an_iterable"}
~~~~

Corrected version:

```python
for number in [1, 2, 3]:
    print(number)
```

**See also**:

- [Python Documentation: Glossary]

### Line too long (C0301) {#C0301}

:line-too-long (C0301): *Line too long (%s/%s)*
  Used when a line is longer than a given number of characters. This message
  belongs to the format checker.

~~~~ {include="C0301_line_too_long"}
~~~~

### Unsupported delete operation (E1138) {#E1138}

This error occurs when the `del` keyword is used to delete an item from an object which does not support item deletion.

~~~~ {include="E1138_unsupported_delete_operation"}
~~~~

Corrected version:

```python
class NamedList:

    ...  # Same as in the code above

    def __delitem__(self, name: str) -> None:
        idx = self._names.index(name)
        del self._names[idx]
        del self._values[idx]

named_list = NamedList(['a', 'b', 'c'], [1, 2, 3])
print('c' in named_list)  # Prints True
del named_list['c']
print('c' in named_list)  # Prints False
```

<!-- Python objects -->
[`__init__`]: https://docs.python.org/3/reference/datamodel.html#object.__init__
[`__new__`]: https://docs.python.org/3/reference/datamodel.html#object.__init__
[str.strip]: https://docs.python.org/3/library/stdtypes.html#str.strip
[str.lstrip]: https://docs.python.org/3/library/stdtypes.html#str.lstrip
[str.rstrip]: https://docs.python.org/3/library/stdtypes.html#str.rstrip
[super]: https://docs.python.org/3/library/functions.html#super
[`input`]: https://docs.python.org/3/library/functions.html#input
[`open`]: https://docs.python.org/3/library/functions.html#open
[`print`]: https://docs.python.org/3/library/functions.html#print
[`exec`]: https://docs.python.org/3/library/functions.html#exec
[`eval`]: https://docs.python.org/3/library/functions.html#eval
[`compile`]: https://docs.python.org/3/library/functions.html#compile

<!-- Python docs -->
[Python Documentation: Glossary]: https://docs.python.org/3/glossary.html
[`pass` statements]: https://docs.python.org/3/tutorial/controlflow.html#pass-statements
[Built-in Functions]: https://docs.python.org/3/library/functions.html

[Binary arithmetic operations]: https://docs.python.org/3/reference/expressions.html#binary-arithmetic-operations
[Compound statements]: https://docs.python.org/3/reference/compound_stmts.html
[Keywords]: https://docs.python.org/3/reference/lexical_analysis.html#keywords
<!-- [Literals]: https://docs.python.org/3/reference/lexical_analysis.html#literals
[Operators]: https://docs.python.org/3/reference/lexical_analysis.html#operators
[Delimiters]: https://docs.python.org/3/reference/lexical_analysis.html#delimiters -->
[String and Bytes literals]: https://docs.python.org/3/reference/lexical_analysis.html#string-and-bytes-literals

[Unary arithmetic and bitwise operations]: https://docs.python.org/3/reference/expressions.html#unary-arithmetic-and-bitwise-operations
[`math` module]: https://docs.python.org/3/library/math.html
[AttributeError]: https://docs.python.org/3/library/exceptions.html#AttributeError

<!-- PEP8 -->
[PEP8 Imports]: https://www.python.org/dev/peps/pep-0008/#imports
[PEP8: Indentation]: https://www.python.org/dev/peps/pep-0008/#indentation
[PEP8: Naming Conventions]: https://www.python.org/dev/peps/pep-0008/#naming-conventions
[PEP8: Other Recommendations]: https://www.python.org/dev/peps/pep-0008/#other-recommendations
[PEP8: Tabs or Spaces?]: https://www.python.org/dev/peps/pep-0008/#tabs-or-spaces
[PEP8: Whitespace in Expressions and Statements]: https://www.python.org/dev/peps/pep-0008/#whitespace-in-expressions-and-statements

<!-- StackOverflow -->
[StackOverflow: How To Use The Pass Statement In Python]: https://stackoverflow.com/a/22612774/2063031
[StackOverflow: What does 'super' do in Python?]: https://stackoverflow.com/q/222877/2063031
[StackOverflow: What's the difference between eval, exec, and compile in Python?]: https://stackoverflow.com/questions/2220699/whats-the-difference-between-eval-exec-and-compile-in-python
[StackOverflow: About the changing id of an immutable string]: https://stackoverflow.com/questions/24245324/about-the-changing-id-of-an-immutable-string
[StackOverflow: When does Python allocate new memory for identical strings?]: https://stackoverflow.com/questions/2123925/when-does-python-allocate-new-memory-for-identical-strings

<!-- everything else -->
[Common Gotchas - Mutable Default Arguments]: http://docs.python-guide.org/en/latest/writing/gotchas/#mutable-default-arguments
[Default Parameter Values in Python]: http://effbot.org/zone/default-values.htm
[list comprehensions tutorial]: https://www.digitalocean.com/community/tutorials/understanding-list-comprehensions-in-python-3
[Literally Literals and Other Number Oddities In Python]: https://www.everymundo.com/literals-other-number-oddities-python/
[Python double-under, double-wonder]: http://www.pixelmonkey.org/2013/04/11/python-double-under-double-wonder
[Python's Super Considered Harmful]: https://fuhm.net/super-harmful/
[Super Considered Super!]: https://youtu.be/EiOglTERPEo
[The scope of index variables in Python's for loops]: http://eli.thegreenplace.net/2015/the-scope-of-index-variables-in-pythons-for-loops/
[The story of None, True and False]: http://python-history.blogspot.ca/2013/11/story-of-none-true-false.html
