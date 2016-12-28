# Qs
A light JavaScript function library

[Functions](#functions) | [Files](#files) | [Usage](#usage) | [Qs.min.js raw](https://raw.githubusercontent.com/MaanooAk/Qs/master/Qs.min.js)

## Functions

### Names

```
Selectors
 q			Query
 qi			Query by Id
 qa			Query All
 qs			Query in Sub element
 qas		Query All in Sub element 
For each 
 ff			For each call Function
 qaff		Query All For each call Function
 qasff		Query All in Sub element For each call Function
 fif		For each Integer from 0 call Function 
Classes 
 cls		add and remove CLaSses
 qacls		Query All For each add and remove CLaSses
 qascls		Query All in Sub element For each add and remove CLaSses
Requests 
 r			Request 
 rp			Request Post
 rg			Request Get
 rgr		Request Get Raw link
Other
 cloneTemplate
 elementFromHtml
 onEnter
 onScrollNearEnd
 ```

### Documentation

See the [API](/API.md) or go to [Documentation](https://github.com/MaanooAk/Qs/wiki/Documentation) wiki page.

### Notes

* In the query functions the the CSS selectors are be used, eg. `q("#side > img")`, `qa(".item")` and `qaff(".item.hidden", function(i) {...})`.
* The `params` parameters in the request functions are objects, eg. `{name:"maanoo", color:"red"}`, `{json:"", count:"12"}` and `{}` (they will be stringified into `name=maanoo&color=red`, `json&count=12` and empty string). 
* In the `callback` functions the `text` variable contains the response text and the `code` variable the response code.

## Files

File | Description
---- | ----
[Qs.js](/Qs.js) | The library
[Qs.min.js](/Qs.min.js) | The library compressed with [Closure Compiler](https://closure-compiler.appspot.com/) ([Compress now](https://closure-compiler.appspot.com/home#code%3D%252F%252F%2520%253D%253DClosureCompiler%253D%253D%250A%252F%252F%2520%2540compilation_level%2520SIMPLE_OPTIMIZATIONS%250A%252F%252F%2520%2540output_file_name%2520default.js%250A%252F%252F%2520%2540code_url%2520https%253A%252F%252Fraw.githubusercontent.com%252FMaanooAk%252FQs%252Fmaster%252FQs.js%250A%252F%252F%2520%253D%253D%252FClosureCompiler%253D%253D%250A%250A))
[parts/Qs.?.js](/parts) | The library split into independent sub-libraries 


## Usage

Put the [Qs.min.js](/Qs.min.js) in the project folder and add the following tag to the header of the html page

```HTML
<script src="Qs.min.js"></script>
```

For faster loading you can paste the content of the [Qs.min.js](/Qs.min.js) inside a script tag

```HTML
<script type="application/javascript">
<!-- paste here -->
</script>
```

## Development

The files inside `parts/` should be edited.

For the creation of `Qs.js` and `Qs.min.js`:
```
make
```

For the creation of `API.md`:
```
make docgen
```

For windows users the `make win` should be used.

### Dependencies

- `make`
- `rm`, `cat`
- `curl` ([for windows](https://curl.haxx.se/download.html))
- `markdox` ([at npm](https://www.npmjs.com/package/markdox))
