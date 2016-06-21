# PyTA Help Website

This is the source of the website which students can consult for common error
messages from both Python and PyTA itself.

To generate the website, follow these steps:

1. Install `pandoc`. Make sure that after you've installed it, you can open the
   command line and run `pandoc -v` to get the version installed.
2. Install the `pandocfilters` module. You can install from `PyPI` with 
   `pip install pandocfilters` (or `pip3 install pandocfilters` if your default
   Python version is 2.*).
3. In the command line, go to the website directory and run
   `python build.py` (or `python3 build.py` if your default Python version is 
   2.*).

After this, you should be able to open `gen/index.html` and see the demo webpage.

## Troubleshooting:

1. For Mac users, open python file `includes.py` under `website/filters/`. On the
   first line, change `#!/usr/bin/env python` to `#!/usr/bin/env python3`.
2. Check if the file `website/filters/includes.py` is executable for the current 
   user. If it is not executable, run `chmod u+x filters/includes.py` in the 
   command line. Now try building the website again.
   
