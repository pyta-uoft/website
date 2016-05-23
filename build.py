import subprocess
import os
import sys

if os.path.isfile('gen'):
    sys.exit('Error: "gen" already exists as a regular file')
os.makedirs('gen', exist_ok=True)

subprocess.run([
    'pandoc',
    '-o', 'gen/index.html',
    '-s',
    '--template=pyta_template.html',
    '--highlight-style=zenburn',
    '-V',
    'root=../',
    'index.md',
    '--filter',
    'filters/includes.hs'
], stdout=subprocess.PIPE)
