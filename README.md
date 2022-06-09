# Introduction to Docker



## Common Docker commands

| Command                                                      | Description                                                  |
| :----------------------------------------------------------- | ------------------------------------------------------------ |
| docker container run hello-world                             | Fetches the image **_hello-world_** from docker-hub and runs the image as a container. Executes default command which prints a few text. |
| docker container run busybox                                 | _**busybox**_ is a lightweight container with normal linux file system and command. No default command, so just runs it, doesn't print anything. |
| docker container run busybox ls                              | Runs and executes command **_ls_**.                          |
| docker container ls -a                                       | Lists recently executed commands along with the container information. Status column shows if the container is created/running/exited. |
| docker container create _**image-name**_                     | Just creates the container, returns container Id (Hash), but doesn't start it. |
| docker container start -a _**container-id**_                 | Starts previously created container and _**-a**_ attaches the intial output to the terminal. |
| docker system prune --all                                    | Removes all cached closed containers.                        |
| docker container logs _**container-id**_                     | Returns previously excuted command output.                   |
| docker container stop _**container-id**_                     | Allows 10 seconds to stop the container, otherwise kills it. |
| docker container kill _**container-id**_                     | Kills it immediately.                                        |
| docker container rm _**container-id**_                       | Removes a stopped container from the build cache. _**-f**_ option forces the removal. |
| docker container inspect _**container-id**_                  | Returns json of detailed information about the container.    |
| docker container run redis                                   | Keeps the redis server running.                              |
| docker container exec -it _**container-id**_ redis-cli       | Gives interactive prompt to execute command in the already running redis container. _**exit**_ to get back to main cli. |
| docker container exec -it _**container-id**_ sh              | To interact with basic shell inside container.               |
| docker container run -it _**container-id**_ sh               | Gives shell of the container right away. Exit to get out.    |
| docker container run -it --name custom_container_name alpine:latest /bin/sh | Get the base alpine image, create and start the container, get the interactive shell prompt. Set a custom_name to the container. |
| > apk add --update redis                                     | Installs redis in the base alpine image. apk is the application manager inside alpine container. |
| docker container commit custom_container_name custom_image_name | Creates a new image from the existing image after installing something into the container. Returns the created image id. |
| docker image ls                                              | Lists images.                                                |
| docker container run container_image_name apk_name           | Runs an image and starts the application specified. E.g. redis-server. Pop over to a new bash tab and check if the apk is running. |

## Creating Image from Dockerfile

Filename: Dockerfile

> From alpine:latest  
> RUN apk add --update redis  
> COPY ./files /app/files  
> ADD zipped_file.tar /app  
> CMD ["redis-server"]

Build an image from the above file:
\> docker build -t dockerhub_id/image_name:latest .

Check if it is okay:  
\> docker image ls -a  
\> docker container run -p 8080:8080 dockerhub_id/image_name --name custom_container_name

Port mapping from docker to our machine