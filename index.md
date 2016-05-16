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

```python
def my_f(num):
    if num > 0:
        if num > 3:
            if num > 10:
                if num < 50:
                    print(num)
    else:
        print('done')
```

### R0102: Simplifiable if statement {#R0102}

This error occurs when you have an if statement that can be simplified
simply by using the value of the condition, rather than putting in extra
`True` and `False` literals.

```python
def is_even(num):
    """Return whether <num> is even or odd."""
    if num % 2 == 0:
        return True
    else:
        return False
```

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


```python
class Rectangle:
    def __init__(self, width, height):
        """
        Initialize the Rectangle.

        @type self: Rectangle
        @type width: int
        @type height: int
        @rtype: None
        """
        self.width = width
        self.height = height

r = Rectangle(5, 4)

# no such member in Rectangle class
print(r.area())  # Error on this line
```

### E1102: not-callable {#E1102}

This error occurs when you call an object which has not been inferred to a
callable object. In the following example, we should not call x() because x is
a variable which is not callable.

```python
x = 10
print(x())  # Error on this line
```

### E1111: assignment-from-no-return {#E1111}

This error occurs when you assign to a function call with the inferred function
does not return an object. This error is similar to E1128. In the following example,
f() does not return anything. As a result, x has no value if we assign x f().

```python
def f():
    print("s")

def g():
    x = f()  # Error on this line
    print(x)
```

### E1120: no-value-for-parameter {#E1120}

We expect you to pass values for each argument (one for each) in a function.
In the following example, there should be three values passed to the function
instead of two.

```python
def get_sum(x, y, z):
    """
    Return the sum of x, y and z.

    @type x: int
    @type y: int
    @type z: int
    @rtype: int
    """
    return x + y + z

get_sum(1, 2) # Error on this line
```

Corrected version
```python
get_sum(1, 2, 3)
```

### E1121: too-many-function-args {#E1121}

This error indicates you should pass values for each argument (one for each) in a
function. It is just the opposite to E1121. In the following example, more
values are passed to the function.

```python
def get_sum(x, y):
    """
    Return the sum of x and y.

    @type x: int
    @type y: int
    @rtype: int
    """
    return x + y

get_sum(1, 2, 3)  # Error on this line
```

Corrected version
```python
get_sum(1, 2)
```

### E1126: invalid-sequence-index {#E1126}

This error occurs when a sequence indexed with an invalid type. For example,
inside a list, you should always use the index with type integer.

```python
a = ['p', 'y', 'T', 'A']
print(a['p'])   # Error on this line
```

Corrected version

```python
a = ['p', 'y', 'T', 'A']
print(a[0])      # Error on this line
```

### E1127: invalid-slice-index {#E1127}

This error occurs when you use a slice index with wrong types. For example,
inside a list, whenever you want to get slices of this list, you should use the
indexs which are integers to indicate where to start and stop.

```python
a = ['p', 'y', 'T', 'A']
print(a['p' : 'A'])      # Error on this line
```

Corrected version

```python
a = ['p', 'y', 'T', 'A']
print(a[0: 3])      # Error on this line
```

### E1128: assignment-from-none {#E1128}

This error occurs when an assignment is done on a function call but the inferred
function returns nothing but None. This error is similar to E1111. In the
following example, f() return None. As a result, x has no value if we assign
x f().

```python
def f():
    return None


def g():
    x = f()  # Error on this line
    print(x)
```

### E1130: invalid-unary-operand-type {#E1130}

This error occurs when the unary operand on the objects does not support this
type of operation. For example, we should never add string to integer.

```python
def info(age):
    """
    Return the info about my age.

    @type age: int
    @rtype: str
    """
    return "My age is" + age    # Error on this line
                                # corrected version: "My age is" + str(age)
info(2)
```

### E1131: unsupported-binary-operation {#E1131}

This error occurs when two operands do not support binary arithmetic operation.
For example, a dictionary could not be added to a list.

```python
def my_fuc(t, n):
    """Add <n> to <t>."""
    if type(t) is tuple:
        return t + (n, )
    else:
        return t + [n]  # Error on this line # thinks it is tuple

my_fuc(1, 2)
```

### E1135: unsupported-membership-test {#E1135}

This error occurs when you use an instance in membership test expression which
implement membership protocol. This error may be similar to E1101.
For example, if you want to check if a specific instance is inside another
object, please make sure the object has this kind of membership.

```python
lst = 1132424
if 'a' in lst:
   print("unsupported membership test")  #Error on this line
```

### E1136: unsubscriptable-object {#E1136}

This error occurs when you subscript value which does not support subscription.
In the following example, b[0] could not work on 5.

```python
a = [[1, 2], [5, 3], 5, [5, 6], [2, 2]]
for b in a:
    print(b[0])  # Error on this line
```

### E1303: format-needs-mapping {#E1303}

We expect to see a format string that uses named conversion specifiers is used
with an argument that is a mapping.

```python
gpl = "%(id)s : %(atr)s"

objects = [{'id': 1, 'content': [{'atr': 'big', 'no': 2}]},
           {'id': 2, 'content': [{'atr': 'small', 'no': 3}]}]

for obj in objects:
    for con in obj['content']:
        print(gpl % (obj, con))    # Error on this line
```


### E1305: too-many-format-args {#E1305}

This error occurs when you do not use one argument for a {} for format string.
This error is similar to E1121, meanwhile opposite to E1306.
In the following example, we give more values than the number of {}.

```python
name = "Amy"
age = "17"
country = "England"
city = "London"

s = "{} who is {} lives in {}".format(name, age, country, city) # Error on this line
```

Corrected version

```python
name = "Amy"
age = "17"
country = "England"

s = "{} who is {} lives in {}".format(name, age, country) # Error on this line
```

### E1306: too-few-format-args {#E1306}

This error occurs when you do not use one argument for a {} for format string.
This error is similar to E1120, meanwhile opposite to E1305.
In the following example, we give fewer values than the number of {}.

```python
s = "{} and {}".format("first")  # Error on this line
```

Corrected version

```python
s = "{} and {}".format("first", "second")  # Error on this line
```

### E1310: bad-str-strip-call {#E1310}

This error occurs when a constant string contains duplicate characters.

```python
foo = "tests"
foo.lstrip("java")  # Error on this line
```

### W1303: missing-format-argument-key {#W1303}

This error occurs when a format string that uses named fields does not
receive required keywords. This error is similar to E1120 and E1306. In the
following example, we should assign three values for bond, james and act.

```python
action = '{bond}, {james} {act}'.format(bond='bond', james='james') # Error on this line
```

### W1305: format-combined-specification {#W1305}

This error occurs when a format string contains both automatic field numbering
(e.g. ‘{}’) and manual field specification (e.g. ‘{0}’).
For example, we should not use {} and {index} at the same time.

```python
s = "{} and {0}".format("a", "b")  # Error on this line
```

Corrected version

```python
s = "{} and {}".format("a", "b")  # Error on this line
```
or

```python
s = "{0} and {1}".format("a", "b")  # Error on this line
```

### W1306: missing-format-attribute {#W1306}

This error occurs when a format string uses an attribute specifier ({0.length}),
and the argument passed for formatting does not have that attribute. In the
following example, we know string does not have attribute length.
This means that we should never use{string.length} in the format string.

```python
s = '{.5}'.format('aaabbbccc')  # Error on this line
```

### W1307: invalid-format-index {#W1307}

This error occurs when a format string uses a lookup specifier ({a[1]}) with
the argument passed for formatting does not contain that key as an attribute.
In the following example, there is no key as 'longitude' in geopoint which means
that there is no value for {0[longitude]} in the format string.

```python
geopoint = {'latitude':41.123}
point = '{0[latitude]} {0[longitude]}'.format(geopoint) # Error on this line
```

### W1401: anomalous-backslash-in-string {#W1401}

This error occurs when a backslash is in a literal string but not as an escape.

```python
print("\\\\\d{3}")  # Error on this line
```

### C0111: Missing docstring {#C0111}

This is some helpful description of the C0111 error.

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
