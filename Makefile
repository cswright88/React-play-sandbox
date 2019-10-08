build: # build the docker image
	docker build -t sample:dev .

run: build
	docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm sample:dev
