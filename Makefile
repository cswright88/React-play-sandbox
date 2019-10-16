build: # build the docker image
	docker build -t sample:dev .

run: build
	docker run -v ${PWD}:/app -v /app/node_modules -p 3000:3000 --rm sample:dev

#kill/AllDockers:
#	docker stop $(docker ps -a -q)
#    docker rm $(docker ps -a -q)