% PyTA Help Documentation

Welcome to the **PyTA documentation website**, which describes in greater detail the errors that PyTA checks for. If anything is unclear, incorrect, or missing, please don't hesitate to send an email to \[david at cs dot toronto dot edu\].


## Improper Python usage

These errors generally indicate a misuse of variables, control flow, or other Python features in our code.

### Used before assignment (E0601) {#E0601}

This error occurs when we are using a variable before it has been assigned a value.

~~~~ {include="E0601_used_before_assignment"}
~~~~

### Undefined variable (E0602) {#E0602}

This error occurs when we are using a variable that has not been defined.

~~~~ {include="E0602_undefined_variable"}
~~~~

### Undefined loop variable (W0631) {#W0631}

This error occurs when a loop variable is used outside the `for` loop where it was defined.

~~~~ {include="W0631_undefined_loop_variable"}
~~~~

Python, unlike many other languages (e.g. C, C++, Java), allows loop variables to be accessed outside the loop in which they were defined. However, this practice is discouraged, as it can lead to obscure and hard-to-detect bugs.

**See also**:

- [The scope of index variables in Python's for loops]


### Not in loop (E0103) {#E0103}

This error occurs when the `break` or `continue` keyword is used outside of a loop. The keyword `break` is used to exit a loop early and the keyword `continue` is used to skip an iteration in a loop. Hence, both keywords only belong inside loops.

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


### Unexpected keyword arg (E1123) {#E1123}

This error occurs when a function call passes a keyword argument which does not match the signature of the function being called.

~~~~ {include="E1123_unexpected_keyword_arg"}
~~~~

Corrected version:

```python
print_greeting(name="Arthur")
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


## Type errors

These errors are some of the most common errors we encounter in Python. They generally have to do with using a value of one type where another type is required.

### No member (E1101) {#E1101}

This error occurs when we use dot notation (`my_var.x`) to access an attribute or to call a method which does not exist for the given object. This can happen both for built-in types like `str` and for classes that we define ourselves. This error often results in an [`AttributeError`][AttributeError] when we run the code.

~~~~ {include="E1101_no_member"}
~~~~


### Not callable (E1102) {#E1102}

This error occurs when we try to call a value which is not a function, method, or callable object. In the following example, we should not call `x()` because `x` refers to an integer, and calling an integer has no meaning.

~~~~ {include="E1102_not_callable"}
~~~~


### Assignment from no return (E1111) {#E1111}

This error occurs when we assign a variable to the return value of a function call, but the function never returns anything. In the following example, `add_fruit` mutates `fruit_basket` instead of returning a new list. As a result, `new_fruit_basket` always gets the value `None`.

~~~~ {include="E1111_assignment_from_no_return"}
~~~~

We should either modify `add_fruit` to return a new list, or call `add_fruit` without assigning the return value to a variable.


### Assignment from None (E1128) {#E1128}

This error occurs when we assign a variable the return value of a function call, but the function always returns `None`. In the following example, `add_fruit` always returns `None`.  As a result, `new_fruit_basket` will always get the value `None`.

~~~~ {include="E1128_assignment_from_none"}
~~~~


### No value for parameter (E1120) {#E1120}

A function must be called with one argument value per parameter in its header. This error indicates that we called a function with too few arguments. In the following example, there should be *three* values passed to the function
instead of two.

~~~~ {include="E1120_no_value_for_parameter"}
~~~~

Corrected version:

```python
get_sum(1, 2, 3)
```


### Too many function args (E1121) {#E1121}

A function must be called with one argument value per parameter in its header. This error indicates that we called a function with too many arguments. In the following example, there should be *two* values passed to the function instead of three.

~~~~ {include="E1121_too_many_function_args"}
~~~~

Corrected version:

```python
get_sum(1, 2)
```


### Invalid sequence index (E1126) {#E1126}

This error occurs when a list or tuple is indexed using the square bracket notation `my_list[...]`, but the value of the index is not an integer.

Remember that the index indicates the *position* of the item in the list/tuple.

~~~~ {include="E1126_invalid_sequence_index"}
~~~~

Corrected version:

```python
a = ['p', 'y', 'T', 'A']
print(a[0])
```


### Invalid slice index (E1127) {#E1127}

This error occurs when a list or tuple is sliced using the square bracket notation `my_list[... : ...]`, but the two values on the left and right of the colon are not integers.

Remember that the slice numbers indicate the *start* and *stop* positions for the slice in the list/tuple.

~~~~ {include="E1127_invalid_slice_index"}
~~~~

Corrected version:

```python
a = ['p', 'y', 'T', 'A']
print(a[0:3])
```


### Invalid unary operand type (E1130) {#E1130}

This error occurs when we use a [unary operator][Unary arithmetic and bitwise operations] (`+`, `-`, `~`) on an object which does not support this operator. For example, a list does not support negation.

~~~~ {include="E1130_invalid_unary_operand_type"}
~~~~


### Unsupported binary operation (E1131) {#E1131}

This error occurs when we use a [binary arithmetic operator][Binary arithmetic operations] like `+` or `*`, but the left and right sides are not compatible types. For example, a dictionary cannot be added to a list.

~~~~ {include="E1131_unsupported_binary_operation"}
~~~~


### Unsupported membership test (E1135) {#E1135}

This error occurs when we use the membership test `a in b`, but the type of `b` does not support membership tests.

The standard Python types which support membership tests are strings, lists, tuples, and dictionaries.

~~~~ {include="E1135_unsupported_membership_test"}
~~~~


### Unsubscriptable object (E1136) {#E1136}

This error occurs when we try to index a value using square brackets (`a[...]`), but the type of `a` does not support indexing (or "subscripting").

The standard Python types which support indexing are strings, lists, tuples, and dictionaries.

~~~~ {include="E1136_unsubscriptable_object"}
~~~~


### Unsupported assignment operation (E1137) {#E1137}

This error occurs when we assign something to an object which does not support assignment (i.e. an object which does not define the `__setitem__` method).

~~~~ {include="E1137_unsupported_assignment_operation"}
~~~~


### Unsupported delete operation (E1138) {#E1138}

This error occurs when the `del` keyword is used to delete an item from an object which does not support item deletion (i.e. an object that does not define the `__delitem__` special method).

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


### Unbalanced tuple unpacking (E0632) {#E0632}

This error occurs when we are trying to assign to multiple variables at once, but the right side has too few or too many values in the sequence.

~~~~ {include="E0632_unbalanced_tuple_unpacking"}
~~~~


### Unpacking non-sequence (E0633) {#E0633}

This error occurs when we are trying to assign to multiple variables at once, but the right side is not a sequence, and so can't be unpacked.

~~~~ {include="E0633_unpacking_non_sequence"}
~~~~


### Not an iterable (E1133) {#E1133}

This error occurs when a non-iterable value is used in a place where an iterable is expected. An [iterable][Python Documentation: iterable] is an object capable of returning its members one at a time. Examples of iterables include sequence types such as `list`, `str`, and `tuple`, some non-sequence types such as `dict`, and instances of other classes which define the `__iter__` or `__getitem__` special methods.

~~~~ {include="E1133_not_an_iterable"}
~~~~

Corrected version:

```python
for number in [1, 2, 3]:
    print(number)
```


## Code complexity

### Unneeded not (C0113) {#C0113}

This error occurs when a boolean expression contains an unneeded negation. If we are getting this error, the expression can be simplified to not use a negation.

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

This error occurs when an expression is compared to a singleton value like `True`, `False` or `None`.

~~~~ {include="C0121_singleton_comparison"}
~~~~

The above can be modified to:

```python
def square(number: Optional[float]) -> Optional[float]:
    """Return the square of the number."""
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

The function or method has too many branches, making it hard to follow. This is a sign that the function/method is too complex, and should be split up.

**Note**: The checker limit is 12 branches.

~~~~ {include="R0912_too_many_branches"}
~~~~


### Too many nested blocks (R1702) {#R1702}

This error occurs when we have more than three levels of nested blocks in our code. Deep nesting is a sign that our function or method is too complex, and should be broken down using helper functions or rewritten as a [list comprehension][list comprehensions tutorial].

**Note**: This checker does not count function, method, or class definitions as blocks, so the example below is considered to have *six* nested blocks, not seven.

~~~~ {include="R1702_too_many_nested_blocks"}
~~~~

The code above can be fixed using a helper function:

```python
def drop_none(lst: List[Optional[int]]) -> List[int]:
    """Return a copy of `lst` with all `None` elements removed."""
    new_lst = []
    for element in lst:
        if element is not None:
            new_lst.append(element)
    return new_lst


def cross_join(x_list: List[Optional[int]], y_list: List[Optional[int]],
               z_list: List[Optional[int]]) -> List[Tuple[int, int, int]]:
    """Perform an all-by-all join of all elements in the input lists."""
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
    """Perform an all-by-all join of all elements in the input lists."""
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

The function or method is defined with too many arguments. This is a sign that the function/method is too complex, and should be split up, or that some of the arguments are related, and should be combined and passed as a single object.

**Note**: The checker limit is 5 arguments.

~~~~ {include="R0913_too_many_arguments"}
~~~~


### Too many locals (R0914) {#R0914}

The function or method has too many local variables.

**Note**: The checker limit is 15 local variables.

~~~~ {include="R0914_too_many_locals"}
~~~~


### Too many statements (R0915) {#R0915}

The function or method has too many statements. We should split it into smaller functions/methods.

**Note**:

- The checker limit is 50 statements.
- Comments do not count as statements.

~~~~ {include="R0915_too_many_statements"}
~~~~


### Unused variable (W0612) {#W0612}

This error occurs when we have a defined variable that is never used.

~~~~ {include="W0612_unused_variable"}
~~~~


### Unused argument (W0613) {#W0613}

This error occurs when a function argument is never used in the function.

~~~~ {include="W0613_unused_argument"}
~~~~


### Pointless statement (W0104) {#W0104}

This error occurs when a statement does not have any effect. This means that the statement could be removed without changing the behaviour of the program.

~~~~ {include="W0104_pointless_statement"}
~~~~


### Unnecessary pass (W0107) {#W0107}

This error occurs when a [`pass` statement][`pass` statements] is used that can be avoided (or has no effect). `pass` statements should only be used to fill what would otherwise be an empty code block, since code blocks cannot be empty in Python.

~~~~ {include="W0107_unnecessary_pass"}
~~~~

In the above example, the `pass` statement is "unnecessary" as the program's effect is not changed if `pass` is removed.

**See also:**

- [StackOverflow: How To Use The Pass Statement In Python]


## Documentation and naming

Good documentation and identifiers are essential for writing software. PyTA helps check to make sure we haven't forgotten to document anything, as well as a basic check on the formatting of our identifiers.

### Missing Docstring (C0111) {#C0111}

This error occurs when a module, function, class or method has no docstring. Special methods like `__init__` do not require a docstring.

~~~~ {include="C0111_missing_docstring"}
~~~~


### Empty Docstring (C0112) {#C0112}

This error occurs when a module, function, class or method has an empty docstring.

~~~~ {include="C0112_empty_docstring"}
~~~~


### Blacklisted name (C0102) {#C0102}

This error occurs when a variable name is chosen to be a typical generic name, rather than a meaningful one. Here are some of the blacklisted names to avoid:

- `foo`
- `bar`
- `baz`
- `toto`
- `tutu`
- `tata`

~~~~ {include="C0102_blacklisted_name"}
~~~~


### Invalid name (C0103) {#C0103}

This error occurs when a name does not follow the [Python Naming Convention][PEP8: Naming Conventions] associated with its role (constant, variable, etc.).

- Names of variables, attributes, methods, and arguments should be in **`lowercase_with_underscores`**.
- Names of constants should be in **`ALL_CAPS_WITH_UNDERSCORES`**.
- Names of classes should be in **`CamelCase`**.

A special character accepted in all types of names is `_`. Numbers are allowed in all names, but names must not begin with a number.

~~~~ {include="C0103_invalid_name"}
~~~~


### Function redefined (E0102) {#E0102}

This error occurs when a function, class or method is redefined. If we are getting this error, we should make sure all the functions, methods and classes that we define have different names.

~~~~ {include="E0102_function_redefined"}
~~~~


### Duplicate argument name (E0108) {#E0108}

This error occurs if there are duplicate parameter names in function definitions. All parameters must have distinct names, so that we can refer to each one separately in the function body.

~~~~ {include="E0108_duplicate_argument_name"}
~~~~


### Redefined argument from local (R1704) {#R1704}

This error occurs when a local name is redefining the name of a parameter.

~~~~ {include="R1704_redefined_argument_from_local"}
~~~~

Corrected version:

```python
def greet_person(name, friends) -> None:
    """Print the name of a person and all their friends."""
    print("My name is {}".format(name))
    for friend in friends:
        print("I am friends with {}".format(friend))
```

**See also**: [W0621](#W0621)


### Redefined outer name (W0621) {#W0621}

This error occurs when we are redefining a variable name that has already been defined in the outer scope.

For example, this error will occur when we have a local name identical to a global name. The local name takes precedence, but it hides the global name, making it no longer accessible. Note that the global name is not accessible *anywhere* in the function where it is redefined, even before the redefinition.

~~~~ {include="W0621_redefined_outer_name"}
~~~~


### Redefined builtin (W0622) {#W0622}

This error occurs when we are redefining a built-in function, constant, class, or exception.

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

There are standards governing how we should organize our imports, or even possibly which modules we may import at all.

### Forbidden imports (E9999) {#E9999}

In CSC108/CSC148, we should only use the Python language features we have covered in lectures, or ones that we have explicitly mentioned for an exercise/lab/assignment. No other external libraries may be used.

~~~~ {include="E9999_forbidden_imports"}
~~~~


### Import error (E0401) {#E0401}

The module is unable to be imported. Check the spelling of the module name, or whether the module is in the correct directory.

~~~~ {include="E0401_import_error"}
~~~~

There are other forms of import statements that may cause this error. For example:

```python
import missing_module as foo  # This module does not exist
```


### No name in module (E0611) {#E0611}

This error occurs when we are trying to access a variable from an imported module, but that variable name could not be found in that referenced module.

~~~~ {include="E0611_no_name_in_module"}
~~~~


### Import self (W0406) {#W0406}

A module should not import itself. For example, if we have a module named `W0406_import_self`, it should not import a module with the same name.

~~~~ {include="W0406_import_self"}
~~~~

This error can occur when the name of our Python file conflicts with the name of a module which we would like to import. For example, if we have a Python file named `math.py`, calling `import math` from within that file (or from within *any* Python file in the same directory) will import *our* `math.py` file, and not the [`math` module] from the standard library.


### Reimported (W0404) {#W0404}

A module should not be imported more than once.

~~~~ {include="W0404_reimported"}
~~~~


### Wildcard import (W0401) {#W0401}

We should only import what we need. Wildcard imports (shown below) are generally discouraged, as they add all objects from the imported module into the global namespace. This makes it difficult to tell in which module a particular class, function or constant is defined, and may cause problems, for example, when multiple modules have objects with identical names.

~~~~ {include="W0401_wildcard_import"}
~~~~

Rather than importing everything with wildcard `*`, we should specify the names of the objects which we would like to import:

```python
from module_name import SOME_CONSTANT, SomeClass, some_function
```

Or, if we need to import many objects from a particular module, we can import the module itself, and use it as a namespace for the required objects:

```python
import module_name

c = module_name.SomeClass()
```


### Wrong import order (C0411) {#C0411}

This error occurs when the [PEP8 import order][PEP8 Imports] is not respected. We should do standard library imports first, then third-party libraries, then local imports.

~~~~ {include="C0411_wrong_import_order"}
~~~~


### Wrong import position (C0413) {#C0413}

Imports should be placed at the top of the module, above any other code, but below the module docstring.

~~~~ {include="C0413_wrong_import_position"}
~~~~


### Ungrouped imports (C0412) {#C0412}

Imports should be grouped by package.

~~~~ {include="C0412_ungrouped_imports"}
~~~~

Corrected version:

```python
from sys import byteorder, stdin  # Same packages should be grouped
from math import floor
```


### Multiple imports (C0410) {#C0410}

Different modules should not be imported on a single line.

~~~~ {include="C0410_multiple_imports"}
~~~~

Rather, each module should be imported on a separate line.

```python
import sys
import math
```

Note, however, that we can import multiple functions, classes, or constants on one line, as long as they are from the same module.

```python
from shutil import copy, SameFileError
```


### Unused import (W0611) {#W0611}

This error occurs when we import a module which is not used anywhere in our code.

~~~~ {include="W0611_unused_import"}
~~~~


## Classes and objects

### Too many instance attributes (R0902) {#R0902}

The class has too many instance attributes, which suggests that it is too complicated and tries to do too many things.

**Note**: The checker limit is 7 instance attributes.

~~~~ {include="R0902_too_many_instance_attributes"}
~~~~

One solution is to logically decompose the class into multiple classes, each with fewer instance attributes. We can then use composition to access those attributes in a different class.

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
    """Class using composition to leverage other classes."""

    def __init__(self) -> None:
        self.edible = Edible()
        self.ownership = Ownership()
        self.description = Description()
```

**See also**: [R0914](#R0914)


### Abstract method (W0223) {#W0223}

This error occurs when an abstract method (i.e. a method with a `raise NotImplementedError` statement) is not overridden inside a concrete class.

~~~~ {include="W0223_abstract_method"}
~~~~

Corrected version:

```python
class Cat(Animal):
    """A worthy companion."""

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
    """A man's best friend."""

    def make_sound(self, mood: str) -> None:
        if mood == 'happy':
            print("Woof Woof!")
        elif mood == 'angry':
            print("Grrrrrrr!!")
```


### Different method signature (W0222) {#W0222}

When a child class overrides a method of the parent class, the new method should have the same signature as the method which it is overriding. In other words, the names and the order of the parameters should be the same in the two methods. Furthermore, if a parameter in the parent method has a default argument, it must also have a default argument in the child method.

~~~~ {include="W0222_signature_differs"}
~~~~

Corrected version:

```python
class PremiumBankAccount(StandardBankAccount):
    ...

    def withdraw(self, amount: float = 200) -> float:  # Note the default argument
        ...
```


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

When using inheritance, we should call the `__init__` method of the parent class and not of some unrelated class.

~~~~ {include="W0233_non_parent_init"}
~~~~

To fix this, call the `__init__` method of the parent class.

```python
class Child(Parent):
    """A child class."""

    def __init__(self) -> None:
        Parent.__init__(self)
```

Another option is to use [`super()`][super].

```python
class Child(Parent):
    """A child class."""

    def __init__(self) -> None:
        super().__init__()
```

**See also**:

- [Super considered super!]
- [Python's super considered harmful]
- [StackOverflow: What does 'super' do in Python?]


### Attribute defined outside init (W0201) {#W0201}

Any attribute we define for a class should be created inside the `__init__` method. Defining it outside this method is considered bad practice, as it makes it harder to keep track of what attributes the class actually has.

~~~~ {include="W0201_attribute_defined_outside_init"}
~~~~

We should do this instead:

```python
class SomeNumbers:
    """A class to store some numbers."""

    def __init__(self) -> None:
        self.num = 1
        self.other_num = None

    def set_other_num(self, other_num: int) -> None:
        self.other_num = other_num
```


### Access to member before definition (E0203) {#E0203}

Before trying to use a member of a class, it should have been defined at some point. If we try to use it before assigning to it, an error will occur.

~~~~ {include="E0203_access_member_before_definition"}
~~~~


### Method hidden (E0202) {#E0202}

If we accidentally hide a method with an attribute, it can cause other code to attempt to invoke what it believes to be a method, which will fail since it has become an attribute instead. This will cause the program to raise an error.

~~~~ {include="E0202_method_hidden"}
~~~~


### Unexpected special method signature (E0302) {#E0302}

This error occurs when a special method (also known as a ["dunder method"][Python double-under, double-wonder], because it has double underscores or "dunders" on both sides) does not have the expected number of parameters. Special methods have an expected signature, and if we create a method with the same name and a different number of parameters, it can break existing code and lead to errors.

~~~~ {include="E0302_unexpected_special_method_signature"}
~~~~

Corrected version:

```python
class Animal:
    """A carbon-based life form that eats and moves around."""

    def __init__(self, name: str) -> None:
        self._name = name

    def __str__(self) -> str:
        return '<Animal({})>'.format(self._name)
```


### Inheriting from a non-class (E0239) {#E0239}

A new class can only inherit from a different class (i.e. a Python object which defines the *type* of an object). It cannot inherit from an instance of a class or from a Python literal such as a string, list, or dictionary literal.

~~~~ {include="E0239_inherit_non_class"}
~~~~

Corrected version:

```python
class FancyFloat(float):
    """A fancy floating point number."""
    pass
```


### Duplicate bases (E0241) {#E0241}

A class should not inherit from a different class multiple times.

~~~~ {include="E0241_duplicate_bases"}
~~~~


### No method argument (E0211) {#E0211}

Each method in a class needs to have at least one parameter, which by convention we name `self`. When we create an instance of a class and call an instance method, Python automatically passes the class instance as the first argument to the method. If a method does not expect any arguments, this will result in an error.

~~~~ {include="E0211_no_method_argument"}
~~~~

Corrected version:

```python
class Saxophone:
    """A jazzy musical instrument."""

    def __init__(self) -> None:
        self._sound = "Saxamaphone...."

    def make_sound(self) -> None:
        print(self._sound)
```


### `self` as the first argument (E0213) {#E0213}

The first parameter of a method should always be called `self`. While it is possible to name the first parameter something else, using the word `self` is a convention that is strongly adhered to by the Python community and makes it clear that we did not simply forget to add `self` or accidentally intended a function as a method.

~~~~ {include="E0213_no_self_argument"}
~~~~

Corrected version:

```python
class SecretKeeper:
    """A class which stores a secret as a private attribute."""

    def __init__(self, secret: str) -> None:
        self._secret = secret

    def guess_secret(self, secret) -> bool:
        """Guess the private secret."""
        return self._secret == secret
```

### No self use (R0201) {#R0201}

If a method does not make use of the first argument `self`, it means that the task that the method is performing is not linked to the class of which it is a member. In such a case, we should rewrite the method as a function (by removing the first parameter `self`) and move it outside the class.

In the following example, `add_small_coins` does not make use of the first parameter `self` and so can be moved outside the class as a function.

~~~~ {include="R0201_no_self_use"}
~~~~

Corrected version:

```python
class CashRegister:
    """A cash register for storing money and making change."""

    def __init__(self, balance: float) -> None:
        self._current_balance = balance


def add_small_coins(nickels: int = 0, dimes: int = 0, quarters: int = 0):
    """Return the dollar value of the small coins."""
    return 0.05 * nickels + 0.10 * dimes + 0.25 * quarters
```

**See also**:

- [W0211](#W0211)

### Bad static member (W0211) {#W0211}

This error occurs when a static method contains `self` as the first parameter. Static methods are methods that do not operate on instances. If we feel that the logic of a particular function belongs inside a class, we can move that function into the class and add a [`@staticmethod`][Python Documentation: staticmethod] [decorator][Python Documentation: decorator] to signal that the method is a static method which does not take a class instance as the first argument. If such a static method contains `self` as the first parameter, it suggests that we are erroneously expecting a class instance as the first argument to the method.

~~~~ {include="W0211_bad_staticmethod_argument"}
~~~~

Corrected version:

```python
class CashRegister:
    """A cash register for storing money and making change."""

    def __init__(self, balance: float) -> None:
        self._current_balance = balance

    @staticmethod
    def add_small_coins(nickels: int = 0, dimes: int = 0, quarters: int = 0):
        """Return the dollar value of the small coins."""
        return 0.05 * nickels + 0.10 * dimes + 0.25 * quarters
```

**See also**:

- [R0201](#R0201)
- [StackOverflow: What is the difference between \@staticmethod and \@classmethod in Python?]


## Exceptions

### Bare exception (W0702) {#W0702}

If the `except` keyword is used without being passed an exception, *all exceptions will be caught*. This is not good practice, since we may catch exceptions that we do not want to catch. For example, we typically do not want to catch the [`KeyboardInterrupt`][Python Documentation: KeyboardInterrupt] exception, which is thrown when a user attempts to exist the program by typing `Ctrl-C`.

~~~~ {include="W0702_bare_except"}
~~~~


### Exception is too generic (W0703) {#W0703}

Using `except Exception:` is only slightly more specific than `except:` and should also be avoided (see [W0702](#W0702)). Since most builtin exceptions, and all user-defined exceptions, are derived from the `Exception` class, using `except Exception:` provides no information regarding which exception actually occurred. Exceptions which we do not expect can go unnoticed, and this may lead to bugs.

~~~~ {include="W0703_broad_except"}
~~~~


### Duplicate except blocks (W0705) {#W0705}

This error occurs when we try to catch the same exception multiple times. Only the first `except` block for a particular exception will be reached.

~~~~ {include="W0705_duplicate_except"}
~~~~


### Bad exception order (E0701) {#E0701}

Except blocks are analyzed sequentially (from top to bottom) and the first block that meets the criteria for catching the exception will be used. This means that if we have a generic exception type before a specific exception type, the code for the specific exception type will never be reached.

~~~~ {include="E0701_bad_except_order"}
~~~~


### Binary op exception (W0711) {#W0711}

The Python `except` statement can catch multiple exceptions, if those exceptions are passed as a tuple. It is possible (but incorrect!) to pass `except` an expression containing the exception classes separated by a binary operator such as `and` or `or`. In such a case, only one of the exceptions will be caught!

~~~~ {include="W0711_binary_op_exception"}
~~~~

Corrected version:

```python
def divide_and_square(numerator: float, denominator: float) -> float:
    """Divide the numerator by the denominator and square the result."""
    try:
        return (numerator / denominator) ** 2
    except (ZeroDivisionError, OverflowError):
        return float('nan')
```


### Misplaced bare raise (E0704) {#E0704}

The Python `raise` statement can be used without an expression only inside an `except` block. In this case, it will re-raise the exception that was caught by the `except` block. This may be useful if, for example, we wish to do some cleanup (e.g. close file handles), or print an error message, before passing the exception up the call stack.

~~~~ {include="E0704_misplaced_bare_raise"}
~~~~

Corrected version:

```python
def divide(numerator: float, denominator: float) -> float:
    """Divide the numerator by the denominator."""
    try:
        return numerator / denominator
    except ZeroDivisionError:
        print("Can't divide by 0!")
        raise
```


### Raising bad type (E0702) {#E0702}

The Python `raise` statement expects an object that is derived from the [`BaseException`][Python Documentation: BaseException] class. We cannot call `raise` on integers or strings.

~~~~ {include="E0702_raising_bad_type"}
~~~~

**See also**: [E0710](#E0710)


### Raising non-exception (E0710) {#E0710}

The Python `raise` statement expects an object that is derived from the [`BaseException`][Python Documentation: BaseException] class. All user-defined exceptions should inherit from the [`Exception`][Python Documentation: Exception] class (which will make them indirect descendents of the `BaseException` class). Attempting to raise any other object will lead to an error.

~~~~ {include="E0710_raising_non_exception"}
~~~~


### NotImplemented raised (E0711) {#E0711}

[`NotImplemented`][Python Documentation: NotImplemented] should only be used as a return value for binary special methods, such as `__eq__`, `__lt__`, `__add__`, etc., to indicate that the operation is not implemented with respect to the other type. It is *not interchangeable* with [`NotImplementedError`][Python Documentation: NotImplementedError], which should be used to indicate that the abstract method must be implemented by the derived class.

~~~~ {include="E0711_notimplemented_raised"}
~~~~


### Catching non-exception (E0712) {#E0712}

The Python `raise` statement expects an object that is derived from the [`BaseException`][Python Documentation: BaseException] class (see [E0710](#E0710)). Accordingly, the Python `except` statement also expects objects that are derived from the [`BaseException`][Python Documentation: BaseException] class. Attempting to call `except` on any other object will lead to an error.

~~~~ {include="E0712_catching_non_exception"}
~~~~


## Custom errors {#custom}


### Forbidden IO function (E9998) {#E9998}

Input / output functions ([`input`], [`open`] and [`print`]) should not be used in this course unless explicitly required. If `print` statements are used to debug the code, they should be removed prior to submission.

~~~~ {include="E9998_forbidden_io_function"}
~~~~

### Loop Iterates Only Once (E9996) {#E9996}

This error occurs if the loop will iterate only once. This could occur because of a combination of the *break* and *return* statements within the loop body.

~~~~ {include="one_iteration_example"}
~~~~

### Dynamic Execution (E9991) {#E9991}

Use of builtin functions [`exec`], [`eval`], and [`compile`] is not allowed.

~~~~ {include="dynamic_execution_example"}
~~~~

**See also**:

- [StackOverflow: What's the difference between eval, exec, and compile in Python?]

### Unnecessary Indexing (E9994) {E9994}

The iteration variable in a for loop was used unnecessarily.

~~~~ {include="unnecessary_indexing_example"}
~~~~

Corrected version:

```python
def sum_items(lst: List[int]) -> int:
    """Return the sum of a list of numbers."""
    s = 0
    for x in lst:
        s += x

    return s
```

**Note**:
Only for Python 3:
If the iteration variable of a for loop is shadowed by the iteration variable inside a list comprehension, this checker may not work properly and report a false error.

Example:

```python
def f(lst):
    s = 0
    for i in range(len(lst)):  # Checker will detect an error on this line even though there is none.
        lst = [i for i in range(i)]
        for x in lst:
            s += x
    return s
```


## Miscellaneous


### Too many format args (E1305) {#E1305}

This error occurs when we use the `format` method on a string, but call it
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

**See also**: [E1121](#E1121)


### Too few format args (E1306) {#E1306}

This error occurs when we use the `format` method on a string, but call it with fewer arguments than the number of `{}` in the string.

~~~~ {include="E1306_too_few_format_args"}
~~~~

Corrected version:

```python
s = "{} and {}".format("first", "second")
```

**See also**: [E1120](#E1120)


### Missing format argument key (W1303) {#W1303}

This error occurs when a format string that uses named fields does not receive the required keywords. In the following example, we should assign three values for `last_name`, `first_name`, and `age`.

~~~~ {include="W1303_missing_format_argument_key"}
~~~~

Corrected version:

```python
s = '{last_name}, {fist_name} - {age}'.format(last_name='bond', first_name='james', age=37)
```

**See also**: [E1120](#E1120), [E1306](#E1120)


### Bad str strip call (E1310) {#E1310}

This error occurs when we call [`strip`][str.strip], [`lstrip`][str.lstrip], or [`rstrip`][str.rstrip], but pass an argument string which contains duplicate characters. The argument string should contain the *distinct* characters that we want to remove from the end(s) of a string.

~~~~ {include="E1310_bad_str_strip_call"}
~~~~

It is a common mistake to think that `mystring.strip(chars)` removes the substring `chars` from the beginning and end of `mystring`. It actually removes all characters in `chars` from the beginning and end of `mystring`, *irrespective of their order*! If we pass an argument string with duplicate characters to `mystring.strip`, we are likely misinterpreting what this method is doing.


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

If a backslash character is not used to start one of the escape sequences listed above, we should make this explicit by escaping the backslash with another backslash.

```python
print('This is a tab: \t')
print('This is a newline: \n')
print('This is not an escape sequence: \\d')
```


### Redundant unittest assert (W1503) {#W1503}

The first argument of `assertTrue` and `assertFalse` is a "condition", which should evaluate to `True` or `False`. These methods evaluate the condition to check whether the test passes or fails. The conditions should depend on the code that we are testing, and should not be a constant literal like `True` or `4`. Otherwise, the test will always have the same result, regardless of whether our code is correct.

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

**See also**: [C0121](#C0121)


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

If we want to prevent this surprising behavior, we should use `None` as the default argument, and then check for `None` inside the function body. For example, the following code prints the expected output:

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
if 'anchovies' in pizza_toppings:
    print("Awesome!")
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


### Assert on tuple (W0199) {#W0199}

This error occurs when an `assert` statement is called with a tuple as the first argument. `assert` acting on a tuple passes if and only if the tuple is non-empty. This is likely *not* what the programmer had intended.

~~~~ {include="W0199_assert_on_tuple"}
~~~~

If we would like to assert multiple conditions, we should join those conditions using the `and` operator, or use individual `assert` statements for each condition.

```python
def check(condition1: bool, condition2: bool, condition3: bool) -> None:
    # Option 1
    assert (condition1 and condition2 and condition3)
    # Option 2
    assert condition1
    assert condition2
    assert condition3
```

If we would like `assert` to show a special error message when the assertion fails, we should provide that message as the second argument.

```python
def check(condition, message):
    assert condition, message  # the message is optional
```


### Literal comparison (R0123) {#R0123}

This error occurs when we use the identity operator `is` to compare non-boolean Python literals. Whether or not two literals representing the same value (e.g. two identical strings) have the same identity can vary, depending on the way the code is being executed, the code that has ran previously, and the version and implementation of the Python interpreter. For example, each of the following assertions pass if the lines are evaluated together from a Python file, but `assert num is 257` and `assert chars is 'this string fails'` fail if the lines are entered into a Python interpreter one-by-one.

~~~~ {include="R0123_literal_comparison"}
~~~~

To prevent the confusion, it is advisable to use the equality operator `==` when comparing objects with Python literals.

```python
num = 256
assert num == 256

num = 257
assert num == 257

chars = 'this_string_passes'
assert chars == 'this_string_passes'

chars = 'this string fails'
assert chars == 'this string fails'
```

**See also**:

- [Literally Literals and Other Number Oddities In Python]
- [StackOverflow: About the changing id of an immutable string]
- [StackOverflow: When does Python allocate new memory for identical strings?]


### Expression not assigned (W0106) {#W0106}

This error occurs when an expression that is not a function call is not assigned to a variable. Typically, this indicates that we were intending to do something else.

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
    """A company with some employees."""

    def __init__(self, employees: List[str]) -> None:
        self._employees = employees

    def __len__(self) -> int:
        return len(self._employees)
```


## Style errors {#style}

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

This error occurs when an unexpected number of tabs or spaces is used to indent the code. It is recommended that we use [*four spaces per indentation level*][PEP8: Indentation] throughout our code.

~~~~ {include="W0311_bad_indentation"}
~~~~

Corrected version:

```python
def print_greeting(name: str) -> None:
    """Print a greeting to the person with the given name."""
    print('Hello {}!'.format(name))
```


### Multiple statements (C0321) {#C0321}

This error occurs when we write more than one statement on a single line. According to PEP8, [*multiple statements on the same line are discouraged*][PEP8: Other Recommendations].

~~~~ {include="C0321_multiple_statements"}
~~~~

Corrected version:

```python
def is_positive(number: int) -> str:
    """Return whether the number is 'positive' or 'negative'."""
    if number > 0:
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


### Line too long (C0301) {#C0301}

This error occurs when a line is longer than a predefined number of characters. Our default limit for all lines is 80 characters.

~~~~ {include="C0301_line_too_long"}
~~~~


## Syntax errors {#syntax}

### Syntax Error (E0001) {#E0001}

1.  *SyntaxError: Missing parentheses in call to 'print'*

    In Python 3, `print` is a builtin *function*, and should be called like any other function, with arguments inside parentheses. In previous versions of Python, `print` had been a keyword.

    ~~~~ {include="missing_parentheses_in_call_to_print"}
    ~~~~

2.  *SyntaxError: can't assign to literal*

    There must always be a variable on the left-hand side of the equals sign (where the term "variable" can refer to a single identifier `a = 10`, multiple identifiers `a, b = 10, 20`, a dictionary element `foo['a'] = 10`, a class attribute `foo.bar = 10`, etc.). We cannot assign to a string or numeric literal.

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

    5.  Use of an undefined operator. For example, there are no "increment by one" `++` or "decrement by one" `--` operators in Python.

        ~~~~ {include="undefined_operator"}
        ~~~~

4.  *IndentationError: unindent does not match any outer indentation level*

    We must use a constant number of whitespace characters for each level of indentation. If we start a code block using four spaces for indentation, we must use four spaces throughout that code block.

    ~~~~ {include="unindent_does_not_match_indentation"}
    ~~~~

    Note that it is **strongly recommended** that we [**always use four spaces per indentation level**][PEP8: Indentation] throughout our code.

5.  *IndentationError: unexpected indent*

    In Python, the only time we would increase the indentation level of our code is to define a new code block after a [compound statement][Compound statements] such as `for`, `if`, `def`, or `class`.

    ~~~~ {include="unexpected_indent"}
    ~~~~


### Nonexistent operator (E0107) {#E0107}

This error occurs when we attempt to use C-style "pre-increment" or "pre-decrement" operators `++` and `--`, which do not exist in Python.

~~~~ {include="E0107_nonexistent_operator"}
~~~~

Corrected version:

```python
spam = 0
spam += 1
spam -= 1
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

[`math` module]: https://docs.python.org/3/library/math.html
[`pass` statements]: https://docs.python.org/3/tutorial/controlflow.html#pass-statements
[AttributeError]: https://docs.python.org/3/library/exceptions.html#AttributeError
[Binary arithmetic operations]: https://docs.python.org/3/reference/expressions.html#binary-arithmetic-operations
[Built-in Functions]: https://docs.python.org/3/library/functions.html
[Compound statements]: https://docs.python.org/3/reference/compound_stmts.html
[Keywords]: https://docs.python.org/3/reference/lexical_analysis.html#keywords
[Python Documentation: BaseException]: https://docs.python.org/3/library/exceptions.html#BaseException
[Python Documentation: decorator]: https://docs.python.org/3/glossary.html#term-decorator
[Python Documentation: Exception]: https://docs.python.org/3/library/exceptions.html#Exception
[Python Documentation: iterable]: https://docs.python.org/3/glossary.html#term-iterable
[Python Documentation: KeyboardInterrupt]: https://docs.python.org/3/library/exceptions.html#KeyboardInterrupt
[Python Documentation: NotImplemented]:https://docs.python.org/3/library/constants.html#NotImplemented
[Python Documentation: NotImplementedError]:https://docs.python.org/3/library/constants.html#NotImplementedError
[Python Documentation: staticmethod]: https://docs.python.org/3/library/functions.html#staticmethod
[String and Bytes literals]: https://docs.python.org/3/reference/lexical_analysis.html#string-and-bytes-literals
[Unary arithmetic and bitwise operations]: https://docs.python.org/3/reference/expressions.html#unary-arithmetic-and-bitwise-operations

<!-- PEP8 -->
[PEP8 Imports]: https://www.python.org/dev/peps/pep-0008/#imports
[PEP8: Indentation]: https://www.python.org/dev/peps/pep-0008/#indentation
[PEP8: Naming Conventions]: https://www.python.org/dev/peps/pep-0008/#naming-conventions
[PEP8: Other Recommendations]: https://www.python.org/dev/peps/pep-0008/#other-recommendations
[PEP8: Tabs or Spaces?]: https://www.python.org/dev/peps/pep-0008/#tabs-or-spaces
[PEP8: Whitespace in Expressions and Statements]: https://www.python.org/dev/peps/pep-0008/#whitespace-in-expressions-and-statements

<!-- StackOverflow -->
[StackOverflow: About the changing id of an immutable string]: https://stackoverflow.com/questions/24245324/about-the-changing-id-of-an-immutable-string
[StackOverflow: How To Use The Pass Statement In Python]: https://stackoverflow.com/a/22612774/2063031
[StackOverflow: What does 'super' do in Python?]: https://stackoverflow.com/q/222877/2063031
[StackOverflow: What is the difference between \@staticmethod and \@classmethod in Python?]: https://stackoverflow.com/questions/136097/what-is-the-difference-between-staticmethod-and-classmethod-in-python
[StackOverflow: What's the difference between eval, exec, and compile in Python?]: https://stackoverflow.com/questions/2220699/whats-the-difference-between-eval-exec-and-compile-in-python
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
