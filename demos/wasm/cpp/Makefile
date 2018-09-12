export EMCC_DEBUG=0

main.js: main.cpp
	emcc -s WASM=1 -g --source-map-base http://localhost:5000/ --bind -std=c++11 -o main.js *.cpp

clean:
	rm *.js *.wasm *.wast *.map