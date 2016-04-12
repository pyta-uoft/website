# PyTA Help Website

This is the source of the website which students can consult for common error
messages from both Python and PyTA itself.

To generate the website, follow these steps:

1. Install `pandoc`. Make sure that after you've installed it, you can open the
   command line and run `pandoc -v` to get the version installed.
2. Inside the website directory, create a new directory called `gen`.
   The repository has been set up to ignore `gen` already, so you won't
   accidentally commit the generated files. 
3. In the command line, run
   `pandoc -o gen/index.html -s --template=pyta_template.html --highlight-style=zenburn index.md`.

After this, you should be able to open `gen/index.html` and see the demo webpage.
