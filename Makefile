
# variables

PARTSJS = parts/Qs.q.js parts/Qs.f.js parts/Qs.r.js parts/Qs.o.js
PARTSJSWIN = parts\Qs.q.js parts\Qs.f.js parts\Qs.r.js parts\Qs.o.js

# compile

.PHONY: compile
compile: clean build

.PHONY: clean
clean:
	@echo Clean
	@rm Qs.js
	@rm Qs.min.js

.PHONY: build
build: Qs.min.js

Qs.min.js: Qs.js
	@echo Compress
	@curl -s -d compilation_level=SIMPLE_OPTIMIZATIONS -d output_format=text -d output_info=compiled_code -d charset=utf-8 --data-urlencode "js_code@-" http://closure-compiler.appspot.com/compile < Qs.js > Qs.min.js

Qs.js:
	@echo Combine parts
	@cat $(PARTSJS) > Qs.js

# windows compatibility

.PHONY: win
win: towin compile

.PHONY: towin
towin:
	$(eval PARTSJS = $(PARTSJSWIN))
