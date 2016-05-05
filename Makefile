# Ensure you have `pandoc` installed first

all : build

build : 
		pandoc -o gen/index.html -s --template=pyta_template.html --highlight-style=zenburn -V root=../ index.md