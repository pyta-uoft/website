#!/usr/bin/env runhaskell
-- file name: includes.hs
-- make sure to install haskell.
-- update pandoc with: cabal install pandoc
-- [may first have to run `cabal update` before running `cabal install pandoc`]
import Text.Pandoc.JSON

doInclude :: Block -> IO Block
doInclude cb@(CodeBlock (id, classes, namevals) contents) =
    case lookup "include" namevals of
       Just f     -> return . (CodeBlock (id, classes, namevals)) =<< readFile f
       Nothing    -> return cb
doInclude x = return x

main :: IO ()
--toJSONFilter converts a function into a filter that reads pandoc's JSON
--serialized output from stdin, transforms it by walking the AST and applying
--the specified function, and serializes the result as JSON to stdout.
main = toJSONFilter doInclude