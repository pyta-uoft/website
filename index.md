% PyTA Help Documentation

This is some welcome text.

## Pylint errors {#pylint}

### C0111: Missing docstring {#C0111}

This is some helpful description of the C0111 error.



### R0201: No self use {#R0201}

If a method (a function in a class) does not make use of the 'self' (or
first) argument, that means the function is not performing anything that
is related to the object itself. This means the function could be moved
outside of the class since none of the code inside makes use of anything
inside the class it's defined.

```python
class NoSelfUsage:
    def __init__(self):
        self.a = 42

    def no_self(self, num):
        num = num + 2
        print(num)

# You would fix it as follows by moving it outside the class:
def no_self(num):
	num = num + 2
    print(num)
```



### E0202: Method hidden {#E0202}

If you accidentally mask a method with a field, it can cause other code to
attempt to invoke what it believes to be a method, which will fail since
it has become a field instead (a variable). The syntax will error out, and
this can be particularly dangerous when masking the function when a parent
class relies on calling the method.

```python
class Example(object):
    def field(self, num):
        return num
    def __init__(self):
        self.field = 'Masking the function with this string'

# If you call Example().field(num), it will error out since we masked it
```



### E0203: Access to member before definition {#E0203}

Before trying to use a member of a class, it should have been defined at
some point. If you try to use it before assigning to it, Python cannot
resolve the value and an error will occur.

```python
class MyClass:
	def __init__(self):
		print(self.a)  # Haven't defined self.a yet, can't use
		self.a = 5
```



### E0211: No method argument {#E0211}

Each method in a class needs to have at least one argument (which is usually
_self_). Python uses this to call methods, and the first argument is populated
with the object that is calling the method. This is what allows you to access
the calling object.

For example, the following two are equivalent:

```python
class A:
	def __init__(self):
		pass
	def method(self):
		print('Hi')

# First:
a = A()
a.method()

# Second:
a = A()
A.method(a)
```

Therefore, if you do not provide any arguments, then Python does not know
how to pass the object to the method, and it will error out. To fix this,
put _self_ (or some variable name) in the parenthesis for the method call.

```python
class MyClass:
	def __init__(self):
		pass
	def method():
		print('Missing argument for method definition')
```



### E0213: Self as the first argument {#E0213}

The first argument should be the exact word 'self'. This is not an error,
but it's such a common practice that this is considered an error. The
following is an example of a good, and bad example:

```python
class MyClass:
	def __init__(self):
		pass
	
	def methodA():  # Bad
		pass

	def methodB(self):  # Good
		pass
```



### E0239: Inheriting from a non-class {#E0239}

When you inherit, it must come from a class. If you use something that is
not a class, you won't be able to inherit from it. If you want to inherit
from the type of object you are providing, look up its class with the
__class__ field.

```python
class newclass("str"):
	pass
```



### E0241: Duplicate bases {#E0241}

When inheriting, you should only specifiy a class once to inherit from,
multiple times is an error:

```python
class A:
	pass
	
class B(A, A):  # Only include A once to inherit properly
	pass
```



### E0302: Unexpected special method signature {#E0302}

Occurs when a special method (has underscores on both sides) does not have
the expected number of arguments, which likely will lead to errors somewhere.

```python
class A:
	def __init__(self):
		pass
	def __str__(self):  # Good, this is what is expected
		return 'string'
		
class B:
	def __init__(self):
		pass
	def __str__(self, a):  # Bad, Python won't know what to put in 'a'
		return 'string'
```



### E0701: Bad exception order {#E0701}

Except blocks are analyzed sequentially (from top to bottom) and the
block that meets the criteria for catching the exception first will be
used. This means if you have a more generic exception type before a
specific exception type, you will never trigger the code in the block
that is masked by the generic exception. This results in having dead
code.

It is also good practice since you want to narrow down the exception
type to be as specific as possible, since the more generic exception
may catch other types as well.

```python
def func(num):
	try:
		raise ZeroDivisionError()
	except Exception:
		print('This is always triggered')
	except ZeroDivisionError:
		print('Cannot ever be reached')

```



### E0702: Raising bad type {#E0702}

You have to raise an object that is an exception, you can't raise anything
like a number. If it does not descend at some point from an Exception class,
it should not be raised. To solve this issue, extend a new class from the 
Exception class, name it appropriately, and raise that. Or more simply, do
not throw something that is not a class.

```python
def raise_bad():
    raise 1
```



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
		# Do something important
		# Now, throw what we just caught
		raise
```

If you call _raise_ outside of an 'except' block, it can't work because there
is no exception to throw as seen in the following example:

```python
def bad_raise()
	# Bad example, needs to be in an 'except' block:
	raise
```



### E0710: Raising non-exception {#E0710}

You cannot raise an object that is not a descendent of Exception (which implies
being a child of BaseException). Anything you raise must at some point descend
from a class that inherits exception.

The solution is either to create your own exception, or to find a proper
exception that best describes the problem.

```python
class ClassWithNoExceptionParent:
    def __init__(self):
        pass

def throw_exception():
    raise ClassWithNoExceptionParent()
```



### E0711: Bad exception context {#E0711}

NotImplemented is intended to be a return value for methods, such as when you
create your own comparisons (ex: using __eq__), when what you actually want
is to throw the exception. Forgetting the suffix 'Error' is a common mistake
and do what you intended.

This is also related to another error where raising a non-exception is not
allowed.

```python
def call_exception():
	raise NotImplemented()
	# Should be: raise NotImplementedError()
```



### E0712: Catching non-exception {#E0712}

If your 'except' class uses a class that does not inherit from BaseException
at some point, then you are trying to catch an exception that is not a
well-defined exception. Your code should only try to catch exceptions
that extend from BaseException. Python requires you to raise exceptions
that derive from BaseException, and having a class type that does not extend
from this

```python
# Notice how it does not extend from Exception (or BaseException for that matter)
class RandomClass:
	pass

def throw_exception():
	try
		n = 5 / 0  # Will throw a ZeroDivisionError
	except RandomClass:
		print('The above does not inherit from BaseException')
	except ZeroDivisionError:
		print('Will not be reached due to erroring out earlier')
```



### W0201: Attribute defined outside init {#W0201}

Any attribute you define for a class should be created inside the _init_
method. Defining it outside is considered bad practice as you might at
some point in the future introduce the same attribute in the class, and
any code that sets values outside may cause the program to break or
behave in unexpected ways.

Therefore you should always define your variables for the instance to
occur inside the _init_ method.

```python
class MyClass:
	def __init__(self):
		self.num = 1

c = MyClass()
c.other_num = 2  # This should be defined in __init__ first

# You should do this instead:
```python
class MyClass:
	def __init__(self):
		self.num = 1
		self.other_num = 2
```



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



### W0212: Protected member access {#W0212}

Variables with underscores are a convention that means the field should
not be accessed outside of the calling class. This encapsulation is a
hint to the user that they should not change the field as it may be
critical to the proper functioning of the object. Any field that does
not have an underscore the user may interact with. Furthermore, this also
applies to methods with underscores since calling them may also cause
adverse affects.

If you want to access a field with an underscore, check to see why it is
an underscore and change it to not having an underscore if you discover
that it does not need to be hidden from the user. If you are using any
other class from another developer, then you are assumed to not tamper
with the internals of their class.

```python
class MyClass:
	def __init__(self)
		self._num = 42

# Should not be calling the underscore field:
c = MyClass()
print(c._num)
```



### W0232: No init method {#W0232}

The _init_ method is invoked when an object is created. Therefore you
should always have some kind of initialization method for your classes.
Note that this also applies to classes which have parents who do not
define their own _init_ methods.

If you find that you do nothing in the initialization method, then you
should ask yourself why you are creating the object in the first place.
If an object does not store any values and you want to pass around a set
of methods, consider having a function that returns a function or look
into making a class with purely static methods.

```python
def ClassWithNoInit:
	# Missing the __init__ method here
	
	def return_forty_two(self):
		return 42
```



### W0222: Different method signature {#W0222}

TODO

```python
class Parent:
	def __init__(self):
		self.num = 2
	
	def return_num(self, multiple):
		return self.num * multiple

class Child(Parent):
	def __init__(self)
		Parent.__init__(self)
	
	def return_num(self):  # Missing argument (to keep signature identical)
		return 42
```



### W0231: Super init not called {#W0231}

When inheriting from a parent, you need to call the parent's _init_
method using itself as a parameter (or use _super_ if you are more
familiar with that). The whole goal of extending a class is to be
a child of the class you extend from, and properties that the parent
sets in its constructor would not be propagated into the child you'reached
creating.

Therefore you must always call the parent.

```python
class Parent:
	def __init__(self):
		self.num = 1

class Child(Parent):
	def __init__(self):
		Parent.__init__(self)  # You must have this
```



### W0233: Bad parent init {#W0233}

You should call the _init_ method of the parent, not some arbitrary and
unrelated class. To fix this, use the _init_ from the parent of the class
you are inheriting from.

```python
class ClassA:
	def __init__(self):
		pass

Class Parent:
	def __init__(self):
		pass

class Child(Parent):
	def __init__(self):
		ClassA.__init__(self)  # Not a child of class A
```



### W0702: Bare exception {#W0702}

While you can catch any exception without specifying a class to catch after
the _except_ keyword, this is bad practice since it will mask other exceptions
that could appear which you do not want to catch, making your code brittle.
Always provide the classes you expect to catch.

```python
def no_catching():
	try:
		raise TypeError()
	except:
		print('Requires an exception class')
```



### W0703: Exception is too generic {#W0703}

Similar to exception error W0702, if your exception is too generic then you
may end up burying errors since they will be always caught. Because of this,
you should not be using _except Exception_ as your except block since it can
catch exceptions you do not want caught.

```python
def generic_catch():
	try:
		a = 5 / 0
	except Exception:
		print('Got exception')
```



### W0705: Duplicate except blocks {#W0705}

When you list an exception to be caught, you should not list it again. Only
have one block for each exception. This does not include having child and 
parent exceptions, but rather it means don't have _exception MyException_,
and then later on when listing exceptions you have _exception MyException_
again.

```python
def repeat_except_blocks():
	try:
		raise Exception()
	except Exception:
		print('This is triggered')
	except Exception:
		print('Duplicate exception block')
```



### W0711: Binary op exception {#W0711}

The proper way to have an except block catch multiple exceptions is to have
the exception classes in a tuple. You can write an except block in Python
with multiple classes separated by an _or_ (see example). If you do it the
second way, the _or_ binary operator will not do what you think it does --
in fact, the exception on the right side of the _or_ will leak through
(which is almost surely what you do not want occuring).

```python
class MyException(Exception):
        pass

class MyDoubleException(Exception):
        pass
        
def binary_capture():
        try:
                # Not caught, 'or' doesn't do what you think.
                # Need to do: except (MyException, MyDoubleException):
                raise MyDoubleException()
        except MyException or MyDoubleException:
                print('Will not detect MyDoubleException due to how "or" works')
```



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
