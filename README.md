# PyTA Help Website

This is the source of the website which students can consult for common error
messages from both Python and PyTA itself.

To generate the website, follow these steps:

1. Install `pandoc`. Make sure that after you've installed it, you can open the
   command line and run `pandoc -v` to get the version installed.
2. In the command line, go to the website directory and run
   `python build.py` (or `python3 build.py` if your default Python version is 2.*).

After this, you should be able to open `gen/index.html` and see the demo webpage.
